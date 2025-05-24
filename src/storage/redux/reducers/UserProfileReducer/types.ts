import { UserProfileReducerTypes } from "./enums"

/**
 * Interface com propriedades do perfil do usuário.
 */
export interface IUserProfileDataReducer {
  /**
   * Identificador do usuário.
   */
  guid: string

  /**
   * Nome do usuário.
   */
  name: string

  /**
   * Comprovante de Situação Cadastral do usuário.
   */
  CPF: string

  /**
   * Endereço do usuário.
   */
  address: string

  /**
   * Senha criprotografada do usuário.
   */
  encryptedPassword: string

  /**
   * Tipo do perfil do usuário.
   */
  type: UserProfileReducerTypes
}

/**
 * Interface com propriedades dos perfis dos usuários.
 */
export interface IUserProfileReducer {
  /**
   * Perfis dos usuários.
   */
  userProfiles: IUserProfileDataReducer[]
}