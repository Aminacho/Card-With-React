import "./App.css";

import { Name } from "./components/Name";
import Price from "./components/Price";

import { Image } from "./components/Image";
import { Description } from "./components/Description";

function App() {
  return (
    <div className="App">
      <nav>
        <h1> Hello Amina ! </h1>

        <Description />
        <Image />
        <div>
        <Name />
        <Price />
        </div>
      </nav>
    </div>
  );
}

export default App;
