import React from 'react';
import { Button, Col, Container, Image, Row, Table } from 'react-bootstrap';
import './DetailsContainer.css';

const DetailsContainer = ({ apartment, showModal }) => {
    const { name, img, address, description = {}, roomInfo = {}, more = [], price, templateImages = [], bestDeal } = apartment;
    const { fullDescription } = description;
    const { roomSize, roomNumber, roomFloor } = roomInfo;
    const floorStr = floor => {
        switch (floor) {
            case 0:
                return 'Ground Floor';
            case 1:
                return `${floor}st Floor`;
            case 2:
                return `${floor}nd Floor`;
            case 3:
                return `${floor}rd Floor`;
            default:
                return `${floor}th Floor`;
        }
    }


    // display images
    const [displayImage, setDisplayImage] = React.useState(img);
    React.useEffect(() => setDisplayImage(img), [img]);
    const onClickHandler = e => setDisplayImage(e.target.src);

    return (
        <Container className="my-4">
            <Row>
                <Col xs={12} md={6} lg={7}>
                    <Image src={displayImage} alt={`Picture of ${name}`} fluid className="w-100" />
                    <div className="d-flex justify-content-between my-2">
                        <Image key={0} src={img} style={{ width: '24%' }} onClick={onClickHandler} />
                        {templateImages.map((image, _idx) =>
                            <Image key={_idx + 1} src={image} style={{ width: '24%' }} onClick={onClickHandler} />
                        )}
                    </div>
                </Col>
                <Col xs={12} md={6} lg={5}>
                    <p className="h3 niche-details-title mb-3">Description</p>
                    <p className="fs-6">{fullDescription}</p>
                    <Table>
                        <tbody>
                            <tr>
                                <td>Size</td>
                                <td className="text-end">{roomSize} sq/ft</td>
                            </tr>
                            <tr>
                                <td>Number</td>
                                <td className="text-end">{roomNumber} Rooms</td>
                            </tr>
                            <tr>
                                <td>Floor</td>
                                <td className="text-end">{floorStr(+roomFloor)}</td>
                            </tr>
                        </tbody>
                    </Table>
                    <p className="h3 niche-details-title mb-3">Address</p>
                    <p className="fs-6">{address}</p>
                    <p className="h3 niche-details-title mb-3">More services</p>
                    <ul className="mb-3">
                        {more.map((item, _idx) => <li key={_idx} className="text-uppercase">{item}</li>)}
                    </ul>
                    {/* Book now action field */}
                    <div className="border-top pt-3 d-flex justify-content-between align-items-center">
                        <div>
                            <small className="d-block text-secondary">{bestDeal ? 'Best Deal' : 'Starting at'}</small>
                            <p className="h2">$ {price}</p>
                        </div>
                        <div>
                            <Button
                                variant="outline-info"
                                className="rounded-pill text-uppercase"
                                onClick={() => showModal(true)}
                            >
                                Book now
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DetailsContainer;