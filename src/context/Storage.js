import { useState } from "react"

const CreateStorage = () => {
    const [users, setUser] = useState(
        [
            { username: "Dina", id: "123456789" },
            { username: "Tova", id: "987654321" },
            { username: "management", id: "1212" },
            { username: "a", id: "111" }

        ]);
    const [currentUser, setCurrentUser] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);
    const [nane, setNane] = useState("abc");
    const [totalPrice, setTotalPrice] = useState(0);

    const checkManagementUser = (username, id) => {
        const user = users.find(u => u.username === "management" && u.id === "1212");
        if (user) {
            setNane(user.username);
        } else {
            alert("aaa");
        }
    };


    const userLoggedIn = (username, id) => {
        const user = users.find(u => u.username === username && u.id === id)
        if (user) {
            setCurrentUser(user);
        }
        else
            alert("שמך אינו קיים במערכת")
    };


    const userLoggedOut = () => {
        setCurrentUser(null);
    };


    const storage = {
        users,

        checkManagementUser,
        nane,
        currentUser,
        userLoggedIn,
        userLoggedOut,
        selectedProduct,
        setSelectedProduct,
        totalPrice,
        setTotalPrice
    };
    return storage;
}
export default CreateStorage;