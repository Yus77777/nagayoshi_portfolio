import styles from 'styles/experience.module.css'




export default function Experience() {
    return (

        <div className={styles.Container}>
            <div className={styles.ExperienceContainer}>
                <p className={styles.text}>2015~2019年</p>
                <p className={styles.text}>工学院大学　工学部　機械工学科</p>   
            </div>

            <div className={styles.ExperienceContainer}>
                <p className={styles.text}>2019 4月</p>
                <p className={styles.text}>ラディウス株式会社　入社<br/>
                企画開発部1課　機構設計</p>   
            </div>

            <div className={styles.ExperienceContainer}>
                <p className={styles.text}>主な担当領域</p>
                <p className={styles.text}>製品(イヤホン)の設計・評価業務<br/></p>
                <p className={styles.text}>製品(パッケージ)の設計・評価業務<br/></p>
                <p className={styles.text}>特許関連業務(意匠図面の作成)<br/></p>
            </div>

            <div className={styles.ExperienceContainer}>
                <p className={styles.text}>2022 4月</p>
                <p className={styles.text}>ラディウス株式会社　退職<br/></p>   
            </div>

                
        </div>
    )
  }