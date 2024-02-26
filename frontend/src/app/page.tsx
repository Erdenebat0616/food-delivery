"use client";

import { Inputcustom } from "@/components/Input";
import { EmailInput } from "@/components/email";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { LoginMiddle } from "@/components/login";
import { NameInput } from "@/components/name";
import { Login } from "@mui/icons-material";
import { Box, Button, Container, Stack, Typography } from "@mui/material";
import { useState, ChangeEvent } from "react";

export default function Home() {
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
      <Stack display="flex" flexDirection="column" gap={8}>
        <Stack>
          <Header />
        </Stack>
        <LoginMiddle />
      </Stack>
    </Container>
  );
}
