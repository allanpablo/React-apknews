//import { GetServerSideProps} from 'next';
import { GetStaticProps } from 'next';
import Head from 'next/head';
import styles from './home.module.scss'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}


export default function Home({product}:HomeProps) {
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
        <span>for {product.amount} month</span>
        </p>
      <SubscribeButton priceId={product.priceId} />
      </section>
      <img src="/images/code.gif" width="600px" alt="Coding" />
    </main>
    </>
  )
}

//export const getServerSideProps:GetServerSideProps = async () => {
export const getStaticProps: GetStaticProps = async () =>{

const price = await stripe.prices.retrieve('price_1Iu1ivDjZTzUivHRMUr3J46z')
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(price.unit_amount/ 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 , //24 Hours
  }

}