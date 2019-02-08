import Header from './Header';
import Footer from './Footer';
import LeftSideBar from './LeftSideBar'
import {inject, observer} from 'mobx-react';

@inject(({categoryStore: {getCategorys}}, props) => ({
    categorys: getCategorys(),
  }))
export default class Layout extends React.Component {
    render() {
       const { categorys, children } = this.props

        return (
            <div>
                <Header/>
                <div className="contant-area">
                    <div className="container">
                        <div className="row row-offcanvas row-offcanvas-left">
                            <LeftSideBar categorys={categorys}/>
                                <div className="col-md-9 col-sm-8 col-xs-12">
                                    <div className="main-content">
                                        {children}
                                    </div>
                                </div>
                        </div>
                    </div>
                </div>        
                <Footer/>
            </div>
        )   
    }
}
// const Layout = ({categorys, children}) => {
//     return (
//         <div>
//             <Header/>
//             <div className="contant-area">
//                 <div className="container">
//                     <div className="row row-offcanvas row-offcanvas-left">
//                         <LeftSideBar categorys={categorys}/>
//                             <div className="col-md-9 col-sm-8 col-xs-12">
//                                 <div className="main-content">
//                                     {children}
//                                 </div>
//                             </div>
//                     </div>
//                 </div>
//             </div>        
//             <Footer/>
//         </div>
//     )   
// };