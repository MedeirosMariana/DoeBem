import { IDonationReducer } from "./types"
import { INITIAL_DONATION_REDUCER_DATA } from "./constants"
import { DonationReducerActions } from "./enums"
import { IReduxAction } from "storage/redux/types"

export const DonationReducer = (state: IDonationReducer = INITIAL_DONATION_REDUCER_DATA, action: IReduxAction<DonationReducerActions, IDonationReducer>): IDonationReducer => {
  switch (action.type) {
    case DonationReducerActions.SetData:
      return { ...state, donations: action.payload.donations }

    default:
      return state
  }
}