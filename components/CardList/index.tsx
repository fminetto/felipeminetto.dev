import { Dispatch, SetStateAction, useCallback } from "react";
import { SiAmazonaws, SiCplusplus, SiCsharp, SiDart, SiDocker, SiElectron, SiFirebase, SiFlutter, SiGo, SiKubernetes, SiLinux, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPwa, SiPython, SiReact, SiVercel } from 'react-icons/si';
import { IoClose } from 'react-icons/io5'
import { Card, Container } from './style';
import { ThemeConsumer } from "styled-components";

const icons = {
    SiGo,
    SiDart,
    SiElectron,
    SiNodedotjs,
    SiAmazonaws,
    SiMicrosoftazure,
    SiFirebase,
    SiVercel,
    SiReact,
    SiFlutter,
    SiNextdotjs,
    SiCplusplus,
    SiDocker,
    SiLinux,
    SiCsharp,
    SiKubernetes,
    SiMongodb,
    SiMysql,
    SiPwa,
    SiPython
} as { [key: string]: any };

interface ICardProps {
    items: Array<{ icon: string, title: string }>;
    isOpened?: boolean;
    setIsOpened: Dispatch<SetStateAction<boolean>>;
}

export default function CardList({ items, isOpened, setIsOpened }: ICardProps) {
    const renderItems = useCallback(() => {
        return items.map(({ icon, title }, index) => (
            <Card key={index} title={title}>
                {icons[icon]()}
            </Card>
        ));
    }, [items]);

    return <ThemeConsumer>
        {theme => (
            <Container isOpened={isOpened}>
                <IoClose
                    onClick={() => {
                        setIsOpened(false)
                    }}
                    style={{
                        position: 'absolute',
                        display: 'flex',
                        right: '2vmax',
                        top: '2vmax',
                        margin: '0',
                        padding: '0',
                        color: theme.colors.secondary,
                        cursor: 'pointer',
                        fontSize: '2em',
                    }} />
                {renderItems()}
            </Container>
        )}
    </ThemeConsumer>
}