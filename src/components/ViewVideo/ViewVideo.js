import styles from './ViewVideo.module.scss';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import { Link } from 'react-router-dom';
import HashTag from '~/components/Discovery/HashTag';
import config from '~/config';
import { MusicIcon } from '~/components/icons';
import Video from '~/components/Video';
import Button from '~/components/Button';
import { Fragment } from 'react';
import Tippy from '@tippyjs/react';

const cx = classNames.bind(styles);
function ViewVideo({ to, src, musicName, followed = false }) {
    return (
        <div className={cx('container')}>
            <div className={cx('wrapper')}>
                <Tippy
                    
                >
                    <Link className={cx('link', 'large')} to={config.routes.profile}>
                        <div className={cx('circle')}>
                            <Image
                                src="https://images.unsplash.com/photo-1663724661215-e1b6f7a45004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                className={cx('user-avatar')}
                                alt="Nguyễn Quang Đăng"
                            />
                        </div>
                    </Link>
                </Tippy>
                {followed ? (
                    <Fragment></Fragment>
                ) : (
                    <Button className={cx('follow-btn')} outline small>
                        Follow
                    </Button>
                )}
                <div className={cx('content')}>
                    <div className={cx('info')}>
                        <div className={cx('anchor')}>
                            <Link className={cx('link', 'hide')} to={config.routes.profile}>
                                <div className={cx('circle')}>
                                    <Image
                                        src="https://images.unsplash.com/photo-1663724661215-e1b6f7a45004?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                                        className={cx('user-avatar')}
                                        alt="Nguyễn Quang Đăng"
                                    />
                                </div>
                            </Link>
                            <Link className={cx('user-name')} to="/">
                                <h3 className={cx('name')}>nguyenquangdang3108</h3>
                                <h4 className={cx('full-name')}>Nguyễn Quang Đăng</h4>
                                <span>.</span>
                                19h ago
                            </Link>
                        </div>
                        <div className={cx('title')}>
                            <span className={cx('desc')}>Hahahahaha</span>
                            <HashTag to={config.routes.tag} title={'#sansangthaydoi'} noBorder={true} />
                            <HashTag to={config.routes.tag} title={'#sansangthaydoi'} noBorder={true} />
                            <HashTag to={config.routes.tag} title={'#sansangthaydoi'} noBorder={true} />
                            <HashTag to={config.routes.tag} title={'#sansangthaydoi'} noBorder={true} />
                        </div>
                        <div className={cx('music_tag')}>
                            <HashTag to={config.routes.tag} title={musicName} noBorder={true} icon={<MusicIcon />} />
                        </div>
                    </div>
                    <div className={cx('show-video')}>
                        <Video src={src} />
                        <div className={cx('action')}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewVideo;
