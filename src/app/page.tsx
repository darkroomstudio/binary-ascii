'use client'
import { useState } from 'react'
import binascii from '@/lib/binascii'

const replaceAt = (str: string, repl: string, idx: number): string =>
  str.substring(0, idx) + repl + str.substring(idx + repl.length)

export default function Home() {
  const [bits, setBits] = useState('00000000')

  const toggleLight = (idx: number, curBit: string) => {
    const toBit = curBit === '1' ? '0' : curBit === '0' ? '1' : 'x'
    setBits(replaceAt(bits, toBit, idx))
  }

  const LightBulb = ({ idx, curBit }: { idx: number; curBit: string }) => (
    <button onClick={() => toggleLight(idx, curBit)} className="text-6xl">
      {curBit === '1' ? '🌝' : curBit === '0' ? '🌚' : '🙅🏻‍♂️'}
    </button>
  )

  const bitsToLight = bits
    ?.split('')
    .map((bit, idx) => <LightBulb idx={idx} curBit={bit} key={idx} />)

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="space-x-2 mb-6">{bitsToLight}</section>
      <section className="text-4xl">Decimal: {parseInt(bits, 2)}</section>
      <section className="text-4xl">ASCII: {binascii(bits)}</section>
    </main>
  )
}
