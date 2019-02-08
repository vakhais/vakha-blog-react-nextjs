import dynamic from 'next/dynamic'
import { setPost } from '../util/APIUtils'

// 브라우저에서 사용되는 스크립트 함수들을 사용하는 컴포넌트인경우 서버사이드 렌더링을 할수없어서
// 일반 컴포넌트처럼 사용시 에러유발.
// NOSSR 처리가 필요
const DynamicToastEditorWithNoSSR = dynamic(() => import('../components/ToastEditor/ToastEditor'), {
    ssr: false
})

class PostWrite extends React.Component {
    constructor(props) {
        super(props);

        this.postSubmit = this.postSubmit.bind(this);
    }

    render () {
        console.log("env test:", process.env.REACT_APP_API_BASE_URL)
        return (
            <DynamicToastEditorWithNoSSR submit={this.postSubmit} categorys={this.props.categorys}/>
        )    
    }

    postSubmit(post) {
        console.log("test1111", post)
        const { title, body , categoryId} = post;
        if (!title || !body || !categoryId) return;
        
        // TODO: Post submit

        const postRequest = Object.assign({}, post);
        
        setPost(postRequest)
        .then(response => {
            console.log(response)
            //this.props.history.push("/login");
        }).catch(error => {
            console.log(error)  
            alert(error.message)
        });
    }
}

export default PostWrite;