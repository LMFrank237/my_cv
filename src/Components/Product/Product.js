import './Product.css'

const Product = ({img, link}) => {
    return (
        <div className="productDiv">
            <div className="pBrowser">
               <span className="pCircle"></span> 
               <span className="pCircle"></span> 
               <span className="pCircle"></span> 
            </div>
            <div className="pBContent">
                <a href={link} target="_blank" rel="noreferrer">
                    <img alt="" src={img} className="pImg"></img>
                </a>
            </div>
        </div>
    )
}

export default Product
