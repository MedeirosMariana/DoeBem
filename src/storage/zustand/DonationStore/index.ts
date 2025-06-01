import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { IDonationStore } from "./types";
import { zustandMMKVStorage } from "@/storage/persistStorage/MMKVStore";
import { removeDonationByGuidAction, setToDonationAction, updateDonationByKeyAction } from "./actions";
import { DONATION_STATE_EMPTY } from "./constants";
import { MMKStorageKeys } from "../../persistStorage/MMKVStore/enums";

export const useDonationStore = create<IDonationStore>()(
  persist(
    (set) => ({
      ...DONATION_STATE_EMPTY,
      setToDonationAction: data => setToDonationAction(data, set),
      removeDonationByGuidAction: data => removeDonationByGuidAction(data.guid, set),
      setToDonationByKeyAction: (guid, key) => updateDonationByKeyAction(guid, key, set)
      //clearDonationsFromUserAction: data => clearDonationFromUserByGruidAction(data.user.guid, set)
    }),
    {
      name: MMKStorageKeys.Donation,
      storage: zustandMMKVStorage
    }
  )
)