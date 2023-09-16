import { createAction, props } from '@ngrx/store';

export interface IGenericError {
    message: string;
    statusCode?: number;
    data?: any;
  }

  
export const fetch = createAction(
  '[JS-CONCURRENCY] Fetch Image',
  props<{ url: string, maxConcurrency: number }>()
);

export const fetchImageSuccess = createAction(
    '[JS-CONCURRENCY] Fetch Image Success',
    props<{urlResponse: string}>()
);

export const fetchImageFailed = createAction(
    '[JS-CONCURRENCY] Fetch Image Failed',
    props<{ error: IGenericError }>()
);
