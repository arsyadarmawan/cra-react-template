import * as React from 'react'
import InputText from './inputText'

const FormMultiple = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: ''
    })


    const handleSubmit = e => {
        e.preventDefault()
        alert(JSON.stringify(form))
    }
    return <form onSubmit={handleSubmit}>
        <InputText label='Name' value={form.name}
                   onChange={(e) => setForm({...form, name: e.target.value})} />
        <InputText label='Phone' value={form.phone}
                   onChange={(e) => setForm({...form, phone: e.target.value})} />
        <InputText label='Email' value={form.email}
                   onChange={(e) => setForm({...form, email: e.target.value})} />
        <input type='submit' value='Submit' />
    </form>
}

export default FormMultiple