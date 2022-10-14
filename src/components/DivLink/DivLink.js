import styles from './DivLink.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function DivLink({ children }) {
    return <div className={cx('wrapper')}>{children}</div>;
}

DivLink.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DivLink;
