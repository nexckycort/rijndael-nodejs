import rijndael from './rijndael'

const encryptRijndaelTest = '2zu6cg=='
describe('rijndael', () => {
  it('rijndael', (done) => {
    const saltBytes = Buffer.from('salttest', 'ascii')
    const key = 'keytest'

    const encryptRijndael = rijndael(saltBytes, key)

    const text = 'test'
    const encryptText = encryptRijndael(text)

    expect(encryptRijndaelTest).toEqual(encryptText)
    done()
  })
})
