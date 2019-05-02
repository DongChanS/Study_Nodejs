// 고양이
// https://api.thecatapi.com/v1/images/search
const getCatImage = async function() {
    const CatURL = 'https://api.thecatapi.com/v1/images/search';
    let res = await axios.get(CatURL);
    const CatImage = res.data[0].url
    console.log(CatImage)
}

// 강아지
// 
const getDogImage = async function() {
    const DogURL = 'https://dog.ceo/api/breeds/image/random';
    const res = await axios.get(DogURL);
    const DogImage = res.data.message
    console.log(DogImage)
}

const dogAndCat = new Vue({
    el : '#main',
    data : {
        picked : '',
        image : '',
    },
    methods : {
        getDogImage : async function() {
            const DogURL = 'https://dog.ceo/api/breeds/image/random';
            const res = await axios.get(DogURL);
            const DogImage = res.data.message
            this.image = DogImage
        },
        getCatImage : async function() {
            const CatURL = 'https://api.thecatapi.com/v1/images/search';
            let res = await axios.get(CatURL);
            const CatImage = res.data[0].url
            this.image = CatImage
        }
    },
    watch : {
        picked : function() {
            if (this.picked === 'Meow!') {
                this.getCatImage()
            } else if (this.picked === 'Bow!') {
                this.getDogImage()
            }
        }
    }
})