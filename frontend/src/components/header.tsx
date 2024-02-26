import { PineconeIcon } from "@/images/PineconeIcon";
import {
  PersonOutline,
  Search,
  ShoppingBasketOutlined,
} from "@mui/icons-material";
import {
  Box,
  Icon,
  IconButton,
  InputAdornment,
  Stack,
  TextField,
  Typography,
} from "@mui/material";

export const Header = () => {
  return (
    <Stack
      sx={{
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        height: "57px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "14px",
        }}
      >
        <PineconeIcon />
        <Box
          gap={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          fontSize={14}
          fontWeight={700}
        >
          <Typography>НҮҮР</Typography>
          <Typography>ХООЛНЫ ЦЭС</Typography>
          <Typography>ХҮРГЭЛТИЙН БҮС</Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <TextField
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <IconButton>
                  <Search
                    sx={{
                      color: "black",
                    }}
                  />
                </IconButton>
              </InputAdornment>
            ),
          }}
          placeholder="Хайх"
        ></TextField>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          gap={1}
        >
          <ShoppingBasketOutlined />
          <Typography fontSize={14} fontWeight={700}>
            Сагс
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
          gap={1}
        >
          <PersonOutline />
          <Typography fontSize={14} fontWeight={700}>
            Нэвтрэх
          </Typography>
        </Box>
      </Box>
    </Stack>
  );
};
