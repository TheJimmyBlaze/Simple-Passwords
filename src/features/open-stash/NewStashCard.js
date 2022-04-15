import { memo } from 'react';

import { Button } from 'react-bootstrap';

const NewStashCard = memo(() => {

    return (
        <Button className='w-100 p-0 d-flex flex-row'
            variant='secondary'>

            <div className='p-2 bg-success text-inset rounded-start'>
                <div className='d-flex justify-content-center align-items-center'
                    style={{width: '64px', height: '64px'}}>
                    <h1 className='m-0'><i className='bi bi-file-earmark-plus' /></h1>
                </div>
            </div>

            <section className='p-2 px-3 text-start d-flex flex-column'>
                <span>Create New Stash</span>
                <span className='fs-8 text-muted'>Encrypt a new cookie and start storing passwords.</span>
            </section>
        </Button>
    );
});

export default NewStashCard;