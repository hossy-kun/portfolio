import { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import cx from 'classnames';
import HamburgerButton from '../HamburgerButton/HamburgerButton';
import styles from './Header.module.scss';

type HeaderLink = {
  to: string;
  text: string;
};

type Props = {
  links: HeaderLink[];
};

const Header = ({ links }: Props) => {
  const [openMenu, setOpenMenu] = useState(false);
  const navLinks = links.map((link, idx) => {
    return (
      <li key={idx}>
        <ScrollLink
          activeClass="active"
          spy={true}
          smooth={true}
          duration={600}
          to={link.to}
          onClick={() => setOpenMenu(false)}
        >
          {link.text}
        </ScrollLink>
      </li>
    );
  });

  return (
    <header className={styles.header}>
      <div className={styles.hamburger}>
        <HamburgerButton active={openMenu} onClick={() => setOpenMenu(!openMenu)} />
      </div>
      <nav role="navigation" className={cx(styles.menu, { [styles.open]: openMenu })}>
        <ul>{navLinks}</ul>
      </nav>
    </header>
  );
};

export default Header;
