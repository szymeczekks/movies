import { Logo } from "../Logo/Logo";
import { ModalList } from "../ModalList/ModalList";
import { NavList } from "../NavList/NavList";
import { Search } from "../Search/Search";
import styles from "./ModalMenu.module.css";

export function ModalMenu({onClose}) {

    function handleClick(e) {
        console.log(e.target);
        if (e.target === e.currentTarget) {
            onClose();
        }
    }

    return (
        <div className={styles.modal} onClick={handleClick}>
            <div className={styles.modalContainer}>
                <Logo/>
                <Search/>
                <ModalList/>
            </div>
        </div>
    )
}