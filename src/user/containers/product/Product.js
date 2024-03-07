import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, ButtonToolbar, Card, CardBody, CardSubtitle, CardText, CardTitle, Nav, NavItem, NavLink } from 'reactstrap';

function Product(props) {

    const [productData, setProduct] = useState([]);
    const [searchdata, setsearchdata] = useState('');
    const [sort, setSort] = useState('');
    const [category, setcategory] = useState('');

    const getData = async () => {
        const resapons = await fetch("https://fakestoreapi.com/products");
        const data = await resapons.json();
        setProduct(data);

    }
    useEffect(() => {
        getData()
    }, []);


    const handalfdata = () => {
        let filteredProducts = productData.filter((p) =>
            p.title.toLowerCase().includes(searchdata) ||
            p.description.toLowerCase().includes(searchdata) ||
            p.price.toString().includes(searchdata)

        );

        const sortdata = filteredProducts.sort((a, b) => {
            if (sort === 'lh') {
                return a.price - b.price
            } else if (sort === 'hl') {
                return b.price - a.price
            } else if (sort === 'a') {
                return a.title.localeCompare(b.title)
            } else if (sort === 'z') {
                return b.title.localeCompare(a.title)
            }
        });

        if (category) {
            filteredProducts = sortdata.filter((v) => v.category === category );
            console.log(filteredProducts);
        }

        return filteredProducts

    }

    const pdata = handalfdata()

    return (
        <div className='container'>
            <input type="text"
                placeholder='Search by product'
                value={searchdata}
                onChange={(event) => setsearchdata(event.target.value)}
                className='form-control md-3 mt-3' />

            <select class="form-select mt-4" aria-label="Default select example" onChange={(event) => setSort(event.target.value)}>
                <option value="0">--Select--</option>
                <option value="lh">Product: low to high</option>
                <option value="hl">Product: high to low</option>
                <option value="a">Product: A - Z</option>
                <option value="z">Product: Z - A</option>
            </select>


            <ButtonToolbar className='mt-4'>
                <ButtonGroup className="me-2">
                <Button color="primary" onClick={(event) => setcategory()}>
                        All
                    </Button>
                    <Button color="primary" onClick={(event) => setcategory('electronics')}>
                        Electroni
                    </Button>
                    <Button color="primary" onClick={(event) => setcategory('jewelery')}>
                        Jewelry
                    </Button>
                    <Button color="primary" onClick={(event) => setcategory("men's clothing")}>
                        Men's cloth
                    </Button>
                    <Button color="primary" onClick={(event) => setcategory("women's clothing")}>
                        Women's cloth
                    </Button>
                </ButtonGroup>
            </ButtonToolbar>

            <div className='row'>
                {
                    pdata.map((v) => (
                        <div className='col-md-3 gy-4'>
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