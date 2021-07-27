import * as Yup from 'yup'

const validate = Yup.object({
    title: Yup.string().max(150, "Title can't be more than 150 characters").required('Please enter a title'),
    short_desc: Yup.string()
        .max(250, "Description can't be more than 250 characters").required('Please enter a short description'),
    detail: Yup.string().required('Please enter a message'),
})

export default validate
