import binascii from '../src/lib/binascii'

const possibleTestCases = [
  {
    name: 'all lowercase',
    ascii: 'abcde',
    binary: '0110000101100010011000110110010001100101',
  },
  {
    name: 'all uppercase',
    ascii: 'ABCDE',
    binary: '0100000101000010010000110100010001000101',
  },
  {
    name: 'all numbers',
    ascii: '01234',
    binary: '0011000000110001001100100011001100110100',
  },
  {
    name: 'all symbols',
    ascii: '!@#$%',
    binary: '0010000101000000001000110010010000100101',
  },
]

describe('binascii', () => {
  possibleTestCases.forEach(({ binary, ascii, name }) => {
    it(`${name} - should convert ascii to binary`, () => {
      expect(binascii(ascii)).toBe(binary)
    })

    it(`${name} - should convert binary to ascii`, () => {
      expect(binascii(binary)).toBe(ascii)
    })
  })

  it('should throw error if input is neither binary nor ascii', () => {
    const input = '😊'
    expect(() => binascii(input)).toThrow('Input must be binary or ascii')
  })
})
