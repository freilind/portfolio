import { Avatar } from '@nextui-org/react';
import { FC } from 'react';
import { IFlag } from '../../../interfaces';

export const FlagIcon: FC<IFlag> = ({ language, size, alt }) => {
  return (
    <Avatar
      size={size}
      alt={alt}
      src={`/icons/flags/${language}.svg`} />
  )
};
