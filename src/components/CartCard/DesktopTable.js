import React from "react"
import {ColumnHeader,Table,RowCell} from "./style"
import ProductInfo from "./ProductInfo"


const DesktopTable=(props)=>{
    return(
        <>
            <Table className="desktop-size">
                <tr >
                    <ColumnHeader>Product Name & Details</ColumnHeader>
                    <ColumnHeader>Price</ColumnHeader>
                    <ColumnHeader id="cart">Course Type</ColumnHeader>
                    <ColumnHeader><img src="https://res.cloudinary.com/devsprime/image/upload/v1625309854/media/Close_gn3aqb.svg" 
                        alt="close" />
                    </ColumnHeader>
                </tr>
                <tr>
                    <RowCell id="price"><ProductInfo
                            title={props.title}
                            description={props.description}
                            cover_img ={props.cover_img}
                            instructor_name={props.instructor_name}
                            date = {props.date}                 
                    />                   
                    </RowCell>
                    <RowCell id="price">#{props.price}</RowCell>
                    <RowCell>{props.course_type}</RowCell>
                </tr>
            </Table>
        </>
    )
}
export default DesktopTable

