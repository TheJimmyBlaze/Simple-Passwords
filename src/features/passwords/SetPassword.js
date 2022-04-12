import { memo, useState } from 'react';
import { usePasswordGenerator } from './usePasswordGenerator';

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
        let newPassword = event.target.value;
        setPassword(newPassword);
        validate(newPassword, confirmPassword);
    }

    const onConfirmPasswordChange = event => {
        let newConfirmPassword = event.target.value;
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

    let [tooShort, setTooShort] = useState(null);
    let [dontMatch, setDontMatch] = useState(null);

    const validate = (password, confirmPassword) => {

        if (password.length < minPasswordLength) {
            setPasswordValid(false);
            setTooShort(true);
            return;
        }
        setTooShort(false);

        if (password !== confirmPassword) {
            setPasswordValid(false);
            setDontMatch(true);
            return;
        }
        setDontMatch(false);   

        setPasswordValid(true); 
    }

    const isValid = validationField => {
        
        if (validationField === null) {
            return '';
        }

        if (validationField) {
            return 'is-invalid';
        }
        else {
            return 'is-valid';
        }
    };

    return (
        <section className='mb-4'>
            <label className='form-label'>
                Master Password
            </label>

            <div className='input-group has-validation mb-2'>

                <input className={`form-control ${isValid(tooShort)}`}
                    id='stashPasswordInput'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={onPasswordChange}
                    />

                <button className='btn btn-primary p-2'
                    type='button'
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={onShowPassword}>
                    <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} />
                </button>

                <button className='btn btn-primary p-2'
                    type='button'
                    title='Generate Secure Password'
                    onClick={onGeneratePassword}>
                    <i className='bi bi-arrow-repeat' />
                </button>

                <button className='btn btn-primary p-2'
                    type='button'
                    title='Copy Password'>
                    <i className='bi bi-clipboard2-plus' />
                </button>

                <div className='invalid-feedback'>
                    Password is too short.
                </div>
            </div>

            <div className='form-group has-validation mb-2'>

                <input className={`form-control ${isValid(dontMatch)}`}
                    id='stashConfirmPasswordInput'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Confirm Password'
                    value={confirmPassword}
                    onChange={onConfirmPasswordChange}
                    />

                <div className='invalid-feedback'>
                    Passwords don't match.
                </div>
            </div>

            <PasswordStrength password={password}
                minLength={minPasswordLength}
                />
        </section>
    );
});

export default CreatePassword;