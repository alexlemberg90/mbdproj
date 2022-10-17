import styles from './mainLayout.module.css'

export default function BaseLayout({children}) {

    return (        <div className={styles.mainWrapper}>
            <header>header</header>
            <main>
                {children}
            </main>
            <footer>footer</footer>
        </div>
    );
}