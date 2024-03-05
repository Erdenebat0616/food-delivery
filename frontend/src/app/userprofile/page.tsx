import { PencilIcon } from "@/components/pencilicon";
import { Button, IconButton, Stack, Typography } from "@mui/material";
import Image from "next/image";

export default function Profile() {
  return (
    <Stack flex={1} flexDirection={"column"} alignItems={"center"}>
      <Stack
        flex={1}
        flexDirection={"column"}
        alignItems={"center"}
        gap={"40px"}
      >
        <Stack style={{ position: "relative" }}>
          <Image
            src="/evelyn.jpg"
            alt="profile"
            width="120"
            height={"120"}
            style={{ border: "1px", borderRadius: "100px" }}
          ></Image>
          <Stack
            style={{
              border: "1px solid #D6D8DB",
              borderRadius: "100px",
              width: "34px",
              height: "34px",
              position: "absolute",
              top: "80%",
              left: "70%",
              display: "grid",
              placeContent: "center",
              backgroundColor: "white",
            }}
          >
            <IconButton>
              <PencilIcon />
            </IconButton>
          </Stack>
        </Stack>
        <Typography fontSize={28} fontWeight={700}>
          Ynzaga
        </Typography>
      </Stack>
    </Stack>
  );
}
