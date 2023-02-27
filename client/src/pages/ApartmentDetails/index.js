import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Shared/Footer';
import Loading from '../Shared/Loading';
import Navigation from '../Shared/Navigation';
import BookNowModal from './BookNowModal';
import DetailsBanner from './DetailsBanner';
import DetailsContainer from './DetailsContainer';
import RecentApartments from './RecentApartments';
import SpecialContact from './SpecialContact';
import { apartmentAPI } from '../../utils/API';

const ApartmentDetails = () => {
    const [apartmentData, setApartmentData] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);
    const [pageLoading, setPageLoading] = React.useState(true);

    const { apartmentId } = useParams();

    // getting apartment data from server
    React.useEffect(() => {
        apartmentAPI.get(`/${apartmentId}`)
            .then(res => setApartmentData(res.data.data))
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