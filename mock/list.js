const lists = [{
    name: 'umi',
    desc: '极快的类 Next.js 的 React 应用框架',
    url: 'https://umijs.org'
},
{
    name: 'antd',
    desc: '一个服务于企业级产品的设计体系',
    url: 'https://ant.design/index-cn'
},
{
    name: 'antd-pro',
    desc: '一个服务于企业级产品的设计体系',
    url: 'https://ant.design/index-cn'
}
];



export default {
    'get /card/queryList': function (req, res) {
        setTimeout(() => {
            res.json(lists);
        }, 1000)
    },

    'get /card/queryData': function (req, res) {
        res.json({
            result: [
                { genre: 'Sports', sold: 275 },
                { genre: 'Strategy', sold: 1150 },
                { genre: 'Action', sold: 120 },
                { genre: 'Shooter', sold: 350 },
                { genre: 'Other', sold: 150 },
            ]
        });
    }


}