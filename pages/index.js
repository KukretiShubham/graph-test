import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export default function Home() {

const APIURL = 'https://api.thegraph.com/subgraphs/name/cryptodogg/total-amount'

const totalAmounts = `
  query {
    totalAmounts {
      id
      amount
    }
  }
`

const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
})

client
  .query({
    query: gql(totalAmounts),
  })
  .then((data) => console.log('Subgraph data: ', data))
  .catch((err) => {
    console.log('Error fetching data: ', err)
  })
  return (
    <div>
      Creating Graphs
    </div>
  )
}
