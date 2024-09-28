import { useEffect, useState } from 'react';

import '../App.css';


const NavbarDesktop = () => {

    let [ classBackgroundState, setClassBackgroundState ] = useState('');

    useEffect(() => {

        if( window.pageYOffset > 0 ) {
            setClassBackgroundState( 'bg-dark' );
        } else {
            setClassBackgroundState( 'bg-transparent' );
        }
      
    }, []);

    window.addEventListener('scroll', () => {
        if( window.pageYOffset > 0 ) {
            setClassBackgroundState( 'bg-dark' );
        } else {
            setClassBackgroundState( 'bg-transparent' );
        }
    });

    let handleScroll = ( e ) => {
        
        e.preventDefault();

        let idElement = e.target.id;

        var scrollDiv = document.getElementById( idElement + '-component' ).offsetTop;

        window.scrollTo({ top: scrollDiv - 70, behavior: 'smooth'});

    }

    return (

        <header className={`w-100 position-fixed px-5 pt-4 pb-2 navbar-desktop ${ classBackgroundState }`} style={{ zIndex: 99 }}>

            <nav>

                <ul className='list-unstyled d-flex flex-nowrap justify-content-center align-items-center mx-auto'>

                    <li className='me-4'><a href='#home' id='home' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Inicio</a></li>
                    <li className='me-4'><a href='#intro' id='intro' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Intro</a></li>
                    <li className='me-4'><a href='#instructions' id='instructions' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Instrucciones</a></li>
                    <li className='me-4'><a href='#demo' id='demo' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Demo</a></li>
                    <li className='me-4'><a href='#components' id='components' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Componentes</a></li>
                    <li className='me-4'><a href='#pricing' id='pricing' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Precio</a></li>
                    <li><a href='#contact' id='contact' className='text-white text-uppercase text-decoration-none' onClick={ handleScroll }>Contacto</a></li>

                </ul>

            </nav>

        </header>

    )
}

export default NavbarDesktop;