/**
 * Enum com os possíveis status de uma doação.
 */
export enum DonationReducerStatuses {
  /**
   * A doação está disponível para ser retirada por alguém.
   */
  Available,

  /**
   * A doação foi agendada para retirada.
   */
  Scheduled,

  /**
   * O processo de doação foi concluído.
   */
  Completed,

  /**
   * A doação foi cancelada.
   */
  Canceled
}

/**
 * Enum que define as ações do reducer de doações.
 */
export enum DonationReducerActions {
  /**
   * Ação que é disparada para definir as doações.
   */
  SetData = 'SetData'
}
