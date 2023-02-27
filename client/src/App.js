import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./context/AuthContext";
import ApartmentDetails from "./pages/ApartmentDetails";
import Apartments from "./pages/Apartments";
import Login from "./pages/Authentication/Login";
import PrivateRoute from "./pages/Authentication/PrivateRoute";
import Register from "./pages/Authentication/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";

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
                    <PrivateRoute path="/apartments/:apartmentId">
                        <ApartmentDetails />
                    </PrivateRoute>
                    <PrivateRoute path="/dashboard">
                        <Dashboard />
                    </PrivateRoute>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route path="/register">
                        <Register />
                    </Route>
                    <Route path="*">
                        <NotFound />
                    </Route>
                </Switch>
            </Router>
        </AuthProvider>
    );
}

export default App;