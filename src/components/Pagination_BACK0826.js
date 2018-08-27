import React, { Fragment, Component } from 'react'

/*
  http://127.0.0.1:8800/api/board?page_num=1
  주소창: ?pageNum=1&pageSize=20&
  page_num,
  page_size,
  totalCount

  - pagination 에서 쓰일 값 정리
    total_count : 전체 게시물 갯수 
      - 스토어에서 이름 : totalCount
      - 데이터에서 전달 받는 값.

    page_list_length : 한 페이지에서 보여줄 게시물 최대 갯수 
      - 스토어에서 이름: page_size
      - 기본값: 10 (입력 받는 값: 주소창(?pageSize=N&), 정렬 버튼)
    
    current_block_num : 현재 블록 번호 
      - 기본값: 1 

    current_page_num : 현재 '페이지 버튼' 번호 
      - 스토어에서 이름: page_num
      - 기본값: current_block_firstNum (입력 받는 값: 주소창(?pageNum=N&), '이전','다음' 버큰 클릭)

    current_block_firstNum : 현재 블록에서 첫번째 '페이지 버튼' 번호
    current_block_lastNum : 현재 블록에서 마지막 '페이지 버튼' 번호

    block_page_length : 블럭에서 보여줄 '페이지 버튼'의 최대 갯수.
      
    block_length : 블록의 총 갯수 
      - 전체 게시물 갯수를 block_page_length 으로 나누고 반올림 한 값.
        Math.ceil(17 / 10)
      - 또는 전체 게시물 갯수를 block_page_length 으로 나눈 나머지 값이 0보다 크다면 나눈 값에 1을 더한다.

    first_block : 첫번째 블록 
      - 무조건 1
      - 마지막 블록과 같을 수 있다.
      - 현재 블록이 첫번째 블록이면 '이전' 버튼 비활성화

    last_block : 마지막 블록 
      - 무조건 블록의 총 갯수와 같음.
      - 첫번째 블록과 같을 수 있다.
      - 현재 블록이 마지막 블록이면 '다음' 버튼 비활성화

    last_block_length : 마지막 블록에서 '페이지 버튼'의 총 갯수
      - block_page_length 보다 작은 경우는 무조건 마지막 블록에서 일어난다.( 마지막 블럭과 첫번째 블로은 같을 수 있다 )   

  '이전' 버튼 클릭시
    current_block_num : 현재 블록 번호 에 1을 뺀다.

  '다음' 버튼 클릭시
    current_block_num : 현재 블록 번호 에서 1을 더한다.

  '페이지 버튼'을 누를때 '리스트' 목록을 조건에 맞게 다시 불러온다.
  주소창 파라메터 변경?

  예)
  total_count : 전체 게시물 갯수 = 17
  block_page_length : 블럭에서 보여줄 '페이지 버튼'의 최대 갯수. = 10

  var total_count = 17,
      block_page_length = 10,
      last_block_length = block_page_length,
      block_length = null,
      remainder_length = null;
  
  block_length = total_count / block_page_length;
  remainder_length = total_count % block_page_length;

  if( remainder_length > 0 ){
    // 나머지 값이 0보다 크다면, block_length 에 1을 더한 값이 블록의 총 갯수이다.
    block_length += 1

    // 마지막 블록에서 '페이지 버튼'의 갯수
    last_block_length = remainder_length
  }

*/

export default class Pagination extends Component {
  constructor(){
    super()
    this.state = {
      buttonPrevDisabled: false,
      buttonNextDisabled: false,
    }
  }

  componentDidMount(){
    this.buttonPrevDisabledCheck();
    this.buttonNextDisabledCheck();
  }

