import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Navigation from '../Shared/Navigation';
import Banner from './ApartmentsBanner';
import ApartmentsContainer from './ApartmentsContainer';
import { apartmentAPI } from '../../utils/API';

const Apartments = () => {
    const [apartments, setApartments] = React.useState([]);
    const [count, setCount] = React.useState([]);
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
    const searchQuery = new URLSearchParams(location.search);
    const currentPage = parseInt(searchQuery.get('page')) || 1;
    const setCurrentPage = pageNumber => {
        searchQuery.set('page', String(pageNumber));
        location.search = searchQuery.toString();
        history.push(location);
    };

    React.useEffect(() => {
        if (limit) {
            apartmentAPI.get(`?limit=${limit}&page=${currentPage}&fields=name,img,description.shortDescription,price`)
                .then(res => res.data)
                .then(({ data, count }) => {
                    setApartments(data);
                    setCount(count)
                })
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
                text="Take a apartment at best price."
            />
            <ApartmentsContainer
                apartments={apartments}
                count={count}
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