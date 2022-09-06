import styles from 'styles/main-container.module.css';


export default function MainContainer ({ children, large = false }) {
    return(
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}