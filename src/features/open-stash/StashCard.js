import { memo } from 'react';

import { Button } from 'react-bootstrap';

const StashCard = memo(({
    stashName,
    lastAccessDate
}) => {

    return (
        <Button className='w-100 mb-2'
            variant='secondary'>
            { stashName }
        </Button>
    );
});

export default StashCard;