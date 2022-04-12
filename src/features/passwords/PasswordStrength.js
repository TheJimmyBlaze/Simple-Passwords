import { memo } from 'react';

const calculatePasswordStrength = (password, minLength) => {

    const containsLowercase = /[a-z]/;
    const containsUppercase = /[A-Z]/;
    const containsNumber = /[\d]/;
    const containsSymbol = /[^a-zA-Z\d\s]/;

    let goodboyPoints = 0;

    if (!password || password.length < minLength)
        return goodboyPoints;

    goodboyPoints += containsLowercase.test(password);
    goodboyPoints += containsUppercase.test(password);
    goodboyPoints += containsNumber.test(password);
    goodboyPoints += containsSymbol.test(password);

    return goodboyPoints;
};

const passwordStrengthColour = new Map([
    [1, 'secondary'],
    [2, 'danger'],
    [3, 'warning'],
    [4, 'success']
]);

const passwordStrengthDescription = new Map([
    [0, 'Too Short'],
    [1, 'Terrible'],
    [2, 'Bad'],
    [3, 'Okay'],
    [4, 'Good']
]);

const PasswordStrength = memo(({
    password, 
    minLength
}) => {

    let passwordStrength = calculatePasswordStrength(password, minLength);

    return (
        <section>
            <div className='progress bg-dark'>
                <div className={`progress-bar bg-${passwordStrengthColour.get(passwordStrength)}`}
                    role='progressbar'
                    style={{width: `${passwordStrength * 25}%`}}
                    />
            </div>

            <div className='form-text'>
                Password strength: {passwordStrengthDescription.get(passwordStrength)}
            </div>    
        </section>
    );
});

export default PasswordStrength;