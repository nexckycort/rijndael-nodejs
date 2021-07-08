import RijndaelManaged from './RijndaelManaged'

describe('RijndaelManaged', () => {
  it('RijndaelManaged', (done) => {
    const rijAlg = new RijndaelManaged()
    expect(rijAlg.Key.byteLength).toEqual(32)
    expect(rijAlg.IV.byteLength).toEqual(16)
    expect(rijAlg.KeySize).toEqual(256)
    expect(rijAlg.BlockSize).toEqual(128)
    done()
  })
})
