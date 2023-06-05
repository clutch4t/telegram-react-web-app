import React, { useEffect, useState } from 'react'
import { useTelegram } from '../../hooks/useTelegram';
import './Form.css'

const Form = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [street, setStreet] = useState('');
    const [type, setType] = useState('');
    const { tg } = useTelegram();

    useEffect(() => {
        tg.MainButton.setParams({
            text: "Send"
        })
    }, [])

    useEffect(() => {
        if (!city || !street) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [city, street])

    const onChangeName = (event) => {
        setName(event.target.value);
    }

    const onChangeCity = (event) => {
        setCity(event.target.value);
    }

    const onChangeStreet = (event) => {
        setStreet(event.target.value);
    }

    const onChangeType = (event) => {
        setType(event.target.value);
    }

    return (
        <form className='form'>
            <h3>Fill out this form</h3>
            <input
                className='input'
                type='text'
                placeholder='Enter your name'
                value={name}
                onChange={onChangeName}
            />
            <input
                className='input'
                type='text'
                placeholder='Enter your city'
                value={city}
                onChange={onChangeCity}
            />
            <input
                className='input'
                type='text'
                placeholder='Enter your street'
                value={street}
                onChange={onChangeStreet}
            />
            <h4>Your order is for:</h4>
            <select className='select' value={type} onChange={onChangeType}>
                <option value={'person'}>A person</option>
                <option value={'company'}>A company</option>
            </select>
        </form>
    )
}

export default Form