import style from '../css/button/Button.module.scss'

const Button = (props) => {
    return <button className={style.default}>
        {props.children}
    </button>;
}

export default Button;