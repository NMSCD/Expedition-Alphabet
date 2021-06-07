import { useState } from "react";
import Lightbox from 'react-image-lightbox';

interface IProps {
    images: Array<string>,
    onClose: () => void,
}

export const LightBox: React.FC<IProps> = (props: IProps) => {
    const [photoIndex, setPhotoIndex] = useState(0);

    const hasMultiple = props.images.length > 1;

    return (
        <Lightbox
            mainSrc={props.images[photoIndex]}
            nextSrc={hasMultiple ? props.images[(photoIndex + 1) % props.images.length] : undefined}
            prevSrc={hasMultiple ? props.images[(photoIndex + props.images.length - 1) % props.images.length] : undefined}
            onCloseRequest={props.onClose}
            onMovePrevRequest={() => setPhotoIndex((photoIndex + props.images.length - 1) % props.images.length)}
            onMoveNextRequest={() => setPhotoIndex((photoIndex + 1) % props.images.length)}
        />
    );
}