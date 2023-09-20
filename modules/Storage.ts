/* Collection of all keys used to store data in localStorage */
export type TStorageKeys =
  | 'token'
  | 'user'
  | 'lastUserEmail'
  | 'ftTest'
  | 'userFirstName'
  | 'gm-716-pricing-test'
  | 'gm-755-headspace-split'

class Storage {
  get(key: TStorageKeys): string | null {
    const value = localStorage.getItem(key)

    try {
      return JSON.parse(value || 'null')
    } catch {
      return value
    }
  }

  set(key: TStorageKeys, value: any) {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  }

  remove(key: TStorageKeys) {
    localStorage.removeItem(key)
  }

  clear() {
    localStorage.clear()
  }
}

export default new Storage()
