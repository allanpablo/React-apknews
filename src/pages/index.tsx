import Head from 'next/head';
import React from 'react';
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
export default function Home() {
  return (
    <> 
    <Head>
      <title>Home | ApK - News</title>
    </Head>
    <main className= {styles.contentContainer}>
      <section className= {styles.hero}>
        <span> 👏🏼, Hey,  Welcome !!!</span>
        <h1>News about the <span> React </span> World.</h1>
        <p>Get access to all the publications <br/>
        <span>for 9.90 month</span>
        </p>
      <SubscribeButton />
      </section>
      <img src="/images/code.gif" width="600px" alt="Coding" />
    </main>
    </>
  )
}
