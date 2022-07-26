import React from 'react';
import { withRouter } from 'react-router-dom';

import { alphabetCharacters, keyboardDropdownOpts } from '../../constants/characters';
import { AlphabetPresenter } from './alphabetPresenter';

const queryString = require('query-string');

interface IState {
    typedChars: string;
    alphabetCharacters: Array<any>;
}

interface IProps {
    location: any;
    history: any;
    match: any;
}

class AlphabetContainerUnconnected extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            typedChars: '',
            alphabetCharacters: this.getCharObjsFromKeyboardId(keyboardDropdownOpts[0].id),
        }
    }

    componentDidMount() {
        const parsed = queryString.parse(this.props.location?.search ?? '');
        if (parsed.text != null) {
            this.setState({
                typedChars: parsed.text.split(''),
            });
        }
    }

    updateTypedChars = (newValue: string) => {
        this.setState({
            typedChars: newValue,
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

export const AlphabetContainer = (withRouter(AlphabetContainerUnconnected));