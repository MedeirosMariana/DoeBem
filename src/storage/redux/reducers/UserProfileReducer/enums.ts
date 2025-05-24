/**
 * Enum com os tipos de perfis de usuários no sitema.
 */
export enum UserProfileReducerTypes {
  /**
   * Organização não governamental.
   */
  ONG,

  /**
   * Doador.
   */
  Donor
}

/**
 * Enum que define as ações do reducer do perfil do usuário.
 */
export enum UserProfileReducerActions {
  /**
   * Ação que é disparada para definir os dados do usuário.
   */
  SetData = 'SetData'
}
