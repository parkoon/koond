import { useState } from 'react'

const YYYYMMDD = 'YYYY.MM.DD'

const BirthInput = () => {
  const [birth, setBirth] = useState('')

  const [isBackSpace, setIsBackSpace] = useState(false)
  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    setIsBackSpace(e.key.toLocaleLowerCase() === 'backspace')
  }

  const handleInsert: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.value.length === 4) {
      setBirth(e.target.value + '.')
      return
    }

    if (e.target.value.length === 7) {
      setBirth(
        isBackSpace ? e.target.value.slice(0, e.target.value.length - 1) : e.target.value + '.',
      )
      return
    }
    setBirth(e.target.value)
  }

  const handleRemove: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const hasDot = e.target.value.charAt(e.target.value.length - 1) === '.'
    setBirth(hasDot ? e.target.value.slice(0, e.target.value.length - 1) : e.target.value)
  }

  return (
    <div className="relative flex h-10 items-center overflow-hidden rounded border px-3">
      <div className="pointer-events-none absolute">
        <span className="invisible">{birth}</span>
        <span className="text-border">{String(YYYYMMDD).slice(birth.length, YYYYMMDD.length)}</span>
      </div>
      <input
        type="tel"
        className="h-full w-full outline-none"
        onChange={isBackSpace ? handleRemove : handleInsert}
        value={birth}
        maxLength={8 + 2}
        onKeyDown={handleKeyUp}
      />
    </div>
  )
}

export default BirthInput
