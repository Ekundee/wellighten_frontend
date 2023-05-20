import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Image from "next/image";
import { IServiceCard } from "../interface";
import { CustomTypography } from "@/core/components/minor";

export default function ServiceCard({ headerText, bodyText, imageUrl, imageAlt, imageWidth, imageHeight} : IServiceCard){
    return(
        <Card
            sx={{
                border : "2px solid var(--kiwi_deep_green)"
            }}
        > 
            <CardContent>
                <Image alt={imageAlt ? imageAlt : "kiwi star"} src={imageUrl ? imageUrl : "/next.svg"} width={imageWidth ? imageWidth : 50} height={imageHeight ? imageHeight : 50} />
                <CustomTypography>
                    {headerText}
                </CustomTypography>
                <CustomTypography>
                    {bodyText}
                </CustomTypography>
            </CardContent>                  
        </Card>     
    )
}