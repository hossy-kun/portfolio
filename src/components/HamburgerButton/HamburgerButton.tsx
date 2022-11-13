import React from 'react';
import cx from 'classnames';
import styles from './HamburgerButton.module.scss';

type Props = {
  active: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

const HamburgerButton = ({ active, onClick }: Props) => {
  return (
    <button className={cx(styles.hamburger, { [styles.active]: active })} onClick={onClick}>
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};

export default HamburgerButton;
