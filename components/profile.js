import styles from 'styles/profile.module.css'
import nagayoshi from 'images/profile.png'
import Image from 'next/image'



export default function Profile() {
    return (

        <div className={styles.Container}>
                <figure className={styles.image}>
                    <Image 
                        src={nagayoshi}
                        alt=""
                        layout="responsive"
                        
                />
                </figure>

                <div className={styles.ProfileContainer}>
                    <p className={styles.text}>Nagayoshi Yusuke</p>
                    <p className={styles.Discription}>大学卒業後、新卒でオーディオメーカに入社。<br/>
                    入社後はプロダクトの内部機構設計やパッケージ設計などに従事。<br/>
                    ハードウェアプロダクトを開発する中で、もっとプロダクト単位での成長や拡大する
                    仕事をしたいと強く思いデジタルのサービス、その中でもUI/UXの部分でプロダクトの成長や事業の成長をさせていきたいと思い<br/>
                    デザイナーとしてキャリアチェンジするため独学を行いながら現在転職活動中。<br/>
                    </p>
                </div>
        </div>
    )
  }