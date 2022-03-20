import { ITheme } from "interfaces/theme";
import styled from "styled-components";

interface IIConProps {
    title: string;
    theme: ITheme
}

export const Container = styled.ul`
    list-style: none;
    display: flex;
    flex-flow: row;
    width: 100%;
    justify-content: space-around;
    position: fixed;
    left: 0;
    bottom: 3vmax;
    padding: 0;
    margin: 0;
`
export const Icon = styled.li<IIConProps>`
    color: ${props => props.theme.colors.secondary};
    margin: 0 1rem;
    cursor: pointer;
    svg {
        width: 5vmax;
        height: 5vmax;
    }
`