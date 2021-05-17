import classNames from "classnames";
import React from "react";

interface IState {
    srcUrl: string,
    errored: boolean,
}

interface IProps {
    alt?: string;
    imageUrl: string;
    fallbackSrc?: string;
    imageName?: string;
    classNames?: string;
    style?: any;
}

export class BasicImage extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);

        this.state = {
            srcUrl: props.imageUrl,
            errored: false,
        };
    }

    onError = () => {
        if (!this.state.errored) {
            this.setState(() => {
                return {
                    srcUrl: this.props.fallbackSrc ?? this.props.imageUrl,
                    errored: true,
                }
            });
        }
    }

    render() {
        const { srcUrl, errored } = this.state;

        return (
            <img
                src={srcUrl}
                className={classNames(this.props.classNames, { 'error': errored })}
                style={this.props.style}
                onError={this.onError}
                alt={(this.props.alt ?? this.props.imageName) ?? 'Emote button'}
                draggable={false}
            />
        );
    }
}