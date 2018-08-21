import axios from 'axios'
const SERVER_HOST = '127.0.0.1'
const SERVER_PORT = '8800'


export function getBoard (id) {
  return axios.get( `http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,
    {
      crossDomain: true,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  // axios.get(`http://${SERVER_HOST}:${SERVER_PORT}/api/board/${ id }`, {crossDomain: true, responseType: 'json', headers: {'Content-Type': 'application/json'}})
}

export function pushBoardUpdate (id, title, content) {
  return axios.put( `http://${SERVER_HOST}:${SERVER_PORT}/api/board/${id}`,{ title, content },
    {
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )
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