import { Container } from '@mui/material';
import './Modal.css';
import { Carousel } from './Carousel';

export const Modal = ({
    isOpen,
    toggleOpen,
}) => (
    <Container style={{ maxWidth: '600px' ,textAlign: 'center', marginTop: '3rem' }} >
    <div
        className={`overlay ${
            isOpen ? "open" : ""}`
        }
        onClick={toggleOpen}
        >
            <div className='modal'>
                <Carousel></Carousel>
            </div>
    </div>
    </Container>
);