import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src="http://vsegda-pomnim.com/uploads/posts/2022-04/1650914450_43-vsegda-pomnim-com-p-samaya-visokaya-gora-v-rossii-foto-45.jpg"
                alt="header-logo"/>
        </header>
    );
};

export default Header;