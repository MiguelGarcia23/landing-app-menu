import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';

import imagen1 from '../assets/carousel-1.jpg';
import imagen2 from '../assets/carousel-2.jpg';
import imagen3 from '../assets/carousel-3.jpg';
import logo from '../assets/logo.png';

import '../App.css';


const Banner = () => {

    let handleScrollInstructions = () => {

        var scrollDiv = document.getElementById( 'instructions-component' ).offsetTop;

        window.scrollTo({ top: scrollDiv - 70, behavior: 'smooth'});

    }

    let handleScrollDemo = () => {

        var scrollDiv = document.getElementById( 'demo-component' ).offsetTop;

        window.scrollTo({ top: scrollDiv - 70, behavior: 'smooth'});

    }

    return (

        <div className='position-relative height-banner' id='home-component'>

            <Carousel fade indicators={ false } controls={ false }>

                <Carousel.Item interval={ 2000 } className='position-relative'>
                    <img className='d-block w-100 height-banner' src={ imagen1 } alt='Imagen 1 del carrusel' />
                    <div className='position-absolute top-0 start-0 w-100 h-100' style={{ backgroundColor: '#000000', opacity: '0.85' }}></div>
                </Carousel.Item>

                <Carousel.Item interval={ 2000 } className='position-relative'>
                    <img className='d-block w-100 height-banner' src={ imagen2 } alt='Imagen 2 del carrusel' />
                    <div className='position-absolute top-0 start-0 w-100 h-100' style={{ backgroundColor: '#000000', opacity: '0.85' }}></div>
                </Carousel.Item>

                <Carousel.Item interval={ 2000 } className='position-relative'>
                    <img className='d-block w-100 height-banner' src={ imagen3 } alt='Imagen 3 del carrusel' />
                    <div className='position-absolute top-0 start-0 w-100 h-100' style={{ backgroundColor: '#000000', opacity: '0.85' }}></div>
                </Carousel.Item>

            </Carousel>

            <div className='intro-banner'>

                <img src={ logo } alt='Logo del restaurante demo' width={ 200 } className='mb-2 logo-banner' />

                <h2 className='d-block text-light mb-4 title-banner mx-auto' style={{ maxWidth: '500px' }}>Dale un impulso a tu restaurante con un MENÚ DIGITAL</h2>

                <div className='d-flex flex-wrap justify-content-center align-items-center mx-auto'>
                    <Button variant='warning' className='me-3 text-light text-uppercase bg-transparent border border-2 border-warning rounded py-2 mb-2' style={{ width: '180px' }} onClick={ handleScrollInstructions }>¿Cómo funciona?</Button>
                    <Button variant='warning' className='me-3 text-dark fw-bolder text-uppercase rounded py-2 mb-2' style={{ width: '180px' }} onClick={ handleScrollDemo }>Ver demo</Button>
                </div>

            </div>

        </div>

    )
}

export default Banner;