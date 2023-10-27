import { useContext } from "react"
import { AppContext } from "../../AppContext"
import "./Product.css";
import up14 from "./ip14.jpg";
import { AiTwotoneStar, AiOutlineHeart, AiFillApple, AiOutlineNodeExpand, AiOutlineStar } from "react-icons/ai";
import { TbMenuOrder } from "react-icons/tb";
import { HiMenuAlt2 } from "react-icons/hi";
import { HiMenuAlt3 } from "react-icons/hi";
import { Link } from "react-router-dom";
import ControlledCarousel from "../boostrap/Boostrapimgs/Boosi";


export default function Product() {
    const { product, addCart, fillterlist4, setCount, handle_Apple, apple, giaodich, handle_toptop, toptop } = useContext(AppContext);
    var { Locallsum } = 0;
    return (
        <div className="shop">
            <div className="newshop-hinhrong">
                <div className="lag-newshop-chitiet1">
                    <div className="menu-may">
                        <div className="luachon">
                            <button><HiMenuAlt2/></button>
                            <h3>Danh mục</h3>
                            <button><HiMenuAlt3/></button>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Điện thoại</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Iphone</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">Xiaomi</a></span>
                                <span><a className="al2" href="#">OPPO</a></span>
                                <span><a className="al2" href="#">Nokia</a></span>
                                <span><a className="al2" href="#">realme</a></span>
                                <span><a className="al2" href="#">OnePlus</a></span>
                                <span><a className="al2" href="#">Huawei</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Laptop</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">HP</a></span>
                                <span><a className="al2" href="#">Mac</a></span>
                                <span><a className="al2" href="#">Dell</a></span>
                                <span><a className="al2" href="#">ASUS</a></span>
                                <span><a className="al2" href="#">Microsogt Surface</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Gaming</a></span>
                                <span><a className="al2" href="#">Sinh viên</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Âm thanh</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Bluetooth</a></span>
                                <span><a className="al2" href="#">Apple</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">Sony</a></span>
                                <span><a className="al2" href="#">Havit</a></span>
                                <span><a className="al2" href="#">Iphone</a></span>
                                <span><a className="al2" href="#">Thể thao</a></span>
                                <span><a className="al2" href="#">Soul</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Đồng hồ máy</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Apple Watch Ultra</a></span>
                                <span><a className="al2" href="#">Apple Watch SE 2023</a></span>
                                <span><a className="al2" href="#">Apple Watch Series 8</a></span>
                                <span><a className="al2" href="#">Garmin Forerunner 956</a></span>
                                <span><a className="al2" href="#">Garmin Forerunner 265</a></span>
                                <span><a className="al2" href="#">Apple Watch SE</a></span>
                                <span><a className="al2" href="#">Amazfit GTR Mini</a></span>
                                <span><a className="al2" href="#">Huawei band 3</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">PC, Màn hình</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">ASUS</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">DELL</a></span>
                                <span><a className="al2" href="#">HP</a></span>
                                <span><a className="al2" href="#">Apple</a></span>
                                <span><a className="al2" href="#">HKC</a></span>
                                <span><a className="al2" href="#">MSI</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Tivi</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Samsung</a></span>
                                <span><a className="al2" href="#">LG</a></span>
                                <span><a className="al2" href="#">Xiaomi</a></span>
                                <span><a className="al2" href="#">Coocaa</a></span>
                                <span><a className="al2" href="#">Casper</a></span>
                                <span><a className="al2" href="#">Sony</a></span>
                                <span><a className="al2" href="#">Toshiba</a></span>
                                <span><a className="al2" href="#">Full HD</a></span>
                            </div>
                        </div>
                        <div className="luli">
                            <a className="ali" href="#">Tin công nghệ</a>
                            <div className="li-col">
                                <span><a className="al2" href="#">Tin công nghệ</a></span>
                                <span><a className="al2" href="#">Khám phá</a></span>
                                <span><a className="al2" href="#">S-Game</a></span>
                                <span><a className="al2" href="#">Tư vấn</a></span>
                                <span><a className="al2" href="#">Trên tay</a></span>
                                <span><a className="al2" href="#">Thị Trường</a></span>
                                <span><a className="al2" href="#">Thủ thuật</a></span>
                                <span><a className="al2" href="#">Kĩ thuật</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="imgmay-ht">
                        <ControlledCarousel />
                    </div>
                </div>
                <div className="lag-newshop-chitiet2">
                    <div className="chitiet2_start">
                        <h1>New Products</h1>
                    </div>
                    <div className="chitiet2_end">
                        <button className={apple === 1 ? 'apple1 activeleft' : 'apple1'} onClick={() => handle_Apple(1)}><AiFillApple /></button>
                        <button className={apple === 2 ? 'apple1 activeleft' : 'apple1'} onClick={() => handle_Apple(2)}><AiOutlineNodeExpand /></button>
                    </div>
                </div>
                <div className="box-newshop">
                    <div className="shop-link-list">
                        <div className="linttop">
                            <h1 style={{ color: "#fff" }}>Bo lo tim kiem</h1>
                            <button className="linttop-btntop"
                                onClick={handle_toptop}
                            >
                                <TbMenuOrder />
                            </button>
                        </div>

                        <div className={`shortop ${toptop ? 'activetoptop' : ''}`}>
                            <div className="list-noisinh">
                                <h3>Noi sinh</h3>
                                <div className="form-np1">
                                    <input type="checkbox"/> Ho Chi Minh City
                                    <br />
                                    <input type="checkbox" /> Da Nang
                                    <br />
                                    <input type="checkbox" /> Ha Noi
                                </div>
                            </div>
                            
                            <div className="list-star">
                                <h3>Danh Gia 5sao tro len</h3>
                                <div className="form-np3">
                                    <div className="icon-np3">
                                        <input type="checkbox" />
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                    </div>
                                    <div className="icon-np3">
                                        <input type="checkbox" />
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiOutlineStar /></i>
                                    </div>
                                    <div className="icon-np3">
                                        <input type="checkbox" />
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                    </div>
                                    <div className="icon-np3">
                                        <input type="checkbox" />
                                        <i><AiTwotoneStar /></i>
                                        <i><AiTwotoneStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                    </div>
                                    <div className="icon-np3">
                                        <input type="checkbox" />
                                        <i><AiTwotoneStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                        <i><AiOutlineStar /></i>
                                    </div>
                                </div>
                            </div>
                            <div className="list-DV">
                                <h3>Sắp xếp theo</h3>
                                <div className="form-np4">
                                    <input type="radio" onClick={() => setCount(1)} name="gia"/> Tăng giá
                                    <br />
                                    <input type="radio"  onClick={() => setCount(2)} name="gia"/> Giảm giá
                                    <br />
                                    <input type="radio"  onClick={() => setCount(0)} name="gia"/> Tất cả giá
                                   
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className="shop-product " >
                        <div className={apple === 1 ? 'product-kinght showleft activeleft' : 'product-kinght showleft'}>
                            {product && fillterlist4(product).map((itemp, index) => (

                                <div className="product-rol1" key={index}  data-aos="fade-up"
                                data-aos-anchor-placement="center-bottom" adta-aos-duration="2000">
                                    <div className="product-imgles1">
                                        <img src={itemp.imagrUrL} alt="" />
                                    </div>
                                    <div className="itemp-nill">
                                        <h1  style={{fontSize:"15px",fontWeight:"600"}}>{itemp.name}</h1>
                                        <small>{itemp.city}</small>
                                        <p>
                                            
                                            Giá lên đời:<span style={{ color: "#7ab317" }}> ${itemp.money}</span>
                                        </p>
                                        <div className="item-icon">
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                            <i><span><AiTwotoneStar /></span></i>
                                        </div>
                                        <div className="btnbox-buy">
                                            <button className="btnbox"
                                                onClick={() => addCart(itemp.id)}
                                            >Add to Cart</button>

                                        </div>
                                        <div className="favatice">
                                            <p>Yêu thích </p>
                                            <Link to=""><span><AiOutlineHeart /></span></Link>
                                        </div>
                                        <div>{Locallsum}</div>
                                    </div>

                                </div>

                            ))}
                        </div>
                        <div className={apple === 2 ? 'product-kinght showleft activeleft' : 'product-kinght showleft'}>
                            {product && fillterlist4(product).map((itemp, index) => (

                                <div className="product-rol2" key={index}>
                                    <div className="product-imgles2">
                                        <img src={itemp.imagrUrL} alt="" />
                                        <div className="product-btnp2">
                                            <button onClick={() => addCart(itemp.id)}>Add to Cart</button>
                                        </div>
                                    </div>

                                    <div className="itemp-nill2">
                                        <h2  style={{fontSize:"15px",fontWeight:"600"}}>{itemp.name}</h2>
    
                                       
                                        <small>{itemp.city}</small>
                                        <p>${itemp.money} USD</p>

                                        <ul>
                                            <li>Chính hãng, Mới 100%, Nguyên seal</li>
                                            <li>Man hinh: <span>LTPO Super Retina XDR OLED – 120Hz</span></li>
                                            <li>Camera sau: <span>48MP, 2x 12MP</span></li>
                                            <li>Camera trước: <span>LTPO Super Retina XDR OLED – 120Hz</span></li>
                                            <li>CPU: <span> A16 Bionic</span></li>
                                            <li>Bộ nhớ: <span>128GB</span> <span>256GB</span></li>
                                            <li>RAM: <span>6GB</span></li>
                                            <li>Hệ điều hành: <span>IOS</span></li>
                                            <li>Pin cong nghe <span>
                                                - Sạc nhanh không dây Magsafe lên đến 15W
                                                <br />
                                                - Sạc không dây chuẩn Qi lên đến 7.5W
                                            </span></li>
                                            <li>Loại sim: <span>Dual Nano-SIM & eSIM</span></li>
                                            <li>Mạng di động: <span>GSM / CDMA / HSPA / EVDO / LTE / 5G</span></li>
                                            <li className="item-icon">
                                                Danh Gia:
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                            </li>
                                        </ul>

                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
                <div className="lag-newshop-chitietbtn3">
                    <a href="#"><button onClick={() => setCount(0)}>1</button></a>
                    <a href="#"><button onClick={() => setCount(1)}>2</button></a>
                </div>
            </div>
        </div>
    )
}