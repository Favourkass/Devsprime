import { CourseStyle } from "./style";
import CourseCard from "../../../components/ProductCard";
import React,{useEffect, useState} from "react";
import { Paragraph } from "../../../components/typography";

const Courses = ({ courseData, type }) => {
  const [coursetype, setCoursetype]=useState(type)
  const [courser_data, setCourser_data] = useState()
  
  useEffect (()=>{setCourser_data(courseData);
    setCoursetype(type)
  },[courseData,type])
  
  return (
    <>
    {courser_data && courser_data.courses && courser_data.courses.length>0 ? courser_data.courses.map((item,index)=> {
      if ((item.type_id).toLowerCase() === coursetype.toLowerCase()){
     return(
      <CourseStyle key={index}>
      <CourseCard image={item.cover_img} tier={item.type_id} title={item.title} />
    </CourseStyle>
     )
    }else{return ''}
    }):<Paragraph>No Courses</Paragraph>}
   </>
  );

};

export default Courses
