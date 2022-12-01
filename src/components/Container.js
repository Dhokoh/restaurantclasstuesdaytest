import { Outlet, Link } from "react-router-dom";
import Header from './Header'
import Body from "./Body";
import Footer from "./Footer";

const Container = () => {
    return (
        <>
            <Header />
                <Outlet />  
            <Footer />
        </>
    )
}
export default Container;