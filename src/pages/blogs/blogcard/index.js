import {BlogCardStyle} from "./styles";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import ReactPaginate from "react-paginate";
import React, { useState } from "react";
import "../pagination/pagination.css"
import Button from "../../../components/button/index"

const BlogCard = ()=>{
  const blogs = useSelector((state) => state.blogs.allBlogs.blogs);
  let res = blogs.data
  const [pageNumber, setPageNumber] = useState(0);
  const blogPerPage = 10;
  const pagesVisited = pageNumber * blogPerPage;

  var pageCount=[];
  if (res && res.blogs){
    pageCount = Math.ceil(res.total / blogPerPage);

  }

  const displayBlog = res && Object.keys(res).length> 0 ? res.blogs
      .slice(pagesVisited, pagesVisited + blogPerPage)
      .map((blog)=>{
      return(
        <BlogCardStyle key={blog.id}>
        <section>
        <img src={blog.cover_img} alt="comm" />
        <p className="date">{blog.title}</p>
        <p>{blog.short_desc}</p>
        <Link to=""><Button>Read More</Button></Link>
      </section>
    </BlogCardStyle>
      )
    })
  :
  <div>loading..</div>

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <div className="App">
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
  );

}

export default BlogCard
