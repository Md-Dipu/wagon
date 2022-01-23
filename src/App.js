import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./Context/AuthContext";
import ApartmentDetails from "./Pages/ApartmentDetails/ApartmentDetails/ApartmentDetails";
import Apartments from "./Pages/Apartments/Apartments/Apartments";
import Login from "./Pages/Authentication/Login/Login";
import Register from "./Pages/Authentication/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Home from "./Pages/Home/Home/Home";

const App = () => {
    return (
        <AuthProvider>
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
                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;