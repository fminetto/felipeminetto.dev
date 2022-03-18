import CardComponent from "components/Card";
import { ITechnology } from "interfaces/technology";
import { Container } from "./style";

export default function CardContainer({ technologies }: { technologies: ITechnology[] }) {
    return <Container>
        {
            technologies.map(({ icon, title }, id) => {
                return <CardComponent key={id} icon={icon} title={title} />
            })
        }
    </Container>
}