import {useState} from "react";
import './App.css';

import {ServiceProvider} from "./context/service";
import Menu from "./component/menu";
import Main from "./component/main";

function App() {
  const [loading, setLoading] = useState(false);
  return (
    <div className="App">
        <ServiceProvider>
            <Menu setLoading={setLoading} />
            <Main loading={loading} />
        </ServiceProvider>
        <a href="https://github.com/icetinturkey" target="_blank" rel="noreferrer" className="copyright">
            <span className="title-word title-word-1">https://</span>
            <span className="title-word title-word-2">github</span>
            <span className="title-word title-word-3">.com/</span>
            <span className="title-word title-word-4">icetinturkey</span>
        </a>
    </div>
  );
}

export default App;
