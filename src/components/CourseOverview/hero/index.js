import React from "react";
import { HeroWrapper, ButtonWrapper, Text } from "./style";
import Button from "../../button/index";
import { Link } from "react-router-dom";

const CourseOverviewHero = ({ token, course_id }) => {
  var isAuthenticated = false;
  if (token !== undefined && token !== null) {
    isAuthenticated = true;
  }

  return (
    <HeroWrapper>
      <Text>
        You can either enroll for this course to gain access and also to the
        materials been attached to it online only or you can add to cart for
        checkout to view online
      </Text>
      <ButtonWrapper>
        <Link to={isAuthenticated ? { pathname: `/cart/` } : "/login"}>
          <Button secondary medium>
            {" "}
            Add to Cart{" "}
          </Button>
        </Link>
      </ButtonWrapper>
    </HeroWrapper>
  );
};

export default CourseOverviewHero;
