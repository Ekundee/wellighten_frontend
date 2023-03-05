export interface ButtonProp {
    text : string,
    title? : string, // tooltip on the button
    styles? : Record<string,any>,
    endIcon? : boolean,
    startIcon? : boolean,
    iconSrc? : string,
    prop? : any
}