import imagen3 from '../assets/carousel-3.jpg';

import '../App.css';


const Intro = () => {

    return (

        <div className='d-flex flex-wrap justify-content-between align-items-center py-4 px-5' id='intro-component'>

            <div className='div-intro'>

                <h3 className='d-block text-center text-dark pb-2 border border-top-0 border-start-0 border-end-0 border-warning mx-auto mb-4'>
                    Convierte tu menú en una herramienta de ventas
                </h3>

                <p className='text-start text-dark'>El diseño de tu menú es de gran importancia ya que la manera en la que se presenta un producto es clave a la hora de decidir si comprarlo o no. Por esta razón te ofrecemos un menú digital personalizado, atractivo, dinámico.</p>
                
                <p className='text-start text-dark'>Con este menú digital tus clientes podrán acceder a tu oferta de productos con imágenes, descripciones y precios de cada uno de tus platillos, sin necesidad de descargar alguna app. Además tendrás acceso a un dashboard en el que podrás llevar la logística de tu restaurante y actualizar o eliminar platillos cuando lo desees.</p>

            </div>

            <div className='div-intro'>
                <img src={ imagen3 } alt='Imagen de menu digital' className='img-intro w-100 rounded-circle' style={{ maxWidth: '500px' }} />
            </div>
        

        </div>

    )
}

export default Intro;