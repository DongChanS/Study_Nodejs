const API_KEY = '0762641210a06412d2ca0ccb712ba904'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
const IMG_URL = 'http://image.tmdb.org/t/p/w500'


// 1. 빈 무비 데이터를 갖고 있는 Vue 인스턴스 생성
// 2. completed 함수가 실행되면서 movies를 불러온다
// 3. 불러온 movies를 vue의 data안의 movies에 할당한다.

new Vue({
    el: '#main',
    data: {
        searchString: '',
        movies: [],
    },
    computed: {
        filteredMovies: function () {
            // this는 Vue객체를 가리킨다.
            let moviesArray = this.movies
            let searchString = this.searchString

            // '' === 0 이고, 조건문에서는 False가 된다
            // searchString === '', 즉 아무것도 없다면...
            if (!searchString) {
                return moviesArray
            }

            // 대소문자 커버 및 공백 커버
            searchString = searchString.trim().toLowerCase()

            moviesArray = moviesArray.filter(movie => {
                // filter 메소드는 true일 경우에만 원소를 반환한다. 
                // movie.title에 searchString이 포함되면 반환하기

                return movie.title.toLowerCase().includes(searchString)
            })

            // keyword로 sorting한 영화 리스트
            return moviesArray
        }
    },
    // Vue 인스턴스가 초기화 되고나서 실행하는 함수
    // 안에 await가 존재하므로 async를 붙인다.
    async created() {
        const response = await axios.get(URL)
        const movies = response.data.results

        // IMG_URL + path for url of each movie
        // map은 array의 elem을 callback에서 return 값으로 바꾼 새로운 array를 반환함
        const newMovies = movies.map(movie => {
            return { title: movie.title, image: IMG_URL + movie.poster_path }
        })

        this.movies = newMovies
    }

})



