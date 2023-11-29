import { useNavigate, useSearchParams } from "react-router-dom";
import { MapContainer, TileLayer, Popup, Marker, useMap, useMapEvent } from "react-leaflet";
import styles from "./Map.module.css";
import { useEffect, useState } from "react";
import { useCities } from "./contexts/CitiesContext";
import {useGeolocation} from "../hooks/useGeolocation"
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";
function Map() {
  
  const [mapPosition, setMapPosition] = useState([40, 0]);
  const {isLoading: isLoadingPosition, Position: getLocationPosition, getPosition} = useGeolocation()
  const [mapLat, mapLng] =useUrlPosition()
  const { cities } = useCities();
  useEffect( function(){
   if(mapLat && mapLng) setMapPosition([mapLat, mapLng])
  },[mapLat, mapLng])
  useEffect(function(){
    if(getLocationPosition)
    setMapPosition([getLocationPosition.lat, getLocationPosition.lng])
  },[getLocationPosition])
  
  return (
    <div className={styles.mapContainer}>
       {!getLocationPosition && (<Button type="position" onClick={getPosition}>{isLoadingPosition ? "Loading..." : "Use your positon"} </Button>)}
      <MapContainer
        center={mapPosition}
        zoom={6}
        scrollWheelZoom={true}
        className={styles.map}
        
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker position={[city.position.lat, city.position.lng]}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClicks />
      </MapContainer>
    </div>
  );
}
function ChangeCenter({position}){
    const map = useMap()
    map.setView(position)
    return null;
}

function DetectClicks(){
    const navigate = useNavigate();
    useMapEvent({
        click: (e) =>navigate (`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    })
}
export default Map;
