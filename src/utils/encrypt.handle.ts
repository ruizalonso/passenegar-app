import CryptoJS, { AES } from 'crypto-js'

const encryptValueBeforeSave = async (value: string) => {
  try {
    if (value) {
      return await CryptoJS.AES.encrypt(
        value,
        process.env.ENCRIPTION_VALUE_KEY as string
      ).toString()
    }
  } catch (error) {
    return error
  }
}

const decryptValueBeforeSave = async (value: string) => {
  try {
    if (value) {
      return await CryptoJS.AES.decrypt(
        value,
        process.env.ENCRIPTION_VALUE_KEY as string
      ).toString(CryptoJS.enc.Utf8)
    }
  } catch (error) {
    return error
  }
}

export { encryptValueBeforeSave, decryptValueBeforeSave }
