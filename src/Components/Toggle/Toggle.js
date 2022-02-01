import "./Toggle.css"
import { useContext } from "react";
import { ThemeContext } from '../../context';

const Toggle = ({ onClk }) => {
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    return (
        <div className="shape2" onClick={() => {theme.dispatch({type: "TOGGLE"})}}>
            {darkMode ?
                <span className="circle"></span>
            :
                <span className="circle2"></span>
            }
        </div>
    )
}

export default Toggle
