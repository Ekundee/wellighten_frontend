import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Image from "next/image";
import { IServiceCard } from "../interface";

export default function ServiceCard({ headerText, bodyText, imageUrl, imageAlt, imageWidth, imageHeight} : IServiceCard){
    return(
        <Card
            sx={{
                border : "2px solid var(--kiwi_deep_green)"
            }}
        > 
            <CardContent>
                <Image alt={imageAlt ? imageAlt : "kiwi star"} src={imageUrl ? imageUrl : "/next.svg"} width={imageWidth ? imageWidth : 50} height={imageHeight ? imageHeight : 50} />
                <Typography>
                    {headerText}
                </Typography>
                <Typography>
                    {bodyText}
                </Typography>
            </CardContent>                  
        </Card>     
    )
}