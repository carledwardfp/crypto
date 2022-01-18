import React from 'react'
import Input from '@mui/material/Input'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'

interface NumberInputProps {
  label?: string
  name: string
  value: number
  startAdornment?: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const NumberInput: React.FC<NumberInputProps> = ({
  label,
  name,
  value,
  startAdornment,
  onChange,
}) => {
  return (
    <FormControl id={name} sx={{ width: '100%' }}>
      {label && (
        <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
      )}
      <Input
        id="number-input"
        aria-describedby="number-input"
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        startAdornment={
          startAdornment && (
            <InputAdornment position="start">{startAdornment}</InputAdornment>
          )
        }
        // precision={2} // Automatically formats input on type
      />
    </FormControl>
  )
}

export default NumberInput
