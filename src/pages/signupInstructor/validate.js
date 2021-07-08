import * as Yup from 'yup'

const validate = Yup.object({
    fullname: Yup.string().min(3, 'Ensure fullname is longer than 3 characters').required('Please enter your full name'),
    email: Yup.string().email('Please make sure your email is valid').required('Please enter a valid email'),
    mobile_number: Yup.number('Mobile must be numbers').min(10, 'Please ensure your phone number is at least 10 digits').required('Please provide a phone number').positive().integer('Input must be numbers'),
    password: Yup.string().min(6, 'Password must not be less than 6 characters').required('Please enter a password'),
})

export default validate