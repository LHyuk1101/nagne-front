import { Box, Container, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import './Modal.css';
import { Carousel } from './Carousel';

export const Modal = ({ isOpen, toggleOpen }) => (
    <Container style={{ maxWidth: '600px', textAlign: 'center', marginTop: '3rem' }}>
        <div className={`overlay ${isOpen ? "open" : ""}`} onClick={toggleOpen}>
            <div className='modal' onClick={e => e.stopPropagation()}>
                    <IconButton className='close-button' onClick={toggleOpen}>
                        <CloseIcon style={{marginTop: '0.5rem'}}/>
                    </IconButton>
                <Carousel />
            </div>
        </div>
    </Container>
);
