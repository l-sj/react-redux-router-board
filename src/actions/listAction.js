export const GET_LIST = 'LIST_GET';
export const LIST_DELETE = 'LIST_DELETE';

// 액션 객체를 만들어주는 액션 생성 함수. 
// 액션 함수를 만드는 이유: 그때 그때 액션을 만들때마다 직접 {이러한 객체} 형식으로 객체를 일일히 생성하는 것이 번거롭기 때문에 이름 함수화한 것. 특히 액션에 다양한 파라미터가 필요해질때 유용.
export const getListDispatch = ( ) => ({
  type: GET_LIST,
});

/*
HTTP Methods - GET, POST, PUT, PATCH, DELETE

HTTP Methods는 HTTP Verbs 라고 불리며, HTTP 신호희 타입들을 분류해 놓은 것.
HTTP Methods는 종류가 많지만, 자주 쓰이는건 GET, POST, PUT, PATCH, DELETE 이다.

해당 내용에서
resource 는 웹페이지(html)
binary data 는 그림파일,  소리파일 등
db data 는 json/xml 혹은 html로 render된 data 를 뜻함.

GET
  서버에게 resource 를 보내달라고 요청.
  서버(혹은 DB)의 resource 는 클라이언트로 전달만 될 뿐 변경되지 않는다.

  예를 들어, 웹브라우저에 http://example.com/exmaple.png 를 입력하면 해당 그림 파일이 표시되고,
  http://example.com/something 을 입력하면 서버가 해당 router에 표시되어야 하는 페이지를 찾아 보여준다.
  참고로 웹브라우저 주소창에 주소를 입력하면 이 신호는 항상 get 으로 요청된다.


POST
  서버에게 resource를 보내면서 생성해 달라고 요청한다.

  예를 들어, 회원가입을 하면 DB에 새로운 회원정보가 등록되고, 사진을 업로드 하면 그 사진이 웹사이트에 등록된다.


PUT
  서버에게 resource 를 업데이트 하거나 resource가 없다면 새로운 resource 를 생성해 달라고 요청.
  회원정보 수정등에 사용된다.
  PUT 은 PATCH 와 비교해서 전체 데이터를 교체하는 부분이 다르다.

  user data 의 구조가 user._id, usesr.firstName, user.lastName, user.age 라고 한다면,
  회원정보 수정시 PUT 은 _id 를 찾아 age만 업데이트 하더라도 항상 모든 필드값을 가져와서 모든 필드를 새로운 값으로 교체한다.


PATCH
  서버에게 resource 의 업데이트를 요청.
  회원정보 수정등에 사용된다.
  PATCH는 PUT과 비교해서 부분 데이터를 업데이트 하는 차이점이 있다.

  user data의 구조가 user._id, user.firstName, user.lastName, user.age 라고 한다면,
  회원정보 수정시 PATCH는 _id 를 찾아 age만 업데이트 할때, _id 와 age만 받아와서 해당 부분을 업데이트 한다.


DELETE
  서버에게 resource의 삭제를 요청.
*/