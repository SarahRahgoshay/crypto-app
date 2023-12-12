import styles from './Layout.module.css';

const Layout = ({children}) => {
    return (
        <>
            <header className={styles.header}>
                <h1> Crypto World </h1>
                <p> React.js </p>
            </header>
                {children}
            <footer className={styles.footer}>
                <p>Developed by Sara Rahgoshay</p>    
            </footer>   
        </>
    );
};

export default Layout;