import {fork} from 'redux-saga/effects'

import {rootSaga} from '../rootSaga';
import {auth} from '../../modules'

describe("rootSaga", () => {
    test("rootSaga works properly", () => {
        const genRoot = rootSaga();

        expect(genRoot.next().value).toEqual(fork(auth.sagas.watchAuth));
        expect(genRoot.next().done).toBe(true);
    })
})