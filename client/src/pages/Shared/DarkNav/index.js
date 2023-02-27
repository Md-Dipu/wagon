import React from 'react';
import Navigation from '../Navigation';

const DarkNav = (props) => {
    return (
        <>
            <Navigation {...props} />
            <div className="bg-dark d-lg-block d-none" style={{ height: '56px' }}></div>
        </>
    );
};

export default DarkNav;