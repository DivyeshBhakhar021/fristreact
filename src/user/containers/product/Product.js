import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {

    const [productData, setProduct] = useState([]);

    const getData = async () => {
        const resapons = await fetch("https://fakestoreapi.com/products");
        const data = await resapons.json();

        console.log(data);
        setProduct(data);


    }
    useEffect(() => {
        getData()

    }, []);

    return (
        <div className='container'>
            <div className='row'>
                {
                    productData.map((v) => (
                        <div className='col-md-4 gy-4'>
                            <Card
                                style={{
                                    width: '18rem'
                                }}
                            >
                                <img
                                    height={'250px'}
                                    alt="Sample"
                                    src={v.image}
                                />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {v.title.substring(0, 20)}
                                    </CardTitle>
                                    <CardSubtitle
                                        className="mb-2 text-muted"
                                        tag="h6"

                                    >
                                        {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.substring(0, 20)}
                                    </CardText>
                                    <Button>
                                        Add To Card
                                    </Button>
                                </CardBody>
                            </Card>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Product;