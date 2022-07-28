import { useRef } from "react";
import styles from "./css/Bubble.module.css";

export default function Bubble()
{
    const bubble = document.createElement("div");
    const bubbles = useRef();


    return (
        <>
        <section className={styles.sticky}>
            <div className={styles.bubbles}>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
                <div className={styles.bubble}></div>
            </div>
        </section>
        </>
    )
}