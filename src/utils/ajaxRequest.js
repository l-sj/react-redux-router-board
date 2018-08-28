import axios from 'axios'
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'

export function getBoardList({ page_num, page_size, ordering, sort, search_condition, search_value, router }) {
  var param = '?';
      
  if ( router != undefined ) {
    (page_num)? param += `pageNum=${page_num}&`: '';
    (page_size)? param += `pageSize=${page_size}&`: '';
    router.history.push(`/${param}`)
  }

  (page_num)? param += `page_num=${page_num}&`: '';
  (page_size)? param += `page_size=${page_size}&`: '';
  (ordering)? param += `ordering=${ordering}&`: '';
  (sort)? param += `sort=${sort}&`: '';
  (search_condition)? param += `search_condition=${search_condition}&`: '';
  (search_value)? param += `search_value=${search_value}&`: '';
  return axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${param}`, 
    {
      crossDomain: true, 
      responseType: 'json', 
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export function getBoard (id) {
  return axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,
    {
      crossDomain: true,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export function pushBoardUpdate (id, title, content) {
  return axios.put(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,
    { title, content },
    {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export function postBoardCreate (title, content, user_name) {
  return axios.post(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/`,
    { title, content, user_name },
    {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
}

export function deleteBoard (id) {
  return axios.delete(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`)
}
/*
container 파일에서
funcTemp = async (id) => {
  const info1 = await ajaxRequest.getBoard(id);
  const info2 = await ajaxRequest.getBoard2(id);

  또는
  const info = await Promise.all([
    ajaxRequest.getBoard(id),
    ajaxRequest.getBoard2(id)
  ])
}

// try, catch

funcTemp = async (id) => {
  try {
    const info = await Promise.all([
      ajaxRequest.getBoard(id),
      ajaxRequest.getBoard2(id)
    ])
  } catch(e) {
    console.log('error occurred', e);
  }
}
*/