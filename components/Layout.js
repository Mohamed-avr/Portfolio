import Footer from "./Footer";
import Navbar from "./Navbar";


const Layout = ({ children }) => {
    return (
        <div className=" sm:w-11/12 m-auto  ">
            <main>
                {children}
            </main>
        </div>);
}

export default Layout;