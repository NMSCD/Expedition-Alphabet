import React from 'react';
import { Footer } from '../../components/common/footer';
import { BasicImage } from '../../components/core/image';
import { BasicLink } from '../../components/core/link';
import { AppImage } from '../../constants/appImage';
import { site } from '../../constants/site';

interface IProps {
    typedChars: Array<string>;
    updateTypedChars: (newChar: string) => void;
}

export const AlphabetPresenter: React.FC<IProps> = (props: IProps) => {

    const onChange = (e: any) => {
        const target = e.target ?? {};
        const value = target?.value ?? '';

        props?.updateTypedChars?.(value);
    }

    let imageClass = 'small';
    if (props.typedChars.length > 15) {
        imageClass = 'tiny';
    }

    const alphabet = "abcdefghijklmnopqrstuvwxyz.".split("");
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
                                if (char === '.') char = 'period';
                                return (
                                    <div
                                        key={`all-${char}`}
                                        className="alphabet-block no-select"
                                    >
                                        <p>{char}</p>
                                        <BasicImage
                                            imageUrl={`/expedition-alphabet/assets/img/alphabet/${char}.svg`}
                                            fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                            classNames="alphabet"
                                            imageName={char}
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
                <section className="main style3" style={{ paddingTop: '4em' }}>
                    <div className="row">
                        <div className="col-12 ta-center mb1">
                            <p>Type something!</p>
                            {
                                (props.typedChars ?? []).map((char: string, index: number) => {
                                    if (char === ' ') char = 'space';

                                    return (
                                        <BasicImage
                                            key={`typed-${char}-${index}`}
                                            classNames={imageClass}
                                            imageUrl={`/expedition-alphabet/assets/img/alphabet/${char.toLowerCase()}.svg`}
                                            fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                            imageName={char}
                                        />
                                    );
                                })
                            }
                        </div>
                        <div className="col-12 ta-center">
                            <input
                                type="text" id="sentence" name="sentence"
                                style={{ width: '80%', margin: '0 auto' }}
                                placeholder="Secret text..."
                                onChange={onChange}
                            />
                        </div>
                    </div>
                </section>
                <section className="main style1">
                    <div className="inner ta-center">
                        <h2>If you have evidence of other characters</h2>
                        <p style={{ margin: 0 }}>Please mention one of us on Twitter</p>
                        <ul>
                            <li style={{ display: 'block' }}><BasicLink href={site.nmsassistant.twitter} additionalClassNames="mt1">@AssistantNMS</BasicLink></li>
                            <li style={{ display: 'block' }}><BasicLink href="https://twitter.com/RayReynoldsNMS" additionalClassNames="mt1">@RayReynoldsNMS</BasicLink></li>
                        </ul>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
