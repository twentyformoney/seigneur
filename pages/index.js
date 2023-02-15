import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.scss'
import Layout from '../components/Layout'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={'judul'}>
        <h1>Seigneur</h1>
        <span>Smoothest is Beautiful, Experience Never Ending. </span>
      </div>
      
    </>
  )
}
