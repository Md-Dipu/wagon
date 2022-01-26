import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Apartment = (props) => {
    const { apartment } = props;
    const { _id, name, img, description, price } = apartment;
    const { shortDescription } = description;
    return (
        <Card className="border-0">
            <Card.Img variant="top" src={img} alt={`Picture of ${name}`} />
            <Card.Body className="p-0 mt-2">
                <Card.Title>{name}</Card.Title>
                <Card.Text>{shortDescription}</Card.Text>
                <span className="niche-divider opacity-50"></span>
                <div className="d-flex justify-content-between mt-2">
                    <Card.Text as="p" className="h3">${price}</Card.Text>
                    <Button as={Link} to={`/apartments/${_id}`} variant="warning" className="text-uppercase">book now</Button>
                </div>
            </Card.Body>
        </Card>
    );
};

export default Apartment;