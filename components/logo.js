import Link from 'next/link';
import styles from 'styles/logo.module.css';



export default function Logo({ boxOn = false}){
    return(
        <Link href="/">
            {/* <a className={boxOn ? styles.box : styles.basic}>Nagayoshi Yusuke</a> */}
            {/* <a>Nagayoshi Yusuke</a> */}
            <p className={styles.text}>Nagayoshi Yusuke</p>
        </Link>
    )
}