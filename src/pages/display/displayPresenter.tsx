import React, { useEffect, useState } from 'react';

import * as route from '../../constants/route';
import { AppImage } from '../../constants/appImage';
import { alphabetCharacters, additionalAlphabetCharacters } from '../../constants/characters';
import { BasicImage } from '../../components/core/image';
import { Footer } from '../../components/common/footer';
import { withRouter } from 'react-router-dom';
import { BasicInternalLink } from '../../components/core/link';
import { DarkModeToggle } from '../../components/common/darkModeToggle';

const queryString = require('query-string');

interface IProps {
    location: any;
    history: any;
    match: any;
}

const DisplayPresenterUnconnected: React.FC<IProps> = (props: IProps) => {
    const [text, setText] = useState<string>('');

    useEffect(() => {
        const parsed = queryString.parse(props.location?.search ?? '');
        if (parsed.text != null) {
            setText(parsed.text);
        }
        // eslint-disable-next-line
    }, []);

    const onChange = (e: any) => {
        const target = e.target ?? {};
        const value = target?.value ?? '';
        setText?.(value);
    }

    let imageClass = 'small';
    if (text.length > 15) {
        imageClass = 'tiny';
    }

    return (
        <>
            <div className="wrapper">
                <section id="header" style={{ padding: '1em', maxHeight: '5em' }}>
                    <div className="inner">
                        <h2>Expedition alphabet</h2>
                    </div>
                </section>
                <section className="main style3" style={{ paddingTop: '4em' }}>
                    <div className="row">
                        <div className="col-12 ta-center mb1">
                            {
                                (text.split('') ?? []).map((char: string, index: number) => {
                                    let displayChar = alphabetCharacters.find(a => (a.display ?? a.name) === char.toLocaleLowerCase() && a.unknown !== true);
                                    if (char === ' ') {
                                        displayChar = additionalAlphabetCharacters.space;
                                    }

                                    return (
                                        <BasicImage
                                            key={`typed-${displayChar?.name}-${index}`}
                                            classNames={imageClass}
                                            imageUrl={displayChar?.img ?? `/${AppImage.unknownImage}`}
                                            fallbackSrc={`/${AppImage.unknownImage}`}
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
                                placeholder="Text to be converted..."
                                defaultValue={text}
                                onChange={onChange}
                            />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12" style={{ width: '80%', margin: '0 auto' }}>
                            <br />
                            <BasicInternalLink href={route.alphabet} title="Alphabet page">&lt;&lt;Go to full alphabet page</BasicInternalLink>
                        </div>
                    </div>
                </section>
            </div>

            <Footer />
            <DarkModeToggle />
        </>
    );
}

export const DisplayPresenter = (withRouter(DisplayPresenterUnconnected));
