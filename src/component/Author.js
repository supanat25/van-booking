import  { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Author() {
  const navigate = useNavigate();
  return useEffect(() => {
    const token = localStorage.getItem("token");
    fetch("https://back-van-booking.onrender.com/authen", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.status == "ok") {
          console.log("Authen success:", data);
        } else {
          // alert("token not acess");
          const token = localStorage.removeItem("token");
          navigate("/");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error response here
      });
  },[]);
}

export default Author;
