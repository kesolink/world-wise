import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import AppLayout from "./pages/AppLayout"
import Notfound from "./pages/Notfound"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import useFetch from "./components/useFetch"
import {  useState, useEffect } from "react"

// const BASE_URL ="http://localhost:9000";
function App() {
  const { data, loading, error } = useFetch('http://localhost:9000/cities');
    // async function fetchCities(){
    //   try{
    //     setIsLoding(true);
    //     const res= await fetch('http://localhost:9000/cities');
    //     const data = await res.json();
    //     // console.log(data)
    //     setPlace(data)
         
       
    //     // console.log()
    //   }catch{
    //     alert('There was an erroe loading the data')
    //   }finally{
    //     setIsLoding(false)
        
    //   }
    //   // console.log(cities)
    // }

    // async function fetchCities() {
    //   const response = await fetch('https://fakestoreapi.com/products');
    //   const data = await response.json();
    //   console.log(data)
    //    setCities(data)
    //    console.log(cities)
    // }

  
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<CityList cities={data} isLoading={loading} />} />
          <Route path="countries" element={<CityList cities={data} isLoading={loading} />} />
          <Route path="Form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

