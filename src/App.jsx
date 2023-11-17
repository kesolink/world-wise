import { BrowserRouter, Route, Routes } from "react-router-dom"
import Product from "./pages/Product"
import Homepage from "./pages/Homepage"
import Pricing from "./pages/Pricing"
import AppLayout from "./pages/AppLayout"
import Notfound from "./pages/Notfound"
import Login from "./pages/Login"
import CityList from "./components/CityList"
import { useEffect, useState } from "react"

// const BASE_URL ="http://localhost:9000";
function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoding]= useState(false)
  useEffect(function(){
    async function fetchCities(){
      try{
        setIsLoding(true);
        const res= await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        console.log(data)
        setCities(data)
       
        // console.log()
      }catch{
        alert('There was an erroe loading the data')
      }finally{
        setIsLoding(false)
        // console.log(cities)
      }
      console.log(cities)
    }

    // async function fetchCities() {
    //   const response = await fetch('https://fakestoreapi.com/products');
    //   const data = await response.json();
    //   console.log(data)
    //    setCities(data)
    //    console.log(cities)
    // }
    fetchCities()
  },[]);
   
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="product" element={<Product />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="app" element={<AppLayout />}>
          <Route path="cities" element={<CityList cities={cities} isLoading={isLoading} />} />
          <Route path="countries" element={<CityList />} />
          <Route path="Form" element={<p>Form</p>} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App

