import React from 'react';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import Navigation from '../../Shared/Navigation/Navigation';
import ApartmentsContainer from '../ApartmentsContainer/ApartmentsContainer';

const Apartments = () => {
    const [apartments, setApartments] = React.useState([]);
    const [limit, setLimit] = React.useState(0);

    const { deviceWidth } = useWindowDimensions();

    // limit depends on windows/devices width
    React.useEffect(() => {
        if (deviceWidth >= 992) {
            setLimit(15);
        } else if (deviceWidth >= 768) {
            setLimit(12);
        } else {
            setLimit(8);
        }
    }, [deviceWidth])

    React.useEffect(() => {
        fetch(`http://localhost:5000/apartments?limit=${limit}&page=${1}`)
            .then(res => res.json())
            .then(data => setApartments(data.results))
            .catch(console.error);
    }, [limit]);

    return (
        <>
            <Navigation />
            <div className="bg-dark d-lg-block d-none" style={{ height: 56, marginBottom: 50 }}></div>
            <ApartmentsContainer apartments={apartments} />
        </>
    );
};

export default Apartments;