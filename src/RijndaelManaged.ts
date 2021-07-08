import crypto from 'crypto'

class RijndaelManaged {
  Key = crypto.randomBytes(32)
  IV = crypto.randomBytes(16)
  readonly KeySize = 256
  readonly BlockSize = 128
}

export default RijndaelManaged
