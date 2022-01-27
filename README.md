Framer : 디자이너들을 위해 프로토타입 등을 만들어주는 회사
Framer Motion : Framer가 제공하는 ReactJS 애니메이션 라이브러리

#1. Installation

설치 : npm install framer-motion
motion패키지 => 태그에 직접적으로 애니메이션효과를 못주기 때문에 motion패키지를 통해 나와야함
X <div></div>
O <motion.태그>
styled 태그에 (motion.tag)해도 가능

BUT 오류

( Framer Motion 실행 오류 있으신 분들은 현 시점 기준으로 create-react-app 5버전이 나왔기 때문에
npx create-react-app@5.0.0 my-app --template typescript을 통해
create-react-app 5버전으로 프로젝트를 새로 만드시면 오류없이 진행하실 수 있습니다. )

https://github.com/gsoft-inc/craco/blob/master/packages/craco/README.md#installation

- 버전 5가 아닐때에 수정
  -> CRACO설치 , CRACO는 create-react-app의 설정사항을 override할 수 있게 해줌
  -> CRACO 설치 -> craco.config.js파일 생성 -

Animation
https://www.framer.com/docs/animation

Transition
https://www.framer.com/docs/transition

prop

- initial : 원하느 상태 , element의 초기 상태

Variants란?

- 애니메이션의 Stage(무대)
- https://www.framer.com/docs/introduction/##variants
- 자식 컴포넌트는 기본적으로 부모 컴포넌트의 Variants 값을 받음
- 자식 컴포넌트가 순서대로(시간차) delay되길 원한다면 부모 variants에서 staggerChildren 설정
- 똑같은 delay를 원한다면 delayChildren사용
