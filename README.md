# NextJS

### Page
NextJs에서 page라는 파일명을 찾아 랜더링 하는데 이는 React Component이다.

PageComponent를 랜더링하기 위해서는 nextJS export 방식을 따라야 하는데 export default를 써야한다. export로 바로 export하면 에러가 발생한다.
### Layout

page 근처의 layout 을 불러오는데 상위 layout까지 다 불러오게 된다. 

* page와 같은 폴더의 layout
* page 상위 폴더의 layout
* page 상위 상위... 폴더의 layout