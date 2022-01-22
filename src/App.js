import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApartmentDetails from "./Pages/ApartmentDetails/ApartmentDetails/ApartmentDetails";
import Apartments from "./Pages/Apartments/Apartments/Apartments";
import Home from "./Pages/Home/Home/Home";

const App = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route exact path="/apartments">
                    <Apartments />
                </Route>
                <Route path="/apartments/:apartmentId">
                    <ApartmentDetails />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;