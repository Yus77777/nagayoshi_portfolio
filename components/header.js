import Logo from 'components/logo'
import Nav from 'components/nav'
import styles from 'styles/header.module.css'
import Container_header from './container_header'
import Container from './container'
import NavSp from './nav-sp'


export default function Header() {
    return(
        <header>
            <Container_header default>
                <Container default>
                    <div className={styles.flexContainer}>
                        <Logo  boxOn/>
                        <Nav />
                    </div>
                </Container>
            </Container_header>
        </header>
    ) 
  }