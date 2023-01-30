import './Navbar.css';
import "bootstrap-icons/font/bootstrap-icons.css";

function Navbar(props) {
    function navbar(e) {
        if (e.target.checked) {
            document.getElementById('mobile-navbar').style.display = "block";
        } else {
            document.getElementById('mobile-navbar').style.display = "none";
        }
    }
    function close(e) {
        document.getElementById('mob-nav').checked = false;
        document.getElementById('mobile-navbar').style.display = "none";
    }
    function cart(e) {
        if (e.target.checked) {
            document.getElementsByClassName('cart-popup')[0].style.display = "block";
        } else {
            document.getElementsByClassName('cart-popup')[0].style.display = "none";
        }
    }
    return (
        <>
            <div className="header">
                <div className="res-nav">
                    <input type="checkbox" id="mob-nav" onChange={e => navbar(e)} />
                    <label htmlFor="mob-nav" id="mobile-nav-click"><i className="bi bi-list"></i></label>
                    <div className="main-heading">sneakers</div>
                </div>
                <div className="nav-items">
                    <ul>
                        <li>Collections</li>
                        <li>Men</li>
                        <li>Women</li>
                        <li>About</li>
                        <li>Contacts</li>
                    </ul>
                </div>
                <div className="cart">
                    <input type="checkbox" id="cart-check" onChange={e => cart(e)} />
                    <label htmlFor="cart-check"><i className="bi bi-cart3 cart-pointer"></i></label>
                    {props.quantity!==0?(
                        <>
                            <span className='quantity-show'>{props.quantity}</span>
                        </>
                    ):(
                        null
                    )}
                </div>
                <div className="dp-div">
                    <div className="dp">

                    </div>
                </div>
            </div>
            <div id="mobile-navbar">
                <div className="close-nav">
                    <button id="close-navbtn" onClick={e => close(e)}><i className="bi bi-x-lg"></i></button>
                    <div className="mobile-nav-item">
                        <ul>
                            <li>Collections</li>
                            <li>Men</li>
                            <li>Women</li>
                            <li>About</li>
                            <li>Contacts</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cart-popup">
                {props.quantity === 0 ? (
                    <>
                        <div className="cart-heading">
                            Cart
                        </div>
                        <div className="cart-details-zero">
                            Nothing in the cart!!
                        </div>
                    </>
                ) : (
                    <>
                        <div className="cart-heading">
                            Cart
                        </div>
                        <div className="cart-details">
                            <div className="cart-details-1"></div>
                            <div className="cart-details-2">
                                <div className="cart-details-2-1">Fall Limited Edition sneakers</div>
                                <div className="cart-details-2-2">$127.00x{props.quantity}&nbsp;<b className="black">${127.00*props.quantity}</b></div>
                            </div>
                            <div className="cart-details-3">
                                <button className="delete" onClick={e=>props.remove(e)}><i className="bi bi-trash-fill"></i></button>
                            </div>
                        </div>
                        <div className="cart-button">
                            <button>Checkout</button>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Navbar;