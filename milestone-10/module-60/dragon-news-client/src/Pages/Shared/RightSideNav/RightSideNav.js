import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { FaGoogle, FaGithub,FaFacebook,FaWhatsapp,FaTwitter,FaTwitch } from "react-icons/fa";
import ListGroup from 'react-bootstrap/ListGroup';
import BrandCarousel from '../BrandCarousel/BrandCarousel';
import { AuthContext } from '../../../context/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';

const RightSideNav = () => {

    const {providerLogIn} = useContext(AuthContext)
    const googleProvider = new GoogleAuthProvider()

   

const handleGoolgeSignIn = () => {
    providerLogIn(googleProvider)
    .then(res => {
        const user = res.user;
        console.log(user)
    })
    .catch(err => console.error(err))

}


    return (
        <div>

            <ButtonGroup vertical>
                <Button onClick={handleGoolgeSignIn} className='mb-3' variant="outline-primary"><FaGoogle></FaGoogle> Login with Google</Button>
                <Button variant="outline-dark"><FaGithub></FaGithub> Login with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find us on </h5>
                <ListGroup>
                    <ListGroup.Item className='mb-3'><FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaWhatsapp></FaWhatsapp> WhatsApp</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitter></FaTwitter> Twitter</ListGroup.Item>
                    <ListGroup.Item className='mb-3'><FaTwitch></FaTwitch> Twitch</ListGroup.Item>
                    <ListGroup.Item className='mb-3'> Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <BrandCarousel></BrandCarousel>

            </div>
        </div>
    );
};

export default RightSideNav;