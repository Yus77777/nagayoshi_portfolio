import Logo from 'components/logo'
import styles from 'styles/footer.module.css'
import Container from './container'
import Social from 'components/social'


export default function Footer() {
    return(
        <footer className={styles.wrapper}>
            <Container>
                <div className={styles.flexContainer}>
                    {/* <Logo /> */}
                    <p className={styles.text}>Nagayoshi Yusuke</p>
                    {/* <Social /> */}
                </div>
            </Container>
        </footer>
    )
  }