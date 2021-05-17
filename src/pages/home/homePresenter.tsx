import React from 'react';

import * as route from '../../constants/route';
import { Header } from '../../components/common/header';
import { Footer } from '../../components/common/footer';
import { BasicInternalLink, BasicLink } from '../../components/core/link';

export const HomePresenter: React.FC = () => {
    return (
        <>
            <div className="wrapper">
                <Header />
                <section id="whatStarted" className="main style1">
                    <div className="container">
                        <div className="row gtr-150">
                            <div className="col-6 col-12-medium">
                                <header className="major">
                                    <h2>You are not the only one wondering...</h2>
                                </header>
                                <p>This characters just work out too perfectly, with Pioneer we had repeating characters but Beachhead pretty much confirms that these characters line up.</p>
                            </div>
                            <div className="col-6 col-12-medium imp-medium">
                                <span className="image fit">
                                    <img src="assets/img/rayReynoldsInspireTweet.jpg" alt="" />
                                </span>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="currentInfo" className="main style2 special">
                    <div className="container">
                        <header className="major">
                            <h2>What we have so far...</h2>
                        </header>
                        <div className="row gtr-150" style={{ justifyContent: 'center' }}>
                            <div className="col-4 col-12-medium">
                                <span className="image fit">
                                    <img src="assets/img/pioneer.png" alt="" />
                                </span>
                                <h3>Pioneers</h3>
                                <p>Season 1 of Expeditions, which ran from <b>31st March 2021</b> to <b>16 May 2021</b></p>
                                <ul className="actions special">
                                    <li><BasicLink href="https://www.nomanssky.com/expeditions-update/" additionalClassNames="button">View on nomanssky.com</BasicLink></li>
                                </ul>
                            </div>
                            <div className="col-4 col-12-medium">
                                <span className="image fit"><img src="assets/img/beachhead.png" alt="" /></span>
                                <h3>Beachhead</h3>
                                <p>Season 2 of Expeditions, which is currently running as of <b>17 May 2021</b></p>
                                <ul className="actions special">
                                    <li><BasicLink href="https://www.nomanssky.com/2021/05/no-mans-sky-expedition-2/" additionalClassNames="button">View on nomanssky.com</BasicLink></li>
                                </ul>
                            </div>
                            <div className="col-4 col-12-medium">
                                <span className="image fit"><img src="assets/img/rayRenoldsFirstSentence.jpg" alt="" /></span>
                                <h3>@RayReynoldsNMS</h3>
                                <p>Ray Renolds translated an entire sentence!</p>
                                <ul className="actions special">
                                    <li><BasicLink href="https://twitter.com/RayReynoldsNMS/status/1394259724317646852/photo/1" additionalClassNames="button">View on Twitter</BasicLink></li>
                                </ul>
                            </div>
                            <div className="col-4 col-12-medium">
                                <span className="image fit"><img src="assets/img/nolindor.png" alt="" /></span>
                                <h3>Nolindor</h3>
                                <p>No Man's Sky Decryption Youtube Video</p>
                                <ul className="actions special">
                                    <li><BasicLink href="https://www.youtube.com/watch?v=YpfpN9iX2WA" additionalClassNames="button">View on Youtube</BasicLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section id="viewCurrentAlphabet" className="main style1">
                    <div className="container">
                        <div className="row gtr-150">
                            <div className="col-6 col-12-medium imp-medium">
                                <span className="image fit">
                                    <img src="assets/img/currentlyGuessed.png" alt="" />
                                </span>
                            </div>
                            <div className="col-6 col-12-medium">
                                <header className="major">
                                    <h2>View currently <s>known</s> guessed alphabet</h2>
                                </header>
                                <p>This is still a work in progress, we are mostly guessing what characters line up with the English alphabet.</p>

                                <ul className="actions special">
                                    <li><BasicInternalLink href={route.alphabet} additionalClassNames="button">View alphabet</BasicInternalLink></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <Footer />
            </div>
        </>
    );
}
