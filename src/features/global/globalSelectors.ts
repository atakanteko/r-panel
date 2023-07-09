import { IStore } from 'types/store/store-types';

export const getPrimaryColor = (state: IStore) => state.global.colorPrimaryBg;
