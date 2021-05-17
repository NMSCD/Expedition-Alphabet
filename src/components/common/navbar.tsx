import classNames from 'classnames';
import React from 'react';

interface ILinkProps {
    link: string;
    name: string;
}

interface IProps {
    initialActiveLink: string;
    links: Array<ILinkProps>;
}

export const Navbar: React.FC<IProps> = (props: IProps) => {
    return (
        <nav id="nav">
            <ul>
                {
                    props.links.map((item) => {
                        const isActive: boolean = item.link === props.initialActiveLink;
                        return (
                            <li key={`${item.link}-${item.name}`}>
                                <a href={item.link} className={classNames('noselect', { 'active': isActive })} draggable={false}>{item.name}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </nav>
    );
}