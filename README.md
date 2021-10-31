# rijndael-nodejs

Implementation of the rijndael encryption algorithm.

| Statements                                                                    | Branches                                                                  | Functions                                                                   | Lines                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg) |

## Install

```npm
npm install @nexckycort/rijndael-nodejs
```

## Usage

```javascript
import rijndael from '@nexckycort/rijndael-nodejs'

const saltBytes = Buffer.from('salttest', 'ascii')
const key = 'keytest'
const password = 'test'
const = rijndael

const encryptRijndael = rijndael(saltBytes, key, password)
```

# Contributing

If someone wants to add or improve something, I invite you to collaborate directly in this repository: [@nexckycort/rijndael-nodejs](https://github.com/nexckycort/rijndael-nodejs)

# License

@nexckycort/rijndael-nodejs is released under the [MIT License](https://opensource.org/licenses/MIT).
