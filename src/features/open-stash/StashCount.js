import { memo } from 'react';

const StashCount = memo(({
    numStashes
}) => {

    const numStashesMessage = `Found ${numStashes} encrypted Stash cookies.`;
    const stashesMessage = "You'll need the password to get into them.";
    const noStashesMessage = "Get started by creating one, or import one from a backup."

    return (
        <article className='form-text'>
            <p>
                {numStashesMessage}
                &nbsp;
                {numStashes > 0 ? stashesMessage : noStashesMessage}
            </p>
        </article>
    );
});

export default StashCount;