import styles from 'styles/container-article.module.css'

export default function ContainerArticle ({ children, large = false }) {
    return(
        <div className={large ? styles.large : styles.default}>
            {children}
        </div>
    )
}