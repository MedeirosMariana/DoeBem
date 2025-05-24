import { SetStateAction } from "react"
import { Redux } from "../.."
import { IUserProfileReducer } from "./types"
import { UserProfileReducerActions } from "./enums"

export class UserProfileReducerAction {
  public static readonly setData = (predicate: SetStateAction<IUserProfileReducer>) => Redux.dispatch({
    type: UserProfileReducerActions.SetData,
    payload: predicate 
  })
}
