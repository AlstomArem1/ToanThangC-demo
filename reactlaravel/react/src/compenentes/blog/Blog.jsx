import "./Blog.css";
import houseblog from "./ip14.jpg"
import spam1 from "./ip14.jpg";
import samsung1 from "./ip14.jpg";
import sl1 from "./ip14.jpg";
import esl1 from "./kp3.webp";
import esl2 from "./kp7.webp";
import esl3 from "./lp6.webp";
import esl4 from "./kp8.webp";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { ImPinterest2 } from "react-icons/im";
import { TfiYoutube } from "react-icons/tfi";
export default function Blog() {
    return (
        <div className="blog12">
            <div className="blog12-container">
                <div className="blog12-zeem1">
                    <div className="zeem1-start">
                        <h1 className="animate__animated animate__bounceInDown">Florian</h1>
                        <p className="animate__animated animate__heartBeat">A lifestyle blog</p>
                    </div>
                    <div className="zeem1-end">
                        <div className="zeem1-imgl">
                            <img src={houseblog} alt="" />
                        </div>
                        <div className="zeem1-we animate__animated animate__flipInY">
                            <small style={{ color: "#f0932b" }}>Welcome to my world</small>
                            <h1>We're passionate about Simplicity and Intentional</h1>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting</p>
                            <button className="we-btn">Continue reading</button>
                        </div>
                    </div>
                </div>
                <div className="blog12-zeem2">
                    <div className="zeem2-start">
                        <h1>Featured Categories</h1>
                    </div>
                    <div className="zeem2-end">
                        <div className="endls-blog">
                            <div className="end-imgs">
                                <img src={esl3} alt="" />
                            </div>
                            <button className="end-tra">Watch read</button>
                        </div>
                        <div className="endls-blog">
                            <div className="end-imgs">
                                <img src={esl3} alt="" />
                            </div>
                            <button className="end-tra">Watch read</button>
                        </div>
                        <div className="endls-blog">
                            <div className="end-imgs">
                                <img src={esl3} alt="" />
                            </div>
                            <button className="end-tra">Watch read</button>
                        </div>
                    </div>
                    <div className="blog12-zeem3">
                        <div className="zeem3-start">
                            <div className="z3-st1">
                                <small>BEAUTY</small>
                                <h3>Beauty Handmade Sweet Gifts for any Occasion for Friends</h3>
                                <small>August 1, 2018 . Florian Geraro</small>
                            </div>
                            <div className="z3-imgls">
                                <img src={samsung1} alt="" />
                            </div>
                            <div className="z3-newspaper">
                                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                            </div>
                        </div>
                        <div className="zeem3-end">
                            <div className="z3-po1">
                                <h4>Recent Posts</h4>
                            </div>
                            <div className="z3-po2">
                                <div className="z3-be1">
                                    <div className="be1-imgs">
                                        <img src={esl3} alt="" />
                                    </div>
                                    <div className="be1-blog">
                                        <small>Beauty</small>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            <br />
                                            <small>August 1, 2018</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="z3-be1">
                                    <div className="be1-imgs">
                                        <img src={esl1} alt="" />
                                    </div>
                                    <div className="be1-blog">
                                        <small>Beauty</small>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            <br />
                                            <small>August 1, 2018</small>
                                        </p>
                                    </div>
                                </div>
                                <div className="z3-be1">
                                    <div className="be1-imgs">
                                        <img src={esl2} alt="" />
                                    </div>
                                    <div className="be1-blog">
                                        <small>Beauty</small>
                                        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                            <br />
                                            <small>August 1, 2018</small>
                                        </p>
                                    </div>
                                </div>

                            </div>
                            <div className="z3-po3">
                                <h4>Subscribe and follow</h4>
                                <div className="z3-bricon">
                                    <span><FaFacebookF /></span>
                                    <span><AiOutlineInstagram /></span>
                                    <span><AiOutlineTwitter /></span>
                                    <span><ImPinterest2 /></span>
                                    <span><TfiYoutube /></span>
                                </div>
                                <div className="z3-po3">
                                    <h4>Must-read articles</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}