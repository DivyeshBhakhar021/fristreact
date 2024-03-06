import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';

function Product(props) {

    const [productData, setProduct] = useState([]);
    const [searchdata, setsearchdata] = useState('');

    const getData = async () => {
        const resapons = await fetch("https://fakestoreapi.com/products");
        const data = await resapons.json();
        setProduct(data);

    }
    useEffect(() => {
        getData()
    }, []);

    const handaldata = (v) => {
        setsearchdata(v.target.value);
    }

    const filteredProducts = productData.filter((p) =>
        p.title.toLowerCase().includes(searchdata.toLowerCase())
    );


    return (
        <div className='container'>
            <input type="text"
                placeholder='Search by product'
                value={searchdata}
                onChange={handaldata} />
            <div className='row'>
                {
                    filteredProducts.map((v) => (
                        <div className='col-md-4 gy-4'>
                            <Card className="my-2 shadow-sm" color="primary" outline style={{ width: '18rem' }}>
                                <img className='p-3' height={'250px'} alt="Sample" src={v.image} />
                                <CardBody>
                                    <CardTitle tag="h5">
                                        {v.title.length > 20 ? v.title.substring(0, 20) + "..." : v.title}
                                    </CardTitle>
                                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                                        ₹ {v.price}
                                    </CardSubtitle>
                                    <CardText>
                                        {v.description.substring(0, 20)}
                                    </CardText>
                                    <Button color="primary">
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