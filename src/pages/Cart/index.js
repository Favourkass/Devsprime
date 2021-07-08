import React from "react";
import NavBar from "../../components/navbar/NavBarWraper/index";
import CartCard from "../../components/CartCard/index"
import Footer from "../../components/Footer";
import Header from "./Header"
import PriceTable from "../../components/CartCard/PriceTable"
import {getCartList} from "../../redux/actions/cart.action"
import {useEffect} from "react"
import { connect } from "react-redux";
import moment from "moment"


const Cart=({getCartList,cartList})=>{
    const payload =localStorage.getItem("token")
    
    useEffect(()=>getCartList(payload),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [])
    return(
        <>
            <NavBar />
            <Header />
            {cartList.cartList.Courses && cartList.cartList.Courses.length> 0 ? cartList.cartList.Courses.map((item, i)=>{
                return(
                    <CartCard 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    cover_img ={item.cover_img}
                    instructor_name={item.instructor_name}
                    price={item.price}
                    created_at={moment(item.created_at).format('DD MM, YYYY')}
                    course_type={item.course_type}
                    cartId={item.id}
                    />
                )
            })
            :<div className='container'>You have no item in the cart</div>}

            <PriceTable white />
            <Footer />
        </>
    )
}
const mapStateToProps = (store) => ({
    cartList: store.cartList,
  });
  
export default connect(mapStateToProps, { getCartList })(Cart);


