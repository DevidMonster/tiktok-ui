import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import classNames from 'classnames/bind';
// import PropTypes from 'prop-types';

import Image from '../Image';
import styles from './SuggestedAccount.module.scss';
import { Wrapper as PopperWrapper } from '../popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles);

function AccountItem({data=[]}) {
    const renderPreview = (props) => {
        return (
            <div className={cx('account-preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        );
    };

    return (
        <div>
            <Tippy interactive offset={[0, -1]} placement="bottom" delay={[800, 0]} render={renderPreview}>
                <div className={cx('account-item')}>
                    <span className={cx('avatar')}>
                        <Image
                            src="https://images.unsplash.com/photo-1663724661215-e1b6f7a45004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                            alt=""
                        />
                    </span>
                    <span className={cx('item-info')}>
                        <h4 className={cx('nickname')}>
                            nguyenquangdang3108
                            <div className={cx('icon-tick')}>
                                <FontAwesomeIcon icon={faCircleCheck} />
                            </div>
                        </h4>
                        <p className={cx('name')}>Nguyễn Quang Đăng</p>
                    </span>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {};

export default AccountItem;
