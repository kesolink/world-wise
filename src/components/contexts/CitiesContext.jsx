import { createContext, useContext, useState } from "react";
import useFetch from "../useFetch";

const CitiesContext = createContext()
function CitiesProvider({children}){
    const { cities, loading, error } = useFetch('http://localhost:9000/cities');
    const [currentCity, setCurrentCity] = useState({})
    console.log(cities)
    async function getCity (id){
            try{
            //   setIsLoding(true);
              const res= await fetch(`http://localhost:9000/cities/${id}`);
              const data = await res.json();
              setCurrentCity(data)
            }catch{
              alert('There was an erroe loading the data')
            }finally{
            //   setIsLoding(false)
            }
    }
    return (<CitiesContext.Provider value={{ cities, loading, error, currentCity, getCity}}>
        {children}
    </CitiesContext.Provider>)
}
function useCities(){
    const context = useContext(CitiesContext)
    if(context === undefined) throw new Error("CitiesContext was used outside the CitiesProvider")
    return context;
}
export {CitiesProvider, useCities}