import React from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Home from '../DashboardHome/DashboardHome';
import SideNav from '../DashboardSideNav/DashboardSideNav';
import TopNav from '../DashboardTopNav/DashboardTopNav';
import MobileOffCanvas from '../DashboardMobileOffCanvas/DashBoardMobileOffCanvas';
import './Dashboard.css';

const Dashboard = () => {
    const [showMobileOffCanvas, setShowMobileOffCanvas] = React.useState(false);

    const { path, url } = useRouteMatch();

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
                    <Col xs={12} md={3} lg={2} className="d-lg-block d-none bg-secondary niche-dashboard-lg-side-nav">
                        <SideNav url={url} />
                    </Col>
                    <Col xs={12} md={9} lg={10} className="p-0">
                        <Switch>
                            <Route exact path={path}>
                                <Home />
                            </Route>
                        </Switch>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Dashboard;