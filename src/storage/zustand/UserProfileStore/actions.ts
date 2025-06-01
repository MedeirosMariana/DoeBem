import { generateUUID } from "@/utils/common"
import { IZustandStoreSetData } from "@/utils/common/types"
import { insertOrUpdateItemIfExistsArray, updateItemByFindArray } from "@/utils/helpers/Array.ts"
import { IUserProfileData, IUserProfileState } from "./types"

/**
 * Função de ação responsável por adicionar ou atualizar um perfil de usuário no sistema.
 *
 * Se já existir um perfil com o mesmo `guid`, ele será atualizado.
 * Caso contrário, um novo perfil será adicionado com um `guid` gerado automaticamente.
 *
 * @param data Dados do perfil do usuário.
 * @param set Função de atualização do estado do store.
 */
export const setToUserProfileAction = (
  data: IUserProfileData,
  set: IZustandStoreSetData<IUserProfileState>
) =>
  set((state) => ({
    ...state,
    userProfiles: insertOrUpdateItemIfExistsArray(
      state.userProfiles,
      curr => curr.guid === data.guid,
      curr => ({ ...curr, ...data }),
      // Se não existir, cria um novo com guid novo
      { ...data, guid: generateUUID() }
    )
  }))

/**
 * Função de ação responsável por atualizar uma propriedade específica de um perfil de usuário.
 *
 * @param guid Identificador do perfil do usuário a ser alterado.
 * @param key Chave do campo que será atualizado.
 * @param set Função de atualização do estado do store.
 * @returns Função que recebe o novo valor para o campo especificado.
 */
export const updateUserProfileByKeyAction = (
  guid: string,
  key: keyof IUserProfileData,
  set: IZustandStoreSetData<IUserProfileState>
) =>
  (value: IUserProfileData[keyof IUserProfileData]) =>
    set(state => ({
      ...state,
      userProfiles: updateItemByFindArray(
        state.userProfiles,
        curr => curr.guid == guid,
        curr => ({ ...curr, [key]: value })
      )
    }))

/**
 * Função de ação responsável por remover um perfil de usuário do sistema.
 *
 * @param guid Identificador do perfil de usuário a ser removido.
 * @param set Função de atualização do estado do store.
 */
export const removeUserProfileByGuidAction = (
  guid: string,
  set: IZustandStoreSetData<IUserProfileState>
) =>
  set((state) => ({
    ...state,
    userProfiles: state.userProfiles.filter(i => i.guid !== guid)
  }))
