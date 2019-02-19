import React, { Component } from 'react';
import { inject } from 'mobx-react';

//import Editor from 'tui-editor';
import Editor from 'tui-editor'
import 'tui-color-picker/dist/tui-color-picker.min';
import 'tui-editor/dist/tui-editor-extColorSyntax';
import 'codemirror/lib/codemirror.css';
import 'tui-editor/dist/tui-editor.css';
import 'tui-editor/dist/tui-editor-contents.css';
import 'highlight.js/styles/github.css';
import 'tui-color-picker/dist/tui-color-picker.min.css';
import './ToastEditor.css';

let toastEditor;
@inject(({categoryStore: {getCategorys}}, props) => ({
    categorys: getCategorys(),
}))
class ToastEditor extends Component {

    constructor(){
        super();
        this.state = {
            title: "",
            body: "",
            categoryId: "",
            categoryNm: ""
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.onClickSubmit = this.onClickSubmit.bind(this);
    };

    componentDidMount(){
        toastEditor = new Editor({
            el: document.querySelector('#editSection'),
            initialEditType: 'markdown', // 'wysiwyg'
            previewStyle: 'vertical',
            height: '600px',
            exts: ['colorSyntax']
        });
    };

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    onClickSubmit() {
        const content = toastEditor.getHtml();

        const post = {
            title: this.state.title,
            body: content,
            categoryId: this.state.categoryId,
            categoryNm: this.state.categoryNm
        }

        this.props.submit(post);
    }

    render(){
        return (
            <article>
                <div className="form-body">
                    <h1>Edit Post</h1>
                    <form>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Title*</label>
                            <input 
                                type="text" 
                                className="form-control" 
                                name="title"
                                onChange={this.handleInputChange}
                                value={this.state.title} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Category*</label>
                            <select 
                                className="form-control"
                                name="categoryNm"
                                onChange={this.handleInputChange} >
                                {this.props.categorys.map((category, index) => (
                                    <option value={category.nm} key={`option-${index}`}>{category.nm}</option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Body*</label>
                            <div id="toastEditor">
                                <div id="editSection"></div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-success form-btn" onClick={this.onClickSubmit}>Submit</button>
                    </form>
                </div>
            </article>
        );
    };

};

export default ToastEditor;