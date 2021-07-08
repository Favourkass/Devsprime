// Blog List
import NavBar from "../../components/navbar/NavBarWraper/index";
import Footer from "../../components/Footer/index";
import Hero from "./hero/index";
import BlogCard from "./blogcard/index"
import request from "../../request"

import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import { setBlog } from "../../redux/actions/blogActions/blogAction";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BlogList = () => {
  const dispatch = useDispatch();
  const fetchBlogs = async () => {
        await request
      .get("/blogs/")
      .then(response=>dispatch(setBlog(response.data)))
      .catch((err) => {
        console.log("Err: ", err);
        toast("Please Check your internet!");
      });
    
  };

  useEffect(() => {
    fetchBlogs();
  });



  return (
    <>
      <NavBar />
      <Hero  />
      <ToastContainer />
      <BlogCard  />
      <Footer />
    </>
  );
};

export default BlogList;
