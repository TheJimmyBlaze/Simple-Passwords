import { memo, useState } from 'react';
import { v4 as uuid } from 'uuid';

import { Card } from 'react-bootstrap';

import StashCount from './StashCount';
import StashCard from './StashCard';
import NewStashCard from './NewStashCard';
import ImportStashCard from './ImportStashCard';

const OpenStash = memo(() => {

    let [focusedCardID, setFocusedCardID] = useState('');

    let [testStashes] = useState([
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
    ]);

    return (
        <Card className='m-3'
            style={{width: '28rem'}}>
            
            <Card.Header className='position-relative bg-primary text-inset'>

                <h3 className='position-absolute'>
                    <i className='bi bi-shield-lock-fill' />
                </h3>

                <h3 className='text-center mx-5'>Open Stash</h3>
            </Card.Header>

            <Card.Body>

                <StashCount numStashes={testStashes.length} />

                {
                    testStashes.map(stash => (
                        <StashCard key={stash.id}
                            id={stash.id}
                            name={stash.name}
                            focusedCardID={focusedCardID}
                            setFocusedCardID={setFocusedCardID}
                            />
                    ))
                }

                <div className='mt-4'>
                    <NewStashCard />
                    <ImportStashCard />
                </div>
            </Card.Body>
        </Card>
    );
});

export default OpenStash;