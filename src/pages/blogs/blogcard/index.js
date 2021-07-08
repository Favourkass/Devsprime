import { BlogCardStyle, BlogCardContainer } from "./styles";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import "../pagination/pagination.css";
import Button from "../../../components/button";
import { Header, Paragraph } from "../../../components/typography";

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
    res && Object.keys(res).length > 0 ? (
      res.blogs.slice(pagesVisited, pagesVisited + blogPerPage).map((blog) => {
        return (
          <BlogCardStyle key={blog.id}>
            <section>
              <img src={blog.cover_img} alt="blog img" />
              <Header className="date">{blog.title}</Header>
              <Paragraph>{blog.short_desc}</Paragraph>
              <Link to={`/BlogDetail/${blog.id}`}>
                <Button small className="blog-btn">
                  Read More
                </Button>
              </Link>
            </section>
          </BlogCardStyle>
        );
      })
    ) : (
      <div>loading..</div>
    );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <BlogCardContainer className="App">
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
    </BlogCardContainer>
  );
};

export default BlogCard;
