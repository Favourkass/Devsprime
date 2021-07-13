import React from "react"
import {ColumnHeader,Table,RowCell} from "./style"
import ProductInfo from "./ProductInfo"


const DesktopTable=({cartID,title,description,cover_img,instructor_name,date,onDelete,price,course_type})=>{
    const payload =localStorage.getItem("token")
    return(
        <>
            <Table className="desktop-size">
                <tbody>
                <tr >
                    <ColumnHeader>Product Name & Details</ColumnHeader>
                    <ColumnHeader>Price</ColumnHeader>
                    <ColumnHeader id="cart">Course Type</ColumnHeader>
                    <ColumnHeader>
                        <img className='close' src="https://res.cloudinary.com/devsprime/image/upload/v1625309854/media/Close_gn3aqb.svg" 
                        alt="close"
                        onClick={()=>onDelete(payload,cartID)}/>
                    </ColumnHeader>
                </tr>
                <tr>
                    <RowCell id="price"><ProductInfo
                            title={title}
                            description={description}
                            cover_img ={cover_img}
                            instructor_name={instructor_name}
                            date = {date}                 
                    />                   
                    </RowCell>
                    <RowCell id="price">#{price}</RowCell>
                    <RowCell>{course_type}</RowCell>
                </tr>
                </tbody>
            </Table>
        </>
    )
}
export default DesktopTable

