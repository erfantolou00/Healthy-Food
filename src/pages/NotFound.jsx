import { useTheme } from '@emotion/react'
import { Typography } from '@mui/material'
import React from 'react'

export default function NotFound() {
    const theme = useTheme()
  return (
    <Typography p={5} variant='h1' color={theme.palette.primary.dark}>Not Found Page</Typography>
  )
}
