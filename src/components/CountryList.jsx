import Spinner from "./Spinner"
import styles from './CountryList.module.css'
import Message from "./Message"
import CountryItem from "./CountryItem"
import { useCities } from "./contexts/CitiesContext"

function CountryList() {
    const {cities, isLoading} = useCities()
    if(isLoading) return <Spinner />
    if(!cities.length)return (<Message  />)
    console.log('hello; ')
    const countries = cities.reduce((arr, city) =>{
        if(!arr.map((el)=>el.country).includes(city.country)) return [...arr, {country: city.country, emoji: city.emoji}];
        else return arr;
    }, []);
    return (
        <ul className={styles.countryList}>
            {countries.map((country) => <CountryItem country={country} key={country.emoji} />)}
            
        </ul>
    )
}

export default CountryList