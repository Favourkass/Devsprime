import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import {
  Card,
  Tier,
  Image,
  TitleContainer,
  Title,
  CardContainer,
} from "./style";

export const CoursesContainer = ({ courses, path, className }) => {
  //  Pagination Logic
  const [pageNumber, setPageNumber] = useState(0);
  const coursesPerPage = 9;
  const pagesVisited = pageNumber * coursesPerPage;

  let pageCount = [];
  if (courses) {
    pageCount = Math.ceil(courses.length / coursesPerPage);
  }

  const displayCourses =
    courses && Object.keys(courses).length > 0 ? (
      courses
        .slice(pagesVisited, pagesVisited + coursesPerPage)
        .map((course, index) => (
          <Link key={index} to={`${path}/${course.id}`}>
            <Card>
              <Tier>{course.type_id}</Tier>
              <Image src={course.cover_img} />
              <TitleContainer>
                <Title>{course.title}</Title>
              </TitleContainer>
            </Card>
          </Link>
        ))
    ) : (
      <div>No course available</div>
    );

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <CardContainer>
      {displayCourses}
      <ReactPaginate
        previousLabel={"<"}
        nextLabel={">"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"paginationLink"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </CardContainer>
  );
};

export default CoursesContainer;
