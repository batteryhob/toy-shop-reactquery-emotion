# 프로젝트 설치
``` javascript
    yarn install
```

# 프로젝트 테스트
``` javascript
    yarn test
```

# 프로젝트 시작
``` javascript
    yarn start
```

# 프로젝트 설명

## 프로젝트의 생성
> 해당 프로젝트는 create-react-app의 redux/toolkit + typescript 템플릿으로 생성되었습니다.



``` shell
    npx create-react-app client --template redux-typescript
```


## 뷰페이지
> View에 해당하는 요소는 /views에서 관리합니다.


특정 View에만 필요한 내부 컴포넌트들은 해당 View의 폴더 하위 /components에서 관리됩니다.

1. /src/views/products: 상품 리스트 뷰
2. /src/views/cart: 장바구니 뷰


## 프로젝트의 상태관리
> 해당 프로젝트의 상태 관리는 redux/toolkit이 사용됩니다.


1. /src/app 스토어 관리
    + store.ts 파일을 통해 상태 관리 비지니스 로직을 reducers에 추가해야 합니다.
2. /src/features 상태 관리 로직
    + 위 폴더에 장바구니에 해당하는 상태 관리 로직이 들어가 있습니다., duck 패턴으로 작성되어 있습니다.


## 프로젝트의 API 비동기 통신
> 해당 프로젝트의 상태 관리는 react-query가 사용됩니다.

1. /src/dummy/apis.ts
    + 위 폴더에 서버로 부터 api를 통해 데이터를 받아오는 걸 가정해 모듈을 만들었습니다.


## 프로젝트의 공용 컴포넌트
> 프로젝트에서 사용되는 공용 컴포넌트들은 /shared 폴더에 작성되어 있습니다.

프로젝트 확장 시, 재사용이 용이한 디자인 요소를 atomical하게 분리하여 공용 컴포넌트로 작성되었습니다.

1. header
2. checkbox


## 사용된 라이브러리
1. react-router-dom
프로젝트 라우팅을 위해 사용됩니다.
``` javascript
yarn add react-router-dom
```
2. intersection-observer
상품 리스트의 페이지네이션을 위해 사용됩니다.
``` javascript
yarn add intersection-observer
```
3. emotion
컴포넌트의 스타일을 위해 사용됩니다.
``` javascript
yarn add @emotion/react @emotion/styled
```