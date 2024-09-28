import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import emailjs from '@emailjs/browser';

import '../App.css';


const Contact = () => {

    let [ data, setData ] = useState({
        name: '',
        email: '',
        message: ''
    });

    let [ errorsState, setErrorsState ] = useState({
        name: false,
        email: false,
        message: false
    });

    let [ isErrorState, setIsErrorState ] = useState( false );

    let [ formSubmittedState, setFormSubmittedState ] = useState( false );

    const handleChangeInput = ( event ) => {

        setData({
            ...data,
            [event.target.name] : event.target.value
        })

    }

    const handleSubmit = ( event ) => {

        event.preventDefault();
        
        let isError = false;

        if ( isErrorState === true ) {
            isError = true;
        }

        let errors = {};

        let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if ( !data.name.trim() ) {
            errors.name = 'El campo "Nombre" no debe estar vacío';
            isError = true;
        } else {
            if( data.name.length < 3 ) {
                errors.name = 'El campo "Nombre" debe tener más de 2 caracteres';
                isError = true;
            }
        }

        if ( !data.email.trim() ) {
            errors.email = 'El campo "Email" no debe estar vacío';
            isError = true;
        } else {
            if( !regexEmail.test( data.email ) ) {
                errors.email = 'El campo "Email" debe tener formato de correo electrónico. Ej: app_menu@gmail.com';
                isError = true;
            }
        }

        if ( !data.message.trim() ) {
            errors.message = 'El campo "Mensaje" no debe estar vacío';
            isError = true;
        } else {
            if( data.message.length < 6 ) {
                errors.message = 'El campo "Mensaje" debe tener más de 5 caracteres';
                isError = true;
            }
        }

        if ( !isError ) {

            emailjs.sendForm('service_r86mn1e', 'template_quuez7f', event.target, '4TLMYam4i_0LMTdpd');
            event.target.reset();
            setFormSubmittedState( true );

        } else {

            setIsErrorState( true );
            setErrorsState( errors );

            setData({
                ...data
            })

        }

    }

    let closeFeedback = () => {
        setFormSubmittedState( false );
    }

    return (

        <div className='position-relative p-5 contact-section' id='contact-component'>

            <h3 className='text-warning fw-bold mb-3'>¿Listo para subir el nivel de tu restaurante?</h3>

            <p className='text-light mb-5'>Contáctanos si estás interesado en el menú o si tienes alguna duda</p>

            <Form onSubmit={ handleSubmit } autoComplete='off'>

                <div className='d-flex flex-wrap justify-content-between align-items-center'>
                    <FloatingLabel controlId='name' label='Nombre' className='mb-3 text-light input-contact'>
                        <Form.Control type='text' name='name' placeholder='Nombre' className='bg-transparent text-light' onChange={ handleChangeInput } />
                        {
                            errorsState.name &&
                            <span className='text-danger'>{ errorsState.name }</span>
                        }
                    </FloatingLabel>

                    <FloatingLabel controlId='email' label='Email' className='mb-3 text-light input-contact'>
                        <Form.Control type='text' name='email' placeholder='Email' className='bg-transparent text-light' onChange={ handleChangeInput } />
                        {
                            errorsState.email &&
                            <span className='text-danger'>{ errorsState.email }</span>
                        }
                    </FloatingLabel>
                </div>

                <FloatingLabel controlId='message' label='Mensaje' className='mb-5 text-light'>
                    <Form.Control as='textarea' rows={ 3 } name='message' placeholder='Mensaje' className='bg-transparent text-light' style={{ height: 100 }} onChange={ handleChangeInput } />
                    {
                        errorsState.message &&
                        <span className='text-danger'>{ errorsState.message }</span>
                    }
                </FloatingLabel>

                <div className='d-flex justify-content-end'>
                    <Button variant='warning' type='submit' className='rounded py-2 fw-bolder' style={{ width: 200 }}>
                        ENVIAR
                    </Button>
                </div>

            </Form>

            { formSubmittedState && 
                <span className='w-100 position-absolute bottom-0 start-0 d-flex flex-nowrap justify-content-between align-items-center py-1 ps-5 pe-3' style={{ backgroundColor: 'lightgreen' }}>
                    <p className='text-success m-0'>Formulario enviado exitosamente</p>
                    <i className='fa-solid fa-x text-success m-0' style={{ cursor: 'pointer' }} onClick={ closeFeedback } />
                </span>
            }

        </div>

    )
    
}

export default Contact;