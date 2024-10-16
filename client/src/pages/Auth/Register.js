import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     const res = await axios.post(
      '/api/v1/auth/register',{name,email,password,phone,address}
     );
      if (res.data.success) {
        toast.success(res.data.message);
        navigate("/login");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
        console.log(error);
        toast.error("Something went wrong");
      }
      
  };
  console.log(process.env.REACT_APP_API);

  return (
    <Layout title="Register - Ecommerce App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">REGISTER FORM</h4>
          <div className="mb-3">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="form-control"
              placeholder="Enter Your Name"
              required
              autoFocus
            />
          </div>
          <div className="mb-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-control"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-control"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="form-control"
              placeholder="Enter Your Phone"
              required
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="form-control"
              placeholder="Enter Your Address"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            REGISTER
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;




















// import React, { useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";


// const Register = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [phone, setPhone] = useState("");
//   const [address, setAddress] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post("/api/v1/auth/register", {
//         name,
//         email,
//         password,
//         phone,
//         address,
//       });
//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/login");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout title="Register - Ecommer App">
//       <div className="form-container ">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">REGISTER FORM</h4>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Name"
//               required
//               autoFocus
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Email "
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="form-control"
//               id="exampleInputPassword1"
//               placeholder="Enter Your Password"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={phone}
//               onChange={(e) => setPhone(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Phone"
//               required
//             />
//           </div>
//           <div className="mb-3">
//             <input
//               type="text"
//               value={address}
//               onChange={(e) => setAddress(e.target.value)}
//               className="form-control"
//               id="exampleInputEmail1"
//               placeholder="Enter Your Address"
//               required
//             />
//           </div>
//           <button type="submit" className="btn btn-primary">
//             REGISTER
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;



























// import React,{useState} from 'react';
// import Layout from '../../components/Layout/Layout';
// import {toast} from "react-toastify";
// import axios from 'axios';
// import {useNavigate} from 'react-router-dom';

// const Register = () => {
//     const [name,setName] = useState("");
//     const [email,setEmail] = useState("");
//     const [password,setPassword] = useState("");
//     const [phone,setPhone] = useState("");
//     const [address,setAddress] = useState("");
//     const navigate = useNavigate()

//     //form function

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//        try{
//         //const res=await axios.post('/api/v1/auth/register',{name,email,password,phone,address});
//         const res = await axios.post('/auth/register', { name, email, password, phone, address });

//         if(res.data.success){
//           toast.success(res.data.message)
//           navigate('/login');
//         }else{
//           toast.error(res.data.message)
//         }

//        }catch (error) {
//         if (error.response) {
//             console.log("Error response:", error.response.data);
//             toast.error(error.response.data.message || "Something went wrong");
//         } else {
//             console.log("Error message:", error.message);
//             toast.error("Something went wrong");
//         }
//     }
    
        
//        }
        
//     };
    
//     return (
//     <Layout title="Register-Ecommerce App">
//         <div className='register'>
//         <h1>Register Page</h1>
//        <form onSubmit={handleSubmit}>
  
//   <div className="mb-3">
    
//     <input type="text" value={name}  onChange={(e) => setName(e.target.value)}  className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name'  />

//     required    
//   </div>

//   <div className="mb-3">
    
//     <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' />
//     required    
//   </div>
//   <div className="mb-3">
    
//     <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}  className="form-control" id="exampleInputPassword1" placeholder='Enter the Password' />
//     required    
//   </div>


//   <div className="mb-3">
    
//     <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)}  className="form-control" id="exampleInputEmail1" placeholder='Enter Your phone Number' />
//     required    
//   </div>

//   <div className="mb-3">
    
//     <input type="text" value={address} onChange={(e) => setAddress(e.target.value)}  className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address'  />
//     required    
//   </div>


  
  
//   <button type="submit" className="btn btn-primary">Submit</button>
// </form>
// </div>

        
//     </Layout>
//   )


// export default Register;

// import React, { useState } from 'react';
// import Layout from '../../components/Layout/Layout';
// import { toast } from "react-toastify";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// const Register = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [phone, setPhone] = useState("");
//     const [address, setAddress] = useState("");
//     const navigate = useNavigate();

//     // Form function
//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//           const res = await axios.post('/Auth/Register', { name, email, password, phone, address });

//             if (res.data.success) {
//                 toast.success(res.data.message);
//                 navigate('/login');
//             } else {
//                 toast.error(res.data.message);
//             }
//         } catch (error) {
//             if (error.response) {
//                 console.log("Error response:", error.response.data);
//                 toast.error(error.response.data.message || "Something went wrong");
//             } else {
//                 console.log("Error message:", error.message);
//                 toast.error("Something went wrong");
//             }
//         }
//     };

//     return (
//         <Layout title="Register-Ecommerce App">
//             <div className='register'>
//                 <h1>Register Page</h1>
//                 <form onSubmit={handleSubmit}>
//                     <div className="mb-3">
//                         <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Name' required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Email' required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control" id="exampleInputPassword1" placeholder='Enter the Password' required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your phone Number' required />
//                     </div>
//                     <div className="mb-3">
//                         <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} className="form-control" id="exampleInputEmail1" placeholder='Enter Your Address' required />
//                     </div>
//                     <button type="submit" className="btn btn-primary">Submit</button>
//                 </form>
//             </div>
//         </Layout>
//     );
// }

// export default Register;
