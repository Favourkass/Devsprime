import { useEffect, useState } from "react";
import { connect } from "react-redux";
import NavBar from "../../components/navbar/NavBarWraper/index"
import Search from "../../components/search/index"
import { Hero } from "./ui/Hero"
import CoursesContainer from "./ui/CourseBody/index"
import { Container, BodyContainer, CourseBodyMainContainer, CourseView, CourseSort } from "./style"
import CourseHeader from "./ui/CourseHeader"
import { CourseCategories, courseTypes, priceRange } from "./ui/CourseBody/data"
import { AllCourses, CourseType, PriceRange } from "./ui/CourseRightSide"
import Button from "../../components/button"
import Footer from "../../components/Footer"

import {fetchCourses} from "../../redux/actions/all_courses.action"


const CoursePage = ({ courseData, fetchCourses, history}) => {

    useEffect(fetchCourses, [fetchCourses])

    let [typeId, setTypeId] = useState('')
    let [searchField, setSearchField] = useState('')

    const handleClick = (e) => {
        setTypeId(e.target.name)
    }

    const handleChange = (e) => {
        setSearchField(e.target.value)
    }

    let filteredCourses = typeId ? courseData.filter((course) => {
        return course.type_id.toLowerCase() === typeId.toLowerCase()
    }): courseData

    let searchedCourses = filteredCourses.filter((course) => {
        return course.title.toLowerCase().includes(searchField.toLowerCase())
    })
    
    let showCourses = () => {
        if(searchField){
            return searchedCourses
        } else {
            return filteredCourses
        }
    }

    return (
    <>
        <NavBar/>
        <Hero />
        <Container className='container'>
            <BodyContainer >
                <Search 
                    placeholder="Search for Courses i.e web-development"
                    type="search"
                    onChange = { handleChange }
                    value={ searchField }
                />
                <CourseBodyMainContainer >
                    <CourseView className="courseview">
                        <CourseHeader className="courseheader"/>
                        <CoursesContainer className="coursecontainer" courses={showCourses()} path={history.location.pathname}/>
                    </CourseView>
                    <CourseSort className="coursesort">
                        <AllCourses courseCategories={ CourseCategories }/>
                        <CourseType courseTypes={courseTypes} handleClick= {handleClick}/>
                        <PriceRange lowest={priceRange.lowest} highest={priceRange.highest} />
                        <Button width="160px" primary>Filter</Button>
                    </CourseSort>
                </CourseBodyMainContainer>
            </BodyContainer>
        </Container>
        <Footer />
    </>
    );
}


const mapStateToProps = (store) => ({
    courseData: store.all_courses.courses,
});

export default connect(mapStateToProps, { fetchCourses })(CoursePage);
