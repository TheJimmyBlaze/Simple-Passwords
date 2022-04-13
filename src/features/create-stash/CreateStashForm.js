import { memo, useState } from 'react';

import { Form, Button} from 'react-bootstrap';

import StashName from './StashName';
import SetPassword from '../passwords/SetPassword';

const CreateStashForm = memo(() => {

    const [nameValid, setNameValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    const canSubmit = nameValid && passwordValid;

    return (
        <Form>
            <article className='form-text'>
                <p>
                    Your Stash is saved as an encrypted Cookie in your Browser.
                    None of your data ever leaves your Computer.
                </p>
            </article>

            <StashName setNameValid={setNameValid} />

            <SetPassword setPasswordValid={setPasswordValid} />

            <section className='d-flex'>

                <Button variant='danger'
                    tabIndex='-1'
                    title='Cancel'>
                    <i className='bi bi-arrow-left' />
                </Button>

                <span className='ms-auto'>

                    <Button variant={`${canSubmit ? 'success' : 'outline-success'}`} 
                        disabled={!canSubmit}>
                        <i className='bi bi-plus-lg me-1' />
                        Create
                    </Button>
                </span>
            </section>
        </Form>
    );
});

export default CreateStashForm;