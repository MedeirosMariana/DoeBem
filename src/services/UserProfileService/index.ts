import { UserProfileReducerAction } from "storage/redux/reducers/UserProfileReducer/actions";
import { IUserProfileDataReducer } from "storage/redux/reducers/UserProfileReducer/types";
import { generateUUID } from "utils/common";
import { insertOrUpdateItemIfExistsArray } from "utils/helpers/Array.ts";

/**
 * Função responsável por adicionar um novo perfil de usuário no sistema.
 *
 * @param data Dados do usuário.
 */
export const setUserProfileService = (data: IUserProfileDataReducer) =>
  UserProfileReducerAction.setData(curr => ({
    ...curr,
    userProfiles: insertOrUpdateItemIfExistsArray(
      curr.userProfiles,
      curr => curr.guid === data.guid,
      curr => ({ ...curr, ...data }),
      // Gerando um GUID (identificador) para cada usuário.
      ({ ...data, guid: generateUUID() })
    )
  }))

/**
 * Função responsável por remover um perfil de usuário do sistema.
 *
 * @param guid Identificador do usuário.
 */
export const removeUserProfileByGuidService = (guid: string) =>
  UserProfileReducerAction.setData(curr => ({
    ...curr,
    userProfiles: curr.userProfiles.filter(curr => curr.guid !== guid)
  }))
