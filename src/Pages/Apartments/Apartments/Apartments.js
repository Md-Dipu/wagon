import React from 'react';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../ApartmentsBanner/ApartmentsBanner';
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
            <Banner
                title="Find you Dream Apartment"
                text="Take a apartmant at best price."
            />
            <ApartmentsContainer apartments={apartments} />
            <Footer />
        </>
    );
};

export default Apartments;