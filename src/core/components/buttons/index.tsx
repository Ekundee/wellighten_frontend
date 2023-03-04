import Button from "@mui/material/Button";
import { ButtonProp } from "./interface";


export function PrimaryButton ({ text, title, styles} : ButtonProp) {
    return(
        <Button 
            title={title ? title : text}
            sx={ styles ? styles : {
                color : "var(--kiwi_white)",
                backgroundColor : "var(--kiwi_deep_green)",
                paddingX : 4,
                paddingY : 2,
                borderTopRightRadius : 15,
                borderBottomLeftRadius : 15,
                borderBottomRightRadius : 10,
                }}
        >
            {text ? text : "Primary Button"}
        </Button>
    )
}

export function SecondaryButton ({ text, title, styles} : ButtonProp) {
    return(
        <Button 
               title={title ? title : text}
               sx={ styles ? styles : {
                    color : "var(--kiwi_deep_green)",
                    backgroundColor : "var(--kiwi_white)",
                    paddingX : 4,
                    paddingY : 2,
                    borderTopRightRadius : 15,
                    borderBottomLeftRadius : 15,
                    borderBottomRightRadius : 10,
                    border : "1px solid green",
               }}
        >
            {text ? text : "Primary Button"}
        </Button>
    )
}