import styles from 'styles/skils.module.css'




export default function Skils() {
    return (

        <div className={styles.Container}>

                <div className={styles.ProfileContainer}>
                    <p className={styles.text}>デザインツール</p>
                    <ul className={styles.ToolsContainer}>
                        <li>
                            <p className={styles.tool}>Figma</p>
                        </li>
                        <li>
                            <p className={styles.tool}>Illustrator</p>
                        </li>
                        <li>
                            <p className={styles.tool}>Adobe XD</p>
                        </li>
                        <li>
                            <p className={styles.tool}>Blender</p>
                        </li>
                    </ul>
                    <p className={styles.text}>開発スキル</p>
                    <ul className={styles.ToolsContainer}>
                        <li>
                            <p className={styles.tool}>HTML基礎知識</p>
                        </li>
                        <li>
                            <p className={styles.tool}>CSS基礎知識</p>
                        </li>
                    </ul>
                </div>
        </div>
    )
  }