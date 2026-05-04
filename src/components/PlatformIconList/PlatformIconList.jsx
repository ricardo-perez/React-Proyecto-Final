import styles from './PlatformIconList.module.css';
import * as Fa from 'react-icons/fa';
import * as Si from 'react-icons/si';
import * as Bs from 'react-icons/bs';
export const PlatformIconList = ({ platforms }) => {
    const iconMap = {
        pc: Fa.FaWindows,
        playstation5: Fa.FaPlaystation,
        playstation4: Fa.FaPlaystation,
        playstation3: Fa.FaPlaystation,
        'xbox-one': Fa.FaXbox,
        'xbox-series-x': Fa.FaXbox,
        xbox360: Fa.FaXbox,
        'nintendo-switch': Si.SiNintendoswitch,
        macos: Fa.FaApple,
        linux: Fa.FaLinux,
        android: Fa.FaAndroid,
        ios: Si.SiIos,
        web: Bs.BsGlobe,
    };
    const uniqueIcons = [
        ...new Set(
            platforms.map((platform) => iconMap[platform.platform.slug]),
        ),
    ].filter(Boolean);
    return (
        <div className={styles.platformIconList}>
            {uniqueIcons.map((Icon, index) => (
                <Icon key={index} />
            ))}
        </div>
    );
};
