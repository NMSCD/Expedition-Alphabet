import React from 'react';

import { site } from '../../constants/site';
import { BasicLink } from '../core/link';
import packageJson from '../../../package.json';

interface IProps {

}

export const Footer: React.FC<IProps> = () => {
    return (
        <footer id="footer">
            <section>
                <div className="row">
                    <div className="col-12 ta-center">
                        <h2>{site.nmscd.nickName}</h2>
                    </div>
                    <div className="col-2 col-lg-12"></div>
                    <div className="col-4 col-lg-12">
                        <p>This site/app was designed by <BasicLink href={site.nmsassistant.website}>{site.nmsassistant.nickName}</BasicLink> as part of the collection of tools created by the <BasicLink href={site.nmscd.website}>{site.nmscd.fullName}</BasicLink></p>
                    </div>
                    <div className="col-4 col-lg-12" style={{ textAlign: 'right' }}>
                        <ul className="icons">
                            <li style={{ display: 'block' }}><BasicLink href={site.assistantApps.website} additionalClassNames="mt1">View Home page</BasicLink></li>
                            <li style={{ display: 'block' }}><BasicLink href={site.assistantApps.github} additionalClassNames="mt1">View our Github Organisation</BasicLink></li>
                        </ul>
                    </div>
                    <div className="col-2 col-lg-12"></div>
                    <div className="col-12 ta-center">
                        <i>
                            <BasicLink href={site.nmsassistant.website}>&copy; {site.nmsassistant.fullName}</BasicLink> - <BasicLink href={site.nmscd.website}>{site.nmscd.nickName}</BasicLink> - {packageJson?.version ?? '1.0.0'}
                        </i>
                    </div>
                </div>
            </section>
        </footer>
    );
}

export const EmptyFooter: React.FC<IProps> = () => {
    return (
        <footer id="footer">
            <section>
                <br />
                <br />
                <br />
            </section>
        </footer>
    );
}