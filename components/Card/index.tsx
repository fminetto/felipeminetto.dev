import { ITechnology } from "interfaces/technology";
import { Card } from './style';
import {
    SiNodedotjs, SiAmazonaws,
    SiMicrosoftazure, SiFirebase,
    SiVercel, SiReact,
    SiFlutter,
    SiNextdotjs, SiCplusplus,
    SiDocker, SiLinux,
    SiCsharp, SiKubernetes,
    SiMongodb, SiMysql,
    SiPwa, SiPython
} from 'react-icons/si';

const icons = {
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

export default function CardComponent({ icon, title }: ITechnology) {
    return <Card title={title}>
        {
            icons[icon]()
        }
    </Card>
}