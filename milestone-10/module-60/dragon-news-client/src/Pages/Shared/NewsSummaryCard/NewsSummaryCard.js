import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaEye, FaRegBookmark, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummaryCard = ({ news }) => {

    // console.log(news)

    const { title, _id, image_url, details, total_view,rating, author } = news
    return (
        <div>
            <Card className="mb-3">
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex align-items-center'>
                        <Image className='me-3' roundedCircle fluid src={author?.img} style={{ Height: '50px', width: '50px' }}></Image>
                        <div>
                           <p className='mb-0'>{author?.name}</p> 
                           <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 200 ? <>{details.slice(0, 250) + '...'} <Link to={`/news/${_id}`}>Read More</Link></>:<>{details}</>
                        }
                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted d-flex justify-content-between">
                <div>
                    <FaStar className='text-warning me-2'></FaStar>
                    <span>{rating?.number}</span>
                </div>
                <div>
                    <FaEye className='me-2'></FaEye>
                    <span>{total_view}</span>
                </div>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummaryCard;