import classNames from "classnames";
import { ReactNode } from "react";
import { Link } from "react-router-dom";

import { home } from '../../constants/route'
import { site } from "../../constants/site";

interface IProps {
    id?: string;
    href: string;
    onClick?: () => void;
    additionalClassNames?: string;
    children?: ReactNode;
}

export const BasicLink = (props: IProps) => {
    const appendRef = (baseUrl: string) => {
        if (baseUrl.includes('patreonbanner.com') || baseUrl.includes('@')) return baseUrl;
        if (baseUrl.includes('?')) {
            return baseUrl + `&ref=${site.ref}`;
        }
        return baseUrl + `?ref=${site.ref}`;
    };

    const localClick = (e: any) => {
        if (props.onClick != null) {
            e.preventDefault();
            props.onClick();
        }
    }

    return (
        <a
            id={props.id}
            href={appendRef(props.href)}
            target="_blank"
            rel="noopener noreferrer"
            className={classNames(props.additionalClassNames ?? '')}
            onClick={localClick}
            draggable={false}>
            {props.children}
        </a>
    );
}


export const BasicInternalLink = (props: IProps) => {
    return (
        <Link
            to={props.href}
            className={classNames(props.additionalClassNames ?? '')}
            draggable={false}>
            {props.children}
        </Link>
    );
}


export const BackToHomepage = () => {
    return (
        <BasicInternalLink href={home} additionalClassNames="mt1 ml1 inline-block">&lt;&lt; Home page</BasicInternalLink>
    );
}