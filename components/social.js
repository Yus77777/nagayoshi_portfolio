import styles from 'styles/social.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faTwitter,
    faFacebookF,
    faGithub,
} from '@fortawesome/free-brands-svg-icons'


export default function Social({iconSize= 'initial'}) {
    return(
        <ul className={styles.list} style={{'--icon-size': iconSize}}>
            <li>
                <a heref="https://twitter.com/">
                    <span className={"sr-only"}>Twitter</span>
                    <FontAwesomeIcon icon={faTwitter}/>
                </a>
            </li>
            <li>
                <a heref="https://facebook.com/">
                    <span className={"sr-only"}>Facebook</span>
                    <FontAwesomeIcon icon={faFacebookF}/>
                </a>
            </li>
            <li>
                <a heref="https://github.com/">
                    <span className={"sr-only"}>github</span>
                    <FontAwesomeIcon icon={faGithub}/>
                </a>
            </li>
        </ul>
    )
}