import React, { memo, useEffect } from "react";
import 'antd/dist/antd.css'
import '@/assets/css/resize.css';
import Header from '@/views/header'
import Content from '@/views/content'
import Footer from '@/views/footer'
import { useLocation } from "react-router-dom";

const App = memo(() => {

  const location = useLocation()
  
  useEffect(() => {
    if (location.pathname)   window.scroll(0, 0);  
  },[location.pathname])

  return (
    <div className="app">
      <Header />
      <Content />
      <Footer />
    </div>
  )

});


export default App;
