import React, { FC, useState } from 'react'
import { Switch, SwitchEvent, Link } from '@nextui-org/react';
import { FlagIcon } from '../icons';
import { useRouter } from 'next/router';

const SwitchLanguage: FC = () => {
    const router = useRouter();
    const [language, setLanguage] = useState('en');

    const switchLang = async (event: SwitchEvent) => {
        event.preventDefault();
        if (event.target.checked) {
            setLanguage('es');
        } else {
            setLanguage('en');
        }
    };

    const clickLang = () => {
        router.push(language);
    };

    return (
        <Link onClick={clickLang} >
            <Switch
                size="md"
                iconOff={<FlagIcon size={'xs'} language={'es'} />}
                iconOn={<FlagIcon size={'xs'} language={'en'} />}
                onChange={switchLang}
            />
        </Link>
    )
}

export default SwitchLanguage;
