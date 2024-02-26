import { Stack, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

type EmailInputProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
};

export const NameInput = (props: EmailInputProps) => {
  const { placeholder, value, label, onChange, type = "text" } = props;
  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        sx={{
          bgcolor: "#ECEDF0",
          width: 384,
          border: "#ECEDF0",
        }}
      ></TextField>
    </Stack>
  );
};
