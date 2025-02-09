import * as React from 'react';
import InputText from './inputText';

const FormMultipleBasicValidation = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    });

    const [error, setError] = React.useState({
        name: 'Name minimal 3 karakter',
        phone: 'Phone minimal 3 karakter',
        email: 'Email minimal 3 karakter',
    });

    const handleChange = (field, e) => {
        const value = e.target.value;

        // Update form state
        setForm({ ...form, [field]: value });

        // Validation: Ensure field has at least 3 characters
        setError((prevErrors) => ({
            ...prevErrors,
            [field]: value.length < 3 ? `${field} minimal 3 karakter` : '',
        }));
    };

    const handleSubmit = event => {
        event.preventDefault()
        if (error['name'].length>0) {
            alert(error['name'])
        } else if (error['phone'].length>0) {
            alert(error['phone'])
        } else if (error['email'].length>0) {
            alert(error['email'])
        } else {
            alert('Validasi sukses')
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            {error.name && <p style={{ color: 'red' }}>{error.name}</p>}
            <InputText label="Name" value={form.name} onChange={(e) => handleChange('name', e)} />

            {error.phone && <p style={{ color: 'red' }}>{error.phone}</p>}
            <InputText label="Phone" value={form.phone} onChange={(e) => handleChange('phone', e)} />

            {error.email && <p style={{ color: 'red' }}>{error.email}</p>}
            <InputText label="Email" value={form.email} onChange={(e) => handleChange('email', e)} />

            <input type="submit" value="Submit" />
        </form>
    );
};

export default FormMultipleBasicValidation;
