/**
 * @description Binary <-> ASCII
 * @param {*} binary Binary or ASCII String
 * @returns Binary or ASCII String (opposite of input)
 */
export default function binascii(binOrAscii: string) {
  const isBinary = binOrAscii.match(/^[0-1]+$/g)
  const isAscii = binOrAscii.match(/^[\x00-\x7F]+$/g)

  if (isBinary) {
    const binaryChunks = binOrAscii.match(/.{1,8}/g) || []
    const decimalValues = binaryChunks.map((chunk) => parseInt(chunk, 2))
    const asciiString = decimalValues
      .map((value) => String.fromCharCode(value))
      .join('')
    return asciiString
  }

  if (isAscii) {
    const asciiValues = binOrAscii.split('').map((char) => char.charCodeAt(0))
    const binaryString = asciiValues
      .map((value) => value.toString(2).padStart(8, '0'))
      .join('')
    return binaryString
  }

  throw new Error('Input must be binary or ascii')
}
