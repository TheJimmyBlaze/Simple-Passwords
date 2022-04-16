import { memo } from 'react';

import { Card } from 'react-bootstrap';

import CreateStashForm from './CreateStashForm';

const CreateStash = memo(() => {

    return (
        <section>
            <Card className='m-3'
                style={{width: '28rem'}}>
                
                <Card.Header className='position-relative bg-primary text-inset'>

                    <h3 className='position-absolute'>
                        <i className='bi bi-shield-fill-plus' />
                    </h3>

                    <h3 className='text-center mx-5'>Create New Stash</h3>
                </Card.Header>

                <Card.Body>
                    <CreateStashForm />
                </Card.Body>
            </Card>
        
            <p className='text-muted fs-7 text-center mt-4'>
                Check out the <a href='https://github.com/thejimmyblaze/simple-passwords'>Github</a> to learn more about the methods of encryption.
            </p>
        </section>
    );
});

export default CreateStash;