
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
  on(fromActions.fetch, (state) => ({ ...state, loading: true })),
  on(fromActions.fetchImageSuccess, (state) => ({ ...state, loading: false, error: null })),
  on(fromActions.fetchImageFailed, (state, { error }) =>  ({ ...state, loading: false, error }))
);

export const { selectAll } = adapter.getSelectors();