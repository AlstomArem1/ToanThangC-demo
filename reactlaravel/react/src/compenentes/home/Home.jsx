
import { useContext } from "react";
import Web1 from "../web-home/web1/web1";
import "./Home.css";
import { AppContext } from "../../AppContext";
import { BiArrowToLeft, BiArrowFromLeft, BiLogoFacebook, BiLogoPinterest } from "react-icons/bi";
import { AiTwotoneStar, AiOutlineHeart, AiOutlineTwitter } from "react-icons/ai";
import { FaFlipboard } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import Ingunll from "../web-home/webimgnull/Ingunll";

import { Link, useParams } from "react-router-dom";
import w1 from "./wine1.webp";
import w2 from "./wine2.webp";

import w4 from "./wine4.webp";
import w5 from "./wine5.webp";
import house1 from "./house1.jpg";
import house2 from "./house2.jpg";
import house3 from "./house3.jpg";
import close from "./giaptiep.jpg";
import slo1 from "./slo1.jpeg";
import slo2 from "./slo2.jpg";
import slo3 from "./slo3.jpeg";
import Appswiper from "../boostrap/swiper/Appswiper";
import 'aos/dist/aos.css';


export default function Home() {
    const { box,
        updateIndex,
        activeIndex,
        today, time,
        hour, minet, product,
        fillterlist5,
        addCart, giaodich } = useContext(AppContext);


    return (
        <div className="home">
            <div className="home_Rong">
                <div className="web1">
                    <div className="web1_start">
                        <div className="start_col1 " >
                            <Web1 />
                            <div className="start_icon">
                                <button
                                    onClick={() => {
                                        updateIndex(activeIndex - 1);
                                    }}
                                    className="indexitemb_btn"><BiArrowToLeft /></button>
                                {box && box.map((itemt, index) => {
                                    return (
                                        <button
                                            key={index}
                                            onClick={() => {
                                                updateIndex(index);
                                            }}
                                            className="icon_btnRadio" >
                                            <span className={`material-symbols-outlined ${index === activeIndex ? "active1" : ""}`}>
                                                radio_button_checked
                                            </span>
                                        </button>
                                    )
                                }
                                )}
                                <button
                                    onClick={() => {
                                        updateIndex(activeIndex + 1);
                                    }}
                                    className="indexitemb_btn"><BiArrowFromLeft /></button>
                            </div>
                            <div className="btn_jst">
                                <Link className="btn-link-1d-sb" to="/shop">
                                    <button className="btn-1d" onClick={() => window.scrollTo(0, 0)}>
                                        <span className="sb">
                                            Buy Now
                                        </span>
                                    </button>
                                </Link>
                                <Link className="btn-link-2d-st" to="/blog">
                                    <button className="btn-2d" onClick={() => window.scrollTo(0, 0)}>
                                        <span className="st">
                                            Reading Now
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className="start_col2" data-aos="zoom-in-left" data-aos-duration="1500">
                            <Ingunll />
                        </div>
                    </div>
                    <div className="web1_end">
                        <div className="endls1_shop">
                            <div className="shop-endchap1">
                                <div className="sale1">
                                    <h1>Flash Sale</h1>
                                </div>
                                <div className="sale2">

                                </div>
                            </div>
                            <div className="shop-endchap2">
                                <div className="shop-today">
                                    <h2>{today}</h2>
                                </div>
                                <div className="shop-times">
                                    <h2>Time: {hour}:{minet}:{time}</h2>
                                </div>
                            </div>
                            <div className="shop-endchap3">
                                <div className="shop-newshop">
                                    {product && fillterlist5(product).map((itemsau, index) => (
                                        <div className="newshop-cartjs" key={index} data-aos="flip-left"
                                        >
                                            <div className="cartjs-imgles">
                                                <img src={itemsau.imagrUrL} alt="" />
                                            </div>
                                            <div className="itemsau_blog">
                                                <h2 style={{fontSize:"15px",fontWeight:"600"}}>{itemsau.name}</h2>
                                                <p>Giá tiền: <span style={{ color: "#7ab317" }}>{itemsau.money}<sup>USD</sup></span></p>
                                                <small>Tặng thêm dịch vụ bảo hành Vip 12 tháng 1 đổi 1</small>
                                            </div>
                                            <div className="itemsau-icon">
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                                <i><span><AiTwotoneStar /></span></i>
                                            </div>
                                            <div className="btnitemsau-buy">

                                                <button className="btnsau"
                                                    onClick={() => addCart(itemsau.id)}
                                                >Add to Cart</button>

                                            </div>
                                            <div className="favatice2">
                                                <p>Yêu thích </p>
                                                <Link to=""><span><AiOutlineHeart /></span></Link>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="web2">
                    <div className="web2_our">
                        <div className="our_blog" data-aos="zoom-out-right" data-aos-duration="1000">
                            <h1 >The best laptops for blogging in 2023</h1>
                            <small>By <span>Matt Hanson</span> last updated May 03, 2023</small>
                            <p>Find the best laptops for blogging, wherever you are and whatever your budget.</p>
                            <div className="our-icon">
                                <i><span style={{ color: "#005bc5" }}><BiLogoFacebook /></span></i>
                                <i><span style={{ color: "#668c4d" }}><AiOutlineTwitter /></span></i>
                                <i><span style={{ color: "red" }}><BiLogoPinterest /></span></i>
                                <i><span style={{ color: "#ff3d00" }}><FaFlipboard /></span></i>
                                <i><span style={{ color: "#c78933" }}><MdOutgoingMail /></span></i>
                            </div>
                            <div className="vtn">
                                <button className="btn_our">
                                    <span>View Photos</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="web2_wine">
                        <div className="wine1">
                            <div className="wine1_ls1" data-aos="fade-down-right" data-aos-duration="1000">
                                <img src={w1} alt="" />
                                <div className="w1">
                                    <p>View at Amazon</p>
                                    <br />
                                    <h3>Excellent battery life and a powerful processor</h3>
                                    <br />
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="wine1_ls1" data-aos="fade-up-right" data-aos-duration="1000">
                                <img src={w2} alt="" />
                                <div className="w1">
                                    <p>Check Amazon</p>
                                    <br />
                                    <h3>The best laptop for blogging overall</h3>
                                    <br />
                                    <button>View Details</button>
                                </div>
                            </div>
                        </div>

                        <div className="wine2" data-aos="zoom-in" data-aos-duration="1000">
                            {/* <img src={w3} alt="" /> */}
                            <div className="w3">
                                <p> View at Microsoft US</p>
                                <br />
                                <h3>A compact laptop that's ideal for writing</h3>
                                <br />
                                <button>View Details</button>
                            </div>
                        </div>

                        <div className="wine3">
                            <div className="wine3_ls2" data-aos="fade-down-left" data-aos-duration="1000">
                                <img src={w4} alt="" />
                                <div className="w2">
                                    <p> View at Microsoft US</p>
                                    <br />
                                    <h3>A compact laptop that's ideal for writing</h3>
                                    <br />
                                    <button>View Details</button>
                                </div>
                            </div>
                            <div className="wine3_ls2" data-aos="fade-up-left" data-aos-duration="1000">
                                <img src={w5} alt="" />
                                <div className="w2">
                                    <p>View at Amazon</p>
                                    <br />
                                    <h3>A great premium laptop for blogging</h3>
                                    <br />
                                    <button>View Details</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="web3" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="web3-left">
                        <h1>OPENING HOURS</h1>
                        <p>Ridiculus mus mauris vitae ultricies leo integer malesuada nunc vel. Ut consequat semper viverra nam libero. Sed odio morbi quis commodo odio.</p>
                        <h3>MON – SAT : <span>10:00AM</span> – <span>9:00PM</span></h3>
                        <h3>SUNDAY – <span>CLOSED</span></h3>
                    </div>
                    <div className="web3-right">
                        <img src={close} />
                    </div>
                </div>
                <div className="home-web4" data-aos="fade-up"
                    data-aos-duration="3000">
                    <div className="web4-new">
                        <div className="web4-Top">
                            <h1>News & Update</h1>
                        </div>
                        <div className="web4-Bottom" >
                            <div className="web4-Bod" style={{ borderLeft: "1px solid #000", borderBottom: "1px solid #000" }}>
                                <div className="Bod-img">
                                    <img src={house1} alt="" />
                                </div>
                                <div className="Bod-blg">
                                    <h1>Address:...</h1>
                                    <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                            <div className="web4-Bod">
                                <div className="Bod-img">
                                    <img src={house2} alt="" />
                                </div>
                                <div className="Bod-blg">
                                    <h1>Address:...</h1>
                                    <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                            <div className="web4-Bod" style={{ borderRight: "1px solid #000", borderTop: "1px solid #000" }}>
                                <div className="Bod-img">
                                    <img src={house3} alt="" />
                                </div>
                                <div className="Bod-blg">
                                    <h1>Address:...</h1>
                                    <p>Watues cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec qua...</p>
                                    <button>READ MORE</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="web5">
                    <div className="web5-wl1" data-aos="fade-left" data-aos-duration="1000">
                        <div className="wl1-start">
                            <img src={slo1} alt="" />
                        </div>
                        <div className="wl1-end" >
                            <h4>Vì sao Apple khai tử đĩa mềm và jack tai nghe dù người dùng chưa từ bỏ?</h4>
                            <p>Từ đĩa mềm đến jack cắm tai nghe tiêu chuẩn 3,5 mm, Apple có truyền thống chủ động loại bỏ một số chuẩn công nghệ phổ biến ra khỏi thiết bị của họ trước khi người dùng thực sự sẵn sàng từ bỏ chúng.</p>
                        </div>
                    </div>
                    <div className="web5-wl2" data-aos="fade-right" data-aos-duration="1000">
                        <div className="wl2-end">
                            <h4> Đây chính là cách bố trí cụm camera trên iPhone 13?</h4>
                            <p>Hình ảnh được cho là của một chiếc smarphone từ Apple đã xuất hiện trên mạng, và tin đồn cho biết đó có thể là iPhone 13 hoặc 12S.
                                Theo hình ảnh này, thay đổi thiết kế đáng kể nhất sẽ là cụm camera sau. Nếu trước đó, camera chính được nâng lên trên bề mặt của bảng điều khiển phía sau và các ống kính riêng lẻ nhô ra cao hơn thì giờ đây, toàn bộ cụm camera sẽ được bao phủ bởi một lớp kính bảo vệ chung.</p>
                        </div>
                        <div className="wl2-start">
                            <img src={slo2} alt="" />
                        </div>
                    </div>
                    <div className="web5-wl3" data-aos="fade-left" data-aos-duration="1000">
                        <div className="wl3-start">
                            <img src={slo3} alt="" />
                        </div>
                        <div className="wl3-end">
                            <h4>Cách Kích Hoạt 5G Trên Điện Thoại IPhone Bạn Cần Biết</h4>
                            <p>Mạng 5G đang bước vào những công đoạn của cuối cùng để phủ sóng tại Việt Nam. Theo đó, ngoài Viettel thì MobiFone và VNPT cũng đang gấp rút hoàn tất chương trình thử nghiệm 5G. Điều này là một bước tiến quan trọng, giúp nước ta lọt vào top những quốc gia triển khai 5G thương mại đầu tiên trên thế giới.</p>
                        </div>
                    </div>
                </div>
                <div className="web6"
                  >
                    <Appswiper />
                </div>
            </div>
        </div>
    )
}
