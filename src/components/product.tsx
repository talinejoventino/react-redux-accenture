import { connect } from "react-redux";

import {IProduct, IProductState} from "../store/products/types"

interface IProductProps{
    product ?: IProduct 
}

const Product = ({product }: IProductProps) => {
    return(
        <div>
            {
                product && (
                <>
                <h2>Pagina de Produtos</h2>
                <h3>{product.title}</h3>
                <p>Valor: R${product.value},00</p>
                <h4>Modulos: </h4>
                <ul>
                    {product.modules.map(module => (
                        <li key={module.id}>{module.title}</li>
                    ))}
                </ul>
                </>) 
            }
        </div>
    )
}

const mapStateToProps = (state: IProductState) => ({
    product: state.product.product
})

export default connect(mapStateToProps)(Product);