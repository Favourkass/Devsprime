import {
  BlogBodyStyle,
  BelowBlogBody,
  NextPrevious,
  Titles,
} from "./styles";
import { SubHeader, Paragraph } from "../../../components/typography/index";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { TiSocialYoutubeCircular } from "react-icons/ti";
import request from "../../../request";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { blogDetail } from "../../../redux/actions/blogActions/blogAction";
import Hero from "../blogHero/index";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import dateConverter from "../../blogs/blogcard/dateConverter";

const BlogBody = () => {
  const { blogId } = useParams();
  let blog = useSelector((state) => state.blogs.oneBlog);
  const dispatch = useDispatch();

  const fetchBlogDetail = async (id) => {
    await request
      .get(`/blogs/${id}`)
      .then((response) => dispatch(blogDetail(response.data)))
      .catch((err) => {
        console.log("Err: ", err);
        toast("Please Check your internet!");
      });
  };

  useEffect(() => {
    fetchBlogDetail(blogId);
  });

  return (
    <div>
      <ToastContainer />
      {Object.keys(blog).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <>
          <Hero
            Header={blog.data.blog.title}
            Author={dateConverter(blog.data.blog.created_at)+"-by "+ blog.data.blog.fullname}
            blogImage={blog.data.blog.cover_img}
          />
          <BlogBodyStyle>
            <section className="container">
              <Paragraph
                className="blog-body"
                children={blog.data.blog.detail}
              />
            </section>
          </BlogBodyStyle>
          {/* <BlogImageContainer className="container">
            <img src={blog.data.blog.cover_img} alt="blogimage" />
          </BlogImageContainer> */}

          <BelowBlogBody>
            <div className="left">Tags: Technology, Design, Computer</div>
            <div className="share-social">
              <div className="center">Share with</div>
              <div className="right">
                <FaFacebook className="facebook" />
                <AiFillTwitterCircle className="twitter" />
                <TiSocialYoutubeCircular className="youtube" />
              </div>
            </div>
          </BelowBlogBody>

          <Titles>
            <div className="left">
              <SubHeader
                color="black"
                children="9 Marketing Techniques in 2019"
              />
            </div>
            <div className="right">
              <SubHeader children="Learn  What Makes A Successful Business" />
            </div>
          </Titles>

          <NextPrevious>
            <div className="previous">Previous Post</div>
            <div className="next">Next Post</div>
          </NextPrevious>
        </>
      )}
    </div>
  );
};
export default BlogBody;
