import React, { Component } from 'react'
import { getNow, Markdown } from "../util/common";
import { addArticle } from "../util/api";
import Publish from '@material-ui/icons/Publish';
import '../css/Publish.page.scss'

const markdown = new Markdown()

class PublishPage extends Component{
  constructor (props) {
    super(props)
    this.state = {
      title: '',
      content: '',
      summery: '',
      tags: '',
      type: '',
      date: '',
      preview: '',
    }
    this.onTitleChange = this.onTitleChange.bind(this)
    this.onContentChange = this.onContentChange.bind(this)
    this.onSummeryChange = this.onSummeryChange.bind(this)
    this.onTagsChange = this.onTagsChange.bind(this)
    this.onTypeChange = this.onTypeChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onTitleChange (event) {
    let { value } = event.target



    this.setState({
      title: value,
    })

  }

  onContentChange (event) {
    let { value } = event.target
    let preview = markdown.compile(value)
    this.setState({
      content: value,
      preview,
    })

  }
  onSummeryChange (event) {
    let { value } = event.target


    this.setState({
      summery: value,
    })

  }
  onTagsChange (event) {
    let { value } = event.target
    this.setState({
      tags: value
    })

  }
  onTypeChange (event) {
    let { value } = event.target
    this.setState({
      type: value
    })

  }


  onSubmit (event) {
    event.preventDefault()

    const now = getNow()

    this.setState({
      date: now,
    }, () => {
      addArticle(this.state).then((res) => {
        this.props.history.push('/home')
      })
    })

  }

  createTitlePreview () {
    return `<h1>${this.state.title}</h1>`
  }

  createMarkup () {
    let title = this.createTitlePreview()
    return {__html: title + this.state.preview};
  }

  render () {
    return (
        <main className="publish-main">
          <div className="form-container">
            <form action="">
              <div className="form-item-container">

                <input type="text" onChange={this.onTitleChange} className="input-title"/>
              </div>
              <ul className="toolbar-container">
                <li onClick={this.onSubmit}>
                  <Publish></Publish>
                  <div>发布文章</div>
                </li>
              </ul>
              <div className="form-item-container">
                {/*<label>内容：</label>*/}
                <textarea name="" id="text-editor" cols="30" rows="10" onChange={this.onContentChange}>

                </textarea>
              </div>
              {/*<div className="form-item-container">*/}
              {/*  <label>总结：</label>*/}
              {/*  <textarea name="" id="" cols="30" rows="10" onChange={this.onSummeryChange}>*/}

              {/*  </textarea>*/}
              {/*</div>*/}
              {/*<div className="form-item-container">*/}
              {/*  <label>标签：</label><input type="text" onChange={this.onTagsChange} />*/}
              {/*</div>*/}
              {/*<div className="form-item-container">*/}
              {/*  <label>类别：</label><input type="text" onChange={this.onTypeChange} />*/}
              {/*</div>*/}
              {/*<button type="submit" onClick={this.onSubmit}>提交</button>*/}
            </form>
          </div>
          <div
              className="preview-container"
              dangerouslySetInnerHTML={this.createMarkup()}
          >

          </div>
        </main>
    )
  }
}


export default PublishPage




