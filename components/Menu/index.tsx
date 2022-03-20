import { Dispatch, SetStateAction, useCallback } from "react";
import { Container, Icon } from "./style";
import { FaGithub, FaInstagram, FaYoutube, FaLaptopCode } from "react-icons/fa";

interface IMenuProps {
    items: Array<{
        title: string;
        href: string;
        icon: string;
    }>
    setOpenWindow: Dispatch<SetStateAction<boolean>>;
}

const icons = { FaGithub, FaInstagram, FaYoutube, FaLaptopCode } as { [key: string]: any }

export default function MenuComponente({ items, setOpenWindow }: IMenuProps) {
    const renderItems = useCallback(() => {
        const handleClick = (href: string) => {
            if (href !== "") {
                window.open(href, '_blank');
            }else{
                setOpenWindow(true);
            }
        };
        return items.map(({ href, icon, title }, index) => (
            <Icon onClick={() => handleClick(href)} key={index} title={title}>
                {icons[icon]()}
            </Icon>
        ))
    }, [items, setOpenWindow]);
    return (<Container>{
        renderItems()
    }</Container>)
}