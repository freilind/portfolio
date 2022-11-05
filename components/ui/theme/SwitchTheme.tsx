import React, { FC } from 'react'
import { useTheme as useNextTheme } from 'next-themes'
import { Switch, useTheme } from '@nextui-org/react';
import { SunIcon, MoonIcon } from '../icons';

const SwitchTheme: FC = () => {
    const { setTheme } = useNextTheme();
    const { isDark } = useTheme();
    return (
        <Switch
            checked={isDark}
            size="md"
            iconOff={<SunIcon />}
            iconOn={<MoonIcon />}
            onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
    )
}

export default SwitchTheme;
