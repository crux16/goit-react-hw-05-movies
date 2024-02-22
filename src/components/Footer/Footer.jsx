import css from "./Footer.module.css";

export const Footer = () => {
    return (
        <footer>
            <p className={css.footerText}>&copy; {new Date().getFullYear()} | <span title="Rowell Calipay">crux16.github.io/goit-react-hw-05-movies</span>
            </p>
        </footer>
    );
};

