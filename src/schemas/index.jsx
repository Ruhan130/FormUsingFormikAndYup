import * as Yup from 'yup';

export const signUpSchema = Yup.object({
    firstname: Yup.string()
        .matches(/^[A-Za-z\s]+$/, "First name should only contain alphabets")
        .min(2).max(25).required("Please Enter your First Name"),
    Lname: Yup.string()
        .matches(/^[A-Za-z]+$/, "Last name should only contain alphabets") 
        .min(2).max(18).required("Please Enter your Last Name"),
        email: Yup.string()
        .matches(/^[a-zA-Z]+(?:[._]?[a-zA-Z]+)*@[a-zA-Z]+\.[a-zA-Z]{2,}$/, "Email should not contain numbers")
        .required("Please enter your email"),
    Password: Yup.string().min(6).max(15).required("Please Enter Password"),
    conformPassword: Yup.string().required().oneOf([Yup.ref('Password'), null], "Password must match"),
    gender: Yup.string().required("Please select your gender"),
    subject: Yup.string()
        .required("Please select a subject")
        .oneOf(["math", "chemistry", "physics"], "Invalid subject selected"),
    image: Yup.mixed()
        .required("Please insert an image")
        .test("fileSize", "File is too large", (value) => {
            return value && value.size <= 2 * 1024 * 1024; // Max 2MB size
        })
        .test("fileType", "Unsupported file format", (value) => {
            return value && ["image/jpeg", "image/png", "image/jpg"].includes(value.type); 
        }),
});
