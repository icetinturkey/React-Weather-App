import {useContext} from "react";
import Service from "../context/service";
function Main(){
    const {forecast} = useContext(Service);
    const toLocalDate = (epoch) => {
        const d = new Date(epoch*1000);
        const options = { weekday: 'short'};
        return new Intl.DateTimeFormat('en-US', options).format(d);
    }
    return (
        <div style={{padding:"10px"}}>
            <div className="fcontainer">
                {forecast.daily?forecast.daily.map((item)=>(
                    <div className="fbox" key={item.dt}>
                        <div><span>{toLocalDate(item.dt)}</span></div>
                        <div><img title={item.weather[0].main} alt={item.weather[0].main} src={'https://openweathermap.org/img/wn/'+item.weather[0].icon+'@2x.png'} /></div>
                        <div><span>{Math.round(item.temp.max)}&deg;&nbsp;-&nbsp;</span><span>{Math.round(item.temp.min)}&deg;</span></div>
                    </div>
                )):"Please select a city."}
            </div>
        </div>
    );
}
export default Main;