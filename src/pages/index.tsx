import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import { SiGithub, SiTwitter } from 'react-icons/si';
import { FaChevronDown } from 'react-icons/fa';
import { Link as ScrollLink } from 'react-scroll';
import cx from 'classnames';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Portfolio | Hossy</title>
        <meta name="description" content="Hossyのエンジニアポートフォリオです。スキルセットをまとめています。" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <nav role="navigation">
          <ul>
            <li><ScrollLink activeClass="active" spy={true} smooth={true} duration={600} to="home">HOME</ScrollLink></li>
            <li><ScrollLink activeClass="active" spy={true} smooth={true} duration={600} to="aboutme">ABOUT ME</ScrollLink></li>
            <li><ScrollLink activeClass="active" spy={true} smooth={true} duration={600} to="skills">SKILL SET</ScrollLink></li>
            <li><ScrollLink activeClass="active" spy={true} smooth={true} duration={600} to="service">SERVICE</ScrollLink></li>
          </ul>
        </nav>
      </header>

      <main className={styles.main}>
        <section id="home" className={cx(styles['section'], styles['section-home'])}>
          <div className={styles['section-container']}>
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
          <div className={styles['arrow-wrapper']}>
            <FaChevronDown className={styles['anim-blink']}/>
          </div>
        </section>
        <section id="aboutme" className={cx(styles['section'], styles['section-aboutme'])}>
          <div className={styles['section-container']}>
            <h2 className={styles['section-title']}>ABOUT ME</h2>
            <div className={styles['section-content']}>
              <p>
                システムエンジニアとして、社会人をスタート。金融、証券、交通系などの開発に携わってきました。主にWebアプリ開発、最近はフロントエンド領域を担当することが多く、この領域の関心も強いです。<br/>
                <br/>
                どうしたら、良いものが作れるだろうと日々考えながら、設計、コーディングを行っています。<br/>
                <br/>
                でも、悩みすぎずに、楽しみながら「ものづくり」していきたいです。
              </p>
            </div>
          </div>
          <div className={styles['arrow-wrapper']}>
            <FaChevronDown className={styles['anim-blink']}/>
          </div>
        </section>
        <section id="skills" className={cx(styles.section, styles['section-skills'])}>
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
          <div className={styles['arrow-wrapper']}>
            <FaChevronDown className={styles['anim-blink']}/>
          </div>
        </section>
        <section id="service" className={cx(styles.section, styles['section-service'])}>
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
        </section>
      </main>

      <footer className={styles.footer}>
        <span className={styles.text}>&copy; 2022 Hossy.</span>
      </footer>
    </div>
  )
}
