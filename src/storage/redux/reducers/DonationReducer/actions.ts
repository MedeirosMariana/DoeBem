
import { SetStateAction } from "react"
import { Redux } from "../.."
import { IDonationReducer } from "./types"
import { DonationReducerActions } from "./enums"

export class DonationReducerAction {
  public static readonly setData = (predicate: SetStateAction<IDonationReducer>) => Redux.dispatch({
    type: DonationReducerActions.SetData,
    payload: { predicate }
  })
}
