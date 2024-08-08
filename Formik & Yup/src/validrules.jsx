import * as Yup from 'yup';

const validationrules=Yup.object({
    name:Yup.string().required("Username is required").min(6, "Username must be at least 6 characters").max(20, "Username must not exceed 20 characters"),
    age:Yup.number().required("Age is required").positive("Age should be positive"),
    email:Yup.string().required("Email is required").email("Email is invalid"),
    loc:Yup.string().required("Location is required"),
    gen:Yup.string().required("Gender is required") ,
    edu:Yup.array().min(1).of(Yup.string().required()).required(),
    job:Yup.array().min(1).of(Yup.string().required()).required()
})

export default validationrules;