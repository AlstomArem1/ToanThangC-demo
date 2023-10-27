import { Link, useNavigate } from "react-router-dom";
import logo from "./kinh1logo.png";
import "./Header.css";
import { BiSearchAlt } from "react-icons/bi";
import { IoMdContact } from "react-icons/io";
import { FaCartArrowDown, FaMapMarkedAlt } from "react-icons/fa";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { BsTelephonePlusFill } from "react-icons/bs";
import { GiStarFormation } from "react-icons/gi";
import { RiMenu4Fill } from "react-icons/ri";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { useContext } from "react";
import { AppContext } from "../../AppContext.jsx";
export default function Header() {
    const { navbar, handle_menu1, show, cart } = useContext(AppContext);
    var { Locallsum } = useContext(AppContext);


    let user=JSON.parse(localStorage.getItem('user-info'));
    const history = useNavigate();
   function LogOut(){

        localStorage.clear();
        history('/register')
   }


    return (
        <div className="header">
            <div className="heades">
                <div className="lienhe">
                    <div className="gmail">
                        <h4>Contact Us:
                            <br />
                            Mail@Example.com
                        </h4>
                        <span><MdOutgoingMail /></span>
                    </div>
                    <div className="sdt">
                        <h4>Call Us:
                            <br />
                            +501235843278
                        </h4>
                        <span><BsTelephonePlusFill /></span>
                    </div>
                </div>
                <div className="heades_allmap">
                    <div className="map1">
                        <Link to="https://www.google.com/maps/place/94C+%C4%90.+Cao+Th%E1%BA%AFng,+Ph%C6%B0%E1%BB%9Dng+4,+Qu%E1%BA%ADn+3,+Th%C3%A0nh+ph%E1%BB%91+H%E1%BB%93+Ch%C3%AD+Minh,+Vi%E1%BB%87t+Nam/@10.7714866,106.6785685,17z/data=!4m6!3m5!1s0x31752f2174ecdbd7:0xf4aef3f090ee5c7d!8m2!3d10.7714708!4d106.6808752!16s%2Fg%2F11fsjwpfhq?entry=ttu"><span><FaMapMarkedAlt /></span></Link>
                        <p>Map</p>
                    </div>
                    <div className="map2">
                        <Link to="/tracuu"><span><FaTruckFast /></span></Link>
                        <p>Tra cuu</p>
                    </div>
                    <div className="map3">
                        <Link to=""><span><GiStarFormation /></span></Link>
                        <p>USD</p>
                    </div>
                </div>
            </div>
            <div className={`heading ${navbar ? 'activeitem1' : ""}`}>
                <div className="heading_menu animate__animated animate__flipInX">

                        <Link to="/home" className="menu_li " onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        <Link to="" className="menu_li " onClick={() => window.scrollTo(0, 0)}>Pages</Link>
                        <Link to="/blog" className="menu_li" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                        <Link to="/shop" className="menu_li" onClick={() => window.scrollTo(0, 0)}>Shop</Link>
                        <Link to="/contact" className="menu_li" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                </div>
                <div className="heading_logo">
                    <Link to="">
                        <img src={logo} alt="Kinght" />
                    </Link>
                </div>

                <div className="heading_form">
                    <form className="form_input">
                        <input type="text" placeholder="Search" />
                        <button><span><BiSearchAlt /></span></button>
                    </form>
                    {
                        localStorage.getItem('user-info') ?
                        <>
                        <div className="head_shop">
                        <div className="shop-iconlist1">
                            <Link className="listicon" >
                                <IoMdContact />

                            </Link>
                            { localStorage.getItem('user-info') ?
                            <div className="icon-login" title={user && user.name}>
                                <Link to="/" className="lo" onClick={LogOut}>LoginOut</Link>
                            </div>
                            : null
                            }
                        </div>

                        <div className="shop-iconlist2">
                            <Link className="listicon" to="/cart" onClick={() => window.scrollTo(0, 0)}>
                                <FaCartArrowDown />
                                <h5 className="px-h5">{cart.length}</h5>
                            </Link>

                            <div className="cart-selling">

                                <h5>
                                    {cart && cart.map((itemt) => (
                                        Locallsum += itemt.money * itemt.qty,
                                        <div></div>
                                    ))}

                                    Moneys:<span style={{
                                        color: "green"
                                    }}>${Locallsum}</span>
                                    <br />
                                    Quantity :
                                    <span style={{ fontSize: "10px", color: "red" }}> {cart.length}</span>

                                </h5>

                            </div>

                        </div>
                    </div>
                        </>
                        :
                        <>
                            <Link to="/signin" className="applo" onClick={() => window.scrollTo(0, 0)}>Login</Link>



                        </>

                    }

                </div>
                <div className="menu_btn_left">
                    <button
                        className="btnleft_menues"
                        onClick={handle_menu1}
                    >
                        <span><RiMenu4Fill /></span>
                    </button>
                </div>
            </div>
            <div className={`headmenu ${show ? 'activeitem2' : ''}`}>
                <div
                    className="headmenu_menu1"
                    onClick={handle_menu1}
                >
                    <h1>Header1</h1>
                </div>
                <div className="headmenu_menu2">
                    <div className="button_menuRi">
                        <button
                            className="headmenu1_btnRi"
                            onClick={handle_menu1}
                        >
                            <span><AiOutlineCloseCircle /></span>
                        </button>
                    </div>
                    <div className="headmenu2_menu2">
                        <Link to="/home" className="menu_li2" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                        <Link to="" className="menu_li2" onClick={() => window.scrollTo(0, 0)}>Pages</Link>
                        <Link to="/blog" className="menu_li2" onClick={() => window.scrollTo(0, 0)}>Blog</Link>
                        <Link to="/shop" className="menu_li2" onClick={() => window.scrollTo(0, 0)}>Shop</Link>
                        <Link to="/contact" className="menu_li2" onClick={() => window.scrollTo(0, 0)}>Contact</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
