import { memo, useState } from 'react';

import { Form, FormControl, InputGroup, Button } from 'react-bootstrap';

const StashPassword = memo(() => {

    let [password, setPassword] = useState('');
    const onPasswordChange = event => setPassword(event.target.value);

    const [showPassword, setShowPassword] = useState(false);
    const onShowPassword = () => setShowPassword(!showPassword);

    const onSubmit = event => {
        event.preventDefault();
        console.log(`submit-${password}`);
    }

    return(
        <Form onSubmit={onSubmit}>
            <InputGroup>
                <FormControl type={showPassword ? 'text' : 'password'}
                    autoFocus 
                    value={password}
                    onChange={onPasswordChange}/>
                
                <Button className='p-2'
                    tabIndex='-1'
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={onShowPassword}>
                    <i className={`bi bi-eye${showPassword ? '' : '-slash'}`} />
                </Button>

                <Button className='p2'
                    type='submit'
                    variant='success'>
                    <i className='bi bi-arrow-right' />
                </Button>
            </InputGroup>
        </Form>
    );
});

export default StashPassword;