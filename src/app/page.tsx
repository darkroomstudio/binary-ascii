import Link from 'next/link'

const replaceAt = (str: string, repl: string, idx: number): string =>
  str.substring(0, idx) + repl + str.substring(idx + repl.length)

export default function Home({
  searchParams,
}: {
  searchParams: { [key: string]: string }
}) {
  const { bits } = searchParams

  const LightBulbOn = ({ idx }: { idx: number }) => (
    <Link href={`?bits=${replaceAt(bits, '0', idx)}`} className="text-6xl">
      🌝
    </Link>
  )
  const LightBulbOff = ({ idx }: { idx: number }) => (
    <Link href={`?bits=${replaceAt(bits, '1', idx)}`} className="text-6xl">
      🌚
    </Link>
  )

  const bitsToLightBulb = bits?.split('').map((bit, idx) =>
    idx >= 8 ? (
      <></>
    ) : bit === '1' ? (
      <LightBulbOn key={idx} idx={idx} />
    ) : bit === '0' ? (
      <LightBulbOff key={idx} idx={idx} />
    ) : (
      <span key={idx} className="text-6xl">
        🙅🏻‍♂️
      </span>
    )
  )

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <section className="space-x-2 mb-6">{bitsToLightBulb}</section>
      <section className="text-4xl">Decimal: {parseInt(bits, 2)}</section>
    </main>
  )
}
