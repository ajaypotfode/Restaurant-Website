import React, { useContext } from "react";
import { useState } from "react";
import { menuimg } from "../data/Data";
import data from "../data/menu"
import { UserAuthContext } from "../../context/userContext";
import { ToastContainer, toast } from 'react-toastify';


const Menu = () => {
  const context = useContext(UserAuthContext);
  const [updatedFood, setUpdatedFood] = useState(data)
   const {getMenuData,user}=context

  const foodType = (foodname) => {
    const fType = data.filter((fItems) => {
      return foodname == fItems.category
    })
    setUpdatedFood(fType)
  }
  
  const addToCart=(image,name,price,id)=>{
      user?getMenuData({image,name,price,id}):
            toast.error("Login First");
  }
  return (
    <>
      <section className="menu" id="menu">
        <h1 className="heading">
          our <span>menu</span>
        </h1>
        <div className="menutype d-flex justify-content-between" id="menulist" >
          {
            menuimg.map((items, index) => {
              return (
                <>
                  <div className="menuitems" key={index} onClick={() => { foodType(items.name) }}>
                    <img id="me-img" src={items.img}  height={"100px"} width={"100px"} />
                    <p>{items.name}</p>
                  </div>
                </>
              )
            })
          }
        </div>
        <div className="box-container">
          {updatedFood.map((item, index) => (
            <div className="box" key={index}>
              <img src={item.image} alt="" />
              <h3>{item.name}</h3>
              <h5 className="text-light"> sit amet consectetur adipisicing elit. Accusantium magnam odit fugiat.</h5>
              <div className="price">
                Rs. {item.price}
              </div>
              <button className="btn bg-warning" onClick={()=>{addToCart(item.image,item.name,item.price,item.id)}} >Add TO Cart</button> 
            </div>
          ))}
        </div>
      </section>
      <ToastContainer
         position="top-center"
         autoClose={2000}
         hideProgressBar/>
    </>
  );
};

export default Menu;
