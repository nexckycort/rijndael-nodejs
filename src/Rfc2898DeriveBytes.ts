import crypto from 'crypto'

class Rfc2898DeriveBytes {
  private fromIndex: number
  private readonly pbkdf2: Buffer

  readonly IterationCount: number
  readonly HashAlgorithm: string

  constructor(private readonly password: string, readonly Salt: Buffer, private readonly iterations = 1000) {
    this.fromIndex = 0
    this.IterationCount = iterations
    this.HashAlgorithm = 'sha1'
    this.pbkdf2 = crypto.pbkdf2Sync(password, this.Salt, iterations, 48, this.HashAlgorithm)
  }

  GetBytes = (cb: number): Buffer => {
    const bufferSlice = this.pbkdf2.slice(this.fromIndex, cb + this.fromIndex)
    this.fromIndex = cb

    return bufferSlice
  }
}

export default Rfc2898DeriveBytes
