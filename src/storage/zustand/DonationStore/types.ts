import { IZustandStoreActionType, IZustandStoreSetDataByKey } from "@/utils/common/types"

/**
 * Interface que representa os dados de uma doação armazenados no estado.
 */
export interface IDonationData {
  /**
   * Identificador único da doação.
   */
  guid: string

  /**
   * Título descritivo da doação.
   */
  title: string

  /**
   * Descrição detalhada da doação.
   */
  description: string

  /**
   * Usuário responsável por registrar ou realizar a doação.
   */
  user: string

  /**
   * Localização onde a doação foi realizada ou deixada.
   */
  location: string

  /**
   * Produto ou item doado.
   */
  product: string

  /**
   * Valor monetário associado à doação, se aplicável.
   */
  amount?: number

  /**
   * Data e hora previstas ou efetivadas para a retirada da doação.
   */
  pickupDateTime: string

  /**
   * Status atual da doação (ex.: pendente, concluída, cancelada).
   */
  status: number
}

/**
 * Interface que representa a parte do estado contendo apenas a lista de doações.
 */
export interface IDonationState {
  /**
   * Lista de todas as doações armazenadas no estado.
   */
  donations: IDonationData[]
}

/**
 * Interface que define as ações disponíveis para manipular o estado de doações.
 */
export interface IDonationStateActions {
  /**
   * Ação para atualizar um campo específico de uma doação, identificada pelo guid.
   */
  setToDonationByKeyAction: IZustandStoreSetDataByKey<IDonationData>

  /**
   * Ação para adicionar uma nova doação ou atualizar uma existente.
   */
  setToDonationAction: IZustandStoreActionType<IDonationData>

  /**
   * Ação para remover uma doação, utilizando seu identificador único (guid).
   */
  removeDonationByGuidAction: IZustandStoreActionType<IDonationData>

  // Caso necessário no futuro:
  // clearDonationsFromUserAction: IZustandStoreActionType<IDonationDataStore>
}

/**
 * Interface que representa o estado completo de doações, 
 * combinando as propriedades armazenadas e as ações disponíveis.
 */
export interface IDonationStore extends IDonationStateActions, IDonationState {}
