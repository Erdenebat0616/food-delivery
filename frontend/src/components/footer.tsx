import { FooterIcon } from "@/images/footerIcon";
import { WhiteIcon } from "@/images/whiteicon";
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { Button, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const Footer = () => {
  const router = useRouter();
  return (
    <Stack
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      bgcolor="#18BA51"
      position="relative"
    >
      <Image alt="footericon" fill={true} src={"/Icons.png"}></Image>
      <Stack
        display="flex"
        flexDirection="column"
        gap={5}
        alignItems="center"
        py={5}
      >
        <Stack
          display="flex"
          flexDirection="row"
          gap="8px"
          alignItems="center"
          justifyContent="center"
        >
          <WhiteIcon />
          <Typography color="white" fontSize={20} fontWeight={700}>
            Food Delivery
          </Typography>
        </Stack>
        <Stack
          width="100%"
          fontSize={16}
          fontWeight={590}
          display="flex"
          flexDirection="row"
          gap={11}
          color="white"
          sx={{ cursor: "pointer" }}
        >
          <Typography>Нүүр</Typography>
          <Typography>Холбоо барих</Typography>
          <Typography>Хоолны цэс</Typography>
          <Link style={{ color: "white" }} href="/servicepage">
            Үйлчилгээний нөхцөл
          </Link>
          <Typography>Хүргэлтийн бүс</Typography>
          <Typography>Нууцлалын бодлого</Typography>
        </Stack>
        <Stack
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="row"
          color="white"
          gap="18px"
        >
          <Facebook sx={{ fontSize: "40px", lineHeight: "46px" }} />
          <Instagram sx={{ fontSize: "40px", lineHeight: "46px" }} />
          <Twitter sx={{ fontSize: "40px", lineHeight: "46px" }} />
        </Stack>
        <Stack border={0.15} width="150%" borderColor="white"></Stack>
        <Stack
          display="flex"
          flexDirection="column"
          gap="8px"
          justifyContent="center"
          alignItems="center"
          color="white"
        >
          <Typography>© 2024 Pinecone Foods LLC</Typography>
          <Typography>Зохиогчийн эрх хуулиар хамгаалагдсан.</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
};
