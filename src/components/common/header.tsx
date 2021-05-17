import React from 'react';
import { HashLink } from 'react-router-hash-link';

import * as route from '../../constants/route';
import { BasicInternalLink } from '../../components/core/link';

interface IProps {
}

export const Header: React.FC<IProps> = (props: IProps) => {
    return (
        <section id="header">
            <div className="inner">
                <h1>No Man's Sky<br />Expedition alphabet</h1>
                <p>Is there a secret alphabet in NMS?<br />Is HelloGames giving us pieces of the puzzle?</p>
                <ul className="special mt2">
                    <li><BasicInternalLink href={route.alphabet} additionalClassNames="primary button scrolly">Skip straight to alphabet</BasicInternalLink></li>
                </ul>
                <ul className="actions special">
                    <li><HashLink to="#whatStarted" className="primary button scrolly">Read More</HashLink></li>
                </ul>
            </div>
        </section>
    );
}