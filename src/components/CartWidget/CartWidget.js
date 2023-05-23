import cart from '../../assets/img/shopping-cart-20392.png';
import './CartWidget.css';

const CartWidget = ({inheritStyle}) => {
    return (
        <button>
            <img className="small-width" src={cart} alt="cart-widget"></img>
            0
        </button>
    )
}

export default CartWidget;