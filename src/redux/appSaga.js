import { all, call } from 'redux-saga/effects';
import { palettesSagas } from './palettesState/saga/paletteSaga';

export default function* appSaga() {
    yield all([
        call(palettesSagas)
    ]);
}