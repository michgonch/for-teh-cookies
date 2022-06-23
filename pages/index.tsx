import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>За печеньки</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Как же хочется печенек и шуточек
        </h1>

        <p className={styles.text}>
          Хочется с вами работать.
        </p>

        <div className={styles.links}>
          <a href="https://t.me/michgonchar" target="_blank" rel="noreferrer" className={styles.link}>
            <Image src="/tg.png" alt="Telegram" width={32} height={32} />
          </a>
          <a href="https://vk.com/michgonch" target="_blank" rel="noreferrer" className={styles.link}>
            <Image src="/vk.png" alt="Vkontakte" width={32} height={32} />
          </a>
        </div>

        <p className={styles.text}>
          Могу предложить свои знания JavaScript (TS) на клиенте и сервере, React, Node.js.
        </p>
        <p className={styles.text}>
          Готов решать базовые задачи, кое-что знаю о скриптовых серверных языках и взаимодействии с базами данных, Linux, Docker.
        </p>
        <p className={styles.text}>
          Буду рад молниеносно освоить любой стек.
        </p>
        <p className={styles.text}>
          Вместе коммерческого опыта пока есть сертификат.
        </p>
        
        <a href="/cert.png" target="_blank" rel="noreferrer" className="link">
          <Image src="/cert.png" alt="Certificate" width={320} height={250} />
        </a>

        <p className={styles.text}>
          <a href="https://github.com/michgonch/for-teh-cookies" target="_blank" rel="noreferrer" className={styles.src}>Исходник</a> этой страницы
        </p>
      </main>
      
    </div>
  )
}

export default Home
