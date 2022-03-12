export interface ITheme{
    colors:{
        default:string;
        primary:string;
        secondary:string;
    }
}

export interface IThemeProps{
    theme:ITheme;
}