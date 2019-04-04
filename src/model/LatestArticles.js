import request from '../util/request';


export default {

    namespace: "hotArticles",

    state: {
        hotArticles: []
    },

    effects: {
        *getHotArticles(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointUrl = "/hotArticles";
            const articles = yield call(request, endPointUrl);
            yield put({ type: 'addHotArticles', payload: articles });
        }
    },

    reducers: {
        addHotArticles(state, { payload: articles }) {
            return {
                hotArticles: articles
            }
        }
    }

}