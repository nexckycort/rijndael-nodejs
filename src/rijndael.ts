import crypto from 'crypto'

import Rfc2898DeriveBytes from 'Rfc2898DeriveBytes'
import RijndaelManaged from 'RijndaelManaged'

const rijndael = (saltBytes: Buffer, key: string, password: string): string => {
  const rfc = new Rfc2898DeriveBytes(key, saltBytes)

  const rijAlg = new RijndaelManaged()

  rijAlg.Key = rfc.GetBytes(rijAlg.KeySize / 8)
  rijAlg.IV = rfc.GetBytes(rijAlg.BlockSize / 8)

  const cipher = crypto.createCipheriv('aes256', rijAlg.Key, rijAlg.IV)

  const encrypted = Buffer.concat([cipher.update(password), cipher.final()])

  return encrypted.toString('base64')
}

export default rijndael
