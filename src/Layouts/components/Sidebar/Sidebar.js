import classNames from 'classnames/bind';
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon,
    HashtagIcon,
    MusicIcon,
} from '~/components/icons';
import SuggestedAccount from '~/components/SuggestedAccount';
import AccountItem from '~/components/SuggestedAccount/AccountItem';
import Discovery from '~/components/Discovery';
import HashTag from '~/components/Discovery/HashTag';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import styles from './Sidebar.module.scss';
import DivLink from '~/components/DivLink';
import NavLink from '~/components/DivLink/NavLink';

const cx = classNames.bind(styles);

function Sidebar() {
    return (
        <aside className={cx('sidebar')}>
            <div className={cx('container')}>
                <Menu>
                    <MenuItem
                        to={config.routes.home}
                        title={'For You'}
                        icon={<HomeIcon />}
                        activeIcon={<HomeActiveIcon />}
                    />
                    <MenuItem
                        to={config.routes.following}
                        title={'Following'}
                        icon={<UserGroupIcon />}
                        activeIcon={<UserGroupActiveIcon />}
                    />
                    <MenuItem to={config.routes.live} title={'LIVE'} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
                </Menu>
    
                <SuggestedAccount label="Suggested account">
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <p className={cx('more-button')}>see all</p>
                </SuggestedAccount>
    
                <SuggestedAccount label="Following account">
                    <AccountItem />
                    <AccountItem />
                    <AccountItem />
                    <p className={cx('more-button')}>see all</p>
                </SuggestedAccount>
    
                <SuggestedAccount label="Discover">
                    <Discovery>
                        <HashTag to={config.routes.tag} icon={<HashtagIcon />} title={'7749hieuung'} />
                        <HashTag to={config.routes.tag} icon={<HashtagIcon />} title={'7749hieuung'} />
                        <HashTag
                            to={config.routes.tag}
                            icon={<MusicIcon />}
                            title={'Yêu Đơn Phương Là Gì (MEE Remix) - Mee Media & h0n'}
                        />
                    </Discovery>
                </SuggestedAccount>
    
                <SuggestedAccount>
                    <DivLink>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.home} title={"TikTok"}/>
                        <NavLink to={config.routes.tag} title={"Newsroom"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                    </DivLink>
                    <DivLink>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.home} title={"TikTok"}/>
                        <NavLink to={config.routes.tag} title={"Newsroom"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                    </DivLink>
                    <DivLink>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.home} title={"TikTok"}/>
                        <NavLink to={config.routes.tag} title={"Newsroom"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                        <NavLink to={config.routes.tag} title={"About Us"}/>
                    </DivLink>
                    <span className={cx('copy-right')}>© 2022 TikTok</span>
                </SuggestedAccount>
            </div>
        </aside>
    );
}

export default Sidebar;
