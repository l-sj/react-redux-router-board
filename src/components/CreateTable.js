import React, { Fragment, Component } from 'react'

export default class CreateTable extends Component {
  constructor(){
    super()
    this.state = {
      title: '',
      content: '',
      name: ''
    }
  }

  prevGoBack() {
    this.props.pageProps.history.goBack();
  }

  changeTitleValue(e){
    let value = e.target.value
    this.setState({
      title: value
    })
  }
  changeContentValue(e){
    let value = e.target.value
    this.setState({
      content: value
    })
  }
  changeNameValue(e){
    let value = e.target.value
    this.setState({
      name: value
    })
  }

  borderCreate(e){
    let { title, content, name } = this.state
    this.props.borderCreate(title, content, name, this.props.pageProps)
  }

  render () {
    // console.log('creat render this.props: ', this.props )
    return (
      <Fragment>
        <div id="board_content">
          <form>
            <fieldset>
              <legend>글쓰기</legend>
              <div className="form-group">
                <label htmlFor="title">제목</label>
                <input type="text" className="form-control" id="title" placeholder="제목을 입력하세요." value={ this.state.title } onChange={ this.changeTitleValue.bind(this) } />
              </div>
              <div className="form-group">
                <label htmlFor="content">내용</label>
                <textarea id="content" className="form-control" id="content" rows="3" value={ this.state.content } onChange={ this.changeContentValue.bind(this) }></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="title">작성자</label>
                <input type="text" className="form-control" id="user_name" placeholder="작성자명" value={ this.state.name } onChange={ this.changeNameValue.bind(this) }/>
              </div>
            </fieldset>
          </form>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <button type="submit" className="btn btn-outline-dark btn-sm" onClick={ this.prevGoBack.bind(this) }>목록</button>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.prevGoBack.bind(this) }>취소</button>
              <button type="submit" className="btn btn-outline-primary btn-sm ml-1" onClick={ this.borderCreate.bind(this) }>등록</button>
            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
}