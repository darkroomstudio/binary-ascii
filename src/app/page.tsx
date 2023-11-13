'use client'
import { useState } from 'react'

const replaceAt = (str: string, repl: string, idx: number): string =>
  str.substring(0, idx) + repl + str.substring(idx + repl.length)

export default function Home() {
  const [bits, setBits] = useState('00000000')

  const toggleLight = (idx: number) => {
    setBits(replaceAt(bits, '0', idx))
  }

  const LightOn = ({ idx }: { idx: number }) => (
    <button onClick={() => toggleLight(idx)} className="text-6xl">
      🌝
    </button>
  )
  const LightOff = ({ idx }: { idx: number }) => (
    <button onClick={() => toggleLight(idx)} className="text-6xl">
      🌚
    </button>
  )

  const bitsToLight = bits?.split('').map((bit, idx) =>
    idx >= 8 ? (
      <></>
    ) : bit === '1' ? (
      <LightOn key={idx} idx={idx} />
    ) : bit === '0' ? (
      <LightOff key={idx} idx={idx} />
    ) : (
      <span key={idx} className="text-6xl">
        🙅🏻‍♂️
      </span>
    )
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="space-x-2 mb-6">{bitsToLight}</section>
      <section className="text-4xl">Decimal: {parseInt(bits, 2)}</section>
    </main>
  )
}
