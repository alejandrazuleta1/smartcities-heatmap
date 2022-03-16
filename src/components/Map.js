import {
    GoogleMap,
    useLoadScript,
    HeatmapLayer,
} from "@react-google-maps/api";
import { styles } from './mapStyles';
import { useState , useRef, useCallback, useEffect} from "react";
import { getLocations } from "../services/LocationService";
  
const libraries = ["visualization"];
  
const mapContainerStyle = {
    height: "100vh",
    width: "100vw",
};
  
const center = {
    lat: 6.244203,
    lng: -75.581215,
};
  
const options = {
    styles: styles,
    disableDefaultUI: true,
    zoomControl: true
}

const heatMapOptions = {
    radius: 20,
}
  
function MapComponent() {
    const [heatMapData, setHeatMapData] = useState([]);

    const {isLoaded, loadError} = useLoadScript({
      googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
      libraries
    })

    const getData = async () => {
        getLocations().then(data => {
            setHeatMapData(data.map(pos => {
                return {
                    location: new window.google.maps.LatLng(pos.lat,pos.lng),
                    weight: 1
                }
            }))
        })
    };

    useEffect(() => {
        getData();
    }, []);

    const mapRef = useRef();

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
  
    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading maps"

    return (
      <div>
        <GoogleMap 
        mapContainerStyle = {mapContainerStyle}
        zoom ={14}
        center={center}
        options={options}
        onLoad={onMapLoad}
        >
            {<HeatmapLayer
                data={heatMapData}
                options={heatMapOptions}
                /> 
            }
        
        </GoogleMap>      
      </div>
    );
}
  
export default MapComponent;