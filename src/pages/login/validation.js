import * as Yup from 'yup';


const LoginSchema = Yup.object({
  email: Yup.string('Email must a string').email('Insert a valid email').required(),
  password: Yup.string().min(3, 'Password should be longer than three characters').required()
})

export default LoginSchema
