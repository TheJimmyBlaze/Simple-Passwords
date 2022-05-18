import { memo } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-identicon-sprites';

import { Button, Image } from 'react-bootstrap';

import StashPassword from './StashPassword';

const StashCard = memo(({
    id,
    name,
    focusedCardID,
    setFocusedCardID
}) => {

    const avatar = createAvatar(style, {
        seed: id,
        dataUri: true,
        size: 64,
        colors: ["grey"]
    });

    const onClick = () => {
        setFocusedCardID(id);
    }

    return (
        <div className='btn btn-secondary w-100 mt-2 p-0 d-flex flex-row'
            role='button'
            onClick={onClick}>

            <Image className='p-2 gradient-panel-end' src={avatar} /> 

            <section className='p-2 px-3 text-start d-flex flex-column'>
                <span>{ name }</span>
                { 
                    focusedCardID !== id ? 
                    <span className='fs-8 text-muted'>{ id }</span> :
                    <StashPassword />
                }
            </section>
        </div>
    );
});

export default StashCard;