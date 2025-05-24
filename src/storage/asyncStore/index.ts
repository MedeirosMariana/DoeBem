import AsyncStorage from '@react-native-async-storage/async-storage';

import { AsyncStorageKeys } from "./enums";

class AsyncStorageClass {
  private readonly makeKey = (key: AsyncStorageKeys) => `DoeBem@${key}`;

  public readonly getItemString = async (key: AsyncStorageKeys): Promise<string | null> => 
    await AsyncStorage.getItem(this.makeKey(key));

  public readonly getItemObject = async <T>(key: AsyncStorageKeys): Promise<T | null> => {
    const data = await AsyncStorage.getItem(this.makeKey(key));
    return data === null ? null : JSON.parse(data);
  }

  public readonly setItemString = async (key: AsyncStorageKeys, value: string): Promise<void> => 
    await AsyncStorage.setItem(this.makeKey(key), value);

  public readonly setItemObject = async <T extends object>(key: AsyncStorageKeys, value: T): Promise<void> => 
    await this.setItemString(key, JSON.stringify(value));

  public readonly removeItem = async (key: AsyncStorageKeys): Promise<void> => 
    await AsyncStorage.removeItem(this.makeKey(key));
}

export const AsyncLocalStorage = new AsyncStorageClass();

