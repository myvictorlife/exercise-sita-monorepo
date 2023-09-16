import { createAction, props } from '@ngrx/store';

export interface IGenericError {
    message: string;
    statusCode?: number;
    data?: any;
  }

  
export const fetchImages = createAction(
  '[JS-CONCURRENCY] Fetch Image',
  props<{ url: string, maxConcurrency: number }>()
);

export const fetchImagesSuccess = createAction(
    '[JS-CONCURRENCY] Fetch Image Success',
    props<{urlResponse: string}>()
);

export const fetchImagesFailed = createAction(
    '[JS-CONCURRENCY] Fetch Image Failed',
    props<{ error: IGenericError }>()
);
