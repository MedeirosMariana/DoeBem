import { IZustandStoreActionType } from "@/utils/common/types"
import { UserProfileTypes } from "./enums"

/**
 * Interface que representa os dados de um perfil de usuário.
 */
export interface IUserProfileData {
  /**
   * Nome do usuário.
   */
  name: string

  /**
   * CPF do usuário.
   */
  cpf: string

  /**
   * Endereço do usuário.
   */
  address: string

  /**
   * Senha do usuário.
   */
  password: string

  /**
   * E-mail do usuário.
   */
  email: string

  /**
   * Identificador único do usuário.
   */
  guid: string

  /**
   * Tipo do perfil de usuário.
   */
  type: UserProfileTypes
}

/**
 * Interface que representa a parte do estado contendo os perfis de usuário.
 */
export interface IUserProfileState {
  /**
   * Lista de perfis de usuário armazenados no estado.
   */
  userProfiles: IUserProfileData[]
}

/**
 * Interface que define as ações disponíveis para manipular o estado de perfis de usuário.
 */
export interface IUserProfileStateActions {
  /**
   * Ação para adicionar ou atualizar um perfil de usuário.
   */
  setToUserProfileAction: IZustandStoreActionType<IUserProfileData>

  /**
   * Ação para remover um perfil de usuário com base no seu identificador (guid).
   */
  removeUserProfileByGuidAction: IZustandStoreActionType<IUserProfileData>

  // Caso necessário no futuro:
  // clearUserProfilesFromUserAction: IZustandStoreActionType<IUserProfileData>
}

/**
 * Interface que representa o estado completo de perfis de usuário,
 * combinando as propriedades armazenadas e as ações disponíveis.
 */
export interface IUserProfileStore extends IUserProfileStateActions, IUserProfileState { }
