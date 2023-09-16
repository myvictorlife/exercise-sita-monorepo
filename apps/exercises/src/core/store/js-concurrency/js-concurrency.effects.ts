import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, from, map, mergeMap, of } from "rxjs";
import { ImageCrudService } from "../../services/image-crud/image-crud.service";

import * as fromActions from './js-concurrency.actions';

@Injectable()
export class JsConcurrencyEffects {

    constructor(
        private actions$: Actions,
        private imageCrudService: ImageCrudService
    ) {
    }

    fetchUrls$ = createEffect(() =>
        this.actions$.pipe(
            ofType(fromActions.fetchImages), // A ação que inicia a busca
            mergeMap(({ url, maxConcurrency }) =>
                from(url).pipe(
                    mergeMap(url =>
                        this.imageCrudService.fetch(url).pipe(
                            map(urlResponse => fromActions.fetchImagesSuccess({ urlResponse })),
                            catchError((error) => of(fromActions.fetchImagesFailed({ error })))
                        ),
                        maxConcurrency
                    )
                )
            )
        )
    );

}
