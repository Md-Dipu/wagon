import React from 'react';
import { Switch, Route, useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import redirect from '../../utils/redirect';
import Home from './DashboardHome';
import SideNav from './DashboardSideNav';
import TopNav from './DashboardTopNav';
import MobileOffCanvas from './DashboardMobileOffCanvas';
import MakeAdmin from './MakeAdmin';
import AdminRoute from '../Authentication/AdminRoute';
import AddApartment from './AddApartment';
import MyBookings from './MyBookings';
import PayNow from './PayNow';
import ManageApartments from './ManageApartments';
import ManageAllBooking from './ManageAllBooking';
import MyReview from './MyReview';
import NotFound from './DashboardNotFound';
import './Dashboard.css';

const Dashboard = () => {
    const [showMobileOffCanvas, setShowMobileOffCanvas] = React.useState(false);

    const { path, url } = useRouteMatch();
    const { admin } = useAuth();

    const location = useLocation();
    const history = useHistory();

    // redirect
    if (admin && Boolean(location?.state?.from)) {
        redirect(history, location?.state?.from, '/dashboard');
    }

    return (
        <>
            <TopNav showCanvas={() => setShowMobileOffCanvas(true)} />
            <MobileOffCanvas
                show={showMobileOffCanvas}
                handleClose={() => setShowMobileOffCanvas(false)}
                url={url}
            />
            <Container fluid>
                <Row>
                    <Col xs={12} lg={2} className="d-lg-block d-none bg-secondary niche-dashboard-lg-side-nav">
                        <SideNav url={url} />
                    </Col>
                    <Col xs={12} lg={10} className="p-0">
                        <Switch>
                            <Route exact path={path}>
                                <Home />
                            </Route>
                            <Route path={`${path}/my-bookings`}>
                                <MyBookings />
                            </Route>
                            <Route path={`${path}/my-review`}>
                                <MyReview />
                            </Route>
                            <Route path={`${path}/pay-now`}>
                                <PayNow />
                            </Route>
                            <AdminRoute path={`${path}/manage-all-booking`}>
                                <ManageAllBooking />
                            </AdminRoute>
                            <AdminRoute path={`${path}/add-a-apartment`}>
                                <AddApartment />
                            </AdminRoute>
                            <AdminRoute path={`${path}/manage-apartments`}>
                                <ManageApartments />
                            </AdminRoute>
                            <AdminRoute path={`${path}/make-admin`}>
                                <MakeAdmin />
                            </AdminRoute>
                            <Route path={`${path}/*`}>
                                <NotFound
                                    url={url}
                                    linkText="Back to Dashboard"
                                />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;