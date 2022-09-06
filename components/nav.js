import Link from 'next/link';
import styles from 'styles/nav.module.css'
import { useState } from 'react';

export default function Nav(){
    const [navIsOpen, setNavIsOpen] = useState(false)
    const toggleNav = () => {
        setNavIsOpen((prev) => !prev)
    }

    const closeNav = () => {
        setNavIsOpen(false)
    }

    return(
        // <nav>
        //     <ul className={styles.list}>
        //         <li>
        //             <Link href="/work">
        //                 <a>Work</a>
        //             </Link>
        //         </li>
        //         <li>
        //             <Link href="/about">
        //                 <a>About</a>
        //             </Link>
        //         </li>
        //         {/* <li>
        //             <Link href="/">
        //                 <a>Blog</a>
        //             </Link>
        //         </li> */}
        //     </ul>
        // </nav>
        <nav className={navIsOpen ? styles.open : styles.close}>
            <button className={styles.btn} onClick={toggleNav}>/ About</button>
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
            </ul>

            <ul className={styles.listsp}>
                <li>
                    <Link href="/work">
                        <a onClick={closeNav}>Work</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about">
                        <a onClick={closeNav}>About</a>
                    </Link>
                </li>
            </ul>


    </nav>
    )
}







