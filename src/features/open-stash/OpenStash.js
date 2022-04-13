import { memo } from 'react';
import { v4 as uuid } from 'uuid';

import { Card, Button } from 'react-bootstrap';

import StashCard from './StashCard';

const OpenStash = memo(() => {

    const testStashes = [
        {
            id: uuid(),
            name: 'General',
            lastAccessDate: Date.now()
        },
        {
            id: uuid(),
            name: 'Social Media',
            lastAccessDate: Date.now()
        },
        {
            id: uuid(),
            name: 'Family Accounts',
            lastAccessDate: Date.now()
        }
    ];

    return (
        <Card style={{width: '24rem'}}>
            
            <Card.Header className='position-relative bg-primary text-dim'>

                <h3 className='position-absolute'>
                    <i className='bi bi-shield-lock-fill' />
                </h3>

                <h3 className='text-center mx-5'>Open Stash</h3>
            </Card.Header>

            <Card.Body>

                <section className='mb-5'>
                    {
                        testStashes.map(stash => (
                            <StashCard key={stash.id}
                                stashName={stash.name}
                                lastAccessDate={stash.lastAccessDate}
                                />
                        ))
                    }
                </section>

                <section className='d-flex'>
                    
                    <Button variant='warning'
                        title='Import From Backup File'>
                        <i className='bi bi-file-earmark-binary' />
                    </Button>

                    <Button className='w-100 ms-2'>
                        Create New Stash
                    </Button>
                </section>
            </Card.Body>
        </Card>
    );
});

export default OpenStash;