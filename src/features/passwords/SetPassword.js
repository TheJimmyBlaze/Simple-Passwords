import { memo, useRef, useState, useEffect } from 'react';
import { usePasswordGenerator } from './usePasswordGenerator';

import { Form, InputGroup, Button, CloseButton, Toast } from 'react-bootstrap';

import PasswordStrength from './PasswordStrength';

const CreatePassword = memo(({
    setPasswordValid
}) => {

    const minPasswordLength = 8;

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [showPassword, setShowPassword] = useState(false);

    const generatePassword = usePasswordGenerator();

    const onPasswordChange = event => {
        let newPassword = event.target.value.replace(' ', '');
        setPassword(newPassword);
        validate(newPassword, confirmPassword);
    }

    const onConfirmPasswordChange = event => {
        let newConfirmPassword = event.target.value.replace(' ', '');
        setConfirmPassword(newConfirmPassword);
        validate(password, newConfirmPassword);
    }

    const onShowPassword = () => setShowPassword(!showPassword);

    const onGeneratePassword = () => {
        const generatedPassword = generatePassword();

        setPassword(generatedPassword);
        setConfirmPassword(generatedPassword)

        validate(generatedPassword, generatedPassword);
    }

    let [showCopyToast, setShowCopyToast] = useState(false);

    const onCopy = () => {
        navigator.clipboard.writeText(password);
        setShowCopyToast(true);
    }

    const onCopyToastClose = () => setShowCopyToast(false);

    const validationStages = {
        Empty: 0,
        TooShort: 1,
        DontMatch: 2,
        Valid: 3,
    }

    let [validationStage, setValidationStage] = useState(validationStages.Empty);

    const validate = (password, confirmPassword) => {

        setPasswordValid(false);

        if (!password) {
            setValidationStage(validationStages.Empty);
            return;
        }

        if (password.length < minPasswordLength) {
            setValidationStage(validationStages.TooShort);
            return;
        }

        if (password !== confirmPassword) {
            setValidationStage(validationStages.DontMatch);
            return;
        } 

        setValidationStage(validationStages.Valid);
        setPasswordValid(true); 
    }

    const isValid = requiredValidationStage => {
        
        if (validationStage < requiredValidationStage) {
            return null;
        }

        if (validationStage === requiredValidationStage) {
            return false;
        }

        if (validationStage > requiredValidationStage) {
            return true;
        }
    };

    return (
        <section className='mb-4'>
            <Form.Label>
                Master Password
            </Form.Label>

            <InputGroup className='mb-2'>

                <Form.Control type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={onPasswordChange}
                    isValid={isValid(validationStages.TooShort)}
                    isInvalid={isValid(validationStages.TooShort) === false}
                    />

                <Form.Control.Feedback type='invalid'>
                    Password is too short.
                </Form.Control.Feedback>

                <Button className='p-2'
                    tabIndex='-1'
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={onShowPassword}>
                    <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} />
                </Button>

                <Button className='p-2'
                    tabIndex='-1'
                    title='Generate Secure Password'
                    onClick={onGeneratePassword}>
                    <i className='bi bi-arrow-repeat' />
                </Button>

                <Button className='p-2'
                    variant={password === '' ? 'outline-primary' : 'primary'}
                    tabIndex='-1'
                    title='Copy Password'
                    onClick={onCopy}
                    disabled={password === ''}>
                    <i className='bi bi-clipboard2-plus' />
                </Button>
            </InputGroup>

            <section className='mb-2'>
                <Form.Control id='stashConfirmPasswordInput'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    isValid={isValid(validationStages.DontMatch)}
                    isInvalid={isValid(validationStages.DontMatch) === false}
                    />

                <Form.Control.Feedback type='invalid'>
                    Passwords don't match.
                </Form.Control.Feedback>
            </section>

            <PasswordStrength password={password}
                minLength={minPasswordLength}
                />

            <div className='position-fixed bottom-0 end-0 p-4'
                style={{zIndex: '11'}}>

                <Toast show={showCopyToast}
                    onClose={onCopyToastClose}
                    delay={2000}
                    autohide>
                    <Toast.Body className='d-flex align-items-center p-0'>
                        <div className='toast-body'>

                                <i className='bi bi-clipboard2-plus text-primary fs-5 me-2' />
                                Password Copied to Clipboard

                        </div>
                        <CloseButton variant='white' 
                            className='me-2 m-auto'
                            onClick={onCopyToastClose}
                            />
                    </Toast.Body>
                </Toast>
            </div>
        </section>
    );
});

export default CreatePassword;