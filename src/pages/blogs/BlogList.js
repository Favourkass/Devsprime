import NavBar from "../../components/navbar/NavBarWraper/index";
import Footer from "../../components/Footer/index";
import Hero from "./hero/index";
import BlogCard from "./blogcard/index"
import request from "../../request"

import React, { useEffect} from "react";
import { useDispatch} from "react-redux";
import { setBlog } from "../../redux/actions/blogActions/blogAction";

const BlogList = ({history}) => {
  const dispatch = useDispatch();
  const fetchBlogs = async () => {
        await request
      .get("/blogs/")
      .then(response=>dispatch(setBlog(response.data)))
      .catch((err) => {
        console.log("Err: ", err);
      });
    
  };

  useEffect(() => {
    fetchBlogs();
  });



  return (
    <>
      <NavBar />
      <Hero  path={history.location.pathname}/>
      <BlogCard  />
      <Footer />
    </>
  );
};

export default BlogList;
