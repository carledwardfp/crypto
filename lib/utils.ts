import millify from 'millify'
import moment from 'moment'

export const simplifyNum = (val: string) => {
  const numVal = parseFloat(val)

  if (numVal < 1) {
    return numVal.toPrecision(4)
  }

  if (numVal < 100) {
    return numVal.toFixed(2)
  }

  const millified = millify(numVal)
  return millified
}

export const capitalize = (str: string) => {
  return str[0].toUpperCase() + str.slice(1, str.length)
}

export const getData = ({
  key,
  data,
  setSessionData,
}: {
  key: string
  data: any
  setSessionData: React.Dispatch<any>
}) => {
  const sessionData = sessionStorage.getItem(key)
  const expiresAt = sessionStorage.getItem(`${key}_expires_at`)
  const timeNow = moment().unix()

  if (sessionData && expiresAt && timeNow < parseInt(expiresAt)) {
    setSessionData(JSON.parse(sessionData))
  } else {
    if (data) {
      setSessionData(data)
      sessionStorage.setItem(key, JSON.stringify(data))
      sessionStorage.setItem(`${key}_expires_at`, (timeNow + 3 * 60).toString())
    }
  }
}
