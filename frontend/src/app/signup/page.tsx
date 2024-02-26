"use client";

import { Inputcustom } from "@/components/Input";
import { AddressInput } from "@/components/address";
import { EmailInput } from "@/components/email";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { NameInput } from "@/components/name";
import { RePassInputcustom } from "@/components/repassword";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";

export default function Home() {
  const [value, setValue] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setValue(event.target.value);
  };
  const passwordChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPassword(event.target.value);
  };
  const emailChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setEmail(event.target.value);
  };
  const nameChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setName(event.target.value);
  };
  const addressChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setAddress(event.target.value);
  };
  return (
    <Container
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "65px",
        pt: "10px",
      }}
      style={{ width: "100%" }}
    >
      <Stack display="flex" flexDirection="column" gap={4}>
        <Stack>
          <Header />
        </Stack>
        <Stack
          width="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          gap={3}
        >
          <Typography fontSize={28} fontWeight={700}>
            Бүртгүүлэх
          </Typography>
          <Stack
            flex={1}
            justifyContent="center"
            flexDirection="column"
            gap={1}
          >
            <NameInput
              label="Нэр"
              placeholder="Нэрээ оруулна уу"
              type="text"
              onChange={nameChange}
              value={name}
            />
            <EmailInput
              label="Имэйл"
              placeholder="Имэйл хаягаа оруулна уу"
              type="email"
              onChange={emailChange}
              value={email}
            />
            <AddressInput
              label="Хаяг"
              placeholder="Та хаягаа оруулна уу"
              type="text"
              onChange={addressChange}
              value={address}
            />
            <Inputcustom
              label="Нууц үг"
              placeholder="Нууц үг"
              type="password"
              onChange={handleChange}
              value={value}
            />
            <RePassInputcustom
              label="Нууц үг давтах"
              placeholder="Нууц үгээ оруулна уу"
              type="password"
              onChange={passwordChange}
              value={password}
            />
            <Stack
              pt={4}
              gap={4}
              width="384px"
              flex={1}
              justifyContent="center"
              alignItems="center"
              fontSize={14}
            >
              <Button
                fullWidth
                variant="contained"
                disableElevation
                sx={{ py: "14.5px", fontSize: "16px" }}
                disabled={!email || !value}
              >
                Бүртгүүлэх
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}
