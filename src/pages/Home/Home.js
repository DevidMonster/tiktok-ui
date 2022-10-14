import styles from './Home.module.scss';
import classNames from 'classnames/bind';
import PropTypes from 'prop-types';
import ViewAccountItem from './ViewAccountItem';
import video from '~/asset/videos';

const cx = classNames.bind(styles);

function Home() {
    return <div className={cx('wrapper')}>
        <ViewAccountItem src={video.video1} musicName={'nhạc nền - Bố Con Sâu'}/>
        <ViewAccountItem src={video.video2} musicName={'nhạc nền - anti con nhỏ tên hoàng anh vcl - siêu nhân hồng flopppp🤘'}/>
        <ViewAccountItem src={video.video2} musicName={'nhạc nền - anti con nhỏ tên hoàng anh vcl - siêu nhân hồng flopppp🤘'}/>
        <ViewAccountItem src={video.video2} musicName={'nhạc nền - anti con nhỏ tên hoàng anh vcl - siêu nhân hồng flopppp🤘'}/>
        <ViewAccountItem src={video.video1} musicName={'nhạc nền - Bố con Sâu'}/>
    </div>;
}


export default Home;
