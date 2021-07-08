import Rfc2898DeriveBytes from './Rfc2898DeriveBytes'

describe('Rfc2898DeriveBytes', () => {
  it('Rfc2898DeriveBytes', (done) => {
    const key = 'keytest'
    const saltBytes = Buffer.from('salttest', 'ascii')

    const rfc = new Rfc2898DeriveBytes(key, saltBytes)
    expect(rfc.GetBytes(32).toString('base64')).toEqual('RUHxJbKAZzqnyv1syO9zBiQ+/dhxgeQN7uMCfHmd+lM=')
    expect(rfc.GetBytes(16).toString('base64')).toEqual('5CVeoggizf26ynEG1+SL3w==')
    done()
  })
})
