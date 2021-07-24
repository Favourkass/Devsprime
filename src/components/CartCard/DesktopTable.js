import React,{ useState } from "react"
import {ColumnHeader,Table,RowCell} from "./style"
import ProductInfo from "./ProductInfo"
import Modal from "react-modal";
import ModalCard from "../modalCard"


const DesktopTable=({cartID,title,description,cover_img,instructor_name,date,onDelete,price,course_type})=>{
    const payload =localStorage.getItem("token")
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = ()=> {
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    const handleRemoveFromCart = (payload, id) => {
        onDelete(payload, id);
        closeModal();
        return;
    }
    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            padding: '0px',
            borderRadius: '.7rem',
        },
    };
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
                        onClick={openModal}/>
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
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                ariaHideApp={false}
                style={customStyles}
            >
            <ModalCard 
                title='Are you sure about this? '
                contentBody={`This action will remove ${title} from your shopping cart`}
                leftButton={'Yes'}
                rightButton={'No'}
                handleClose={closeModal}
                handleRightButton={closeModal}
                handleLeftButton={()=>(handleRemoveFromCart(payload,cartID))}
            />
            </Modal>
        </>
    )
}
export default DesktopTable
