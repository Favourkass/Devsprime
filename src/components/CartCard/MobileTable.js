import React from "react"
import {Table,ColumnHeader, RowCell} from "./style"
import ProductInfo from "./ProductInfo"


const MobileTable=({cartID,title,description,cover_img,instructor_name,date,onDelete,price,course_type})=>{
    const payload =localStorage.getItem("token")
    return(
        <>
            <Table className="mobile-size">
                <tbody>
                <tr>
                    <ColumnHeader>Product Name <br />& Details</ColumnHeader>
                    <RowCell><ProductInfo
                            title={title}
                            description={description}
                            cover_img ={cover_img}
                            instructor_name={instructor_name}
                            date = {date}
                         /></RowCell>
                </tr>
                <tr>
                    <ColumnHeader>Price</ColumnHeader> 
                    <RowCell >#{price}</RowCell>
                </tr>
                <tr>
                    <ColumnHeader>Course Type</ColumnHeader>
                    <RowCell>{course_type}</RowCell> 
                </tr>
                <tr>
                    <ColumnHeader><img src="https://res.cloudinary.com/devsprime/image/upload/v1625309854/media/Close_gn3aqb.svg" 
                         alt="close"
                         onClick={()=>onDelete(payload,cartID)} />
                    </ColumnHeader> 
                </tr>
                </tbody>
            </Table>
        </>
    )
}
export default MobileTable;

