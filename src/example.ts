import rijndael from 'rijndael'

const saltBytes = Buffer.from('salttest', 'ascii')
const key = 'keytest'
const password = 'test'

const encryptRijndael = rijndael(saltBytes, key, password)

console.log(encryptRijndael)
