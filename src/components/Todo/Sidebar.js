import React, { useEffect, useState } from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";
// import { TodoList } from "../TodoList/TodoList";
import Cards from "../cards/cards";
import Addbook from "../addBooks/addbook";

function Sidebar() {
  const [user, setuser] = useState("");
  const navigate = useNavigate();
  const handlelogout = () => {
    sessionStorage.removeItem("accessToken");
    navigate("/");
  };

  useEffect(() => {
    fetch("http://localhost:8080/todoActivity//username", {
      method: "get",
      headers: {
        accessToken: sessionStorage.getItem("accessToken"),
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setuser(data.email);
      });
  }, []);


  return (
  <>
       

        <div className="book-container">
        <div className="top-container">
         
        <div  onClick={handlelogout}
                style={{ cursor: "pointer" }}
                className="logout">
                    <h3>
                        Logout
                    </h3>
                </div>
                <div className="booklist">
         <h1>Books List</h1>
         </div>
        </div>
        <div className="add-new-books">
            + Add New Books
        </div>
        </div>
        <div className="full-class-container">
          <Cards/>
          <Cards/>
          <Cards/>
          <Cards/>
        </div>

        <div className="input-container">
        <Addbook/>
        </div>
       
       
      
        </>
  );
}
export default Sidebar;
