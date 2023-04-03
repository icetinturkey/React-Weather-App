import {useState} from "react";
import './App.css';
import {cities} from './util/cities';
import {ServiceProvider} from "./context/service";
import Menu from "./component/menu";
import Main from "./component/main";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
        <ServiceProvider>
            <Menu cities={cities} setLoading={setLoading} />
            {loading?"Loading...":<Main />}
        </ServiceProvider>
        <a href="https://github.com/icetinturkey" target="_blank" rel="noreferrer" className="copyright">https://github.com/icetinturkey</a>
    </div>
  );
}

export default App;
