
import './Portfolio.css'
import Product from '../Product/Product'
import { products } from '../../data'

const Portfolio = () => {
    return (
        <div className="containerP">
            <div class="pp">
                <h1 className="ppTitle">Create and Style with LM</h1>
                <p className="ppHeading">
                    LM is a creative portfolio that your work has been waiting for.
                    Beautiful homes, stunning portfolio styles & a whole
                    lot more awaits inside.
                </p>
            </div>
            <div className="pl">
                {products.map((item) => (
                    <Product key={item.id} img={item.img} link={item.link} />
                ))}
            </div>
        </div>
    )
}

export default Portfolio
