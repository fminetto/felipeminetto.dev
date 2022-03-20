import { useCallback } from "react";
import { SiAmazonaws, SiCplusplus, SiCsharp, SiDart, SiDocker, SiElectron,SiFirebase, SiFlutter, SiGo, SiKubernetes, SiLinux, SiMicrosoftazure, SiMongodb, SiMysql, SiNextdotjs, SiNodedotjs, SiPwa, SiPython, SiReact, SiVercel } from 'react-icons/si';
import { Card, Container } from './style';

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
}

export default function CardList({ items }: ICardProps) {
    const renderItems = useCallback(() => {
        return items.map(({ icon, title }, index) => (
            <Card key={index} title={title}>
                {icons[icon]()}
            </Card>
        ));
    }, [items]);

    return <Container>
        {renderItems()}
    </Container>
}