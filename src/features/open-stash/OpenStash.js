import { memo } from 'react';
import { v4 as uuid } from 'uuid';

import { Card, Button, Row, Col } from 'react-bootstrap';

import StashCard from './StashCard';
import NewStashCard from './NewStashCard';
import ImportStashCard from './ImportStashCard';

const OpenStash = memo(() => {

    const testStashes = [
        {
            id: uuid(),
            name: 'General'
        },
        {
            id: uuid(),
            name: 'Social Media'
        },
        {
            id: uuid(),
            name: 'Family Accounts'
        }
    ];

    return (
        <Card style={{width: '24rem'}}>
            
            <Card.Header className='position-relative bg-primary text-inset'>

                <h3 className='position-absolute'>
                    <i className='bi bi-shield-lock-fill' />
                </h3>

                <h3 className='text-center mx-5'>Open Stash</h3>
            </Card.Header>

            <Card.Body>

                <article className='form-text'>
                    <p>
                        Found {testStashes.length} encrypted Stash cookies.
                        You'll need the password to get into them.
                    </p>
                </article>

                <section>
                    {
                        testStashes.map(stash => (
                            <StashCard key={stash.id}
                                id={stash.id}
                                name={stash.name}
                                />
                        ))
                    }

                    <hr />

                    <NewStashCard />

                    <ImportStashCard />
                </section>
            </Card.Body>
        </Card>
    );
});

export default OpenStash;