import request from '../util/request';

export default {
    namespace: 'articles',

    state: {
        articles: []
    },

    effects: {
        *allArticles(data, sagaEffects) {
            const { payload, urlType } = data;
            const { call, put } = sagaEffects;
            const endPointUrl = "/articles/" + urlType + "/" + payload;
            const articles = yield call(request, endPointUrl);
            yield put({ type: 'addArticles', payload: articles });
        }
    },
    reducers: {
        addArticles(state, { payload: article }) {
            return {
                articles: article
            }
        }
    }
}