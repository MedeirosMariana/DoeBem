import { MMKV } from 'react-native-mmkv';
import { PersistStorage } from 'zustand/middleware';
import { MMKStorageKeys } from './enums';

const storage = new MMKV();

/**
 * Recupera um item armazenado como string no MMKV Storage.
 * 
 * @param key - A chave do item a ser recuperado, pode ser uma string ou uma chave definida no enum MMKStorageKeys.
 * @returns O valor armazenado como string ou null se não existir.
 */
export const getItem = (key: string | MMKStorageKeys): string | null =>
  storage.getString(key) ?? null

/**
 * Recupera um item armazenado no MMKV Storage e o converte de JSON para um objeto do tipo especificado.
 * 
 * @param key - A chave do item a ser recuperado, pode ser uma string ou uma chave definida no enum MMKStorageKeys.
 * @returns O objeto do tipo TData ou null se não existir.
 */
export const getItemObject = <TData>(key: string | MMKStorageKeys): TData | null => {
  const value = storage.getString(key) ?? ''
  return value ? JSON.parse(value) : null
}

/**
 * Armazena um item no MMKV Storage após convertê-lo para uma string JSON.
 * 
 * @param key - A chave sob a qual o valor será armazenado, pode ser uma string ou uma chave definida no enum MMKStorageKeys.
 * @param value - O valor a ser armazenado, pode ser de qualquer tipo.
 */
export const setItem = (key: string | MMKStorageKeys, value: unknown): void =>
  storage.set(key, JSON.stringify(value))

/**
 * Remove um item armazenado no MMKV Storage com base na chave fornecida.
 * 
 * @param key - A chave do item a ser removido, pode ser uma string ou uma chave definida no enum MMKStorageKeys.
 */
export const removeItem = (key: string | MMKStorageKeys): void =>
  storage.delete(key)

export const zustandMMKVStorage: PersistStorage<unknown> = {
  getItem: getItemObject,
  setItem: setItem,
  removeItem: removeItem
}