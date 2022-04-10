import { memo } from 'react';

const CreateStash = memo(() => {

    return (
        <div className='card' style={{width: '32rem'}}>
            
            <div className='card-header position-relative bg-primary text-dim'>

                <h3 className='position-absolute'>
                    <i className='bi bi-file-earmark-plus-fill' />
                </h3>

                <h3 className='text-center mx-5'>New Stash</h3>
            </div>

            <div className='card-body'>
                <form>

                    <article className='form-text'>
                        <p>
                            Your Stash is saved as an encrypted file on your computer.
                            None of your data ever leaves your computer.
                            If you lose your Master Password your Stash is lost forever.
                        </p>
                    </article>

                    <section className='mb-4'>
                        <label className='form-label' 
                            for='stashNameInput'>
                            Stash Name
                        </label>
                        <input className='form-control' 
                            id='stashNameInput' 
                            type='text'
                            placeholder='My Credentials'
                            />
                    </section>

                    <section className='mb-5'>
                        <label className='form-label'
                            for='stashPasswordInput'>
                            Master Password
                        </label>

                        <div className='input-group mb-2'>

                            <input className='form-control'
                                id='stashPasswordInput'
                                type='password'
                                placeholder='Password'
                                />

                            <button className='btn btn-primary'
                                type='button'
                                title='Generate Secure Password'>
                                <i className='bi bi-arrow-repeat' />
                            </button>

                            <div className='vr' />

                            <button className='btn btn-primary'
                                type='button'
                                title='Show Password'>
                                <i className='bi bi-eye' />
                            </button>
                        </div>

                        <input className='form-control mb-2'
                            id='stashConfirmPasswordInput'
                            type='password'
                            placeholder='Confirm Password'
                            />

                        <div className='progress bg-dark'>
                            <div className='progress-bar bg-danger'
                                role='progressbar'
                                style={{width: '50%'}}
                                />
                        </div>

                        <div className='form-text'>
                            Password strength: Bad
                        </div>
                    </section>

                    <section className='d-flex'>

                        <button className='btn btn-danger'
                            title='Cancel'>
                            <i className='bi bi-arrow-left' />
                        </button>

                        <span className='ms-auto'>

                            <button className='btn btn-success'>
                                Create
                            </button>
                        </span>
                    </section>
                </form>
            </div>
        </div>
    );
});

export default CreateStash;