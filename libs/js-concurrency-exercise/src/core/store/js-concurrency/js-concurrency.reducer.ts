
import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import * as fromActions from './js-concurrency.actions';

interface ImagesInfo {
    url: string;
}

export interface State extends EntityState<ImagesInfo> {
  loading: boolean;
  error: fromActions.IGenericError | null;
}

const adapter: EntityAdapter<ImagesInfo> = createEntityAdapter<ImagesInfo>({
  selectId: (rent: ImagesInfo) => rent.url
});

export const initialState: State = adapter.getInitialState({
  error: null,
  loading: false
});

export const reducer = createReducer(
  initialState,
  on(fromActions.fetchImages, (state) => ({ ...state, loading: true })),
  on(fromActions.fetchImagesSuccess, (state, { urlResponse }) => ( adapter.addOne({ url: urlResponse }, { ...state, loading: false, error: null }))),
  on(fromActions.fetchImagesFailed, (state, { error }) =>  ({ ...state, loading: false, error })),
  on(fromActions.resetImagesStore, (state) => ( adapter.removeAll({ ...state, loading: false, error: null}))),
);

export const { selectAll } = adapter.getSelectors();