import Header from './Header';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar'

const Layout = ({categorys, children}) => {
    return (
        <div>
            <Header/>
            <div className="contant-area">
                <div className="container">
                    <div className="row row-offcanvas row-offcanvas-left">
                        <LeftSideBar categorys={categorys}/>
                        {children}
                    </div>
                </div>
            </div>        
            <Footer/>
        </div>
    )   
};

export default Layout;