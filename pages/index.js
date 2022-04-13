import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { gql } from "@apollo/client";
import client from "../lib/apollo-client";

export default function Home({ data }) {
  console.log("totalAmounts: ", data);

  if (data.totalAmounts.length > 0) {
    return (
      <>
        <h2>🦩 Howdie! My data is here</h2>
        {data.totalAmounts.length > 0 &&
          data.totalAmounts.map((item) => (
            <div key={item.id}>
              <span>{item.id}</span>
            </div>
          ))}
      </>
    );
  }

  return <h2>❌ No data from api</h2>;
}

export async function getStaticProps() {
  const totalAmounts = `
    query {
      totalAmounts {
        id
        amount
      }
    }
  `;

  const { data } = await client.query({
    query: gql(totalAmounts),
  });

  return {
    props: {
      data,
    },
  };
}
