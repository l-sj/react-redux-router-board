import React, { Fragment, Component } from 'react'
import { Link } from 'react-router-dom'

export default class UpdateTableButtons extends Component {
  constructor(props){
    super(props)
    // console.log('this.props.title: ', this.props);
    this.state = {
      title: '제목',
      content: '내용',
    }
  }

  // props 값으로 state 변경해줘야 하는 경우
  componentWillReceiveProps(nextProps){
    // this.props 는 아직 바뀌지 않은 상태
    // console.log('nextProps: ', nextProps);
    this.setState({
      title: nextProps.title,
      content: nextProps.content,
    })
  }

  componentDidMount(){
    // console.log('UpdateTable componentDidMount: ', this.props);
    this.props.fetchUpdateData( this.props.pageProps.match.params.id );

    // '취소' 버튼 누른 후 다시 '수정' 버튼을 누르고 접근. 그때는 componentWillReceiveProps 적용이 안되네...그래서 이렇게.
    if( this.props.title != null ){
      this.setState({
        title: this.props.title,
        content: this.props.content,
      })
    }
  }

  // 입력되는 텍스트로 제목 변경
  changeTitleValue(e){
    let text_value = e.target.value
    this.setState({
      title: text_value
    })
    // localStorage.setItem('tempTitle', text_value)
    // console.log( 'localStorage.getItem(tempTitle) : ', localStorage.getItem('tempTitle') );
  }

  // 입력되는 텍스트로 내용 변경
  changeContentValue(e){
    let text_value = e.target.value
    this.setState({
      content: text_value
    })
  }

  // '취소' 버튼 클릭시
  prevGoBack() {
    this.props.pageProps.history.goBack();
  }

  // '수정' 버튼 클릭시
  modifyFunc(){
    this.props.borderUpdate( this.props.id, this.state.title, this.state.content, this.props.pageProps );
  }

  render () {
    // console.log( 'UpdateTable Render: ', this.props );

    return (
      <Fragment>
        <div id="board_content">
          <form>
            <fieldset>
              <legend>글수정</legend>
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
                <input type="text" className="form-control" id="user_name" placeholder={ this.props.user_name } disabled="disabled" />
              </div>
            </fieldset>
          </form>
        </div>
        <div id="board_bottom" className="clearfix">
          <div className="float-right">
            <div className="btn-group mr-2" role="group" aria-label="First group">
              <Link to="/" className="btn btn-outline-dark btn-sm">목록</Link>
            </div>
            <div className="btn-group" role="group" aria-label="Second group">
              <button type="button" className="btn btn-outline-dark btn-sm" onClick={ this.prevGoBack.bind(this) }>취소</button>
              <button type="submit" className="btn btn-outline-primary btn-sm ml-1" onClick={ this.modifyFunc.bind(this) }>수정</button>
            </div>
          </div>
        </div>
        
      </Fragment>
    )
  }
}