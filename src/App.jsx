import './App.css';
import NavBar from './components/NavBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import About from './components/About';
import ProdList from './components/ProdList';
import Connect from './components/Connect';
import Cart from './components/Cart';
import CreateStorage from './context/Storage';
import UserContext, { UserProvider } from './context/Context';
import { useContext, useState } from 'react';
import Home from './components/Home';
import CardProd from './components/CardProd';
import Buy from './components/Buy';
import AddProducts from './components/AddProduct'; 

function App() {
    const storage = CreateStorage();
    const username = useContext(UserContext).username;
    const id = useContext(UserContext).id;
    const user = useContext(UserContext).user;
    const [cartItems, setCartItems] = useState([]);

    const timestamp = new Date().getTime();


    const [products, setProducts] = useState([
        { id: 1, title: "Bag", desc: "תיק עור יוקרתי", price: "75", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_a.jpg" },
        { id: 2, title: "Bag", desc: " תיק קיצי אלגנטי לכלות", price: "150", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_b.jpg" },
        { id: 3, title: "Bag", desc: "תיק צעיר ועדכני", price: "100", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_c.jpg" },
        { id: 4, title: "Bag", desc: "תיק יוקרתי לחמות", price: "120", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_d.jpg" },
        { id: 5, title: "Bag", desc: "תיק מותג חדש!", price: "200", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_e.jpg" },
        { id: 6, title: "Bag", desc: "תיק חדש ועדכני", price: "70", a: "height: 30cm", b: "width: 20cm", c: "depth: 5cm", img: "./images/bag_f.jpg" },
        { id: 7, title: "Hat", desc: "כובע קש אלגנטי", price: "50", a: "אפשרות לבחירת צבע סרט", b: "30% discount", c: "", img: "./images/hat_a.jpg" },
        { id: 8, title: "Bluetooth headphones", desc: "אזניות איכותיות", price: "75", a: "color: black/brown", b: "made in USA", c: "H-40 cm", img: "./images/Bluetooth_headphones.jpg" },
        { id: 9, title: "Bracelet", desc: "צמיד עדין בשילוב יהלומי מעבדה", price: "330", a: "color: silver", b: "H-25 cm", c: "", img: "./images/bracelet_a.jpg" },
        { id: 10, title: "Camera Case", desc: "נרתיק עור למצלמה איכותי וחדיש", price: "30", a: "color: brown/red/pink/black/blue", b: "מוגן ממים", c: "", img: "./images/Camera_case.jpg" },
        { id: 11, title: "CellPhone Wire", desc: "מחזיק שובב לפלאפון מגוון ענק!", price: "7", a: "color: all", b: "for everythings", c: "", img: "./images/Cell_phone_wire_a.jpg" },
        { id: 12, title: "clock", desc: "שעון יד יוקרתי לכל מי שרוצה לפנק", price: "100", a: "sswis made", b: "אחריות לכל החיים", c: "", img: "./images/clock_a.jpg" },
        { id: 13, title: "clock", desc: "שעון מותג איכותי", price: "200", a: "sswis made", b: "אחריות 5 שנים", c: "נגד מים", img: "./images/clock_b.jpg" },
        { id: 14, title: "Glasses", desc: "משקפי שמש מדהימות בעיצוב קולע", price: "75", a: "אפשרות להזמנת מידה", b: "מחיר לפני הנחה 100$", c: "", img: "./images/glasses_a.jpg" },
        { id: 15, title: "Glasses", desc: "משקפי שמש מקוריות ויחודיות", price: "100", a: "אפשרות להזמנת מידה", b: "made in china", c: "", img: "./images/glasses_b.jpg" },
        { id: 16, title: "Glasses", desc: "משקפי שמש מותג", price: "120", a: "אפשרות להזמנת מידה", b: "GUESS", c: "", img: "./images/glasses_c.jpg" },
        { id: 17, title: "Hair Decoration", desc: "קישוט שיער לכלות", price: "30", a: "גומיות שיער מתנה", b: "נשארו 3 אחרונים", c: "", img: "./images/Hair_decoration.jpg" },
        { id: 18, title: "Hat", desc: "מגוון ענק של כובעי קש לכל הגילאים", price: "החל מ-30", a: "color: all", b: "אפשרות להחלפת סרטים", c: "", img: "./images/hat_b.jpg" },
        { id: 19, title: "High heel shoe", desc: "עקבים לכלה ולמי שרוצה להיראות טוב", price: "80", a: "10 cm", b: "size: 38-42", c: "color: black/brown/pink", img: "./images/High_heel_shoe_a.jpg" },
        { id: 20, title: "Makeup", desc: "מברשות איפור איכותיות ויוקרתיות", price: "60", a: "5 סוגים", b: "אחריות שנה", c: "מוזמנים להינות משאר מוצרי החברה", img: "./images/makeup_a.jpg" },
        { id: 21, title: "Perfume", desc: "בושם מותג בריח נדיר חדש!!!", price: "200", a: "40 ml", b: "3 ריחות", c: "coco chanel", img: "./images/Perfume_a.jpg" },
        { id: 22, title: "Ring", desc: "טבעת יוקרתית זהב לבן 24K", price: "300", a: "אפשרות לזהב צהוב", b: "נותרו 10 יחידות", c: "", img: "./images/ring a.jpg" }

    ])
    const addProduct = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
    };
    const deleteProd = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id))

        console.log("its work")
    };

    return (
        <>  <header>
            <img id="logo" src='./images/logo.png' alt="logo" />
        </header>
            <UserProvider value={storage}>
                <BrowserRouter>

                    <NavBar />
                    <Routes>
                        <Route path="Home" element={<Home />} />
                        <Route path="about" element={<About />} />
                        <Route path="products" element={<ProdList products={products} cartItems={cartItems} setCartItems={setCartItems} />} />
                        <Route path="cart" element={<Cart cartItems={cartItems} deleteProd={deleteProd} />} />
                        <Route path="Connect" element={<Connect />} />
                        <Route path="cardProd" element={<CardProd setCartItems={setCartItems} />} />
                        <Route path="addProduct" element={<AddProducts onAdd={addProduct} />} />
                        <Route path="buy" element={<Buy />} />
                    </Routes>
                </BrowserRouter>
            </UserProvider>
        </>
    );
}

export default App;
