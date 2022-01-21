import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ApartmentDetails from "./Pages/ApartmentDetails/ApartmentDetails/ApartmentDetails";
import Apartments from "./Pages/Apartments/Apartments/Apartments";
import Home from "./Pages/Home/Home/Home";
import Footer from "./Pages/Shared/Footer/Footer";

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
            <Footer />
        </Router>
    );
}

export default App;