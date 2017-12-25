압축풀면 public, src 폴더 두개가 있어요.

public/index.html 파일을 entry로 해서 번들을 만들어 보세요

 

조건:

parcel 써보세요 (아직 어린 툴이라 생각보다 버그/미숙한 점이 꽤 보이네요)

IE11에서 돌아가야 합니다. (Babel 설정 필요할거에요)

두 가지 script를 package.json에 추가하세요 - start(개발 테스트용으로 웹서버 돌려주는거), build (실제 프로덕션용 빌드)

 

잘 안되고 궁금한게 많을텐데 물어보세요

물어보기 전에 구글링해서 혼자 해결할 수 있으면 베스트.

참고 소스
https://github.com/davidsonsns/parcel-react-app.git

알게된점
1. node v6에서는 동작이 안된다. 
 => 최소 v8은 되어야 하는듯;
2. yarn으로 최초 설치하면 parcel명령어가 없다고 나타난다. 
 => npm으로 설치했음.
