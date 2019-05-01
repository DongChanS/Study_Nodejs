const URL = 'https://koreanjson.com/posts/1'

const getPost = async (URL) => {

    const res = await fetch(URL)

    const res2 = await res.json()
    // res.json도 비동기적인 함수임을 유의하자!

    // console.log(res2)
    return res2
}

const good = getPost(URL)
console.log(good)
