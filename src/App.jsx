import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {useState} from "react";
import Game from "./components/Game.jsx";
import {gamePage, resultPage, startPage} from "./utils/constants.js";
import Result from "./components/Result.jsx";
import Start from "./components/Start.jsx";


function App() {
    const [page, setPage] = useState(startPage);
    const [name, setName] = useState('YOU');
    const [result, setResult] = useState({playerWins: 0, compWins: 0});

    const changeName = (name) => {
        if (name) {
            setName(name);
            setResult({playerWins: 0, compWins: 0});
        }
    };

    const changePage = (newPage) => {
        setPage(newPage);

    };

    const updateGameResult = (winner) => {
        setResult(prevResults => {
            if (winner === name) {
                return {...prevResults, playerWins: prevResults.playerWins + 1};
            } else {
                return {...prevResults, compWins: prevResults.compWins + 1};
            }
        });
    };

    switch (page) {
        case gamePage:
            return <Game changePage={changePage} name={name} updateGameResult={updateGameResult}/>;
        case resultPage:
            return <Result changePage={changePage} result={result} name={name}/>;
        default:
            return <Start changePage={changePage} changeName={changeName}/>;
    }
}

export default App;
