import { create } from "zustand";
import { persist } from 'zustand/middleware';
import { zustandMMKVStorage } from "@/storage/persistStorage/MMKVStore";
import { IUserProfileStore } from "./types";
import { USER_PROFILE_STATE_EMPTY } from "./constants";
import { removeUserProfileByGuidAction, setToUserProfileAction } from "./actions";
import { MMKStorageKeys } from "../../persistStorage/MMKVStore/enums";

export const useUserProfileStore = create<IUserProfileStore>()(
  persist(
    (set) => ({
      ...USER_PROFILE_STATE_EMPTY,
      setToUserProfileAction: data => setToUserProfileAction(data, set),
      removeUserProfileByGuidAction: data => removeUserProfileByGuidAction(data.guid, set),
      //clearuserProfilesFromUserAction: data => clearuserProfileFromUserByGruidAction(data.user.guid, set)
    }),
    {
      name: MMKStorageKeys.UserProfile,
      storage: zustandMMKVStorage
    }
  )
);