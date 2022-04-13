import { memo, useState } from 'react';

const StashName = memo(({
    setNameValid
}) => {

    let [name, setName] = useState('');

    const onNameChange = event => {
        let newName = event.target.value;
        setName(newName);
        validate(newName);
    }
    
    const validationStages = {
        Empty: 0,
        Stupid: 1,
        valid: 2
    }

    let [validationStage, setValidationStage] = useState(validationStages.Empty);

    const validate = name => {

        setNameValid(false);

        if (name === '') {
            setValidationStage(validationStages.Empty);
            return;
        }

        if (name.trim() === '') {
            setValidationStage(validationStages.Stupid);
            return;
        }

        setValidationStage(validationStages.valid);
        setNameValid(true);
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
                Stash Name
            </label>

            <div className='form-group has-validation'>
                <input className={`form-control ${isValid(validationStages.Stupid)}`} 
                    id='stashNameInput' 
                    type='text'
                    placeholder='My Credentials'
                    value={name}
                    onChange={onNameChange}
                    />
                
                <div className='invalid-feedback'>
                    That's a stupid name.
                </div>
            </div>
        </section>
    );
});

export default StashName;