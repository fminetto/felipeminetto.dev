import type { NextPage, NextPageContext } from 'next'
import { listTechnologies } from '../utils/apollo'

const Home: NextPage = () => {
  return (
    <>
    </>
  )
}

export async function getStaticProps(context: NextPageContext) {
  const technologies = await listTechnologies();
  return {
    props: {
      technologies
    }
  }
}

export default Home
