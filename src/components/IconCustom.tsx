import { AddCircle, Send } from 'iconoir-react';
import React from 'react';
import { IconProps } from '../types';

const components: { [key: string]: React.ElementType } = {
    AddCircle: AddCircle,
    Send: Send
};

const IconCustom: React.FC<IconProps> = ({ name, className }) => {
    const Component = components[name];
    return <Component className={className} />
};

export default IconCustom;