import * as SecureStore from 'expo-secure-store';
import { vocabularyWords } from '../data/vocabulary';
import { Platform } from 'react-native';

export interface VocabularyWord {
    id: number;
    word: string;
    phonetic: string;
    meaning: string;
}

export interface Progress {
    rememberedCount: number;
    currentIndex: number;
    knownWords: string[];
}

// Interface for storage operations
interface StorageInterface {
    getWords(): Promise<VocabularyWord[]>;
    saveWords(words: VocabularyWord[]): Promise<void>;
    clearWords(): Promise<void>;
    initialize(): Promise<void>;
    getProgress(): Promise<Progress>;
    saveProgress(progress: Progress): Promise<void>;
    clearProgress(): Promise<void>;
}

// Web storage implementation using localStorage
class WebStorage implements StorageInterface {
    private STORAGE_KEY = 'vocabulary_words';
    private PROGRESS_KEY = 'vocabulary_progress';

    async getWords(): Promise<VocabularyWord[]> {
        try {
            const stored = localStorage.getItem(this.STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
            return [];
        } catch (error) {
            console.error('Failed to get words from localStorage:', error);
            return [];
        }
    }

    async saveWords(words: VocabularyWord[]): Promise<void> {
        try {
            localStorage.setItem(this.STORAGE_KEY, JSON.stringify(words));
        } catch (error) {
            console.error('Failed to save words to localStorage:', error);
            throw error;
        }
    }

    async clearWords(): Promise<void> {
        try {
            localStorage.removeItem(this.STORAGE_KEY);
        } catch (error) {
            console.error('Failed to clear words from localStorage:', error);
            throw error;
        }
    }

    async initialize(): Promise<void> {
        const words = await this.getWords();
        if (words.length === 0) {
            // Initialize with vocabulary words if empty
            await this.saveWords(vocabularyWords);
        }
    }

    async getProgress(): Promise<Progress> {
        try {
            const stored = localStorage.getItem(this.PROGRESS_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
            return { rememberedCount: 0, currentIndex: 0, knownWords: [] };
        } catch (error) {
            console.error('Failed to get progress from localStorage:', error);
            return { rememberedCount: 0, currentIndex: 0, knownWords: [] };
        }
    }

    async saveProgress(progress: Progress): Promise<void> {
        try {
            localStorage.setItem(this.PROGRESS_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error('Failed to save progress to localStorage:', error);
            throw error;
        }
    }

    async clearProgress(): Promise<void> {
        try {
            localStorage.removeItem(this.PROGRESS_KEY);
        } catch (error) {
            console.error('Failed to clear progress from localStorage:', error);
            throw error;
        }
    }
}

// Native storage implementation using SecureStore
class NativeStorage implements StorageInterface {
    private STORAGE_KEY = 'vocabulary_words';
    private PROGRESS_KEY = 'vocabulary_progress';

    async getWords(): Promise<VocabularyWord[]> {
        try {
            const stored = await SecureStore.getItemAsync(this.STORAGE_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
            return [];
        } catch (error) {
            console.error('Failed to get words from SecureStore:', error);
            return [];
        }
    }

    async saveWords(words: VocabularyWord[]): Promise<void> {
        try {
            await SecureStore.setItemAsync(this.STORAGE_KEY, JSON.stringify(words));
        } catch (error) {
            console.error('Failed to save words to SecureStore:', error);
            throw error;
        }
    }

    async clearWords(): Promise<void> {
        try {
            await SecureStore.deleteItemAsync(this.STORAGE_KEY);
        } catch (error) {
            console.error('Failed to clear words from SecureStore:', error);
            throw error;
        }
    }

    async initialize(): Promise<void> {
        const words = await this.getWords();
        if (words.length === 0) {
            // Initialize with vocabulary words if empty
            await this.saveWords(vocabularyWords);
        }
    }

    async getProgress(): Promise<Progress> {
        try {
            const stored = await SecureStore.getItemAsync(this.PROGRESS_KEY);
            if (stored) {
                return JSON.parse(stored);
            }
            return { rememberedCount: 0, currentIndex: 0, knownWords: [] };
        } catch (error) {
            console.error('Failed to get progress from SecureStore:', error);
            return { rememberedCount: 0, currentIndex: 0, knownWords: [] };
        }
    }

    async saveProgress(progress: Progress): Promise<void> {
        try {
            await SecureStore.setItemAsync(this.PROGRESS_KEY, JSON.stringify(progress));
        } catch (error) {
            console.error('Failed to save progress to SecureStore:', error);
            throw error;
        }
    }

    async clearProgress(): Promise<void> {
        try {
            await SecureStore.deleteItemAsync(this.PROGRESS_KEY);
        } catch (error) {
            console.error('Failed to clear progress from SecureStore:', error);
            throw error;
        }
    }
}

// Create storage instance based on platform
const storage: StorageInterface = Platform.OS === 'web' ? new WebStorage() : new NativeStorage();

// Initialize storage
storage.initialize().catch(error => {
    console.error('Failed to initialize storage:', error);
});

// Export functions that use the appropriate storage implementation
export const getVocabularyWords = (): Promise<VocabularyWord[]> => {
    return storage.getWords();
};

export const saveVocabularyWords = (words: VocabularyWord[]): Promise<void> => {
    return storage.saveWords(words);
};

export const clearVocabularyWords = (): Promise<void> => {
    return storage.clearWords();
};

export const initDatabase = (): Promise<void> => {
    return storage.initialize();
};

export const clearAllData = async () => {
    try {
        // Clear all data
        await storage.clearProgress();
        await storage.clearWords();
        // Reinitialize with default words
        await storage.initialize();
        return true;
    } catch (error) {
        console.error('Error clearing all data:', error);
        return false;
    }
};

export const getProgress = (): Promise<Progress> => {
    return storage.getProgress();
};

export const saveProgress = (progress: Progress): Promise<void> => {
    return storage.saveProgress(progress);
};

export const clearProgress = async () => {
    try {
        // Clear progress from the database
        await storage.clearProgress();
        return true;
    } catch (error) {
        console.error('Error clearing progress:', error);
        return false;
    }
}; 