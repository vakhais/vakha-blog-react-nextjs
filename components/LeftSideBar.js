import { withRouter } from 'next/router'
import Link from 'next/link'
import './LeftSideBar.css'

const PostLink = (props) => (
    <Link as={`/c/${props.title}`} href={`/category?title=${props.title}`}>
        <a style={props.style}>{props.title}</a>
    </Link>
)

const LeftSideBar = withRouter((props, url) => {
    let categoryNm = undefined
    const categorys = props.categorys

    const { router } = props
    categoryNm = router.query.title

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
                    {categorys && categorys.length > 0 && categorys.map((category, index) => 
                        <div className="panel panel-default" key={`category-${index}`}>
                            <div className="panel-heading" role="tab" id="headingOne">
                                <h4 className={`panel-title ${categoryNm === category.nm ? "active" : ""}`}>
                                    <PostLink id={category.id} title={category.nm} style={categoryNm === category.nm ? activeStyle : defaultStyle}/>
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