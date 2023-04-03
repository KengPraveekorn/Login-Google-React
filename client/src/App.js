import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layouts/Header";

// Router-dom
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";

// Check user login
import React, { useEffect } from "react"; // useEffect ทำฉันด้วย ทำฉันก่อน
import { useDispatch } from "react-redux"; // useDispatch ส่งข้อมูลเข้าไปเก็บ
import { login } from "./store/userSlice";
import { auth } from "./components/firebase";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // code
    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      // code
      if (user) {
        // code
        const idToken = await user.getIdTokenResult();   // ทำ async เสร็จมาทำ await ต่อ 
        console.log('idToken', idToken.token);
        console.log("hello useEffect", user.email);

        // go redux (storage)
        dispatch(login({
          email:user.email,   // key:value
          token: idToken.token
        }))
      }
    });

    return () => unsubscribe();
  }, []); // [] กัน infinity loop

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
