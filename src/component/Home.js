import Bubble from "./Bubble";
import styles from "./css/Home.module.css";
import Name from "./Name";

export default function Home()
{
    return (
        <>
            <div className={styles.background}>
                <div className={styles.canvas}>
                    <Bubble />

                    <Name />
                    
                    {/* <div className={styles.rect}></div> */}
                    <div className={styles.desc}>Music Producer & Web Developer</div>
                    {/* <div className="button">ABOUT</div> */}
                    <div className="button">COLLECTION</div>
                    {/* <div className={styles.imgCard}></div> */}
                </div>
            </div>
        </>
    )
}

