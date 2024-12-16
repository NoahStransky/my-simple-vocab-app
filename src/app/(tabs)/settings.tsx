import { View, Text, TouchableOpacity, StyleSheet, Alert, Platform } from 'react-native';
import { Stack, router } from "expo-router";
import { clearAllData } from '../../services/db';
import { useCallback } from 'react';

export default function SettingsScreen() {
  const reloadApp = useCallback(() => {
    if (Platform.OS === 'web') {
      router.replace('/');
      setTimeout(() => {
        window.location.reload();
      }, 100);
    } else {
      router.replace('/');
      setTimeout(() => {
        router.replace('/');
      }, 100);
    }
  }, []);

  const resetProgress = useCallback(async () => {
    const confirmReset = async () => {
      try {
        const cleared = await clearAllData();
        
        if (cleared) {
          if (Platform.OS === 'web') {
            alert('Progress has been reset successfully.');
            reloadApp();
          } else {
            Alert.alert(
              "Success", 
              "Progress has been reset successfully.",
              [
                {
                  text: "OK",
                  onPress: reloadApp
                }
              ]
            );
          }
        } else {
          throw new Error('Failed to clear data');
        }
      } catch (error) {
        console.error('Error resetting progress:', error);
        if (Platform.OS === 'web') {
          alert('Failed to reset progress. Please try again.');
        } else {
          Alert.alert(
            "Error", 
            "Failed to reset progress. Please try again."
          );
        }
      }
    };

    if (Platform.OS === 'web') {
      if (window.confirm("Are you sure you want to reset all progress? This cannot be undone.")) {
        await confirmReset();
      }
    } else {
      Alert.alert(
        "Reset Progress",
        "Are you sure you want to reset all progress? This cannot be undone.",
        [
          {
            text: "Cancel",
            style: "cancel"
          },
          {
            text: "Reset",
            style: "destructive",
            onPress: confirmReset
          }
        ]
      );
    }
  }, [reloadApp]);

  return (
    <View style={styles.container}>
      <Stack.Screen 
        options={{
          title: "Settings",
          headerShown: true,
        }} 
      />
      
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Data Management</Text>
        <TouchableOpacity 
          style={styles.button}
          onPress={resetProgress}
        >
          <Text style={styles.buttonText}>Reset Progress</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.versionText}>Version 1.0.0</Text>
        {Platform.OS === 'web' && (
          <Text style={styles.note}>
            Note: Running in web mode with limited database functionality
          </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 16,
  },
  section: {
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 16,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  button: {
    backgroundColor: '#ff4444',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  versionText: {
    color: '#666',
    fontSize: 16,
  },
  note: {
    marginTop: 8,
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
  },
}); 