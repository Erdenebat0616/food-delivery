import { Button, Stack, Typography } from "@mui/material";
import { EmailInput } from "./email";
import { Inputcustom } from "./Input";
import { ChangeEvent, useState } from "react";
import Link from "next/link";
import { useFormik } from "formik";
import * as yup from "yup";
import { useRouter } from "next/navigation";

const validationSchema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

export const LoginMiddle = () => {
  const router = useRouter();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log(values);
    },
  });
  //   const [value, setValue] = useState("");
  //   const [email, setEmail] = useState("");

  //   const handleChange = (
  //     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setValue(event.target.value);
  //   };
  //   const emailChange = (
  //     event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  //   ) => {
  //     setEmail(event.target.value);
  //   };
  return (
    <Stack
      width="full"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      gap={3}
    >
      <Typography fontSize={28} fontWeight={700}>
        Нэвтрэх
      </Typography>
      <Stack flex={1} justifyContent="center" flexDirection="column" gap={1}>
        <EmailInput
          label="Имэйл"
          name="email"
          placeholder="Имэйл хаягаа оруулна уу"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={formik.touched.email && formik.errors.email}
        />
        <Inputcustom
          label="Нууц үг"
          placeholder="Нууц үг"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
          helperText={formik.touched.password && formik.errors.password}
        />
        <Button>
          <Typography
            fontSize={14}
            textTransform="none"
            color="text.secondary"
            marginLeft="265px"
          >
            Нууц үг сэргээх
          </Typography>
        </Button>
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
            // disabled={!email || !value}
            onClick={(event) => {
              event.preventDefault();
              router.push(`/homepage`);
            }}
          >
            Нэвтрэх
          </Button>
          <Typography fontSize="14px">Эсвэл</Typography>
          <Link href="/signup">
            <Button
              variant="outlined"
              sx={{
                width: "384px",
                py: "14.5px",
                fontSize: "16px",
              }}
            >
              Бүртгүүлэх
            </Button>
          </Link>
        </Stack>
      </Stack>
    </Stack>
  );
};
