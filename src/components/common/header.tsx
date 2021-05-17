import React from 'react';

interface IProps {
}

export const Header: React.FC<IProps> = (props: IProps) => {
    return (
        <section id="header">
            <div className="inner">
                <span className="icon solid major fa-cloud"></span>
                <h1>No Man's Sky<br />Expedition alphabet</h1>
                <p>Is there a secret alphabet in NMS?<br />Is HelloGames giving us pieces of the puzzle?</p>
                <ul className="actions special">
                    <li><a href="#whatStarted" className="button scrolly">Lets find out!</a></li>
                </ul>
            </div>
        </section>
    );
}