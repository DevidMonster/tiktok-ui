import classNames from 'classnames/bind';
import styles from './SuggestedAccount.module.scss';
import PropTypes from 'prop-types';

const cx = classNames.bind(styles);

function SuggestedAccount({ label, children }) {
    return (
        <div className={cx('wrapper')}>
            {label == null || <p className={cx('label')}>{label}</p>}
            <>{children}</>
        </div>
    );
}

SuggestedAccount.propTypes = {
    label: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default SuggestedAccount;
