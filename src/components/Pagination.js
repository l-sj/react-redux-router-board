import React, { Fragment, Component } from 'react'

export default class Pagination extends Component {
  constructor(){
    super()
  }

  componentDidMount(){
  }

  componentDidUpdate(){
    console.log('componentDidUpdate');
  }


  getPaginationValue(){
    // 업데이트가 이뤄질때마다 새롭게 재정의
    let total_count = Number(this.props.totalCount),
        page_list_length = Number(this.props.page_size),
        current_page_num = Number(this.props.page_num),
        current_block_num = null, 
        current_block_firstNum = null, 
        current_block_lastNum = null,
        block_page_length = Number(this.props.blockCountPerPage),
        block_length = null,
        first_block = 1,
        last_block = null,
        last_block_length = block_page_length,
        page_buttons_length = null;
        
    // 페이지 버튼 총 갯수
    page_buttons_length = Math.ceil(total_count / page_list_length);
    // 페이지 버튼 총 갯수를 블럭에서 보여줄 '페이지 버튼'의 최대 갯수로 나눈 나머지 값.
    let last_block_remainder = page_buttons_length % block_page_length;
    // 블럭 총 갯수/ 마지막 블럭 번호
    block_length = Math.ceil(page_buttons_length / block_page_length);
    last_block = block_length;
    // 마지막 블럭의 '페이지 버튼' 갯수
    if (last_block_remainder > 0) {
      last_block_length = last_block_remainder
    }
    // 현재 블럭의 번호
    current_block_num = Math.ceil(current_page_num / block_page_length);
    // 현재 블럭이 마지막 블럭이라면, 현재 블럭에서 마지막 '페이지 버튼' 의 번호는 재설정
    if (current_block_num === last_block) {
      // (현재 블럭 번호 * 블럭에서 보여줄 '페이지 버튼'의 최대 갯수) - (블럭에서 보여줄 '페이지 버튼'의 최대 갯수 - 나머지 값(나머지 값은 0보다 큰값))
      current_block_lastNum = (current_block_num * block_page_length) - (block_page_length - last_block_length);
    } else {
      current_block_lastNum = current_block_num * block_page_length;
    }
    current_block_firstNum = (block_page_length * (current_block_num - 1)) + 1
   

    // console.log( 'total_count: ', total_count);
    // console.log( 'page_list_length: ', page_list_length);
    // console.log( 'current_page_num: ', current_page_num);
    console.log( 'current_block_num: ', current_block_num);
    // console.log( 'current_block_firstNum: ', current_block_firstNum);
    // console.log( 'current_block_lastNum: ', current_block_lastNum);
    // console.log( 'block_page_length: ', block_page_length);
    // console.log( 'block_length: ', block_length);
    // console.log( 'first_block: ', first_block);
    console.log( 'last_block: ', last_block);
    console.log( 'last_block_length: ', last_block_length);

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
      page_buttons_length,
    }
  }

  // 이전 버튼
  prevButton(){
    let { current_block_num, first_block } = this.getPaginationValue();
    return (
      <li className="page-item">
        <button type="button" className="page-link" aria-label="Previous"
          disabled={ (current_block_num === first_block)? true : false } 
          onClick={ this.buttonPrevClick.bind(this) }>
          <span aria-hidden="true">&laquo;</span>
          <span className="sr-only">Previous</span>
        </button>
      </li>
    )
    
  }
  // 다음 버튼
  nextButton(){
    let { current_block_num, last_block } = this.getPaginationValue();

    return (
      <li className="page-item">
        <button type="button" className="page-link" aria-label="Next" 
          disabled={ (current_block_num === last_block)? true : false } 
          onClick={ this.buttonNextClick.bind(this) }>
          <span aria-hidden="true">&raquo;</span>
          <span className="sr-only">Next</span>
        </button>
      </li>
    )
  }

  // 블럭에서 보여주는 페이지 버튼
  pageButtons(){
    let { current_page_num, current_block_firstNum, current_block_lastNum } = this.getPaginationValue();
    let pageButtons = [];
    
    for( var i = current_block_firstNum; i <= current_block_lastNum ; i++ ){
      pageButtons.push(
        <li key={ i } className={ `page-item ${(i === current_page_num)? 'active' : ''}` }>
          <button type="button" className="page-link" onClick={ this.pageChange.bind(this, i) }>{ i }</button>
        </li>
      )
    }
    return ( pageButtons );
  }

  // '페이지 버튼' 클릭
  pageChange(clickPageNum){
    let { page_list_length } = this.getPaginationValue();
    const router = this.props.pageProps;

    this.props.pushPagination({ page_num: clickPageNum, page_size: page_list_length, router });
  }

  // '이전' 버튼 클릭
  buttonPrevClick(){
    let { page_list_length, current_block_firstNum,  block_page_length } = this.getPaginationValue();
    const router = this.props.pageProps;

    this.props.pushPagination({ page_num: (current_block_firstNum - block_page_length), page_size: page_list_length, router });
  }

  // '다음' 버튼 클릭
  buttonNextClick(){
    let { page_list_length, current_block_lastNum, block_page_length } = this.getPaginationValue();
    const router = this.props.pageProps;

    this.props.pushPagination({ page_num: (current_block_lastNum + 1), page_size: page_list_length, router });
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
              { this.prevButton() }
              { this.pageButtons() }
              { this.nextButton() }
            </ul>
          </nav>
        </div>
      </Fragment>
    )
  }
}