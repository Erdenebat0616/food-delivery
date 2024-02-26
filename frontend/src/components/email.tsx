import { Stack, TextField, TextFieldProps, Typography } from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute } from "react";

// type EmailInputProps = {
//   label: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
//   type?: HTMLInputTypeAttribute;
//   error?: string;
// };

export const EmailInput = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        {...rest}
        sx={{
          bgcolor: "#ECEDF0",
          width: 384,
          border: "#ECEDF0",
        }}
      ></TextField>
    </Stack>
  );
};
