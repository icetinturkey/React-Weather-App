import {createContext,useState} from "react";
const Service = createContext();
export const ServiceProvider = ({children}) => {
    const [forecast,setForecast] = useState([]);
    const values = {forecast,setForecast};
    return <Service.Provider value={values}>{children}</Service.Provider>;
};
export default Service;