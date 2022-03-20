import CardList from 'components/CardList';
import Menu from 'components/Menu';
import { ITechnology } from 'interfaces/technology';
import type { NextPage, NextPageContext } from 'next';
import { listTechnologies } from 'utils/apollo';
import Developer from 'assets/developer.svg';
import { useState } from 'react';

interface IHomeProps {
  technologies: Array<ITechnology>;
  links: Array<{
    title: string;
    href: string;
    icon: string;
  }>;
}

const Home: NextPage<IHomeProps> = (props: IHomeProps) => {
  const [isWindowOpen, setIsOpenWindow] = useState<boolean>(false);
  return (
    <>
      <Developer style={{
        position:'fixed',
        top:0,
        left:0,
        margin:0,
        padding:0,
        width:'100%',
        height:'100%',
      }} viewBox="0 0 786.81995 572.25773" />
      <Menu items={props.links} setOpenWindow={setIsOpenWindow}/>
      <CardList items={props.technologies} isOpened={isWindowOpen} setIsOpened={setIsOpenWindow}/>
      {/*  
      <a style={{color:"white"}} href="https://react-icons.github.io/react-icons/" title="card icons">Card icons are provided by React Icons</a>
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
        { title: "Knowledge", href: "", icon: "FaLaptopCode" }
      ]
    },
  }
}

export default Home
