import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageApartments = () => {
    const [allApartments, setAllApartments] = React.useState([]);

    const floorStr = floor => {
        switch (floor) {
            case 0:
                return 'Not found';
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

    React.useEffect(() => {
        fetch('http://localhost:5000/apartments')
            .then(res => res.json())
            .then(data => setAllApartments(data.results))
            .catch(console.error);
    }, []);

    return (
        <Container fluid className="text-center py-3">
            <h5 className="text-uppercase">All Apartments</h5>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Room Size</th>
                        <th scope="col">Room Number</th>
                        <th scope="col">Room Floor</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {allApartments.map((apartment, index) =>
                        <tr key={apartment._id}>
                            <td>{index + 1}</td>
                            <td>{apartment.name}</td>
                            <td>$ {apartment.price}</td>
                            <td>{apartment.roomInfo.roomSize} sq/ft</td>
                            <td>{apartment.roomInfo.roomNumber} Rooms</td>
                            <td>{floorStr(+apartment.roomInfo.roomFloor)}</td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        const confirmation = window.confirm('Are you sure to Delete?');
                                        if (confirmation) {
                                            fetch(`http://localhost:5000/apartments/${apartment._id}`, {
                                                method: 'DELETE'
                                            })
                                                .then(res => {
                                                    if (res.status === 200) {
                                                        const restApartments = allApartments.filter(x => x._id !== apartment._id);
                                                        setAllApartments(restApartments);
                                                    }
                                                })
                                                .catch(console.error);
                                        }
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageApartments;