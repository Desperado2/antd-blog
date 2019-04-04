import request from '../util/request';

export default {
    namespace: 'tags',
    state: {
        tags: []
    },

    effects: {
        *getTags(_, sagaEffects) {
            const { call, put } = sagaEffects;
            const endPointUrl = "/tags";
            const tags = yield call(request, endPointUrl);
            yield put({ type: 'addTags', payload: tags })
        }
    },

    reducers: {
        addTags(state, { payload: tags }) {
            return {
                tags: tags
            }
        }
    }


}