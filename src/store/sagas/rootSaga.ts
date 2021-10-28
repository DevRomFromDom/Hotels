import { takeEvery, call, SagaReturnType, put } from "redux-saga/effects";
import { fetchGetHotels } from "./api";
import { setHotels } from "../actions";
import { action } from "../actions";

export interface Options {
    location: string;
    date: Date;
    range: number;
}

type Hotels = SagaReturnType<typeof fetchGetHotels>;

function* sagaGetHotels(action: action) {
    const options: Options = action.payload;
    try {
        const res: Hotels = yield call(fetchGetHotels, options);
        yield put(setHotels(res));
    } catch (e: any) {
        throw new Error(e);
    }
}

function* rootSaga() {
    yield takeEvery("GET_HOTELS", sagaGetHotels);
}

export default rootSaga;
