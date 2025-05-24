import { Redux } from "storage/redux"
import { DonationReducerAction } from "storage/redux/reducers/DonationReducer/actions"
import { IDonationDataReducer } from "storage/redux/reducers/DonationReducer/types"
import { generateUUID } from "utils/common"
import { insertOrUpdateItemIfExistsArray } from "utils/helpers/Array.ts"

/**
 * Função responsável por adicionar uma doação no sistema.
 *
 * @param data Dados da doação.
 */
export const setDonationService = (data: IDonationDataReducer) =>
  DonationReducerAction.setData(curr => ({
    ...curr,
    donations: insertOrUpdateItemIfExistsArray(
      curr.donations,
      curr => curr.guid === data.guid,
      curr => ({ ...curr, ...data }),
      // Gerando um GUID (identificador) para cada doação.
      ({ ...data, guid: generateUUID() })
    )
  }))

/**
 * Função responsável por remover uma doação do sistema.
 *
 * @param guid Identificador da doação.
 */
export const removeDonationByGuidService = (guid: string) =>
  DonationReducerAction.setData(curr => ({
    ...curr,
    donations: curr.donations.filter(curr => curr.guid !== guid)
  }))

/**
 * Função responsável por limpar as doações de um usuário específico.
 *
 * Remove todos as doações realizadas por um usuário.
 */
export const clearDonationsFromUserService = (userGuid: string) => {
  const { Donation } = Redux.getState()

  if (!Donation.donations.find(donation => donation.user.guid !== userGuid).guid) throw new Error("O usuário informado não realizou nenhuma doação.")

  DonationReducerAction.setData(curr => ({
    ...curr,
    donations: curr.donations.filter(i => i.user.guid !== userGuid)
  }))
}