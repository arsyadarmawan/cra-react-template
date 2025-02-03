import * as React from "react";

const UncontrolledForm = () => {
    const inputName = React.useRef(null);

    const handleSubmit = event => {
        event.preventDefault();
        alert(inputName.current.value);
    }

    return <form onSubmit={handleSubmit}>
        <label>
            Name: <input type='text' ref={inputName}  defaultValue='Thareq' />
        </label>
        <input type='submit' value='Submit' />
    </form>
}

export default UncontrolledForm