import { useState } from 'react'

import { cn } from '../utils/cn'

type DateFormat = 'YYYY.MM.DD' | 'DD.MM.YYYY' | 'YYYY.MM' | 'MM.YYYY'
type Placeholder = {
  yyyy?: string
  mm: string
  dd: string
}

const DATE_FORMAT_MAP: Record<
  DateFormat,
  { formatter: (value: string) => string; placeholderKeys: Array<keyof Placeholder> }
> = {
  'YYYY.MM.DD': {
    formatter: (value) => {
      if (value.length === 4 || value.length === 7) {
        return value + '.'
      }

      return value
    },
    placeholderKeys: ['yyyy', 'mm', 'dd'],
  },
  'DD.MM.YYYY': {
    formatter: (value) => {
      if (value.length === 2 || value.length === 5) {
        return value + '.'
      }

      return value
    },
    placeholderKeys: ['mm', 'dd', 'yyyy'],
  },
  'MM.YYYY': {
    formatter: (value) => {
      if (value.length === 2) {
        return value + '.'
      }
      return value
    },
    placeholderKeys: ['mm', 'yyyy'],
  },
  'YYYY.MM': {
    formatter: (value) => {
      if (value.length === 4) {
        return value + '.'
      }
      return value
    },
    placeholderKeys: ['yyyy', 'mm'],
  },
} as const

type DateInputProps = {
  format?: DateFormat
  placeholder?: Placeholder
  classNames?: {
    root?: string
    placeholder?: string
  }
}
const DateInput = ({
  format = 'YYYY.MM.DD',
  placeholder = { dd: '17', mm: '09', yyyy: '1990' },
  classNames,
}: DateInputProps) => {
  const [date, setDate] = useState('')
  const [isBackSpace, setIsBackSpace] = useState(false)

  const { formatter, placeholderKeys } = DATE_FORMAT_MAP[format]

  const handleKeyUp: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    setIsBackSpace(e.key.toLocaleLowerCase() === 'backspace')
  }

  const handleInsert: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setDate(formatter(e.target.value))
  }

  const handleRemove: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const hasDot = e.target.value.charAt(e.target.value.length - 1) === '.'
    setDate(hasDot ? e.target.value.slice(0, e.target.value.length - 1) : e.target.value)
  }

  const formattedPlaceholder = placeholderKeys.map((key) => placeholder[key]).join('.')

  return (
    <div
      className={cn(
        'relative flex h-10 items-center overflow-hidden rounded border px-3',
        classNames?.root,
      )}
    >
      <div className="pointer-events-none absolute">
        <span className="invisible">{date}</span>
        <span className={cn('text-border', classNames?.placeholder)}>
          {formattedPlaceholder.slice(date.length, formattedPlaceholder.length)}
        </span>
      </div>
      <input
        type="tel"
        className="h-full w-full outline-none"
        onChange={isBackSpace ? handleRemove : handleInsert}
        value={date}
        maxLength={format.length}
        onKeyDown={handleKeyUp}
      />
    </div>
  )
}

export default DateInput
