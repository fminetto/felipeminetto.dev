import { useCallback } from "react";
import { Container, Icon } from "./style";
import { FaGithub, FaInstagram, FaYoutube, FaLaptopCode } from "react-icons/fa";

interface IMenuProps {
    items: Array<{
        title: string;
        href: string;
        icon: string;
    }>
}

const icons = { FaGithub, FaInstagram, FaYoutube, FaLaptopCode } as { [key: string]: any }

export default function MenuComponente({ items }: IMenuProps) {
    const renderItems = useCallback(() => {
        const handleClick = (href:string) =>{
            window.open(href, '_blank');
        };
        return items.map(({ href, icon, title }, index) => (
            <Icon onClick={()=>handleClick(href)} key={index} title={title}>
                {icons[icon]()}
            </Icon>
        ))
    }, [items]);
    return (<Container>{
        renderItems()
    }</Container>)
}