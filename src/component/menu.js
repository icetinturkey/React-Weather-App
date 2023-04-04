import axios from 'axios';
import {useContext,useEffect,useState} from "react";
import Service from "../context/service";
import Select from 'react-select'
import {cities} from '../util/cities';

function Menu({setLoading}){
    const {setForecast} = useContext(Service);
    const [selected,setSelected]=useState();
    const selectChange = (e) => {
        setSelected(e);
        setLoading(true);
        axios("https://api.openweathermap.org/data/2.5/onecall?lat="+e.latitude+"&lon="+e.longitude+"&exclude=minutely,hourly,alerts&appid="+process.env.REACT_APP_APIKEY+"&units=metric")
            .then((res)=>setForecast(res.data))
            .catch((e)=>console.log(e))
            .finally(()=>setLoading(false));
    };
    useEffect(()=>{
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(function(position) {
                let _m = 99999999;
                let _elem = {};
                cities.forEach(element => {
                    let _ma = (parseFloat(element.latitude)-position.coords.latitude);
                    if(_ma<0){_ma*=-1;}
                    let _mb = (parseFloat(element.longitude)-position.coords.longitude);
                    if(_mb<0){_mb*=-1;}
                    const _diff = _ma+_mb;
                    if(_diff<_m){
                        _m = _diff;
                        _elem = element;
                    }
                });
                selectChange(_elem);

            });
        }// eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    return (
        <div className="menu-container">
            <div className="menu-inner">
                <div className="menu-text"><span>City&nbsp;:</span></div>
                <div className="menu-select"><Select value={selected} options={cities} onChange={selectChange} /></div>
            </div>
        </div>
    );
}
export default Menu;