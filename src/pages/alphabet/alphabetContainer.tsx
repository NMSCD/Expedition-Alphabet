import React from 'react';
import { alphabetCharacters, keyboardDropdownOpts } from '../../constants/characters';

import { AlphabetPresenter } from './alphabetPresenter';

interface IState {
    typedChars: Array<string>;
    alphabetCharacters: Array<any>;
}

interface IProps { }

export class AlphabetContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            typedChars: [],
            alphabetCharacters: this.getCharObjsFromKeyboardId(keyboardDropdownOpts[0].id),
        }
    }

    updateTypedChars = (newChar: string) => {
        this.setState({
            typedChars: newChar.split(''),
        });
    }

    getCharObjsFromKeyboardId = (keyboardId: string) => {
        let newAlphabetCharacters = [];
        const newOrder = (keyboardDropdownOpts.find(kdo => kdo.id === keyboardId) ?? keyboardDropdownOpts[0])?.layout;
        for (const newOrderChar of newOrder) {
            for (const alphaChar of alphabetCharacters) {
                if (alphaChar.name === newOrderChar) {
                    newAlphabetCharacters.push(alphaChar);
                    continue;
                }
            }
        }
        return newAlphabetCharacters;
    }

    changeCharacterOrder = (selectEvent: any) => {
        selectEvent?.persist?.();
        const newValue = selectEvent?.target?.value;
        const newAlphabetCharacters = this.getCharObjsFromKeyboardId(newValue);
        this.setState({
            alphabetCharacters: newAlphabetCharacters,
        });
    }

    render() {
        return (
            <AlphabetPresenter
                {...this.state}
                updateTypedChars={this.updateTypedChars}
                changeCharacterOrder={this.changeCharacterOrder}
            />
        );
    }
}
