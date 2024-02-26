import { Container, Stack, Typography } from "@mui/material";
import Image from "next/image";

export const HomeImg = () => {
  return (
    <Stack
      bgcolor="#18BA51"
      display="flex"
      justifyContent="center"
      alignItems="center"
      width="100%"
      height={"80vh"}
      position="relative"
    >
      <Image alt="footericon" fill={true} src={"/Icons.png"}></Image>
      <Container>
        <Stack
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Stack
            display="flex"
            flexDirection="column"
            gap={2}
            color="white"
            width="384px"
          >
            <Typography fontSize="55px" fontWeight="600">
              Pinecone Food delivery
            </Typography>
            <Stack border={1}></Stack>
            <Typography fontSize={22} fontWeight={700}>
              Horem ipsum dolor sit amet, consectetur adipiscing elit.
            </Typography>
          </Stack>
          <Stack sx={{ position: "relative", right: "10%" }}>
            <img src="image 13.png"></img>
            <img
              style={{ position: "absolute", bottom: "0", left: "60%" }}
              src="image 14.png"
            ></img>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
};
