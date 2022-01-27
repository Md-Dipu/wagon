import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../ApartmentsBanner/ApartmentsBanner';
import ApartmentsContainer from '../ApartmentsContainer/ApartmentsContainer';

const Apartments = () => {
    const [apartments, setApartments] = React.useState({ count: 0, results: [] });
    const [limit, setLimit] = React.useState(0);
    const [pageLoading, setPageLoading] = React.useState(true);
    const [clickObserver, setClickObserver] = React.useState(0);

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
    }, [deviceWidth]);

    // pagination
    const history = useHistory();
    const location = useLocation();
    const searchQueary = new URLSearchParams(location.search);
    const currentPage = parseInt(searchQueary.get('page')) || 1;
    const setCurrentPage = pageNumber => {
        searchQueary.set('page', String(pageNumber));
        location.search = searchQueary.toString();
        history.push(location);
    };

    React.useEffect(() => {
        if (limit) {
            fetch(`http://localhost:5000/apartments?limit=${limit}&page=${currentPage}`)
                .then(res => res.json())
                .then(data => setApartments(data))
                .catch(console.error)
                .finally(() => setPageLoading(false));
        }
    }, [limit, currentPage, clickObserver]);

    if (pageLoading) {
        return (<Loading />);
    }

    return (
        <>
            <Navigation />
            <Banner
                title="Find your Dream Apartment"
                text="Take a apartmant at best price."
            />
            <ApartmentsContainer
                apartments={apartments}
                setCurrentPage={setCurrentPage}
                setPageLoading={setPageLoading}
                limit={limit}
                currentPage={currentPage}
                observer={() => setClickObserver(clickObserver + 1)}
            />
            <Footer />
        </>
    );
};

export default Apartments;