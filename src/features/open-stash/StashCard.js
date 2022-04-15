import { memo } from 'react';
import { createAvatar } from '@dicebear/avatars';
import * as style from '@dicebear/avatars-bottts-sprites';

import { Button, Image } from 'react-bootstrap';

const StashCard = memo(({
    id,
    name
}) => {

    const avatar = createAvatar(style, {
        seed: id,
        dataUri: true,
        size: 64,
        
    });

    return (
        <Button className='w-100 mt-2 p-0 d-flex flex-row'
            variant='secondary'>

            <Image className='p-2 gradient-panel-end' src={avatar} /> 

            <section className='p-2 px-3 text-start d-flex flex-column'>
                <span>{ name }</span>
                <span className='fs-8 text-muted'>{ id }</span>
            </section>
        </Button>
    );
});

export default StashCard;