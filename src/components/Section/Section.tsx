import { FaChevronDown } from 'react-icons/fa';
import cx from 'classnames';
import styles from './Section.module.scss';

type Props = {
  id?: string;
  children?: React.ReactNode;
  className?: string;
  last?: boolean;
};

const Section = ({ id, children, className, last }: Props) => {
  return (
    <section id={id} className={cx(styles['section'], className)}>
      {children}
      {!last && (
        <div className={styles['arrow-wrapper']}>
          <FaChevronDown className={styles['anim-blink']} />
        </div>
      )}
    </section>
  );
};

export default Section;
