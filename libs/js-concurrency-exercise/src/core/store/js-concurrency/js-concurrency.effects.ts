import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, from, map, mergeMap, of } from "rxjs";
import { ImageCrudService } from "../../services/image-crud/image-crud.service";

import * as fromActions from './js-concurrency.actions';

@Injectable()
export class JsConcurrencyEffects {

    fetchUrls$ = createEffect(() =>
        { return this.actions$.pipe(
            ofType(fromActions.fetchImages),
            mergeMap(({ urls, maxConcurrency }) =>
                from(urls).pipe(
                    mergeMap(url =>
                        this.imageCrudService.fetch(url).pipe(
                            map(urlResponse => {
                                return fromActions.fetchImagesSuccess({ urlResponse })
                            }),
                            catchError((error) => {
                                if (error.url) {
                                    // The API returns a 302 status code, but the response contains the actual URL.
                                    return of(fromActions.fetchImagesSuccess({ urlResponse: error.url }));
                                }
                                return of(fromActions.fetchImagesFailed({ error }))
                            })
                        ),
                        maxConcurrency
                    )
                )
            )
        ) }
    );

    constructor(
        private actions$: Actions,
        private imageCrudService: ImageCrudService
    ) {
    }

}
