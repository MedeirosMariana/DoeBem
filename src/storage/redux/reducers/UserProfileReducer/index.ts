import { IReduxAction } from "storage/redux/types"
import { INITIAL_USER_PROFILE_DATA } from "./constants"
import { IUserProfileReducer } from "./types"
import { UserProfileReducerActions } from "./enums"

export const UserProfileReducer = (state: IUserProfileReducer = INITIAL_USER_PROFILE_DATA, action: IReduxAction<UserProfileReducerActions, IUserProfileReducer>): IUserProfileReducer => {
  switch (action.type) {
    case UserProfileReducerActions.SetData:
      return { ...state, userProfiles: action.payload.userProfiles }
      
    default:
      return state
  }
}
