import CardList from 'components/CardList';
import Menu from 'components/Menu';
import { ITechnology } from 'interfaces/technology';
import type { NextPage, NextPageContext } from 'next';
import { listTechnologies } from 'utils/apollo';

interface IHomeProps {
  technologies: Array<ITechnology>;
  links: Array<{
    title: string;
    href: string;
    icon: string;
  }>;
}

const Home: NextPage<IHomeProps> = (props: IHomeProps) => {
  return (
    <>
      <Menu items={props.links} />
      {/* <CardList items={props.technologies} /> */}
      {/*  <a style={{color:"white"}} href="https://react-icons.github.io/react-icons/" title="card icons">Card icons are provided by React Icons</a>
      <br/>
      <a style={{color:"white"}} href="https://www.flaticon.com/free-icons/computer" title="computer icons">Computer icons created by Freepik - Flaticon</a>
    */}
    </>
  )
}

export async function getStaticProps(context: NextPageContext): Promise<{ props: IHomeProps }> {
  const technologies = await listTechnologies();
  return {
    props: {
      technologies,
      links: [
        { title: "Github", href: "https://github.felipeminetto.dev", icon: "FaGithub" },
        { title: "Instagram", href: "https://instagram.felipeminetto.dev", icon: "FaInstagram" },
        { title: "Youtube", href: "https://youtube.felipeminetto.dev", icon: "FaYoutube" },
        /* { title: "Blog", href: "/", icon: "" }, */
        { title: "Knowledge", href: "#knowledge", icon: "FaLaptopCode" }
      ]
    },
  }
}

export default Home
