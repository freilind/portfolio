import React, { FC } from 'react';
import { ISkill } from '../../interfaces';

const Skill: FC<ISkill> = ({ tech }) => {
    return (
        <i className={`bx bx-lg bxl-${tech}`}></i>
    )
}

export default Skill;
