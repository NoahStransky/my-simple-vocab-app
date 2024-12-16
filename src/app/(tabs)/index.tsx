import { Text, View, Dimensions, Animated, PanResponder, Easing, Platform } from "react-native";
import React, { useRef, useState, useEffect } from "react";
import { Stack } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { VocabularyWord, getVocabularyWords, initDatabase, getProgress, saveProgress } from '../../services/db';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const SWIPE_THRESHOLD = 0.25 * SCREEN_HEIGHT;
const CIRCLE_SIZE = 180; // Increased from 120 to 180

export default function TabOneScreen() {
  const [vocabularyWords, setVocabularyWords] = useState<VocabularyWord[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [rememberedCount, setRememberedCount] = useState(0);
  const [knownWords, setKnownWords] = useState<string[]>([]);
  const position = useRef(new Animated.ValueXY()).current;
  const scaleAnim = useRef(new Animated.Value(1)).current;
  const rotateAnim = useRef(new Animated.Value(0)).current;
  const colorAnim = useRef(new Animated.Value(0)).current;

  // Initialize database and load words
  useEffect(() => {
    const initialize = async () => {
      try {
        await initDatabase();
        const words = await getVocabularyWords();
        setVocabularyWords(words);
      } catch (error) {
        console.error('Error initializing database:', error);
      }
    };
    initialize();
  }, []);

  // Load saved progress when component mounts
  useEffect(() => {
    loadProgress();
  }, []);

  // Save progress whenever it changes
  useEffect(() => {
    saveProgressToStorage();
  }, [rememberedCount, currentIndex, knownWords]);

  const loadProgress = async () => {
    try {
      const progress = await getProgress();
      setRememberedCount(progress.rememberedCount);
      setCurrentIndex(progress.currentIndex);
      setKnownWords(progress.knownWords);
    } catch (error) {
      console.warn('Error loading progress:', error);
      setRememberedCount(0);
      setCurrentIndex(0);
      setKnownWords([]);
    }
  };

  const saveProgressToStorage = async () => {
    try {
      await saveProgress({
        rememberedCount,
        currentIndex,
        knownWords
      });
    } catch (error) {
      console.warn('Error saving progress:', error);
    }
  };

  const animateMilestone = () => {
    // Reset animations
    scaleAnim.setValue(1);
    rotateAnim.setValue(0);
    colorAnim.setValue(0);

    // For Android, we'll use simpler animations with useNativeDriver
    Animated.parallel([
      // Pulse animation
      Animated.sequence([
        Animated.timing(scaleAnim, {
          toValue: 1.6,
          duration: 300,
          useNativeDriver: true,
          easing: Easing.out(Easing.ease),
        }),
        Animated.timing(scaleAnim, {
          toValue: 1,
          duration: 200,
          useNativeDriver: true,
          easing: Easing.in(Easing.ease),
        }),
      ]),
      // Rotation animation
      Animated.timing(rotateAnim, {
        toValue: 1,
        duration: 600,
        useNativeDriver: true,
        easing: Easing.linear,
      }),
    ]).start();
  };

  const animateNormalCount = () => {
    scaleAnim.setValue(1);
    Animated.sequence([
      Animated.timing(scaleAnim, {
        toValue: 1.2,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
      // Handle swipe left for unknown words
      if (gesture.dx < -SWIPE_THRESHOLD) {
        swipeLeft();
      } 
      // Handle swipe up for next word
      else if (gesture.dy < -SWIPE_THRESHOLD) {
        swipeUp();
      } 
      else {
        resetPosition();
      }
    }
  });

  const swipeLeft = () => {
    Animated.timing(position, {
      toValue: { x: -SCREEN_WIDTH * 2, y: 0 },
      duration: 250,
      useNativeDriver: false,
    }).start(() => nextCard());
    console.log('Unknown:', vocabularyWords[currentIndex]?.word);
  };

  const swipeUp = () => {
    const currentWord = vocabularyWords[currentIndex]?.word;
    if (!currentWord) return;

    Animated.timing(position, {
      toValue: { x: 0, y: -SCREEN_HEIGHT },
      duration: 250,
      useNativeDriver: false,
    }).start(() => {
      nextCard();
      const newCount = rememberedCount + 1;
      setRememberedCount(newCount);
      
      if (!knownWords.includes(currentWord)) {
        setKnownWords(prev => [...prev, currentWord]);
      }
      
      if (newCount % 10 === 0) {
        animateMilestone();
      } else {
        animateNormalCount();
      }
    });
  };

  const resetPosition = () => {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  };

  const nextCard = () => {
    setCurrentIndex(prevIndex => 
      prevIndex + 1 >= vocabularyWords.length ? 0 : prevIndex + 1
    );
    position.setValue({ x: 0, y: 0 });
  };

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2, 0, SCREEN_WIDTH * 2],
      outputRange: ['-30deg', '0deg', '30deg']
    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  };

  const getNextIndex = () => {
    return currentIndex + 1 >= vocabularyWords.length ? 0 : currentIndex + 1;
  };

  const renderCard = (index: number, isNext = false) => {
    const word = vocabularyWords[index];
    if (!word) return null;

    const spin = rotateAnim.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    });

    const isMilestone = rememberedCount > 0 && rememberedCount % 10 === 0;

    return (
      <LinearGradient
        colors={['#4facfe', '#00f2fe']}
        style={[styles.card, isNext && styles.nextCard]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <View style={styles.contentContainer}>
          {!isNext && (
            <View style={styles.counterContainer}>
              <Animated.View style={[
                styles.circleCounter,
                isMilestone && styles.milestoneCircle,
                {
                  transform: Platform.select({
                    ios: [
                      { scale: scaleAnim },
                      { rotate: spin }
                    ],
                    android: [
                      { scale: scaleAnim },
                      { rotate: spin },
                      { perspective: 1000 }
                    ]
                  })
                }
              ]}>
                <Animated.Text style={[
                  styles.counterNumber,
                  isMilestone && styles.milestoneNumber
                ]}>
                  {rememberedCount}
                </Animated.Text>
                <View style={styles.circleProgress}>
                  <View 
                    style={[
                      styles.circleProgressFill, 
                      { height: `${(rememberedCount / vocabularyWords.length) * 100}%` }
                    ]} 
                  />
                </View>
              </Animated.View>
            </View>
          )}
          <Text style={[styles.wordText, isNext && styles.nextWordText]}>{word.word}</Text>
          <Text style={[styles.phoneticText, isNext && styles.nextPhoneticText]}>{word.phonetic || '[phonetic]'}</Text>
          <Text style={[styles.meaningText, isNext && styles.nextMeaningText]}>{word.meaning}</Text>
          {!isNext && (
            <View style={styles.hintContainer}>
              <Text style={styles.hintText}>Swipe up for next word</Text>
              <Text style={styles.hintText}>Swipe left if you don't know</Text>
            </View>
          )}
        </View>
      </LinearGradient>
    );
  };

  // Add a function to reset progress
  const resetProgress = async () => {
    try {
      await Promise.all([
        AsyncStorage.removeItem(STORAGE_KEY.REMEMBERED_COUNT),
        AsyncStorage.removeItem(STORAGE_KEY.CURRENT_INDEX),
        AsyncStorage.removeItem(STORAGE_KEY.KNOWN_WORDS),
      ]);
      setRememberedCount(0);
      setCurrentIndex(0);
      setKnownWords([]);
    } catch (error) {
      console.error('Error resetting progress:', error);
    }
  };

  if (!vocabularyWords[currentIndex]) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: "Vocabulary",
          headerShown: true,
        }} 
      />
      <View style={styles.nextCardContainer}>
        {renderCard(getNextIndex(), true)}
      </View>
      <Animated.View
        style={[getCardStyle(), styles.cardStyle]}
        {...panResponder.panHandlers}
      >
        {renderCard(currentIndex)}
      </Animated.View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
  card: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  counterContainer: {
    position: 'absolute',
    top: 60, // Increased from 40 to 60 to give more space at the top
    width: '100%',
    alignItems: 'center',
  },
  circleCounter: {
    width: CIRCLE_SIZE,
    height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE / 2,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    borderWidth: 3,
    borderColor: 'rgba(255, 255, 255, 0.3)',
    elevation: 4,
    overflow: 'hidden',
  },
  milestoneCircle: {
    backgroundColor: 'rgba(255, 215, 0, 0.3)', // Gold background for milestone
    borderColor: 'rgba(255, 215, 0, 0.5)',
    borderWidth: 4,
  },
  counterNumber: {
    fontSize: 84,
    fontWeight: 'bold',
    color: 'white',
    includeFontPadding: false, // Fix Android text vertical alignment
    textAlignVertical: 'center', // Fix Android text vertical alignment
  },
  milestoneNumber: {
    color: 'rgba(255, 255, 255, 0.95)',
    textShadowColor: 'rgba(0, 0, 0, 0.2)',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  circleProgress: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '100%',
    borderRadius: CIRCLE_SIZE / 2,
    overflow: 'hidden',
    zIndex: -1,
    backgroundColor: 'transparent',
  },
  circleProgressFill: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: CIRCLE_SIZE / 2,
  },
  wordText: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'white',
  },
  phoneticText: {
    fontSize: 22,
    fontStyle: 'italic',
    marginBottom: 20,
    color: 'rgba(255, 255, 255, 0.9)',
  },
  meaningText: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    marginBottom: 40,
  },
  hintContainer: {
    position: 'absolute',
    bottom: 60,
    alignItems: 'center',
  },
  hintText: {
    fontSize: 16,
    color: 'rgba(255, 255, 255, 0.8)',
    marginTop: 8,
  },
  nextCardContainer: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nextCard: {
    opacity: 0.5,
    transform: [{ scale: 0.95 }],
  },
  nextWordText: {
    fontSize: 32,
    opacity: 0.7,
  },
  nextPhoneticText: {
    fontSize: 20,
    opacity: 0.7,
  },
  nextMeaningText: {
    fontSize: 22,
    opacity: 0.7,
  },
  progressInfo: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
  },
  progressText: {
    color: '#666',
    fontSize: 14,
    fontWeight: 'bold',
  },
} as const;
