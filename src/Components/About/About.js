import './About.css'
import img from '../../LM2.jpg'

const About = () => {
    return (
        <div className="containerA">
            <div className="div1A">
                <div className="shape1A"></div>
                <img alt="" src={img} className="imgA"></img>
            </div>

            <div className="div2A">
                <div className="div2A_1">
                    <p className="p1A">About Me</p>
                    <p className="p2A">
                        It is a long established fact that a reader will be 
                        distracted by the radable content
                    </p>
                    <p className="p3A">
                        It is a long established fact that a reader will be 
                        distracted by the radable content. It is a long established fact that a reader will be 
                        distracted by the radable content. It is a long established fact that a reader will be 
                        distracted by the radable content. It is a long established fact that a reader will be 
                        distracted by the radable content. It is a long established fact that a reader will be 
                        distracted by the radable content.
                    </p>
                </div>
                <div className="div2A_2">
                    <div className="d2A">
                        <img src={img} alt='' className="img2A"></img>
                    </div>
                    <div className="d2_1A">
                        <p className="p1_2A">International Design Awards 2021</p>
                        <p className="p2_2A">
                            It is a long established fact that a reader will be 
                            distracted by the radable content
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
