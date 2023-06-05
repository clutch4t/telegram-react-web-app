import React from 'react'
import './Header.css'
import Button from '../button/Button'
import { useTelegram } from '../../hooks/useTelegram';
const tg = window.Telegram.WebApp;

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