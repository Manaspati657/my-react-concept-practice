import * as Yup from "yup";

export const SignUpSchema = Yup.object({
    name:Yup.string().min(2).max(25).required("Please enter your name"),
    email:Yup.string().email().required("Please enter your email."),
    password:Yup.string().min(8).max(16).required("Please enter your."),
    confirm_password:Yup.string().required().oneOf([Yup.ref("password"),null],"Password must be match")
})