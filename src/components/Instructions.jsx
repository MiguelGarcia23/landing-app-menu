import scanQR from '../assets/scan-qr.jpg';
import viewMenu from '../assets/view-menu.png';
import receiveBillWhatsapp from '../assets/receive-bill-whatsapp.png';
import manageDashboard from '../assets/manage-dashboard.png';

import '../App.css';


const Instructions = () => {

    return (

        <div className='py-4 px-5 bg-dark' id='instructions-component'>

            <h3 className='d-block w-100 text-center text-light pb-2 bg-transparent border border-2 border-top-0 border-start-0 border-end-0 border-warning mx-auto mb-5' style={{ maxWidth: '450px' }}>
                ¿Cómo funciona?
            </h3>

            <section className='instructions-section'>
                
                <div className='instruction'>
                    <img src={ scanQR } alt='Imagen del primer paso: Escanear código QR' className='rounded-pill mb-3' style={{ width: '220px', height: '220px' }} />
                    <p className='d-block py-2 fs-6 text-light border border-3 border-light fw-bolder rounded-pill mt-0 mb-2 mx-auto' style={{ width: '48px' }}>1</p>
                    <h6 className='text-light fs-6 fw-bold mb-0'>Escanea el código QR</h6>
                </div>

                <div className='instruction'>
                    <img src={ viewMenu } alt='Imagen del segundo paso: Acceder al menú' className='rounded-pill mb-3' style={{ width: '220px', height: '220px' }} />
                    <p className='d-block py-2 fs-6 text-light border border-3 border-light fw-bolder rounded-pill mt-0 mb-2 mx-auto' style={{ width: '48px' }}>2</p>
                    <h6 className='text-light fs-6 fw-bold mb-0'>Accede al menú digital</h6>
                </div>

                <div className='instruction'>
                    <img src={ receiveBillWhatsapp } alt='Imagen del tercer paso: Recibe factura por Whatsapp' className='rounded-pill mb-3' style={{ width: '220px', height: '220px' }} />
                    <p className='d-block py-2 fs-6 text-light border border-3 border-light fw-bolder rounded-pill mt-0 mb-2 mx-auto' style={{ width: '48px' }}>3</p>
                    <h6 className='text-light fs-6 fw-bold mb-0'>Recibe los pedidos por Whatsapp</h6>
                </div>

                <div className='instruction'>
                    <img src={ manageDashboard } alt='Imagen del cuarto paso: Gestiona en el dashboard' className='rounded-pill mb-3' style={{ width: '220px', height: '220px' }} />
                    <p className='d-block py-2 fs-6 text-light border border-3 border-light fw-bolder rounded-pill mt-0 mb-2 mx-auto' style={{ width: '48px' }}>4</p>
                    <h6 className='text-light fs-6 fw-bold mb-0'>Gestiona los pedidos en el dashboard</h6>
                </div>

            </section>

        </div>

    )
}

export default Instructions;