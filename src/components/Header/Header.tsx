import { Link as ScrollLink } from 'react-scroll';
import styles from './Header.module.scss';

type HeaderLink = {
  to: string,
  text: string,
};

type Props = {
  links: HeaderLink[],
};

const Header = ({links}: Props) => {

  const navLinks = links.map((link, idx) => {
    return (
      <li key={idx}>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={600}
          to={link.to}
        >
          {link.text}
        </ScrollLink>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <nav role="navigation">
        <ul>{navLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
