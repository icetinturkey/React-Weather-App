import axios from 'axios';
import {useContext} from "react";
import Service from "../context/service";
function Menu({cities,setLoading}){
    const {setForecast} = useContext(Service);
    const selectChange = (e) => {
        setLoading(true);
        cities.map((city)=>{
            if(city.id===parseInt(e.target.value)){
                axios("https://api.openweathermap.org/data/2.5/onecall?lat="+city.latitude+"&lon="+city.longitude+"&exclude=minutely,hourly,alerts&appid="+process.env.REACT_APP_APIKEY+"&units=metric")
                    .then((res)=>setForecast(res.data))
                    .catch((e)=>console.log(e))
                    .finally(()=>setLoading(false));
            }
            return false;
        });
    };
    return (
        <div style={{padding:"10px",backgroundColor:"#e17c02"}}>
      <div className="select">
          <select onChange={selectChange} defaultValue={'DEFAULT'}>
          <option key="0" value="DEFAULT" disabled>Select City</option>
          {
              cities.map((city) => {
                  return <option key={city.id} value={city.id}>{city.name}</option>
              })
          }
          </select>
      </div>
        </div>
    );
}
export default Menu;