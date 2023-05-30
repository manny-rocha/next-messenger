'use client';
import { CssBaseline } from '@mui/material'
import Image from 'next/image'
import Navbar from './Navbar/navbar';

export default function Home() {
  return (
    <>
      <CssBaseline />
      <Navbar />
      <h1>Home</h1>
    </>
  )
}
