import Button from 'react-bootstrap/Button';

import imagenQR1 from '../assets/codigo-qr-1.png';
import imagenQR2 from '../assets/codigo-qr-2.png';
import imagenQR3 from '../assets/codigo-qr-3.png';

import '../App.css';


const Demo = () => {

    const goToDemo = ( e ) => {

        const table = e.target.id;

        window.location.href = `https://demo.takeorder-app.com?mesa=${ table }`;

    }

    return (

        <div className='position-relative p-5' style={{ backgroundColor: '#F5F5F5' }} id='demo-component'>

            <h3 className='d-block w-100 text-center text-dark pb-2 bg-transparent border border-2 border-top-0 border-start-0 border-end-0 border-warning mx-auto mb-3' style={{ maxWidth: '450px' }}>
                Prueba la experiencia
            </h3>

            <p className='intro-demo-mobile my-3'>Selecciona un botón y ve un ejemplo real de cómo funciona el menú</p>
            <p className='intro-demo-desktop my-3'>Escanéa el código QR y ve un ejemplo real de cómo funciona el menú</p>

            <div className='d-flex flex-wrap justify-content-evenly align-items-center'>

                <div>
                    <img src={ imagenQR1 } alt='Código QR Mesa 1' width={ 222 } className='qr-demo' />
                    <h6 className='number-table-demo-desktop mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow' style={{ width: '222px', letterSpacing: 1.2 }}>
                        Mesa 1
                    </h6>
                    <Button variant='light' className='number-table-demo-mobile mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow mb-3' id='1' style={{ width: '222px', letterSpacing: 1.2 }} onClick={ goToDemo }>
                        Mesa 1
                    </Button>
                </div>

                <div>
                    <img src={ imagenQR2 } alt='Código QR Mesa 2' width={ 222 } className='qr-demo' />
                    <h6 className='number-table-demo-desktop mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow' style={{ width: '222px', letterSpacing: 1.2 }}>
                        Mesa 2
                    </h6>
                    <Button variant='light' className='number-table-demo-mobile mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow mb-3' id='2' style={{ width: '222px', letterSpacing: 1.2 }} onClick={ goToDemo }>
                        Mesa 2
                    </Button>
                </div>

                <div>
                    <img src={ imagenQR3 } alt='Código QR Mesa 3' width={ 222 } className='qr-demo' />
                    <h6 className='number-table-demo-desktop mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow' style={{ width: '222px', letterSpacing: 1.2 }}>
                        Mesa 3
                    </h6>
                    <Button variant='light' className='number-table-demo-mobile mt-3 py-2 rounded-pill fw-semibold text-uppercase bg-white shadow mb-3' id='3' style={{ width: '222px', letterSpacing: 1.2 }} onClick={ goToDemo }>
                        Mesa 3
                    </Button>
                </div>

            </div>

        </div>

    )
}

export default Demo;