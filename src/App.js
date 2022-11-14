import "./App.css";
import Row from "./components/Row";
import requests from "./requests";

function App() {
    return (
        <div className="App">
            <h1>lets build a netflix clone</h1>
            <Row
                title="NETFLIX ORIGINALS"
                fetchUrl={requests.fetchNetflixOriginals}
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;
