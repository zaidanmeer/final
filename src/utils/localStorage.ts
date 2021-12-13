const KEY = 'link-free-data'

export function getLocalStorageData() {
  const data = process.browser && localStorage.getItem(KEY)
  return data ? JSON.parse(data) : null
}

export function setLocalStorageData(data = {}) {
  localStorage.setItem(KEY, JSON.stringify(data))
}

export function removeLocalStorageData() {
  localStorage.removeItem(KEY)
}