  getPaginationValue(){
    // 업데이트가 이뤄질때마다 새롭게 재정의
    let total_count = this.props.totalCount,
        page_list_length = this.props.page_size,
        current_page_num = this.props.page_num,
    // let total_count = 17,
    //     page_list_length = 5,
    //     current_page_num = 1,
        current_block_num = null, 
        current_block_firstNum = null, 
        current_block_lastNum = null,
        block_page_length = 5,
        block_length = null,
        first_block = 1,
        last_block = null,
        last_block_length = block_page_length;

    //
    // let current_check = Math.floor(current_page_num / block_page_length);
    // // 현재 페이지를 블럭에서 보여주는 페이지 버튼 갯수로 나눈 나머지 값이 0보다 크면 +1
    // current_block_num = (current_page_num % block_page_length > 0)? current_check + 1 : current_check ;
    current_block_num = Math.ceil(current_page_num / block_page_length);
    let remainder = total_count % page_list_length;
    // 전체 게시물 갯수를 블록에서 보여주는 페이지 버튼 갯수로 나눈값. 소수점으로 떨어지면 반올림
    block_length = Math.ceil((total_count / page_list_length) / block_page_length);
    if ( remainder > 0 ) {
      // 마지막 블럭의 버튼 갯수 재정의
      last_block_length = remainder
    };
    last_block = block_length;

    // 현재 블록 번호에 블럭에서 보여주는 페이지 버튼 갯수를 곱한 값
    current_block_lastNum = current_block_num * block_page_length;
    // 현재 블럭 번호에 블럭에서 보여주는 페이지 버튼 갯수를 곱한 값에서 블럭에서 보여주는 페이지 버튼 갯수에서 1을 뺀 값을 뺀값
    current_block_firstNum = current_block_lastNum - ( block_page_length - 1 );
    // 현재 블럭 번호가 마지막 블럭과 같다면
    console.log('current_block_num === last_block ', current_block_num , last_block);
    if ( current_block_num === last_block ) {
      // 마지막 블럭의 '페이지 버튼' 갯수가 블럭에서 보여줘야 하는 '페이지 버튼' 갯수가 다르다면
      console.log('last_block_length != block_page_length ', last_block_length , block_page_length);
      if ( last_block_length != block_page_length ) {
        // 마지막 블럭의 '페이지 버튼' 갯수를 뺀 값이 현재 블럭의 마자미가 '페이지 버튼'의 번호가 된다.
        console.log('current_block_lastNum - last_block_length : ', current_block_lastNum , last_block_length)
        // current_block_lastNum = current_block_lastNum - (block_page_length - last_block_length);
        let a = total_count / page_list_length;
        let b = a / block_page_length;
        let c = Math.ceil(a % block_page_length);
        if ( b === 0 ) {
          current_block_lastNum = c + 1
        } else {
          current_block_lastNum = c
        }
        
        //
        // current_block_firstNum = current_block_lastNum - (( block_page_length - 1 ) - (block_page_length - last_block_length))
      }
    }
    
    return {
      total_count, // 전체 게시물 갯수
      page_list_length, // 한 페이지에서 보여줄 게시물 최대 갯수 
      current_page_num, // 현재 '페이지 버튼' 번호
      current_block_num, // 현재 블록 번호 
      current_block_firstNum, // 현재 블록에서 첫번째 '페이지 버튼' 번호
      current_block_lastNum, // 현재 블록에서 마지막 '페이지 버튼' 번호
      block_page_length, // 블럭에서 보여줄 '페이지 버튼'의 최대 갯수.
      block_length, // 블록의 총 갯수 
      first_block, // 첫번째 블록 
      last_block, // 마지막 블록. 블록의 총 갯수와 같음
      last_block_length, // 마지막 블록에서 '페이지 버튼'의 총 갯수
    }
  }

  // '이전' 버튼 비활성화 체크
  buttonPrevDisabledCheck(){
    let { current_page_num, first_block } = this.getPaginationValue();
    let state_prev = null;
    console.log('buttonPrevDisabledCheck: ',  current_page_num, first_block);
    if( current_page_num === first_block ){
      state_prev = true
    } else {
      state_prev = false
    }
    this.setState({
      buttonPrevDisabled: state_prev,
    })
  }
  // '다음' 버튼 비활성화 체크
  buttonNextDisabledCheck(){
    let { current_page_num, last_block } = this.getPaginationValue();
    let state_next = null;
    console.log('buttonNextDisabledCheck: ',  current_page_num, last_block);
    if( current_page_num === last_block ){
      state_next = true
    } else {
      state_next = false
    }
    this.setState({
      buttonNextDisabled: state_next,
    })
  }

