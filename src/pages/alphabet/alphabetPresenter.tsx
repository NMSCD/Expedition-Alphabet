import React, { useState } from 'react';
import Swal from 'sweetalert2';

import { AppImage } from '../../constants/appImage';
import { alphabetCharacters, unknownAlphabetCharacters } from '../../constants/characters';
import { site } from '../../constants/site';

import { BasicLink } from '../../components/core/link';
import { BasicImage } from '../../components/core/image';
import { Tooltip } from '../../components/core/tooltip';
import { LightBox } from '../../components/core/lightbox';
import { Footer } from '../../components/common/footer';

interface IProps {
    typedChars: Array<string>;
    updateTypedChars: (newChar: string) => void;
}

export const AlphabetPresenter: React.FC<IProps> = (props: IProps) => {
    const [images, setImages] = useState<Array<string>>([]);

    const onChange = (e: any) => {
        const target = e.target ?? {};
        const value = target?.value ?? '';
        props?.updateTypedChars?.(value);
    }

    const onImageClick = (character: string) => () => {
        const newText = props.typedChars.join('') + character;
        props?.updateTypedChars?.(newText);
    }

    const tooltipClick = (character: string) => () => {
        const imagesToShow = [];
        for (const imageUses of AppImage.usage) {
            if (imageUses.translation.replace(/ /g, '').includes(character)) {
                imagesToShow.push(imageUses.image);
            }
        }

        if (imagesToShow.length > 0) {
            setImages(imagesToShow);
            return;
        }

        Swal.fire({
            title: 'No images found',
            text: 'There seems to be no evidence of the character being used',
            icon: 'warning',
        });
    }

    const lightboxCloseClick = () => setImages([]);

    let imageClass = 'small';
    if (props.typedChars.length > 15) {
        imageClass = 'tiny';
    }

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
                    <p style={{ textAlign: 'center', fontStyle: 'italic' }}>Hover over a character and click on the question icon to view the places we got the characters from</p>
                    <div className="alphabet-grid">
                        {
                            alphabetCharacters.map((charObj: any) => {
                                return (
                                    <div
                                        key={`all-${charObj.name}`}
                                        className="alphabet-block no-select"
                                    >
                                        <p>{charObj.display ?? charObj.name}</p>
                                        <BasicImage
                                            imageUrl={charObj.img}
                                            fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                            classNames="alphabet pointer"
                                            imageName={charObj.display ?? charObj.name}
                                            onClick={onImageClick(charObj.unknown === true ? '?' : charObj.name)}
                                        />
                                        <Tooltip content="View usage" classNames="view-usage">
                                            <BasicImage
                                                imageUrl={`/expedition-alphabet/assets/img/uses.png`}
                                                fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                                classNames="tiny pointer"
                                                imageName={charObj.display ?? charObj.name}
                                                onClick={tooltipClick(charObj.name)}
                                            />
                                        </Tooltip>
                                    </div>
                                );
                            })
                        }
                        {
                            unknownAlphabetCharacters.map((unknown: any) => {
                                return (
                                    <div
                                        key={`unknown-${unknown.name}-${unknown.img}`}
                                        className="alphabet-block no-select"
                                    >
                                        <p>{unknown.name}</p>
                                        <BasicImage
                                            imageUrl={unknown.img}
                                            fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                            classNames="alphabet"
                                            imageName="unknown"
                                        />
                                    </div>
                                );
                            })
                        }
                    </div>
                </section>
                {
                    (images.length > 0) &&
                    <LightBox
                        images={images}
                        onClose={lightboxCloseClick}
                    />
                }
                <section className="main style3" style={{ paddingTop: '4em' }}>
                    <div className="row">
                        <div className="col-12 ta-center mb1">
                            <p>Type something!</p>
                            {
                                (props.typedChars ?? []).map((char: string, index: number) => {
                                    const displayChar = alphabetCharacters.find(a => (a.display ?? a.name) === char && a.unknown !== true);

                                    return (
                                        <BasicImage
                                            key={`typed-${displayChar?.name}-${index}`}
                                            classNames={imageClass}
                                            imageUrl={displayChar?.img ?? `/expedition-alphabet/${AppImage.unknownImage}`}
                                            fallbackSrc={`/expedition-alphabet/${AppImage.unknownImage}`}
                                            imageName={displayChar?.name ?? 'unknown'}
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
                                value={props.typedChars.join('')}
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
                            <li style={{ display: 'block' }}><BasicLink href="https://twitter.com/JackPotNinja1" additionalClassNames="mt1">@JackPotNinja1</BasicLink></li>
                            <li style={{ display: 'block' }}><BasicLink href="https://twitter.com/Ja77Punk" additionalClassNames="mt1">@Ja77Punk</BasicLink></li>
                        </ul>
                    </div>
                </section>
            </div>

            <Footer />
        </>
    );
}
