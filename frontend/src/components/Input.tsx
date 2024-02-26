import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  TextFieldProps,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

// type InputCustomProps = {
//   label: string;
//   placeholder?: string;
//   value?: string;
//   onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
//   type?: HTMLInputTypeAttribute;
// };

export const Inputcustom = (props: TextFieldProps) => {
  const { label, type = "text", ...rest } = props;
  const [isHidden, setIsHidden] = useState(true);

  const handleShowPassword = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        {...rest}
        type={type === "password" && isHidden ? "text" : type}
        sx={{
          bgcolor: "#ECEDF0",
          width: 384,
          border: "#ECEDF0",
        }}
        InputProps={{
          endAdornment: type === "password" && (
            <InputAdornment position="end">
              <IconButton onClick={handleShowPassword}>
                {isHidden ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      ></TextField>
    </Stack>
  );
};
