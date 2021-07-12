import { SubHeader, Paragraph } from "../../../../components/typography"
import { AllCoursesContainer, CourseTypeContainer, Contain, PriceContainer } from "./style";
import { black } from "../../../../components/colour/colour"
import PriceBar from "./PriceBar";

const AllCourses = ({ courseCategories }) => {
    return (  
        <AllCoursesContainer>
            <SubHeader children="All Courses" color={black} weight="700"/>
            {courseCategories.map((courseCategory, index) => (
                <Paragraph key={index} children={`${courseCategory.title}(${courseCategory.total})`}/>
            ))}
        </AllCoursesContainer>
    );
}

const CourseType = ({ courseTypes, handleClick }) => {
    return (
        <CourseTypeContainer>
            <SubHeader children="Course Type" color={black} weight="700"/>
            <Contain>
                {courseTypes.map((courseType, index) => (
                    <button className="button" key={index} name={courseType.name} onClick={handleClick}> {courseType.type} </button>
                ))}
            </Contain>
        </CourseTypeContainer>
    )
}

const PriceRange = ({ lowest, highest }) =>{
    return (
        <PriceContainer>
            <SubHeader children="Price" color={black} weight="700"/>
            <PriceBar lowest={lowest} highest={highest}/>
        </PriceContainer>
    )
}

export { AllCourses, CourseType, PriceRange };
