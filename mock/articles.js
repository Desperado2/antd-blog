import mockjs from 'mockjs';

const articles = [];

const allTags = ["Own", "Bhq", "Houwy", "Xddsbev", "Ljbywgsakx", "Vzeitbx", "Gxhqhmk", "Uqlrtlvsi", "Huyaov", "Uchku", "Pvpqcos", "Todyjz", "Vgelmqo", "Tbqtp", "Tyfbcpetdn", "Hdzonb", "Cue", "Nrquiyc", "Ivjvt", "Utrajv", "Birlilaugj", "Mafhr", "Qwrjmdvh", "Gwem", "Letcpmcz", "Mchhuczjp", "Igxfokj", "Qvkba", "Qsynoh", "Agmgpd", "Iupghhuu", "Leapjcv", "Smrxn", "Nhwvbdllv", "Qxmiqdtt", "Utpti", "Rmxsdehbv", "Vwqm", "Nbmcyl", "Gfbf", "细小石则各市", "结部毛华", "造教应一出", "集技历出严", "要段形你战存", "被时事次定亲", "目场整走清", "质基空只", "走适团委世", "及王准如争山", "时间打与铁从", "八气阶明", "权或界性始该", "般日住多照", "按己委热", "转此北形支向", "专线增该引", "越持社拉目", "热专较商地"];

const allClassification = ["情导算量计", "备但小前工取", "派她江气南须万", "要因花王级今往", "开要带别心族面也", "求名运断老对", "件构常构以", "布龙其选就", "红走部厂深决", "们命次采再要气"];

const allDate = ["2007-12-14", "1970-07-25", "1982-08-15", "2007-12-05", "2010-02-09", "2013-09-27", "1998-05-30", "1994-11-21", "2018-03-16", "1987-01-13"];

for (let i = 0; i < 34; i++) {
    articles.push(mockjs.mock({
        id: mockjs.Random.guid(),
        title: mockjs.Random.ctitle(8, 20),
        create_date: mockjs.Random.date('yyyy-MM-dd'),
        classification: mockjs.Random.ctitle(4, 8),
        tags: mockjs.mock({
            "array|1-7": [
                mockjs.Random.title(1)
            ]
        }),
    }))
}

function getData() {
    for (let article of articles) {

        let num = article.tags.array.length;
        let index1 = mockjs.Random.integer(0, 9);

        article.classification = allClassification[index1]

        index1 = mockjs.Random.integer(0, 9);
        article.create_date = allDate[index1]

        for (let i = 0; i < num; i++) {
            let index = mockjs.Random.integer(0, 59);
            article.tags.array.splice(i, 1, allTags[index])
        }
    }
}

function filterByTag(tag) {
    let newArticle = [];
    for (let article of articles) {
        if (article.tags.array.includes(tag)) {
            newArticle.push(article)
        }
    }
    return newArticle;
}

function filterByClass(title) {
    let newArticle = [];
    for (let article of articles) {
        if (article.classification === title) {
            newArticle.push(article)
        }
    }
    return newArticle;
}

function filterByCreateDate(date) {
    let newArticle = [];
    for (let article of articles) {
        if (article.create_date === date) {
            newArticle.push(article)
        }
    }
    return newArticle;
}

export default {
    'get /articles/*': function (req, res) {
        let params = req.params[0];
        let urlType = params.split("/")[0];
        let args = params.split("/")[1];
        if (urlType === 'tags') {
            const articles = filterByTag(args);
            res.json(articles);
        } else if (urlType === 'title') {
            const articles = filterByClass(args);
            res.json(articles);
        } else if (urlType === 'date') {
            const articles = filterByCreateDate(args);
            res.json(articles);
        } else {
            getData()
            res.json(articles);
        }


    },


}