import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { ChangeEventHandler, HTMLInputTypeAttribute, useState } from "react";

type ReInputCustomProps = {
  label: string;
  placeholder?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
  type?: HTMLInputTypeAttribute;
};

export const RePassInputcustom = (props: ReInputCustomProps) => {
  const { placeholder, value, label, onChange, type = "text" } = props;
  const [isHidden, setIsHidden] = useState(true);

  const handleShowPassword = () => {
    setIsHidden((prev) => !prev);
  };
  return (
    <Stack gap={0.5}>
      <Typography fontSize={14}>{label}</Typography>
      <TextField
        value={value}
        onChange={onChange}
        type={type === "password" && isHidden ? "text" : type}
        placeholder={placeholder}
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
