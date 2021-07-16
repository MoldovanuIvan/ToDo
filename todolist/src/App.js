import './App.css';
import Header from "./components/Header/Header";
import {Route} from "react-router-dom"
import Home from "./components/Home/Home";
import Info from "./components/Info/Info";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        secondary: {
            main: '#ff3366'
        }
    }
})

const App = () => {
    return <ThemeProvider theme={theme}>
        <div className="App">
            <div className="header">
                <Header/>
            </div>
            <div className="container">
                <Route path={"/"} exact render={() => <Home/>}/>
                <Route path={"/info"} exact render={() => <Info/>}/>
            </div>
        </div>
    </ThemeProvider>
}

export default App;
