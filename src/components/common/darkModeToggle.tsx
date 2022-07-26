import React from 'react';
import { toggleDarkModeClass } from '../../helper/documentHelper';

interface IProps { }

export const DarkModeToggle: React.FC<IProps> = () => {
    return (
        <div className="darkmode-toggle" onClick={() => toggleDarkModeClass()}></div>
    );
}