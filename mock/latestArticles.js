import mockjs from 'mockjs';

const hotArticles = []

for (let i = 0; i < 3; i++) {
    hotArticles.push(mockjs.mock({
        id: mockjs.Random.guid(),
        title: mockjs.Random.ctitle(4, 10),
        description: mockjs.Random.ctitle(10, 30),
        image: mockjs.Random.image('80x80', '#50B347', '#FFF', 'Mock.js'),
    }))
}



export default {
    'get /hotArticles': function (req, res) {
        res.json(hotArticles)
    }
}