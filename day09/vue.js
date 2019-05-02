/*
1. 다량의 영화 데이터를 가져오기
   - axios, async-await
2. input 태그의 값이 변경됨을 인식하기
   - v-model
3. 수집한 영화 데이터 중에서 input태그의 값을 포함하는 데이터를 자동으로 가져오기
   - computed
4. 가져온 영화 데이터를 html에 보여주기
   - v-for, v-bind
*/


const vm = new Vue({
    el : "#main",
    data : {
        searchString : '',
        
    }
})