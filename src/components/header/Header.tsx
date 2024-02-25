import styles from './Header.module.css'
import avatar from '../../assets/avatar.png'
import coding from '../../assets/coding.png'
export const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.portfolio}>
                <h1 className={styles.title}>Portfolio</h1>
                <div className={styles.coding}>
                    <img className={styles.img} src={coding} alt="code"/>
                </div>
                <a href={'https://github.com/Dnikulshin'} target={'_blank'}>Github</a>
            </div>

            <div className={styles.avatar}>
                <img className={styles.img} src={avatar} alt="avatar"/>
                <strong>Nikulshin Dmitriy</strong>
            </div>
        </header>
    );
};
