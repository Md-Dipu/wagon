import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <div>This is home</div>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;