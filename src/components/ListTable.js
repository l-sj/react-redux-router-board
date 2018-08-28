import React, { Fragment, Component } from 'react'

import TableRow from './TableRow'
import TableRowNoData from './TableRowNoData'
import LoaderSpinners from '../components/LoaderSpinners'

export default class ListTable extends Component {
  constructor(){
    super()
    this.state = {
      input_value: '',
      search_condition_value: 'title'
    }
  }

  componentDidMount(){
    console.log('ListTable: componentDidMount : ', this.props);
    const { paramPageNum, paramPageSize, page_num, page_size, blockCountPerPage } = this.props;
    this.props.fetchListData({ page_num: paramPageNum || page_num, page_size: paramPageSize || page_size, blockCountPerPage });
  }

  componentDidUpdate(){
    console.log('ListTable: componentDidUpdate : ');
  }

  listLengthChange(e){
    const { page_num, blockCountPerPage, pageProps } = this.props;
    this.props.fetchListData({ page_num, page_size: e.target.value, blockCountPerPage, router: pageProps });
  }

  blockPagesLengthChange(e){
    const { page_num, page_size, blockCountPerPage, pageProps } = this.props;
    this.props.fetchListData({ page_num, page_size, blockCountPerPage: e.target.value, router: pageProps});
  }

  orderingChange(e){
    //ordering : 정렬의 기준 (생성일: created_at, 조회수: view_count)
    const { page_num, page_size, blockCountPerPage, pageProps } = this.props;
    this.props.fetchListData({ page_num, page_size, blockCountPerPage, ordering: e.target.value, router: pageProps});
  }

  sortChange(e){
    //sort : 오름차순: ASC, 내림차순: DESC
    const { page_num, page_size, blockCountPerPage, pageProps } = this.props;
    this.props.fetchListData({ page_num, page_size, blockCountPerPage, sort: e.target.value, router: pageProps});
  }

  searchConditionChange(e){
    //search_condition : 검색어 기준 (제목: title, 내용: content)
    console.log( 'searchConditionChange--------------------', e.target.value );
    const { page_num, page_size, blockCountPerPage, pageProps } = this.props;
    this.props.fetchListData({ page_num, page_size, blockCountPerPage, search_condition: e.target.value, router: pageProps});
  }

  searchValueChange(e){
    this.setState({
      input_value: e.target.value
    })
  }
  searchValueSubmit(e){
    //search_value : 검색어
    const { page_num, page_size, blockCountPerPage, search_condition, pageProps } = this.props;
    this.props.fetchListData({ 
      page_num, 
      page_size, 
      blockCountPerPage,
      search_condition: search_condition || this.state.search_condition_value, 
      search_value: this.state.input_value, 
      router: pageProps
    });
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
            <select onChange={ this.listLengthChange.bind(this) } value={ this.props.page_size }>
              <option value='3'>3개씩 보기</option>
              <option value='5'>5개씩 보기</option>
              <option value='10'>10개씩 보기</option>
              <option value='20'>20개씩 보기</option>
            </select>

            {/*blockCountPerPage*/}
            <select onChange={ this.blockPagesLengthChange.bind(this) } value={ this.props.blockCountPerPage }>
              <option value='5'>블럭수 5개</option>
              <option value='10'>블럭수 10개</option>
              <option value='15'>블럭수 15개</option>
            </select>

            {/*ordering*/}
            <select onChange={ this.orderingChange.bind(this) } value={ this.props.ordering }>
              <option value="created_at">등록일 순</option>
              <option value="view_count">조회수 순</option>
            </select>

            {/*sort*/}
            <select onChange={ this.sortChange.bind(this) } value={ this.props.sort }>
              <option value="ASC">오름차순</option>
              <option value="DESC">내림차순</option>
            </select>

            {/*search_condition*/}
            <select onChange={ this.searchConditionChange.bind(this) } value={ this.props.search_condition }>
              <option value="title" checked={ true }>제목</option>
              <option value="content">내용</option>
            </select>

            {/*search_value*/}
            <form className="float-right">
              <fieldset>
                {/* <legend>검색어 입력</legend> */}
                <input type="text" value={ this.state.input_value } 
                  onChange={ this.searchValueChange.bind(this)} />
                <button type="submit" onClick={ this.searchValueSubmit.bind(this) }>검색</button>
              </fieldset>
            </form>
            
          </div>
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