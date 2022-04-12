import { memo, useState } from 'react';

import StashName from './StashName';
import SetPassword from '../passwords/SetPassword';

const CreateStashForm = memo(() => {

    const [passwordValid, setPasswordValid] = useState(false);

    return (
        <form>
            <article className='form-text'>
                <p>
                    Your Stash is saved as an encrypted Cookie in your Browser.
                    None of your data ever leaves your Computer.
                </p>
            </article>

            <StashName />

            <SetPassword setPasswordValid={setPasswordValid} />

            <section className='d-flex'>

                <button className='btn btn-danger'
                    title='Cancel'>
                    <i className='bi bi-arrow-left' />
                </button>

                <span className='ms-auto'>

                    <button className='btn btn-success'>
                        <i className='bi bi-plus-lg me-1' />
                        Create
                    </button>
                </span>
            </section>
        </form>
    );
});

export default CreateStashForm;