import { memo } from 'react';

import CreateStashForm from './CreateStashForm';

const CreateStash = memo(() => {

    return (
        <section>
            <div className='card' style={{width: '24rem'}}>
                
                <div className='card-header position-relative bg-primary text-dim'>

                    <h3 className='position-absolute'>
                        <i className='bi bi-shield-fill-plus' />
                    </h3>

                    <h3 className='text-center mx-5'>Create New Stash</h3>
                </div>

                <div className='card-body'>
                    <CreateStashForm />
                </div>
            </div>
        
            <p className='text-muted fs-7 text-center mt-4'>
                Check out the <a href='https://github.com/thejimmyblaze/simple-passwords'>Github</a> to learn more about the methods of encryption.
            </p>
        </section>
    );
});

export default CreateStash;