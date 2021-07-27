import React from 'react'
import { useEffect } from "react";
import { connect } from "react-redux";
import { Formik, Form } from 'formik';
import { toast,ToastContainer } from "react-toastify";

import { Paragraph } from '../../components/typography'
import Button from '../../components/button'
import Logo from '../../components/logo'

import { ErrorMsg, TextAreaStyle, InputStyle } from "./TextField"
import { FormContainer, HeaderContainer } from './style'
import validate from "./validate";
import { addBlog } from '../../redux/actions/blogActions/blogAction';


const BlogForm = ({addBlogData, addBlog}) => {
    useEffect(() => {}, [addBlogData]);

    return (
        <FormContainer >
            <HeaderContainer>
                <Logo />
                <Paragraph size="18" children="Create a blog post"/>
            </HeaderContainer>
            <Formik
                initialValues={{
                    title: "",
                    short_desc: "",
                    cover_img: "",
                    detail: ""
                }}
                validationSchema={validate}
                onSubmit={async (values, {resetForm, setSubmitting}) => {
                    const token = localStorage.getItem('token')
                    
                    if (!token) {
                        toast.error("Please Login");
                        setTimeout(()=> { window.location = "/login" }, 3000);
                    }
                    const ImageInput = document.querySelector("#coverImage")
                    let data = new FormData()
                    data.append("title", values.title)
                    data.append("short_desc", values.short_desc)
                    data.append("cover_img", ImageInput.files[0])
                    data.append("detail", values.detail)

                    if (navigator.onLine){
                        await addBlog(data);
                        resetForm()
                        setSubmitting(false)
                    } else {
                        toast.warning("Please check your internet");
                    }

                }}
            >
            
                    { ({ values, errors, handleChange, handleBlur, handleSubmit, setFieldValue, touched, isValid, dirty, isSubmitting }) => (
                        <div>
                        
                        <Form onSubmit={handleSubmit}>
                            <ToastContainer style={{ zIndex: "10" }} position="bottom-right" />
                            <InputStyle>
                                <input
                                placeholder="Title" 
                                name="title" 
                                type="text" 
                                value={values.title} 
                                onChange={handleChange}
                                onBlur={handleBlur}/>
                            </InputStyle>
                            <ErrorMsg>
                            { touched.title && errors.title ?
                            (errors.title):null }</ErrorMsg>

                            <InputStyle>
                                <input 
                                placeholder="Short Description" 
                                name="short_desc" 
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.short_desc}
                                type="text"/>
                            </InputStyle>
                            <ErrorMsg>
                            { touched.short_desc && errors.short_desc ?
                            (errors.short_desc):null }</ErrorMsg>

                            <InputStyle>
                                <input
                                placeholder="Cover Image" 
                                name="cover_img" 
                                type="file"
                                id="coverImage"
                                required
                                accept="image/jpg, image/jpeg, image/gif, image/png, image/svg, image/webp"
                                onBlur={handleBlur}
                                onChange={(e)=>{setFieldValue("cover_img", e.currentTarget.files[0])}}
                                />
                            </InputStyle>
                            <ErrorMsg>
                            { touched.cover_img && errors.cover_img ?
                            (errors.cover_img):null }</ErrorMsg>

                            <TextAreaStyle>
                                <textarea
                                placeholder="Detail" 
                                name="detail" 
                                value={values.detail}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                rows="4" 
                                columns="50"/>
                            </TextAreaStyle>
                            <ErrorMsg>
                            { touched.detail && errors.detail ?
                            (errors.detail):null }</ErrorMsg>

                            <Button 
                            type="submit" 
                            primary large width="100%" 
                            disabled={!(dirty && isValid) || isSubmitting}
                            > Create Post </Button>
                        </Form>
                        </div>
                    )}
            </Formik>
        </FormContainer>
    )
}

const mapStateToProps = (store) => ({
    addBlogData: store.blogs.addBlog,
});

export default connect(mapStateToProps, { addBlog })(BlogForm);
