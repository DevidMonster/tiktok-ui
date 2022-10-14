import styles from './NavLink.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function NavLink({ to, title }) {
    return (
        <Link className={cx('link')} to={to}>
            {title}
        </Link>
    );
}

NavLink.propTypes = {
    to: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
};

export default NavLink;
