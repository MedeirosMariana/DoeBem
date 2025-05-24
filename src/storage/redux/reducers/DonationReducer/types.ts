import { IUserProfileDataReducer } from "../UserProfileReducer/types"
import { DonationReducerStatuses } from "./enums"

/**
 * Interface com as propriedades da doação.
 */
export interface IDonationDataReducer {
  /**
   * Identificador da doação.
   */
  guid: string               
  
  /**
   * Título da doação.
   */
  title: string

  /**
   * Descrição da doação.
   */
  description: string

  /**
   * Usuário responsável pela doação.
   */
  user: Pick<IUserProfileDataReducer, 'guid' | 'name'>
  
  /**
   * Localização que foi deixada a doação.
   */
  location: string

  /**
   * Produto da doação.
   */
  product: string     
  
  /**
   * Doação em valor.
   */
  amount?: number             
  
  /**
   * Data e horário de retirada.
   */
  pickupDateTime: string      

  /**
   * Status da doação.
   */
  status: DonationReducerStatuses
}

/**
 * Interface com propriedades da doação.
 */
export interface IDonationReducer {
  /**
   * Items da sacola.
   */
  donations: IDonationDataReducer[]
}
