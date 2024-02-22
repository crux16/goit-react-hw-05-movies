import { HashLoader } from "react-spinners";
import css from "./Loader.module.css";

export const Loader = () => {
    return (
        <div className={css.loaderWrap}>
            <HashLoader
                color="rgba(54, 215, 183, 1)"
                speedMultiplier={3}
            />
        </div>
    )
}