  // 블럭에서 보여주는 페이지 버튼
  pageButtons(){
    let { total_count, page_list_length, current_page_num, current_block_num, current_block_firstNum, current_block_lastNum, block_page_length, block_length, first_block, last_block, last_block_length } = this.getPaginationValue();
    let pageButtons = [];
    /*
    total_count, // 전체 게시물 갯수
    page_list_length, // 한 페이지에서 보여줄 게시물 최대 갯수 
    current_page_num, // 현재 '페이지 버튼' 번호
    current_block_num, // 현재 블록 번호 
    current_block_firstNum, // 현재 블록에서 첫번째 '페이지 버튼' 번호
    current_block_lastNum, // 현재 블록에서 마지막 '페이지 버튼' 번호
    block_page_length, // 블럭에서 보여줄 '페이지 버튼'의 최대 갯수.
    block_length, // 블록의 총 갯수 
    first_block, // 첫번째 블록 
    last_block, // 마지막 블록. 블록의 총 갯수와 같음
    last_block_length, // 마지막 블록에서 '페이지 버튼'의 총 갯수
    */

    // console.log( 'total_count: ', total_count);
    // console.log( 'page_list_length: ', page_list_length);
    console.log( 'current_page_num: ', current_page_num);
    console.log( 'current_block_num: ', current_block_num);
    console.log( 'current_block_firstNum: ', current_block_firstNum);
    console.log( 'current_block_lastNum: ', current_block_lastNum);
    // console.log( 'block_page_length: ', block_page_length);
    // console.log( 'block_length: ', block_length);
    // console.log( 'first_block: ', first_block);
    console.log( 'last_block: ', last_block);
    console.log( 'last_block_length: ', last_block_length);

  

    for( var i = current_block_firstNum; i <= current_block_lastNum ; i++ ){
      pageButtons.push(
        <li key={ i } className={ `page-item ${(i === current_page_num)? 'active' : ''}` }>
          <button type="button" className="page-link" onClick={ this.pageChange.bind(this, i) }>{ i }</button>
        </li>
      )
    }
    return( pageButtons );
  }

  // '페이지 버튼' 클릭
  pageChange(i){
    let { total_count, page_list_length, current_page_num, current_block_num, current_block_firstNum, current_block_lastNum, block_page_length, block_length, first_block, last_block, last_block_length } = this.getPaginationValue();
console.log('-------pageChange: ', i);
    current_page_num = i;

    this.props.pushPagination(current_page_num, page_list_length, this.props.pageProps);
    // this.props.pageProps.history.push(`/${param}`)
  }

  // '이전' 버튼 클릭
  buttonPrevClick(){
    
    //
    buttonPrevDisabledCheck()
  }

  // '다음' 버튼 클릭
  buttonNextClick(){
    //
    buttonNextDisabledCheck()
  }

  render () {
    console.log('Pagination Render: ', this.props);
    return (
      <Fragment>
        <div id="pagination" className="float-right">
          {/* 1) <<, >>는 사용 불가시 li.disabled 추가
          2) [1], [2], [3]의 선택된 페이지는 li.active 추가 */}
          <nav aria-label="board pagination">
            <ul className="pagination mb-0">
              <li className="page-item">
                <button type="button" className="page-link" aria-label="Previous" ref={ (ref) => {
                  this.button_prev = ref
                } } disabled={ this.state.buttonPrevDisabled } onClick={ this.buttonPrevClick.bind(this) }>
                  <span aria-hidden="true">&laquo;</span>
                  <span className="sr-only">Previous</span>
                </button>
              </li>
              { this.pageButtons() }
              {/* <li className="page-item">
                <button type="button" className="page-link">1</button>
              </li> */}
              <li className="page-item">
                <button type="button" className="page-link" aria-label="Next" disabled={ this.state.buttonNextDisabled } onClick={ this.buttonNextClick.bind(this) }>
                  <span aria-hidden="true">&raquo;</span>
                  <span className="sr-only">Next</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}