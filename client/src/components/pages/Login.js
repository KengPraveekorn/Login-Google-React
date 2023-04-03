import React from "react";
import { Container, Button } from "react-bootstrap";

// firebase
import { auth,googleAuthProvider } from "../firebase";
// redux
import { useSelector,useDispatch } from "react-redux";  // useSelector ใช้ในการเข้าถึงข้อมูลใน store ดึงออกมาโชว์, การทำงานกับ store ใช้ useDispatch การส่ง payload/actionต่างๆ
import { login,logout } from "../../store/userSlice";

const Login = () => {
    const {user} = useSelector((state)=>({...state}))  // ... 3จุดคือการ copy  ,  {user} คือการเข้าถึง key เลย
    const dispatch = useDispatch()
    
    console.log(user.value);

    const handdleLoginByGoogle = async ()=>{
        // code
        auth.signInWithPopup(googleAuthProvider)
        .then(async(result)=>{
            // code return data from server (Callback func.)
            console.log('result', result);
            const {user} = result;          // restructuring คือการเอาข้อมูลที่เป็น Object ออกมา -- เข้าถึงข้อมูล User
            const idToken = await user.getIdTokenResult();

            console.log(user.email,idToken);
        })
        .catch((err)=>{
            //err
            console.log(err);
        })
    }

  return (
  <Container>
    <h1>{user.value}</h1>
    <Button onClick={handdleLoginByGoogle}>SignIn Google</Button>
    <hr/>
    <Button onClick={()=>dispatch(login())}>Login</Button>
    <Button onClick={()=>dispatch(logout())}>Logout</Button>
  </Container>
  )
};

export default Login;
