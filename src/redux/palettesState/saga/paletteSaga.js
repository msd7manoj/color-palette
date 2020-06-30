import { takeLatest, put, all, call } from 'redux-saga/effects';
import { normalizeArr, mockApiReq } from '../../../utils/utils';
import { PALETTES_API_DATA } from '../../../constants/paletteAPIData';
import { MOCK_API_DELAY } from '../../../constants/appConstants';
import { PALETTES_ACTIONS } from '../actions/constant';
import { palettesFetchSuccess, palettesFetchError } from '../actions/action';


function* fetchPalettes() {
    try {
        const normalizedData = normalizeArr(PALETTES_API_DATA.data, '_id')
        const data = yield mockApiReq( normalizedData, MOCK_API_DELAY)
        yield put( palettesFetchSuccess(data) )
    } catch(error) {
        const { data } = error.response
        yield put( palettesFetchError(data) )
    }
}

export function* watchPaletteAction() {
    yield takeLatest( PALETTES_ACTIONS.FETCH_DATA_START, fetchPalettes );
}



export function* palettesSagas() {
    yield all([
        call(watchPaletteAction),
    ]);
}