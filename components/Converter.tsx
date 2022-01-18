import React, { useState } from 'react'

import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import CompareArrowsIcon from '@mui/icons-material/CompareArrows'

import NumberInput from './NumberInput'
import { ICoinData } from '../lib/types'

interface ConverterProps {
  coin: ICoinData
}

const Converter: React.FC<ConverterProps> = ({ coin }) => {
  const [coinValue, setCoinValue] = useState<number>(1)
  const [exchangeValue, setExchangeValue] = useState<number>(
    parseFloat(coin.price)
  )
  const [reversed, setReversed] = useState<boolean>(false)

  const handleCoinValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCoinValue(parseFloat(e.target.value))
    setExchangeValue(parseFloat(e.target.value) * parseFloat(coin.price))
  }

  const handleExchangeValueChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setExchangeValue(parseFloat(e.target.value))
    setCoinValue(parseFloat(e.target.value) / parseFloat(coin.price))
  }

  return (
    <Paper
      sx={{
        display: 'flex',
        flexDirection: reversed ? 'row-reverse' : 'row',
        maxWidth: 600,
        p: { xs: 0.5, sm: 1, md: 1.25 },
        m: '0 auto',
        backgroundColor: 'background.paper',
        borderRadius: 1,
      }}
    >
      <NumberInput
        value={coinValue}
        name={coin.name}
        onChange={handleCoinValueChange}
        startAdornment={coin.symbol}
      />
      <CompareArrowsIcon
        onClick={() => setReversed(!reversed)}
        sx={{ mx: 1 }}
      />
      <NumberInput
        value={exchangeValue}
        name="$"
        onChange={handleExchangeValueChange}
        startAdornment="$"
      />
    </Paper>
  )
}

export default Converter
