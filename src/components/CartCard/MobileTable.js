import React from "react"
import {Table,ColumnHeader, RowCell} from "./style"
import ProductInfo from "./ProductInfo"


const MobileTable=(props)=>{
    return(
        <>
            <Table className="mobile-size">
                <tr>
                    <ColumnHeader>Product Name <br />& Details</ColumnHeader>
                    <RowCell><ProductInfo
                            title={props.title}
                            description={props.description}
                            cover_img ={props.cover_img}
                            instructor_name={props.instructor_name}
                            date = {props.date}
                         /></RowCell>
                </tr>
                <tr>
                    <ColumnHeader>Price</ColumnHeader> 
                    <RowCell >#{props.price}</RowCell>
                </tr>
                <tr>
                    <ColumnHeader>Course Type</ColumnHeader>
                    <RowCell>{props.course_type}</RowCell> 
                </tr>
                <tr>
                    <ColumnHeader><img src="https://res.cloudinary.com/devsprime/image/upload/v1625309854/media/Close_gn3aqb.svg" 
                        alt="close" />
                    </ColumnHeader> 
                </tr>
            </Table>
        </>
    )
}
export default MobileTable;