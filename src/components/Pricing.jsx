import { useState } from 'react';
import Button from 'react-bootstrap/Button';

import '../App.css';


const Pricing = () => {

    let [ activeTabState, setActiveTabState ] = useState( 'first-tab' );

    let changeActiveTab = ( e ) => {

        let numberTab = e.target.id;

        setActiveTabState( numberTab );

    }

    return (

        <div className='py-5 bg-dark' id='pricing-component'>

            <h3 className='d-block w-100 text-center text-light pb-2 bg-transparent border border-2 border-top-0 border-start-0 border-end-0 border-warning mx-auto mb-5' style={{ maxWidth: '450px' }}>
                Consulta nuestros precios
            </h3>

            <div className='w-100 d-flex flex-nowrap justify-content-center align-items-center mb-5'>

                <Button variant='dark' id='first-tab' className={`d-block border border-secondary pricing-tab ${ activeTabState === 'first-tab' ?  'active-pricing-tab' : ''}`} onClick={ changeActiveTab }>
                    Mensual
                </Button>
                <Button variant='dark' id='second-tab' className={`d-block border border-secondary pricing-tab ${ activeTabState === 'second-tab' ?  'active-pricing-tab' : ''}`} onClick={ changeActiveTab }>
                    Semestral
                </Button>
                <Button variant='dark' id='third-tab' className={`d-block border border-secondary pricing-tab ${ activeTabState === 'third-tab' ?  'active-pricing-tab' : ''}`} onClick={ changeActiveTab }>
                    Anual
                </Button>

            </div>

            {
                activeTabState === 'first-tab' && 

                <div className='w-100 d-flex flex-wrap justify-content-evenly align-items-center mx-auto' style={{ maxWidth: '1100px' }}>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Básico</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-3 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$40</strong>/mes</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Diseño personalizado</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Facturas personalizadas</p>
                        <p className='text-danger text-start mb-0'><i className='fa-regular fa-circle-xmark pe-2' />Soporte Dedicado</p>
                    </div>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Completo</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-3 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$50</strong>/mes</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Diseño personalizado</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Facturas personalizadas</p>
                        <p className='text-start mb-0' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Soporte Dedicado</p>
                    </div>

                </div>

            }

            {
                activeTabState === 'second-tab' && 

                <div className='w-100 d-flex flex-wrap justify-content-evenly align-items-center mx-auto' style={{ maxWidth: '1100px' }}>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Básico</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-2 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$38</strong>/mes</p>
                        <p className='text-warning fw-bold mb-3'>$228 por 6 meses</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Diseño personalizado</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Facturas personalizadas</p>
                        <p className='text-danger text-start mb-0'><i className='fa-regular fa-circle-xmark pe-2' />Soporte Dedicado</p>
                    </div>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Completo</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-2 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$48</strong>/mes</p>
                        <p className='text-warning fw-bold mb-3'>$288 por 6 meses</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Diseño personalizado</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Facturas personalizadas</p>
                        <p className='text-start mb-0' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Soporte Dedicado</p>
                    </div>

                </div>

            }

            {
                activeTabState === 'third-tab' && 

                <div className='w-100 d-flex flex-wrap justify-content-evenly align-items-center mx-auto' style={{ maxWidth: '1100px' }}>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Básico</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-2 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$35</strong>/mes</p>
                        <p className='text-warning fw-bold mb-3'>$420 por 12 meses</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Diseño personalizado</p>
                        <p className='text-danger text-start mb-2'><i className='fa-regular fa-circle-xmark pe-2' />Facturas personalizadas</p>
                        <p className='text-danger text-start mb-0'><i className='fa-regular fa-circle-xmark pe-2' />Soporte Dedicado</p>
                    </div>

                    <div className='bg-transparent py-5 px-4 border border-light rounded mb-3' style={{ boxShadow: '0 16px 48px rgba(225, 255, 255, .175)' }}>
                        <h6 className='fs-4 text-light mb-3 fw-bold'>Plan Completo</h6>
                        <p className='d-block w-100 fs-5 text-warning mb-2 rounded py-2' style={{ backgroundColor: 'rgba(255, 193, 7, 0.1)' }}><strong className='fs-3 fw-bolder pe-2'>$45</strong>/mes</p>
                        <p className='text-warning fw-bold mb-3'>$540 por 12 meses</p>
                        <p className='text-light text-start mb-2'>Elementos del menú por categoría: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Categorías de menú: <strong>Ilimitado</strong></p>
                        <p className='text-light text-start mb-2'>Escaneos por mes: <strong>Ilimitado</strong></p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Pedidos por Whatsapp</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de productos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Gestión de pedidos</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Código QR Personalizable</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Diseño personalizado</p>
                        <p className='text-start mb-2' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Facturas personalizadas</p>
                        <p className='text-start mb-0' style={{ color: 'lightgreen' }}><i className='fa-regular fa-circle-check pe-2' />Soporte Dedicado</p>
                    </div>

                </div>

            }

        </div>

    )
}

export default Pricing;