import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React,{useState} from "react";
import { toast } from "react-hot-toast";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { Changepasswordschema } from "../Auth/schema/changepasswordschema";
import { NavLink } from "react-router-dom";
import { DecryptData,EncryptData } from "../utils/Encry-Decry";
const initialValues = {
  current_password: "",
  new_password: "",
  confirm_password: "",
};
// const ActiveUser = () => {
//   let signupdata = JSON.parse(localStorage.getItem("signUpData"));
//   let ActiveUser =
//     signupdata && signupdata.filter((user) => user.isActive === true);
//   return ActiveUser;
// };
export default function ResetPasswordForm() {
  // const [item] = useState(ActiveUser());
  // console.log(item)
  const navigate = useNavigate();
  const { values, errors, touched, handleBlur, handleChange, handleSubmit } =
    useFormik({
      initialValues,
      validationSchema: Changepasswordschema,
      validateOnChange: true,
      validateOnBlur: false,
      onSubmit: (values, action) => {
        let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        const activeUser = signupdata.find((user) => user.isActive === true) || [];
        console.log("activepass",activeUser)
        signupdata = signupdata.map((item) => {
          if (!item.isActive) {
            return item;
          } else {
            if (DecryptData(activeUser.password) === values.current_password) {
              if (values.current_password === values.new_password) {
                toast.error("Opps it's same try with new!");
              } else {
                toast.success("Password Change Successfully");
                navigate("/product")
                return {
                  ...item,
                  password:EncryptData(values.new_password),
                }
              }
            } else {
              toast.error("Incorrect Password");
            }
            return item;
          }
        });
        localStorage.setItem("signUpData", JSON.stringify(signupdata));
        // let signupdata = JSON.parse(localStorage.getItem("signUpData"));
        // console.log(signupdata);
      },
    });
  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Change Password</Heading>
        </Stack>
        <form onSubmit={handleSubmit}>
          <Box boxShadow={"lg"} p={8}>
            <Stack spacing={4}>
              <FormControl id="current_password">
                <FormLabel>current_password</FormLabel>
                <Input
                  type="current_password"
                  autoComplete="off"
                  name="current_password"
                  id="current_password"
                  placeholder="current_password"
                  value={values.current_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.current_password && touched.current_password ? (
                  <p className="form-error">{errors.current_password}</p>
                ) : null}
              </FormControl>
              <FormControl id="new_password">
                <FormLabel>new_password</FormLabel>
                <Input
                  autoComplete="off"
                  name="new_password"
                  id="new_password"
                  placeholder="new_password"
                  value={values.new_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.new_password && touched.new_password ? (
                  <p className="form-error">{errors.new_password}</p>
                ) : null}{" "}
              </FormControl>
              <FormControl id="confirm_password">
                <FormLabel>confirm_password</FormLabel>
                <Input
                  autoComplete="off"
                  name="confirm_password"
                  id="confirm_password"
                  placeholder="confirm_password"
                  value={values.confirm_password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                {errors.confirm_password && touched.confirm_password ? (
                  <p className="form-error">{errors.confirm_password}</p>
                ) : null}{" "}
              </FormControl>
              <Stack spacing={10}>
                <Button type="submit" bg={"blue.400"} color={"white"}>
                 Change Password
                </Button>
              </Stack>
            </Stack>
          </Box>
        </form>
      </Stack>
    </Flex>
  );
}
