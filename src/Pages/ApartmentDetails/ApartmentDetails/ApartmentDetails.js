import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import BookNowModal from '../BookNowModal/BookNowModal';
import DetailsBanner from '../DetailsBanner/DetailsBanner';
import DetailsContainer from '../DetailsContainer/DetailsContainer';
import SpecialContact from '../SpecialContact/SpecialContact';

const ApartmentDetails = () => {
    const [apartmentData, setApartmentData] = React.useState({});
    const [showModal, setShowModal] = React.useState(false);

    const { apartmentId } = useParams();

    // getting apartment data from server
    React.useEffect(() => {
        fetch(`http://localhost:5000/apartments/${apartmentId}`)
            .then(res => res.json())
            .then(data => setApartmentData(data))
            .catch(console.error);
    }, [apartmentId]);

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