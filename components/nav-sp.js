import Link from 'next/link';
import styles from 'styles/nav-sp.module.css'
import { useState } from 'react';

export default function NavSp(){
    const [navIsOpen, setNavIsOpen] = useState(false)
    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }
    return(
        <nav className={navIsOpen ? styles.open : styles.close}>
            <button className={styles.btn} onClick={toggleNav}>About</button>
            <ul className={styles.list}>
                <li>
                    <Link href="/work">
                        <a>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
                {/* <li>
                    <Link href="/">
                        <a>Blog</a>
                    </Link>
                </li> */}
            </ul>
        </nav>
    )
}