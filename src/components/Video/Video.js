// import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Video.module.scss';
import { useState, useCallback, useRef, useLayoutEffect } from 'react';
import { MuteIcon, PauseIcon, PlayIcon, UnMuteIcon } from '~/components/icons';

const cx = classNames.bind(styles);

function Video({ src, className, medium = false, lagre = false }) {
    const [play, setPlay] = useState(false);
    const [showed, setShowed] = useState(false);
    const [muted, setMuted] = useState(false);
    const [archive, setArchive] = useState(null);
    const [duration, setDuration] = useState(0);
    const [styles, setStyles] = useState({ backgroundImage: `linear-gradient(90deg, white 50%, gray 50%)` });
    const [styleSeek, setStyleSeek] = useState({ backgroundImage: `linear-gradient(90deg, white 0%, gray 0%)` });
    const [currentTime, setCurrentTime] = useState("00:00");
    const [durationTime, setDurationTime] = useState("00:00");
    const rangeInput = useRef();
    const videoRef = useRef();
    const videoSeeks = useRef();

    const handleChangeSlider = () => {
        let value = rangeInput.current.value;
        setStyles({ backgroundImage: `linear-gradient(90deg, white ${value}%, gray ${value}%)` });

    };

    useLayoutEffect(() => {
        videoRef.current.volume = Math.min(1, rangeInput.current.value / 100);
        if(videoRef.current.volume === 0) {
            setMuted(true)
        } else {
            setMuted(false)
        }
    }, [styles]);

    const handleChangeLineOfVideo = () => {
        const video = videoRef.current;
        if (!video) return;
        var seekto = video.duration * (videoSeeks.current.value / 100);
        video.currentTime = seekto;
        //changeSlider
        let x = videoSeeks.current.value;
        setStyleSeek({ backgroundImage: `linear-gradient(90deg, white ${x}%, gray ${x}%)` });
    };

    const handleTimeupdate = () => {
        const video = videoRef.current;
        if (!video) return;
        var nt = video.currentTime * (100 / video.duration);
        setDuration(nt);
        //changeSlider
        let x = videoSeeks.current.value;
        setStyleSeek({ backgroundImage: `linear-gradient(90deg, white ${x}%, gray ${x}%)` });
        //update timer
        var curmins = Math.floor(video.currentTime / 60)
        var cursecs = Math.floor(video.currentTime - curmins * 60)
        var durmins = Math.floor(video.duration / 60)
        var dursecs = Math.floor(video.duration - durmins * 60)
        if(cursecs < 10) {
            cursecs = "0" + cursecs;
        }
        if(dursecs < 10) {
            dursecs = "0" + dursecs; 
        }
        var curTimes = curmins+":"+cursecs
        var durTimes = durmins+":"+dursecs
        setCurrentTime(curTimes)
        setDurationTime(durTimes)
    };

    const handlePlayVideo = useCallback(() => {
        if (play) {
            videoRef.current.pause();
            setPlay(false);
        } else {
            videoRef.current.play();
            setPlay(true);
        }
        // eslint-disable-next-line
    }, [play]);

    const handleChangeVolume = useCallback(() => {
        if (muted) {
            videoRef.current.muted = false;
            setMuted(false);
            setShowed(false);
            rangeInput.current.value = archive;
            handleChangeSlider();
        } else {
            videoRef.current.muted = true;
            setMuted(true);
            setShowed(true);
            setArchive(rangeInput.current.value);
            rangeInput.current.value = 0;
            handleChangeSlider();
        }
        // eslint-disable-next-line
    }, [muted]);

    return (
        <div className={cx('video-size', 'normal', { medium, lagre, className })}>
            <video
                playsInline={true}
                onTimeUpdate={handleTimeupdate}
                ref={videoRef}
                src={src}
                className={cx('video')}
            />
            <button className={cx('play')} onClick={handlePlayVideo}>
                {play ? <PauseIcon /> : <PlayIcon />}
            </button>
            <div className={cx('audio', { show: showed })}>
                <button className={cx('volume')} onClick={handleChangeVolume}>
                    {muted ? <UnMuteIcon /> : <MuteIcon />}
                </button>
                <div className={cx('bg-input-range')}>
                    <input
                        style={styles}
                        ref={rangeInput}
                        onChange={handleChangeSlider}
                        className={cx('volume-mixer')}
                        type="range"
                        min={0}
                        max={100}
                        step={1}
                    />
                </div>
            </div>
            <div className={cx('duration')}>
                <input
                    style={styleSeek}
                    ref={videoSeeks}
                    onChange={handleChangeLineOfVideo}
                    onClick={handleChangeLineOfVideo}
                    className={cx('seekslider')}
                    type="range"
                    min={0}
                    max={100}
                    step={1}
                    onMouseDown={() => {videoRef.current.pause(); setPlay(false)}}
                    onMouseUp={() => {videoRef.current.play(); setPlay(true)}}
                    value={duration}
                />
                <div className={cx('timer')}>
                    <span className={cx('currentTime')}>{currentTime}</span>/<span className={cx('durationTime')}>{durationTime}</span>
                </div>
            </div>
        </div>
    );
}

// Video.propTypes = {
//     src: PropTypes.string.isRequired,
//     classNames: PropTypes.string,
//     medium: PropTypes.string,
//     lagre: PropTypes.string,
// }

export default Video;
