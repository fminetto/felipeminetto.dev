import { IThemeProps } from "interfaces/theme";
import styled from "styled-components";

export const Card = styled.div<IThemeProps>`
    background-color: ${props => props.theme.colors.primary};
    border-radius: 0.75em;
    margin: 0.5em;
    width: 25vmax;
    height: 10vmax;
    color: ${props => props.theme.colors.secondary};
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 2vmax;
    justify-content: space-evenly;
    flex-wrap:wrap;
    :after {
        content: "${props => props.title}";
        width: 9vmax;
    }
    svg {
        height:5vmax;
        width:5vmax;
    }
`;

interface IContainerProps{
    isOpened?: boolean;
    theme:IThemeProps
}

export const Container = styled.div<IContainerProps>`
    display: ${props => props.isOpened?'inline-flex':'none'};
    flex-wrap: wrap;
    justify-content: space-evenly;
    z-index: 1 !important;
    position: absolute;
    top: 0;
    padding: 0;
    left: 0;
    background: rgba( 7, 29, 73, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 20px );
    -webkit-backdrop-filter: blur( 20px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`