/*
git add .
git commit
=> 이러면 에디터가 나옴 : 여러줄로 커밋메시지를 작성가능합니다.

Convention
    1. Install axios : 동사로 시작, 무엇을 간략하게 했는지
    2. 두번째 줄은 비움
    3. 세번째 줄은 작업한 내용을 알아볼 수 있게 적어줌.
*/

/* 

axios : 강력함

XMLHttpRequest, fetch보다 좋음 

그런데 외장 라이브러리임.

*/
const URL = 'https://dog.ceo/api/breeds/image/random'

axios.get(URL)
    .then(response => {
        console.log(response)
        const imageURL = response.data.message
        const imgBox = document.querySelector('.img-box')
        const newtag = document.createElement('img')
        newtag.src = imageURL
        imgBox.appendChild(newtag)
    })


var getData = async (URL) => {

    response = await axios.get(URL)
    const imageURL = response.data.message
    const imgBox = document.querySelector('.img-box')
    const newtag = document.createElement('img')
    newtag.src = imageURL
    imgBox.appendChild(newtag)
}

getData(URL)