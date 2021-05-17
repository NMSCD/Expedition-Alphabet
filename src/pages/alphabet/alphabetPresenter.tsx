import React from 'react';
import { Footer } from '../../components/common/footer';
import { BasicImage } from '../../components/core/image';
import { AppImage } from '../../constants/appImage';

export const AlphabetPresenter: React.FC = () => {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    return (
        <>
            <div className="wrapper">
                <section id="header">
                    <div className="inner">
                        <h1>Expedition alphabet</h1>
                        <p>Currently <s>known</s> guessed alphabet</p>
                    </div>
                </section>
                <section className="main style1">
                    <div className="alphabet-grid">
                        {
                            alphabet.map((char: string) => {
                                return (
                                    <div className="alphabet-block no-select">
                                        <p>{char}</p>
                                        <BasicImage
                                            imageUrl={`/assets/img/alphabet/${char}.svg`}
                                            fallbackSrc={AppImage.unknownImage}
                                            imageName={char}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
