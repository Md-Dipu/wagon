import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Loading from '../../Shared/Loading/Loading';
import Navigation from '../../Shared/Navigation/Navigation';
import BookNowModal from '../BookNowModal/BookNowModal';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import RecentApartments from '../RecentApartments/RecentApartments';
import SpecialContact from '../SpecialContact/SpecialContact';

const ApartmentDetails = () => {
    const [apartmentData, setApartmentData] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [pageLoading, setPageLoading] = React.useState(true);

    const { apartmentId } = useParams();

    // getting apartment data from server
    React.useEffect(() => {
        fetch(`https://niche-product-website.herokuapp.com/apartments/${apartmentId}`)
            .then(res => res.json())
            .then(data => setApartmentData(data))
            .catch(console.error)
            .finally(() => setPageLoading(false));
    }, [apartmentId]);

    if (pageLoading) {
        return (<Loading />);
    }

    return (
        <>
            <Navigation />
            <DetailsBanner
                title={apartmentData?.name}
                text={apartmentData?.description?.shortDescription}
            />
            <DetailsContainer
                apartment={apartmentData}
                showModal={setShowModal}
            />
            <RecentApartments />
            <SpecialContact />
            <Footer />
            <BookNowModal
                show={showModal}
                onCloseModal={() => setShowModal(false)}
                apartment={{ _id: apartmentData._id, name: apartmentData.name, price: apartmentData.price }}
            />
        </>
    );
};

export default ApartmentDetails;