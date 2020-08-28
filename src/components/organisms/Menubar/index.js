import { React } from "libraries";
import home from '../../../assets/images/icon/home.svg';
import movie from '../../../assets/images/icon/movie.svg';
import people from '../../../assets/images/icon/person.svg';

const renderMenu = (url, icon, menu) => {

    return (
        <a href={url} className={`menu`}>
            <img src={icon} alt="Menu" />
        </a>
    );
}

const Menubar = () => {
    return (
        <div className="menubar">
            
            {renderMenu('/', home, 'Menu')}
            {renderMenu('/movie', movie, 'Movie')}
            {renderMenu('/people', people, 'People')}
            

        </div>
    )
};

export default Menubar;
