import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import useTitle from '../../hooks/useTitle';


const News = () => {
    const news = useLoaderData();
    const {title,category_id,image_url,details} = news
    // console.log(news)
    useTitle('allNews')
    return (
        <div>
            <h3>This is news</h3>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to= {`/category/${category_id}`}>
                        <Button variant="primary">All news this Category</Button>
                        </Link>
                </Card.Body>
            </Card>
        </div>
    );
};

export default News;