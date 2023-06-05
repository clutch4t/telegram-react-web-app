import React from 'react'
import './Header.css'
import Button from '../Button/Button'
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {
    const { tg, user, onClose } = useTelegram();

    return (
        <header className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {user?.username}
            </span>
        </header>
    )
}

export default Header