import type { ChangeEvent } from 'react'

interface SearchBarProps {
  value: string
  onChange: (value: string) => void
}

export function SearchBar({ value, onChange }: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value)

  return (
    <input
      type="search"
      placeholder="🔍 e.g. chinese, pizza"
      value={value}
      onChange={handleChange}
    />
  )
}
