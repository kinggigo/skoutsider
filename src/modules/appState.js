import { handleActions, createAction } from 'redux-actions';
import produce from 'immer';

const MAINNET = 'appstate/MAINNET';
const TESTNET = 'appstate/TESTNET';

export const mainnet = createAction(MAINNET);
export const testnet = createAction(TESTNET);


const initialState = {
    network: 'testnet',
};