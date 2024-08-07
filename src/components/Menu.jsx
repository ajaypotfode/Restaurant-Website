import React from "react";
import data from "../menu"

import { useState } from "react";
import { menuimg } from "../Data";
import Swal from "sweetalert2";
const Menu = () => {
  const [updatedFood, setUpdatedFood] = useState(data)
  // const [popup, setPopup]=useState(false)
  const foodType = (foodname) => {
    const fType = data.filter((fItems) => {
      return foodname == fItems.category
    })
    setUpdatedFood(fType)
  }
  const getPopup=(name,price)=>{
    Swal.fire({
      title: "Your order is conformed!!",
      text:`name :${name} - price: Rs.${price}`,
      icon: "success"
    });
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
              console.log(items.img)

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
              <h5 className="text-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium magnam odit fugiat, error tempora iusto asperiores non corrupti aliquid.</h5>
              <div className="price">
                Rs. {item.price}
              </div>
              <button className="btn bg-warning" onClick={()=>{getPopup(item.name,item.price)}}>Order Food</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Menu;
