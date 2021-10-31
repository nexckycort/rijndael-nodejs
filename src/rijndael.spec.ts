import rijndael from './rijndael'

const encryptRijndaelTest = '2zu6cg=='
describe('rijndael', () => {
  it('rijndael', (done) => {
    const saltBytes = Buffer.from('salttest', 'ascii')
    const key = 'keytest'
    const password = 'test'

    const encryptRijndael = rijndael(saltBytes, key, password)

    expect(encryptRijndaelTest).toEqual(encryptRijndael)
    done()
  })
})
