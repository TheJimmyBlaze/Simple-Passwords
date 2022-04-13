import { memo } from 'react';

import { Form, ProgressBar } from 'react-bootstrap';

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
    [0, 'secondary'],
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
            <ProgressBar variant={passwordStrengthColour.get(passwordStrength)}
                now={passwordStrength * 25} />

            <Form.Text>
                Password strength: {passwordStrengthDescription.get(passwordStrength)}
            </Form.Text>
        </section>
    );
});

export default PasswordStrength;