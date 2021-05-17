import React from 'react';

import { AlphabetPresenter } from './alphabetPresenter';

interface IState {
    typedChars: Array<string>;
}

interface IProps { }

export class AlphabetContainer extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            typedChars: []
        }
    }

    updateTypedChars = (newChar: string) => {
        console.log(newChar)
        if (newChar == null || newChar.length < 1) return;
        this.setState({
            typedChars: newChar.split(''),
        });
    }

    render() {
        return (
            <AlphabetPresenter
                {...this.state}
                updateTypedChars={this.updateTypedChars}
            />
        );
    }
}
