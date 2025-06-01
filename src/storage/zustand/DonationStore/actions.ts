import { IDonationData, IDonationState } from "./types";
import { generateUUID } from "@/utils/common";
import { IZustandStoreSetData } from "@/utils/common/types";
import { insertOrUpdateItemIfExistsArray, updateItemByFindArray } from "@/utils/helpers/Array.ts";

/**
 * Função de ação responsável por adicionar uma doação no sistema.
 *
 * Se a doação já existir (baseado no `guid`), ela será atualizada com os novos dados.
 * Caso contrário, será criada uma nova doação com um `guid` gerado automaticamente.
 *
 * @param data - Dados da doação a serem adicionados ou atualizados.
 * @param set - Função do Zustand para atualizar o estado de doações.
 */
export const setToDonationAction = (
  data: IDonationData,
  set: IZustandStoreSetData<IDonationState>
) =>
  set((state) => ({
    ...state,
    donations: insertOrUpdateItemIfExistsArray(
      state.donations,
      curr => curr.guid === data.guid,
      curr => ({ ...curr, ...data }),
      // Se não existir, cria um novo com guid novo
      { ...data, guid: generateUUID() }
    )
  }))

/**
 * Função de ação responsável por atualizar um campo específico de uma doação, identificada pelo `guid`.
 *
 * Esta função é curried: retorna outra função que recebe o valor a ser atribuído ao campo.
 *
 * @param guid - Identificador único da doação a ser atualizada.
 * @param key - A chave/campo específico da doação que será atualizado.
 * @param set - Função do Zustand para atualizar o estado de doações.
 * @returns Uma função que, ao ser chamada com o novo valor, realiza a atualização no estado.
 */
export const updateDonationByKeyAction = (
  guid: string,
  key: keyof IDonationData,
  set: IZustandStoreSetData<IDonationState>
) =>
  (value: IDonationData[keyof IDonationData]) =>
    set(state => ({
      ...state,
      donations: updateItemByFindArray(
        state.donations,
        curr => curr.guid == guid,
        curr => ({ ...curr, [key]: value })
      )
    }))

/**
 * Função de ação responsável por remover uma doação do sistema.
 *
 * Filtra o array de doações, removendo aquela que possui o `guid` correspondente.
 *
 * @param guid - Identificador único da doação a ser removida.
 * @param set - Função do Zustand para atualizar o estado de doações.
 */
export const removeDonationByGuidAction = (
  guid: string,
  set: IZustandStoreSetData<IDonationState>
) =>
  set((state) => ({
    ...state,
    donations: state.donations.filter(i => i.guid !== guid)
  }))

/**
* Função de ação responsável por limpar as doações de um usuário específico.
*
* Remove todos as doações realizadas por um usuário.
*/
// export const clearDonationFromUserByGruidAction = (userGuid: string, set: IZustandStoreSetData<IDonationOnlyPropertiesStore>) =>
//   set((state) => ({
//     ...state,
//     donations: state.donations.filter(i => i.user.guid !== userGuid)
//   }))