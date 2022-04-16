import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { gql } from '@apollo/client'
import client from '../lib/apollo-client'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'

export default function Home({ data }) {
  console.log('totalAmounts: ', data)

  if (data.length > 0) {
    return (
      <>
        <h2>🦩 Howdie! My data is here</h2>
        <LineChart
          width={600}
          height={300}
          data={data}
          margin={{ top: 10, right: 20, bottom: 5, left: 60 }}
        >
          <Line type='monotone' dataKey='amount' stroke='#8884d8' />
          <CartesianGrid stroke='#ccc' strokeDasharray='5 5' />
          <XAxis dataKey='id' />
          <YAxis />
          <Tooltip />
        </LineChart>
      </>
    )
  }

  return <h2>❌ No data from api</h2>
}

export async function getStaticProps() {
  const totalAmounts = `
    query {
      totalAmounts {
        id
        amount
      }
    }
  `

  const { data } = await client.query({
    query: gql(totalAmounts)
  })

  return {
    props: {
      data: data.totalAmounts.map((item) => ({
        id: item.id,
        amount: (parseInt(item.amount) / 1000000000000000000)
      }))
    }
  }
}