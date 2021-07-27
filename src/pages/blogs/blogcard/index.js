import { BlogCardStyle, BlogCardContainer, Img } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import "../pagination/pagination.css";
import Button from "../../../components/button";
import { Header, Paragraph } from "../../../components/typography";
import dateConverter from "./dateConverter"

const BlogCard = () => {
  const blogs = useSelector((state) => state.blogs.allBlogs.blogs);
  let res = blogs.data;
  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 10;
  const pagesVisited = pageNumber * blogPerPage;

  var pageCount = [];
  if (res && res.blogs) {
    pageCount = Math.ceil(res.total / blogPerPage);
  }
  const displayBlog =
    res && Object.keys(res.blogs).length > 0 ? (
      res.blogs.slice(pagesVisited, pagesVisited + blogPerPage).map((blog) => {
        return (
          <BlogCardStyle key={blog.id}>
            <section>
              <div className="image">
                <Img src={blog.cover_img} alt="blog img" />
              </div>
              <div className="text">
                <Header className="title">{blog.title}</Header>
                <p className="date">{dateConverter(blog.created_at)} - by <span>{blog.fullname}</span></p>
                <Paragraph>{blog.short_desc===""?blog.detail.slice(0,100)+"...": blog.short_desc}</Paragraph>
                <Link to={`/blogs/${blog.id}`}>
                  <Button small className="blog-btn">
                    Read More
                  </Button>
                </Link>
              </div>
            </section>
          </BlogCardStyle>
        );
      })
    ) : (
      <div className="no-blog" style={{marginBottom: '5rem'}}>
      <Paragraph size={25}>No blog to display</Paragraph>
    </div>
    );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    res && Object.keys(res.blogs).length > 0 ?(<BlogCardContainer className="App">
    <div className="container">
      {displayBlog}
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"paginationLink"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  </BlogCardContainer>):(
    <div className="no-blog" style={{marginBottom: '5rem'}}>
    <Paragraph size={25}>Oops... No blog Available</Paragraph>
  </div>
  )
    
    );
};

export default BlogCard;
