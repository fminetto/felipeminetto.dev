import CardComponent from 'components/Card';
import { IHomeProps } from 'interfaces/pageprops';
import type { NextPage, NextPageContext } from 'next'
import { useCallback } from 'react';
import { listTechnologies } from 'utils/apollo'

const Home: NextPage<IHomeProps> = (props:IHomeProps) => {
  const renderCards = useCallback(() => {
    return props?.technologies.map(({ icon, title }, id) => {
      return <CardComponent key={id} icon={icon} title={title} />
    })
  }, [props?.technologies]);

  return (
    <>
      {renderCards()}
    </>
  )
}

export async function getStaticProps(context: NextPageContext): Promise<{props:IHomeProps}> {
  const technologies = await listTechnologies();
  return {
    props: {
      technologies,
      links: [
        { title: "Github", href: "/", icon: "" },
        { title: "Instagram", href: "/", icon: "" },
        { title: "Youtube", href: "/", icon: "" },
        { title: "Blog", href: "/", icon: "" },
        { title: "Knowledge", href: "/", icon: "" }
      ]
    },
  }
}

export default Home
