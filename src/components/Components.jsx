import imagen1 from '../assets/menu.png';
import imagen2 from '../assets/bill-whatsapp.png';
import imagen3 from '../assets/dashboard.png';
import imagen4 from '../assets/bill.png';

import '../App.css';


const Components = () => {

    return (

        <div className='py-4 px-5' id='components-component'>

            <h3 className='d-block w-100 text-center text-dark pb-2 bg-transparent border border-2 border-top-0 border-start-0 border-end-0 border-warning mx-auto mb-3' style={{ maxWidth: '600px' }}>
                Echa un vistazo a nuestra galería de vistas
            </h3>

            <section className='components-section'>
                <div className='component position-relative'>
                    <img src={ imagen1 } alt='Imagen 1' className='w-100 h-100' />
                    <p className='position-absolute bottom-0 end-0 m-0 bg-dark text-light p-1 fs-5'>Menú Digital</p>
                </div>
                <div className='component position-relative'>
                    <img src={ imagen2 } alt='Imagen 2' className='w-100 h-100' />
                    <p className='position-absolute bottom-0 end-0 m-0 bg-dark text-light p-1 fs-5'>Facturación por Whatsapp</p>
                </div>
                <div className='component position-relative'>
                    <img src={ imagen3 } alt='Imagen 3' className='w-100 h-100' />
                    <p className='position-absolute bottom-0 end-0 m-0 bg-dark text-light p-1 fs-5'>Dashboard administrativo</p>
                </div>
                <div className='component position-relative'>
                    <img src={ imagen4 } alt='Imagen 4' className='w-100 h-100' />
                    <p className='position-absolute bottom-0 end-0 m-0 bg-dark text-light p-1 fs-5'>Facturación</p>
                </div>
            </section>

        </div>

    )
}

export default Components;