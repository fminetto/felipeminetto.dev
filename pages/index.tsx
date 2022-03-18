import CardContainer from 'components/CardContainer';
import { IHomeProps } from 'interfaces/pageprops';
import type { NextPage, NextPageContext } from 'next';
import { listTechnologies } from 'utils/apollo';

const Home: NextPage<IHomeProps> = (props: IHomeProps) => {
  return (
    <>
      <CardContainer technologies={props?.technologies} />
      <a style={{color:"white"}} href="https://react-icons.github.io/react-icons/" title="card icons">Card icons are provided by React Icons</a>
      <br/>
      <a style={{color:"white"}} href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>
    </>
  )
}

export async function getStaticProps(context: NextPageContext): Promise<{ props: IHomeProps }> {
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
