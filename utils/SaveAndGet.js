import * as SecureStorage from "expo-secure-store"

const save = (key, val) => {
    return SecureStorage.setItemAsync(key, val)
}

const get = (key) => {
    return SecureStorage.getItemAsync(key)
}

export { save, get };