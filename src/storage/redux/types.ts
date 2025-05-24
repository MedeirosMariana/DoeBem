import { IDonationReducer } from "./reducers/DonationReducer/types"
import { IUserProfileReducer } from "./reducers/UserProfileReducer/types"

/**
 * Interface que define a estrutura de uma ação do Redux.
 * 
 * @template TActionType Tipo de ação, que é uma string que descreve a ação.
 * @template TPayload Tipo do payload da ação, podendo ser qualquer valor (default: unknown).
 */
export interface IReduxAction<TActionType extends string, TPayload = unknown> {
  /**
   * O tipo da ação que está sendo despachada.
   */
  type: TActionType

  /**
   * O payload (dados) associado à ação.
   */
  payload: TPayload
}

/**
 * Interface que define a estrutura do estado do Redux.
 * Contém os reducers responsáveis por gerenciar o estado de diferentes partes do sistema.
 */
export interface IReduxStore {
  /**
   * O estado do reducer do perfil do usuário, que gerencia os dados específicos armazenados.
   */
  UserProfile: IUserProfileReducer

  /**
   * O estado do reducer das doações, que gerencia os dados específicos armazenados.
   */
  Donation: IDonationReducer
}
