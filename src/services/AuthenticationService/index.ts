import { AsyncLocalStorage } from "storage/asyncStore"
import { AsyncStorageKeys } from "storage/asyncStore/enums"

const authenticationUserProfileService = () => {
  const localStorageData = AsyncLocalStorage.getItemObject(AsyncStorageKeys.Authentication)

  console.log('DADOS DO ASYNC STORAGE:', localStorageData)
}