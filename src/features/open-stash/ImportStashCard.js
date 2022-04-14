import { memo } from 'react';

import { Button } from 'react-bootstrap';

const ImportStashCard = memo(() => {

    return (
        <Button className='w-100 mt-2 p-0 d-flex flex-row'
            variant='secondary'>

            <div className='p-2 bg-warning text-inset rounded-start'>
                <div className='d-flex justify-content-center align-items-center'
                    style={{width: '64px', height: '64px'}}>
                    <h1 className='m-0'><i className='bi bi-file-earmark-arrow-up' /></h1>
                </div>
            </div>

            <div className='vr bg-dark' />

            <section className='p-2 px-3 text-start d-flex flex-column'>
                <span>Import Existing Stash</span>
                <span className='fs-8 text-muted'>Import an existing Stash from a backup file.</span>
            </section>
        </Button>
    );
});

export default ImportStashCard;