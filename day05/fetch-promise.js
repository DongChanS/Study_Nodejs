const URL = 'https://koreanjson.com/posts/1'

const res = fetch(URL)

const res2 = res.then((response) => {
    return response.json()
})

const res3 = res2.then((jsonObj) => {
    console.log(jsonObj)
})