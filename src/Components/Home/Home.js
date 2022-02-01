import './Home.css'
import logo from '../../LM.png'
import Typical from 'react-typical'

const Home = () => {

    return (
        <div className="container">
            <div className="div1">
                <div className="div1_1">
                    <Typical 
                        className="p1"
                        loop={Infinity}
                        steps={[
                            "Hello, Everyone",
                            1000,
                            "My name is",
                            1000
                        ]}
                    />
                    <p className="p2">Noula Frank</p>
                    <div className="divTitle">
                        <div className="divWrapper">
                            <p className="divItems">Web Developer</p> 
                            <p className="divItems">Front-End</p>
                            <p className="divItems">Back-End</p>
                            <p className="divItems">Junior Data Scientist</p>
                        </div>
                    </div>
                    <p>
                        I design and develop services for customers of all sizes,
                        specialiszing in creating stylish, modern websites, web services, 
                        online stores and predictive models to associate to it.
                    </p> 
                </div>
            </div>
            <div className="div2">
                <div className="shape1"></div>
                <img src={logo} alt="" className="img"></img>
            </div>
        </div>
    )
}

export default Home
