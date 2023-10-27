
import { createContext, useEffect, useState, useLayouEffect} from "react";
import moment from "moment";
import axios from "axios";
import swal from 'sweetalert';
import Aos from "aos";
import { unstable_HistoryRouter } from "react-router-dom";

export const AppContext = createContext({});
export const AppProvider = ({ children }) => {
    const [show, setshow] = useState(true);
    const [apple, setApple] = useState(1);
    const [count, setCount] = useState(0);
    const [check, setCheck] = useState(0);
    const [box, setBox] = useState(null);
    const [product, setProduct] = useState(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [cart, setCart] = useState([]);
    const [navbar, setNavbar] = useState(false);
    const [toptop , setToptop] = useState(true);
    const [close, setClose] = useState(false);

    const handle_toptop = () =>{
        setToptop(!toptop);
    }

    const handle_close = () => {
        setClose(!close);
    }
    var Locallsum = 0;

    const getBox = async () => {
        const url = `https://64733b7bd784bccb4a3c5e84.mockapi.io/link-items`;
        axios.get(url).then(res => setBox(res.data)).catch((error) => {
            if (error.response.status === '404') {

            }
        })
    }
    const getProduct = async () => {
        const url = `https://64733b7bd784bccb4a3c5e84.mockapi.io/clip-shop`;
        axios.get(url).then(res => setProduct(res.data)).catch((error) => {
            if (error.response.status == '404') {

            }
        })
    }
    useEffect(() => {
        getBox();
        getProduct();
        Aos.init();
    }, [],);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = 0;

        } else if (newIndex >= box.length) {
            newIndex = box.length - 1;
        }
        setActiveIndex(newIndex);
    }


    const today = moment().format('MMMM, DD/MM/YYYY');
    const hour = moment().format('hh');
    const minet = moment().format('mm');
    const sec = moment().format('ss');
    const [time, setTime] = useState();
    const Times = () => {
        const sec = moment().format('ss');
        setTime(sec)
    }
    setInterval(Times, 1000);

    const addCart = (id) => {
        const kq = product.find((item) => item.id === id);
        const index = cart.findIndex((item) => item.id === id);
        if (index >= 0) {
            const newList = cart;
            // newList[index]["qty"]++;
            setCart(newList);
        }
        else {
            setCart([...cart, { ...kq, qty: 1 }]);
        }
        swal({
            title: "Complete!",
            text: "Bạn muốn thêm giỏ hàng không?",
            icon: "success",
            button: "Yes",
        });
    }
    const sweetalert = () => {
        const kq = cart && cart.filter((item) => item.id);
        if (kq != 0) {
            swal({
                title: "Giao dịch mua thành công!",
                text: "You clicked the button!",
                icon: "success",
                button: "Next",
            });
        }
        else if (kq == 0) {
            swal({
                title: "No cart yet!",
                text: "Please buy cart!",
                icon: "warning",
                button: "Next",
            });
        }

    }
    const giaodich = () => {
        swal({
            title: "Giao dịch mua thành công!",
            text: "You clicked the button!",
            icon: "success",
            button: "Next",
        });
    }
    const handle_Apple = (e) => {
        setApple(e);
    }
    const minus = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty - (item.qty > 1 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const sum = (id) => {
        const kq = cart && cart.map((item) => (
            item.id === id ? { ...item, qty: item.qty + (item.qty < 5 ? 1 : 0) } : item
        ));
        setCart(kq)
    }
    const InDelete = (id) => {
        const kq = cart && cart.filter((sty) => sty.id !== id);
        setCart(kq);
    }
    const AddDelete = () => {
        const kq = cart && cart.filter((item) => !item.id);
        setCart(kq);
    }
    const Background = () => {
        if (window.scrollY >= 150) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    };
    window.addEventListener('scroll', Background);
    const handle_menu1 = () => {
        setshow(!show);
    }
    const fillterlist5 = (list) => {
        if (check == 0) {
            return [list[9], list[2], list[0], list[6], list[4]];
        }
        else {
            return list;
        }
    }
    const fillterlist4 = (list) => {
        if (count == 1) {
            return [list[8], list[5], list[9], list[3], list[6],list[5],list[4],list[7],list[1]];
        } else if (count == 2) {
            return [list[0], list[2],list[1],list[7],list[4],list[5],list[6],list[3],list[9],list[5]];
        }
        else {
            return list;
        }
    }
    const Guitinnhan = () => {
        swal({
            title: "Complete!",
            text: "Đợi chờ để giao dịch địa chỉ của bạn!",
            icon: "success",
            button: "Next",
        });
    }
    //---------------------------------------------------------------------

    return (
        <AppContext.Provider
            value={{
                box,
                activeIndex,
                setActiveIndex,
                updateIndex,
                today,
                hour,
                minet,
                time,
                product,
                addCart,
                cart,
                InDelete,
                AddDelete,
                minus,
                sum,
                sweetalert,
                Background,
                navbar,
                handle_menu1,
                show,
                fillterlist5,
                handle_Apple,
                apple,
                Locallsum,
                fillterlist4,
                setCount,
                Guitinnhan,
                giaodich,
                handle_toptop,
                toptop,
                handle_close,
                close,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}
