'use strict';
/* 
2. Variable : 읽고 쓰기가 가능
3. Constant : 읽기만 가능, 고정값
    1) 보안 2) 쓰레드 안전 3) 실수 방지 

4. Immutable data types : 절대 변경할 수 없다.(const)
   Mutable data types   : 변경할 수 있다. (let)
   Hoisting data : 선언과 상관없이 최상위에 출력된다. (Var)

5. Operator 
    console.log('my'+'dog'); 문자열 문자열 -> mydog
    console.log('1'+2); : 문자열 과 숫자열 -> 문자열로 변환되어 값 12
    console.log(`string literals: 1 + 2 = ${1 + 2}`); -> 조금 더 편한 방법 \n : 줄바꿈
     || or : 개중에 하나만 true 이면 출력 (첫번째가 true 면 break; 된다. )
     && and : 개중 모두가 ture 면 출력 
     ! not : 반대로 바꾸어준다. 
 