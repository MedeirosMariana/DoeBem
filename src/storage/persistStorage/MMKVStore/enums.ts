/**
 * Enum que define as chaves utilizadas para armazenar dados no MMKV Storage.
 */
export enum MMKStorageKeys {
  /**
   * Chave utilizada para armazenar ou acessar informações gerais da aplicação.
   */
  System = 'DonateWell',

  /**
   * Chave utilizada para armazenar ou acessar informações relacionadas a doações.
   */
  Donation = 'Donation',

  /**
   * Chave utilizada para armazenar ou acessar informações do perfil do usuário.
   */
  UserProfile = 'UserProfile'
}