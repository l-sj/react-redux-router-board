import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'
import LoaderSpinners from '../components/LoaderSpinners'

export default class ListTable extends Component {
  constructor(){
    super()
    this.state = {
      search_value: ''
    }
  }
  componentDidMount(){
    console.log('ListTable: componentDidMount : ');
    const { paramPageNum, paramPageSize } = this.props;
    this.props.fetchListData({ paramPageNum, paramPageSize });
  }

  componentDidUpdate(){
    console.log('ListTable: componentDidUpdate : ');
  }

  listLength(e){
    // const page_num = Number(req.query.page_num) || 1;
    // const page_size = Number(req.query.page_size) || 10;
    console.log( 'listLength--------------------' );
    const { page_num, pageProps } = this.props;
    this.props.fetchListData({ paramPageNum: page_num, paramPageSize: e.target.value, router: pageProps });
  }

  blockPageButtonLength(e){
    //const offset = (page_num - 1) * page_size;
    console.log( 'blockPageButtonLength--------------------' );
    const { page_num, page_size, pageProps } = this.props;
    this.props.fetchListData({ paramPageNum: page_num, paramPageSize: page_size, offset: e.target.value, router: pageProps});
  }

  orderingFunc(e){
    //ordering : 정렬의 기준 (생성일: created_at, 조회수: view_count)
    console.log( 'orderingFunc--------------------', e.target.value );
    const { page_num, page_size, pageProps } = this.props;
    this.props.fetchListData({ paramPageNum: page_num, paramPageSize: page_size, ordering: e.target.value, router: pageProps});
  }

  sortFunc(e){
    //sort : 오름차순: ASC, 내림차순: DESC
    console.log( 'sortFunc--------------------', e.target.value );
    const { page_num, page_size, pageProps } = this.props;
    this.props.fetchListData({ paramPageNum: page_num, paramPageSize: page_size, sort: e.target.value, router: pageProps});
  }

  searchConditionFunc(e){
    //search_condition : 검색어 기준 (제목: title, 내용: content)
    console.log( 'searchConditionFunc--------------------', e.target.value );
    const { page_num, page_size, pageProps } = this.props;
    this.props.fetchListData({ paramPageNum: page_num, paramPageSize: page_size, search_condition: e.target.value, router: pageProps});
  }

  searchValueChange(e){
    console.log( 'searchValueChange--------------------', e.target.value );
  }
  searchValueFunc(e){
    //search_value : 검색어
    console.log( 'searchValueFunc--------------------', e.target.value );
    
  }

  render () {
    console.log( 'ListTable Render: ', this.props);
    if(this.props.loading){
      return (
        <LoaderSpinners />
      )
    }
    return (
      <Fragment>
        <div className="board_header clearfix">
          <div className="float-left">
            {/*page_size*/}
            <select onChange={ this.listLength.bind(this) } value={ this.props.paramPageSize }>
              <option value='5'>5개씩 보기</option>
              <option value='10'>10개씩 보기</option>
              <option value='20'>20개씩 보기</option>
            </select>

            {/*blockCountPerPage*/}
            {/* <select onChange={ this.blockPageButtonLength.bind(this) } value={ this.props.paramPageSize }> */}
            <select>
              <option value='5'>블럭수 5개</option>
              <option value='10'>블럭수 10개</option>
              <option value='15'>블럭수 15개</option>
            </select>

            {/*ordering*/}
            <select onChange={ this.orderingFunc.bind(this) } value={ this.props.ordering }>
              <option value="created_at">등록일 순</option>
              <option value="view_count">조회수 순</option>
            </select>

            {/*sort*/}
            <select onChange={ this.sortFunc.bind(this) } value={ this.props.sort }>
              <option value="ASC">오름차순</option>
              <option value="DESC">내림차순</option>
            </select>

            {/*search_condition*/}
            <select onChange={ this.searchConditionFunc.bind(this) } value={ this.props.search_condition }>
              <option value="title">제목</option>
              <option value="content">내용</option>
            </select>

            {/*search_value*/}
            <form className="float-right">
              <fieldset>
                {/* <legend>검색어 입력</legend> */}
                <input type="text" value={ this.state.search_value } 
                  onChange={ this.searchValueChange.bind(this)} />
                <button type="submit" onClick={ this.searchValueFunc.bind(this) }>검색</button>
              </fieldset>
            </form>
            
          </div>

          {/* <div className="float-right">
            <button type="button" className="btn btn-outline-primary btn-sm">등록</button>
          </div> */}
        </div>

        <table className="table">
          <thead className="thead-dark">
            <tr>
              <th scope="col" className="text-center">#</th>
              <th scope="col" className="text-center">제목</th>
              <th scope="col" className="text-center">작성자</th>
              <th scope="col" className="text-center">작성일</th>
              <th scope="col" className="text-center">조회수</th>
            </tr>
          </thead>
          <tbody>
            {
              (this.props.list.length > 0)? this.props.list.map( (row, index) => {
              return( <TableRow { ...row } key={ index } /> )
              }): <TableRowNoData />
            }
          </tbody>
        </table>
      </Fragment>
    )
  }
}