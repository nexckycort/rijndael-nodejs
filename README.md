# rijndael-nodejs

Implementation of the rijndael encryption algorithm.

| Statements                                                                    | Branches                                                                  | Functions                                                                   | Lines                                                               |
| ----------------------------------------------------------------------------- | ------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat) |

## Install

```npm
npm install @nexckycort/rijndael-nodejs
```

## Usage

```javascript
import rijndael from '@nexckycort/rijndael-nodejs'

const saltBytes = Buffer.from('salttest', 'ascii')
const key = 'keytest'
const algorithm = 'aes256'

const encryptRijndael = rijndael(saltBytes, key, algorithm)

const text = 'test'
const encryptText = encryptRijndael(text)
console.log(encryptText) // output: gv/aprKdK7hm/s91m1VW8w==
```

## Example in csharp

```csharp
using System;

using System.IO;
using System.Security.Cryptography;
using System.Text;

namespace rijndael_csharp {
    class Program {
        static void Main(string[] args) {
            var encryptText = rijndael("test");
            Console.WriteLine(encryptText); // output: gv/aprKdK7hm/s91m1VW8w==
        }

        public static string rijndael(String password) {

            byte[] saltBytes = Encoding.ASCII.GetBytes("salttest");
            Rfc2898DeriveBytes key = new Rfc2898DeriveBytes("keytest", saltBytes);
            RijndaelManaged rijAlg = new RijndaelManaged();
            rijAlg.Key = key.GetBytes(rijAlg.KeySize / 8);
            rijAlg.IV = key.GetBytes(rijAlg.BlockSize / 8);

            byte[] encrypted;

            ICryptoTransform encryptor = rijAlg.CreateEncryptor(rijAlg.Key, rijAlg.IV);

            using (MemoryStream msEncrypt = new MemoryStream()) {
                using (CryptoStream csEncrypt = new CryptoStream(msEncrypt, encryptor, CryptoStreamMode.Write)) {
                    using (StreamWriter swEncrypt = new StreamWriter(csEncrypt)) {
                        swEncrypt.Write(password);
                    }
                    encrypted = msEncrypt.ToArray();
                }
            }
            return Convert.ToBase64String(encrypted);
        }
    }
}
```

# Contributing

If someone wants to add or improve something, I invite you to collaborate directly in this repository: [@nexckycort/rijndael-nodejs](https://github.com/nexckycort/rijndael-nodejs)

# License

@nexckycort/rijndael-nodejs is released under the [MIT License](https://opensource.org/licenses/MIT).
