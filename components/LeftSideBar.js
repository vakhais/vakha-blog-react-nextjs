import { withRouter } from 'next/router'
import { Link } from 'next/link'
import './LeftSideBar.css'

const LeftSideBar = withRouter((props) => {
    let categoryId = undefined
    const categorys = props.categorys

    const { router } = props
    categoryId = router.query.categoryId

    const activeStyle = {
        color: "#fff",
        background: "#66bb6a"
    }

    const defaultStyle = {
        color: "#000",
        background: "#fff"
    }

    return (
        <div className="col-md-3 col-sm-4 col-xs-6 sidebar-offcanvas" id="sidebar">
            <div className="left-sidebar">
                <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                    {categorys.map((category, index) => 
                        <div className="panel panel-default" key={`category-${index}`}>
                            <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className={`panel-title ${Number(categoryId) === Number(category.id) ? "active" : ""}`}>
                                    <a href={`/category/${category.categoryNm}`} 
                                        onClick={() => router.push({pathname:`/category/${category.categoryNm}`, query:{categoryId: category.id}})}
                                        style={Number(categoryId) === Number(category.id) ? activeStyle : defaultStyle} >
                                        {category.categoryNm}
                                    </a>
                                </h4>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
})

export default LeftSideBar;