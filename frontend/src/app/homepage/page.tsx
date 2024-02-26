"use client";

import { HomeImg } from "@/components/HomeImg";
import { Card1 } from "@/components/card";
import { Header } from "@/components/header";
import { Container, Stack, Typography } from "@mui/material";
import { useState } from "react";

export interface ICards {
  title: string;
  image: string;
  text: string;
}

const inititalCards: ICards[] = [
  {
    image: "delivery1.svg",
    title: "Хүргэлтийн төлөв хянах",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    image: "delivery2.svg",
    title: "Шуурхай хүргэлт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    image: "delivery.svg",
    title: "Эрүүл, баталгаат орц",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
  {
    image: "delivery1.svg",
    title: "Хоолны өргөн сонголт",
    text: "Захиалга бэлтгэлийн явцыг хянах",
  },
];

export default function Home() {
  const [cards, setCards] = useState<ICards[]>(inititalCards);

  return (
    <Stack
      sx={{
        display: "flex",
        flexDirection: "column",
        py: "10px",
      }}
      style={{ width: "100%" }}
    >
      <Stack display="flex" flexDirection="column" gap={4}>
        <Container>
          <Header />
        </Container>
        <HomeImg />
        <Container>
          <Stack display="flex" flexDirection="row" gap="30px">
            {cards.map((props) => {
              return <Card1 {...props} />;
            })}
          </Stack>
        </Container>
      </Stack>
    </Stack>
  );
}
