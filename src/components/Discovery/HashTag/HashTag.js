import styles from './HashTag.module.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);



function HashTag({ icon, title, to, noBorder = false }) {
    var classes = { hashtag : true }
    if(noBorder) {
        classes = { noBorder : noBorder }
    }   
    return (
        <Link className={cx(classes)} to={to}>
            
            <p className={cx('title')}><span className={cx('icon')}>{icon}</span> {title}</p>
        </Link>
    );
}

HashTag.propTypes = {
    to: PropTypes.string.isRequired,
    icon: PropTypes.node,
    title: PropTypes.string.isRequired,
};

export default HashTag;
