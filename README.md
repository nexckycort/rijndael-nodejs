# rijndael-nodejs

Implementation of the rijndael encryption algorithm.

| Statements                                                                    | Branches                                                                  | Functions                                                                   | Lines                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg) |

## Usage

```
import rijndael from '@nexckycort/rijndael-nodejs'

const saltBytes = Buffer.from('salttest', 'ascii')
const key = 'keytest'
const password = 'test'
const = rijndael

const encryptRijndael = rijndael(saltBytes, key, password)
```
