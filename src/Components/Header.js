import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import { jwtDecode } from "jwt-decode";

import { useEffect, useState } from "react";
function Header() {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [email, setEmail]=useState("")

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("UserDetails"));
    if (user) {
      setUsername(user.name);
      setImage(user.image);
      // setEmail(user.) // fixed typo: it was "Image"
    }
  }, []);
      
  return (
    <>
     <GoogleOAuthProvider clientId="701685943069-9fo3s7pi9nbbvla7npts0kvfksbkorl9.apps.googleusercontent.com">
      <GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
    const decoded = jwtDecode(credentialResponse.credential);
    console.log(decoded);
    console.log(decoded.email);
    console.log(decoded.name);
    localStorage.setItem(
  "UserDetails",
  JSON.stringify({
    name: decoded.name,
    image: decoded.picture, // ✅ lowercase 'picture'
  })
);

 


    
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/></GoogleOAuthProvider>
 <div className='d-flex justify-content-center' style={{ marginTop: "20px" }}>
          <img className=''
            src={image}
            alt="Profile"
            style={{ width: "60px", height:"50px", borderRadius: "50%" }}
          /><div className='m-2' style={{  alignSelf:"center" }} > <h3 className='fs-5' >Hello, {username} 👋</h3></div>
         
        </div>
      <div class="container-fluid">
        <nav class="navbar bg-body-tertiary">
          <div class="container ">
            <a class="navbar-brand" href="#">
              <img
                src="https://www.fixderma.com/cdn/shop/files/fixderma_logo_down.svg?v=1750145899&width=300"
                alt="Bootstrap"
                width="auto"
                height="75"
              />
            </a>
           
            <div class="container-fluid col-4 position-absolute top-auto end-0 ">
              <form class="d-flex" role="search">
                <input
                  class="form-control me-2 rounded-pill bg-dark "
                  type="search"
                  placeholder="Search for FaceWash"
                  aria-label="Search"
                />

                <div className="align-baseline d-flex m-auto">
                  <a>
                    <i class="fa-solid fa-cart-shopping fs-5">
                     
                    </i>
                  </a>

                  
                  <a>
                    <i class="fa-solid fa-user fs-5 ms-1"></i>
                  </a>
                </div>
               
              </form>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Header;
