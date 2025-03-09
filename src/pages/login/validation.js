
const rules = {
    email: {
        required: {value: true, message: 'Email can not be be blank.'},
        maxLength: {value: 255, message: 'Maximum password length 255 characters'}
    },
    password: {
        required: {value: true, message: 'Password can not be blank'},
        maxLength: {value: 255, message: 'Maximum password length 255 characters'}
    }
}

export {
    rules
}