import mockjs from 'mockjs';

const tags = [
    {
        "tag": "Own",
        "number": 6
    },
    {
        "tag": "Bhq",
        "number": 57
    },
    {
        "tag": "Houwy",
        "number": 27
    },
    {
        "tag": "Xddsbev",
        "number": 68
    },
    {
        "tag": "Ljbywgsakx",
        "number": 67
    },
    {
        "tag": "Vzeitbx",
        "number": 45
    },
    {
        "tag": "Gxhqhmk",
        "number": 35
    },
    {
        "tag": "Uqlrtlvsi",
        "number": 10
    },
    {
        "tag": "Huyaov",
        "number": 88
    },
    {
        "tag": "Uchku",
        "number": 33
    },
    {
        "tag": "Pvpqcos",
        "number": 32
    },
    {
        "tag": "Todyjz",
        "number": 57
    },
    {
        "tag": "Vgelmqo",
        "number": 37
    },
    {
        "tag": "Tbqtp",
        "number": 33
    },
    {
        "tag": "Tyfbcpetdn",
        "number": 2
    },
    {
        "tag": "Hdzonb",
        "number": 85
    },
    {
        "tag": "Cue",
        "number": 68
    },
    {
        "tag": "Nrquiyc",
        "number": 12
    },
    {
        "tag": "Ivjvt",
        "number": 48
    },
    {
        "tag": "Utrajv",
        "number": 73
    },
    {
        "tag": "Birlilaugj",
        "number": 2
    },
    {
        "tag": "Mafhr",
        "number": 42
    },
    {
        "tag": "Qwrjmdvh",
        "number": 38
    },
    {
        "tag": "Gwem",
        "number": 15
    },
    {
        "tag": "Letcpmcz",
        "number": 52
    },
    {
        "tag": "Mchhuczjp",
        "number": 86
    },
    {
        "tag": "Igxfokj",
        "number": 2
    },
    {
        "tag": "Qvkba",
        "number": 40
    },
    {
        "tag": "Qsynoh",
        "number": 32
    },
    {
        "tag": "Agmgpd",
        "number": 57
    },
    {
        "tag": "Iupghhuu",
        "number": 6
    },
    {
        "tag": "Leapjcv",
        "number": 90
    },
    {
        "tag": "Smrxn",
        "number": 66
    },
    {
        "tag": "Nhwvbdllv",
        "number": 3
    },
    {
        "tag": "Qxmiqdtt",
        "number": 37
    },
    {
        "tag": "Utpti",
        "number": 48
    },
    {
        "tag": "Rmxsdehbv",
        "number": 5
    },
    {
        "tag": "Vwqm",
        "number": 10
    },
    {
        "tag": "Nbmcyl",
        "number": 93
    },
    {
        "tag": "Gfbf",
        "number": 24
    },
    {
        "tag": "细小石则各市",
        "number": 13
    },
    {
        "tag": "结部毛华",
        "number": 38
    },
    {
        "tag": "造教应一出",
        "number": 65
    },
    {
        "tag": "集技历出严",
        "number": 42
    },
    {
        "tag": "要段形你战存",
        "number": 65
    },
    {
        "tag": "被时事次定亲",
        "number": 62
    },
    {
        "tag": "目场整走清",
        "number": 31
    },
    {
        "tag": "质基空只",
        "number": 50
    },
    {
        "tag": "走适团委世",
        "number": 87
    },
    {
        "tag": "及王准如争山",
        "number": 27
    },
    {
        "tag": "时间打与铁从",
        "number": 44
    },
    {
        "tag": "八气阶明",
        "number": 49
    },
    {
        "tag": "权或界性始该",
        "number": 61
    },
    {
        "tag": "般日住多照",
        "number": 22
    },
    {
        "tag": "按己委热",
        "number": 50
    },
    {
        "tag": "转此北形支向",
        "number": 73
    },
    {
        "tag": "专线增该引",
        "number": 56
    },
    {
        "tag": "越持社拉目",
        "number": 73
    },
    {
        "tag": "热专较商地",
        "number": 49
    },
    {
        "tag": "线社年位证",
        "number": 95
    }
];

// for (let i = 0; i < 40; i++) {
//     tags.push(mockjs.mock({
//         tag: mockjs.Random.title(1),
//         number: mockjs.Random.integer(1, 100)
//     }))
// }

// for (let i = 0; i < 20; i++) {
//     tags.push(mockjs.mock({
//         tag: mockjs.Random.ctitle(4, 6),
//         number: mockjs.Random.integer(1, 100)
//     }))
// }



export default {
    'get /tags': function (req, res) {
        res.json(tags)
    },
}