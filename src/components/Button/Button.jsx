import css from "./Button.module.css";
import PropTypes from "prop-types";

export const Button = ({ text, position, children}) => {
    return (
        <button className={css.button} type="button">
            {position === 'left' && <span className={css.icon}>{children}</span>}
            {text}
            {position === 'right' && <span className={css.icon}>{children}</span>}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    position: PropTypes.string,
    children: PropTypes.element,
};