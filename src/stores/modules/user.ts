import type { User } from '@/types/user'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import { parse, stringify } from 'zipson'

export const useUser = defineStore(
  'user',
  () => {
    const user = ref<User>()

    const setUser = (payload: User): void => {
      user.value = payload
    }

    const removeUser = () => {
      user.value = undefined
    }
    return { user, setUser, removeUser }
  },
  {
    persist: {
      serializer: {
        deserialize: parse,
        serialize: stringify
      }
    }
  }
)
