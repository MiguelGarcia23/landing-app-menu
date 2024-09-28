import Button from 'react-bootstrap/Button';

import '../App.css';


const NavbarMobile = () => {

    let handleScroll = ( e ) => {
        
        e.preventDefault();

        let idElement = e.target.id;

        var scrollDiv = document.getElementById( idElement + '-component' ).offsetTop;

        window.scrollTo({ top: scrollDiv, behavior: 'smooth'});

    }

    return (

        <header className='w-100 position-fixed bottom-0 bg-dark navbar-mobile' style={{ zIndex: 99 }}>

            <nav>

                <ul className='list-unstyled d-flex flex-nowrap justify-content-between align-items-center m-0'>

                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-house text-light' id='home' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-note-sticky text-light' id='intro' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-book text-light' id='instructions' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-qrcode text-light' id='demo' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-folder-tree text-light' id='components' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-dollar-sign text-light' id='pricing' onClick={ handleScroll } />
                        </Button>
                    </li>
                    <li className='w-100'>
                        <Button className='w-100 rounded-0 bg-dark border border-top-0 border-bottom-0 border-light py-2'>
                            <i className='fs-5 fa-solid fa-comment-dots text-light' id='contact' onClick={ handleScroll } />
                        </Button>
                    </li>

                </ul>

            </nav>

        </header>

    )
}

export default NavbarMobile;