import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer>
            <p>&copy; {new Date().getFullYear()} All Rights Reserved. </p>
        </footer>
    )
}

export default Footer;
