import styles from './Discovery.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Discovery({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

export default Discovery;
