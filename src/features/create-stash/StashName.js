import { memo } from 'react';

const StashName = memo(() => {
    
    return (
        <section className='mb-4'>
            <label className='form-label'>
                Stash Name
            </label>
            <input className='form-control' 
                id='stashNameInput' 
                type='text'
                placeholder='My Credentials'
                />
        </section>
    );
});

export default StashName;