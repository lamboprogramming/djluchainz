import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'
import Footer from '../pages/Footer'
import Heropage from './home/Heropage'
import Navbar from './Navbar'


export default function Home() {
  return (
    <>
    <Navbar />
    <Heropage />
    <Footer />
      
    </>
  )
}
