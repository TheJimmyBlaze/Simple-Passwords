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
            return '';
        }

        if (validationStage === requiredValidationStage) {
            return 'is-invalid';
        }

        if (validationStage > requiredValidationStage) {
            return 'is-valid';
        }
    };

    return (
        <section className='mb-4'>
            <label className='form-label'>
                Master Password
            </label>

            <div className='input-group has-validation mb-2'>

                <input className={`form-control ${isValid(validationStages.TooShort)}`}
                    id='stashPasswordInput'
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    value={password}
                    onChange={onPasswordChange}
                    />

                <button className='btn btn-primary p-2'
                    type='button'
                    tabIndex='-1'
                    title={showPassword ? 'Hide Password' : 'Show Password'}
                    onClick={onShowPassword}>
                    <i className={`bi bi-eye${showPassword ? '-slash' : ''}`} />
                </button>

                <button className='btn btn-primary p-2'
                    type='button'
                    tabIndex='-1'
                    title='Generate Secure Password'
                    onClick={onGeneratePassword}>
                    <i className='bi bi-arrow-repeat' />
                </button>

                <button className='btn btn-primary p-2'
                    type='button'
                    tabIndex='-1'
                    title='Copy Password'>
                    <i className='bi bi-clipboard2-plus' />
                </button>

                <div className='invalid-feedback'>
                    Password is too short.
                </div>
            </div>

            <div className='form-group has-validation mb-2'>

                <input className={`form-control ${isValid(validationStages.DontMatch)}`}
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