import * as React from 'react'
import InputText from './inputText'
const FormBasicValidation = () => {
    const [name, setName] = React.useState('')
    const [error, setError] = React.useState('field minimal 3 karakter')
    const handleSubmit = event => {
        event.preventDefault()
        if (error) {
            alert(error)
        } else {
            // sent to server
            alert(name)
        }
    }
    const handleChange = (e) => {
        // validasi disini
        setError('')
        const value = e.target.value
        if (value.length < 3) {
            setError(`field minimal 3 karakter`)
        }
        setName(value)
    }
    return <form onSubmit={handleSubmit}>
        {error}
        <InputText label='Name' value={name}
                   onChange={handleChange} />
        <input type='submit' value='Submit' />
    </form>
}
export default FormBasicValidation