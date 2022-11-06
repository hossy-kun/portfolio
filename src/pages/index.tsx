import Head from 'next/head';
import styles from './index.module.scss';
import { SiGithub, SiTwitter } from 'react-icons/si';
import cx from 'classnames';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import Section from '../components/Section/Section';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Portfolio | Hossy</title>
        <meta name="description" content="Hossyのエンジニアポートフォリオです。スキルセットをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header/>

      <main className={styles.main}>
        <Section id="home" className={styles['section-home']}>
          <div className={styles['section-container']}>
            <div>
              <h1 className={styles['section-title']}>HOSSY PORTFOLIO</h1>
              <p>エンジニアポートフォリオ</p>
              <div className={styles['social-links']}>
                <a href="https://github.com/hossy-kun" target="_blank" rel="noopener noreferrer">
                  <SiGithub/>
                </a>
                <a href="https://twitter.com/hossy_kun" target="_blank" rel="noopener noreferrer">
                  <SiTwitter/>
                </a>
              </div>
            </div>
          </div>
        </Section>
        <Section id="aboutme" className={styles['section-aboutme']}>
          <div className={styles['section-container']}>
            <h2 className={styles['section-title']}>ABOUT ME</h2>
            <div className={styles['section-content']}>
              <p>
                情報系の大学を卒業後、システムエンジニアとして、社会人をスタート。金融、証券、交通系などの開発に携わってきました。主にWebアプリの開発、最近はフロントエンド領域を担当することが多く、この領域の関心が強いです。<br/>
                <br/>
                どうしたら、良いものが作れるだろうと日々考えながら、設計、コーディングを行っています。<br/>
                <br/>
                でも、悩みすぎずに、楽しみながら「ものづくり」していきたいです。
              </p>
            </div>
          </div>
        </Section>
        <Section id="skills" className={styles['section-skills']}>
          <div className={styles['section-container']}>
            <h2 className={styles['section-title']}>SKILL SET</h2>
            <div className={styles['section-content']}>
              <div className={cx(styles['card'], styles['skills-block'])}>
                <h3 className={styles['skills-title']}>言語</h3>
                <ul className={styles['skills-content']}>
                  <li>TypeScript/JavaScript</li>
                  <li>HTML/CSS/Sass</li>
                  <li>Java</li>
                  <li>C/C++</li>
                </ul>
              </div>
              <div className={cx(styles['card'], styles['skills-block'])}>
                <h3 className={styles['skills-title']}>フレームワーク＆ライブラリ</h3>
                <ul className={styles['skills-content']}>
                  <li>Angular/React</li>
                  <li>jQuery</li>
                  <li>Spring Boot</li>
                  <li>Cassandra/PostgreSQL</li>
                </ul>
              </div>
              <div className={cx(styles['card'], styles['skills-block'])}>
                <h3 className={styles['skills-title']}>環境＆ツール</h3>
                <ul className={styles['skills-content']}>
                  <li>Google Cloud Platform</li>
                  <li>Git</li>
                  <li>Visual Studio Code</li>
                  <li>Windows</li>
                </ul>
              </div>
            </div>
          </div>
        </Section>
        <Section id="service" className={styles['section-service']} last>
          <div className={styles['section-container']}>
            <h2 className={styles['section-title']}>SERVICE</h2>
            <div className={styles['section-content']}>
              <div className={cx(styles['card'], styles['service-block'])}>
                <div className={styles['service-block-img']}>
                  <img src="/images/portfolio.png" alt="ポートフォリオ"></img>
                </div>
                <div className={styles['service-block-summary']}>
                  <div className={styles['service-header']}>
                    <h3 className={styles['service-title']}>ポートフォリオ</h3>
                  </div>
                  <div className={styles['service-content']}>
                    <p>いま見ているこのサイトです。</p>
                    <ul>
                      <li>React (Next.js)</li>
                      <li>TypeScript</li>
                      <li>Firebase Hosting</li>
                      <li>GitHub Actions</li>
                    </ul>
                  </div>
                  <div className={styles['service-footer']}>
                    <a href="https://github.com/hossy-kun/portfolio" target="_blank" rel="noopener noreferrer">
                      <SiGithub/>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer/>
    </div>
  )
};

export default Home;
