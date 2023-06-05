import React from 'react'
import Button from '../button/Button'
const tg = window.Telegram.WebApp;

const Header = () => {

    const onClose = () => {
        tg.close()
    }

    return (
        <header className={'header'}>
            <Button onClick={onClose}>Close</Button>
            <span className={'username'}>
                {tg.initDataUnsafe?.user?.username}
            </span>
        </header>
    )
}

export default Header