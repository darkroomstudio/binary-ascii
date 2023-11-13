import binascii from '../src/lib/binascii'

describe('binascii', () => {
  it('should convert binary to ascii', () => {
    const binary = '0110100001100101011011000110110001101111'
    const ascii = 'hello'
    expect(binascii(binary)).toBe(ascii)
  })

  it('should convert ascii to binary', () => {
    const binary = '0110100001100101011011000110110001101111'
    const ascii = 'hello'
    expect(binascii(ascii)).toBe(binary)
  })

  it('should throw error if input is neither binary nor ascii', () => {
    const input = '😊'
    expect(() => binascii(input)).toThrow('Input must be binary or ascii')
  })
})
