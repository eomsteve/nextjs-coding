# NextJS

### Page
NextJs에서 page라는 파일명을 찾아 랜더링 하는데 이는 React Component이다.

PageComponent를 랜더링하기 위해서는 nextJS export 방식을 따라야 하는데 export default를 써야한다. export로 바로 export하면 에러가 발생한다.
### Layout

page 근처의 layout 을 불러오는데 상위 layout까지 다 불러오게 된다. 

* page와 같은 폴더의 layout
* page 상위 폴더의 layout
* page 상위 상위... 폴더의 layout


### image

최적화된 이미지를 넣으려면 img tag안에 src속성으로 넣는게 아닌 NextJS에서 제공하는 `Image` 컴포넌트 사용

> 최적화된 이미지란? Lazy loading, Layout Shifting, 사이즈 최적화가 된 이미지를 뜻한다. NextJs의 Import 컴포넌트는 이를 다 처리해준다.

Image 컴포넌트 사용시 이미지들을 import해줘야 한다.

외부 이미지 삽입시 이미지의 width와 height를 넣어주어야 한다.

next.config파일도 수정해서 url을 허용해 주어야한다.
```js
const nextConfig = {
  ...,
  images : {
    remotePatterns : [
      {
        protocol : 'https',
        hostname : 's3.amazonaws.com',
        port : '',
        pathname: '/cart'
      }
    ]
  }
}
```

### component

NextJs에서는 `server component`와 `client component` 두가지 종류가 있다.

default는 server component 

컴포넌트 최 상단에 `use client`를 넣고 만들면 client component가 된다. 

* server component
  * html에 자바스크립트 기능 넣기 불가능 == jsx문법이나, onClick같은 문법이 안됨
  * useState, useEffect등 사용 불가
  * js가 없어 로딩 속도가 빠르다
  * 검색엔진 노출에 유리하다
  * 큰 페이지

* client component
  * 자바스크립트 기능 사용가능
  * React 문법 사용 가능
  * 자바스크립트 파일을 가져오기 때문에 로딩 필요
  * hydration 필요함 (html파일을 js로 다시 읽고 로딩하는것)
  * JS가 필요한 곳만


NextJs에서는 deduplication을 지원한다. 랜더링시 data를 fetch함수로 가져오게 되는데 여러번 호출하게 될 경우 알아서 중복해서 요청하지 않고 한번 호출해 재활용한다.
