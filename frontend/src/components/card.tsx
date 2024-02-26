import { ICards } from "@/app/homepage/page";
import { Card, CardContent, Typography } from "@mui/material";
import Image from "next/image";

export const Card1 = (props: ICards) => {
  return (
    <Card sx={{ boxShadow: 3, borderRadius: "16px" }}>
      <CardContent>
        <Image width={70} height={70} src={props.image} alt="delvier"></Image>
        <Typography fontSize={18} fontWeight={700}>
          {props.title}
        </Typography>
        <Typography fontSize={14}>{props.text}</Typography>
      </CardContent>
    </Card>
  );
};
