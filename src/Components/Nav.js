import { FaMoon, FaSun } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai'
import DarkMode from '../Utilities/DarkMode';

const Nav = () => {
    return (
        <div className='flex flex-row items-center justify-center gap-2 mt-4'>
            <FireIcon />
            <Title />
            <ThemeIcon />
        </div>
    );
};

const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = DarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
        <span onClick={handleMode}>
            {darkTheme ? (
                <FaSun size='24' className='top-navigation-icon' />
            ) : (
                <FaMoon size='24' className='top-navigation-icon-moon' />
            )}
        </span>
    );
};

const FireIcon = () => <AiFillFire size='20' className='title-hashtag' />;
const Title = () => <h5 className='title-text'>Fire Chat</h5>;

export default Nav;