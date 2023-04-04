import {useContext} from "react";
import Service from "../context/service";
import Day from "./day";

function Main({loading}){
    const {forecast} = useContext(Service);
    if (typeof forecast.daily == "object") {
        return (
            <div className="main-container">
                <div className="main-inner">
                    <div className="main-column">
                        <div className="main-row f">
                            <Day data={forecast.daily[0]} loading={loading} />
                            <Day data={forecast.daily[1]} loading={loading} />
                        </div>
                        <div className="main-row">
                            <Day data={forecast.daily[2]} loading={loading} />
                            <Day data={forecast.daily[3]} loading={loading} />
                        </div>
                    </div>
                    <div className="main-column">
                        <div className="main-row">
                            <Day data={forecast.daily[4]} loading={loading} />
                            <Day data={forecast.daily[5]} loading={loading} />
                        </div>
                        <div className="main-row">
                            <Day data={forecast.daily[6]} loading={loading} />
                            <Day data={forecast.daily[7]} loading={loading} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }else{
        return <h1>&nbsp;</h1>;
    }

}
export default Main;