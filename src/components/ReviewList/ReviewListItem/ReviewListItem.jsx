import PropTypes from "prop-types";
import css from "./ReviewListItem.module.css";
import parse from 'html-react-parser';

export const ReviewListItem = ({ author, content }) => {
    return (
        <li>
            <p><span className={css.author}>Author:</span> {author}</p>
            <p className={css.content}>{parse(content)}</p>
        </li>
    );
};

ReviewListItem.propTypes = {
    author: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
};