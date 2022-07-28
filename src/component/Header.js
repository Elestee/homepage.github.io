import { Link } from "react-router-dom"
import styles from "./css/Header.module.css"

export default function Header()
{
    return (
        <div className={styles.header}>
            <div>
                <Link to="/" className={styles.menu}>HOME</Link>
                <Link to="/about" className={styles.menu}>ABOUT</Link>
                <Link to="/music/genre" className={styles.menu}>MUSIC</Link>
                <Link to="/gallery" className={styles.menu}>GALLERY</Link>
                <Link to="/contact" className={styles.menu}>CONTACT</Link>
            </div>
        </div>
    )
}