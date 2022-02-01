import './Contact.css'
import imgC from "../../LM2.jpg"

const Contact = () => {
    return (
        <div className="containerC">
            <div className="div1C">
                <div className="div1C_s">
                    <h1>Let's discuss your project</h1>
                    <div className="contact">
                        <div className="contact1">
                            <img alt="" src={imgC} className="imgC"></img>
                            <p>693-983-554</p>
                        </div>
                        <div className="contact2">
                            <img alt="" src={imgC} className="imgC"></img>
                            <p>noulafrankk@gmail.com</p>
                        </div>
                        <div className="contact3">
                            <img alt="" src={imgC} className="imgC"></img>
                            <p>Yaoundé - Cameroun - Eleveur</p>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="div2C">
                <h1>Contact</h1>
            </div>
        </div>
    )
}

export default Contact;