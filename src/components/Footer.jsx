
import Styles from './Footer.module.css'
function Footer() {
    return (
        <footer className={Styles.footer}>
            <p className={Styles.copyright}>&copy; copyright {new Date().getFullYear()} by Worldwise inc. </p>
            
        </footer>
    )
}

export default Footer
