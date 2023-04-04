import shuffleLetters from 'shuffle-letters';
import {useEffect} from "react";

function Day({data,loading}){

    useEffect(()=>{
        const listItems = document.querySelectorAll('.shuffle');

        if(loading){
            Array.prototype.forEach.call(listItems, (element, index) => {
                //shuffleLetters(element);
                const clearShuffleLetters = shuffleLetters(element, {
                    iterations: 200,
                    fps: 30,
                    text: "236c"
                });
                setTimeout(() => {clearShuffleLetters();element.innerText=element.attributes.tag.value+"°"}, 1000);
            });
        }else{

        }
    },[loading]);
    const toLocalDate = (epoch) => {
        const d = new Date(epoch*1000);
        const options = { weekday: 'short'};
        return new Intl.DateTimeFormat('en-US', options).format(d);
    }
    return(
        <div className="main-item">
            <div>{toLocalDate(data.dt)}</div>
            <div className="main-img"><img title={data.weather[0].main} alt={data.weather[0].main} src={'https://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png'} /></div>
            <div className="main-temps"><div className="shuffle" style={{color:"black"}} tag={Math.round(data.temp.max)}>{Math.round(data.temp.max)}&deg;</div><div>&nbsp;-&nbsp;</div><div className="shuffle" tag={Math.round(data.temp.min)}>{Math.round(data.temp.min)}&deg;</div></div>
        </div>
    );
}
export default Day;