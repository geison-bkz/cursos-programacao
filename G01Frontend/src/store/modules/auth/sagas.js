import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './action';
import * as types from '../types';

function* loginRequest(payload) {}

export default all([takeLatest(types.LOGIN_REQUEST, loginRequest)]);
