import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.scss';


const Header = () => {
  return (
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
  );
};

export default Header;
