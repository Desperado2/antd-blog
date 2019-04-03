export default {
    singular: true,

    plugins: [
        ['umi-plugin-react', {
            antd: true,
            dva: true,
        }]
    ],

    routes: [

        {
            path: '/',
            component: '../layout',
            routes: [
                {
                    path: '/dashboard',
                    routes: [
                        { path: '/dashboard/InfoCard', component: 'Dashboard/InfoCard' },
                        { path: '/dashboard/LatestArticles', component: 'Dashboard/LatestArticles' },
                        { path: '/dashboard/TagCard', component: 'Dashboard/TagCard' },
                        { path: './dashboard/ContentList', component: 'Dashboard/ContentList' }
                    ]
                }
            ]
        }],

    proxy: {
        '/listUsers': {
            target: 'http://localhost:8081',
            changeOrigin: true,
        },
    }
}