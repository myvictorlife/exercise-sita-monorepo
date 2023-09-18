import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { provideMockActions } from '@ngrx/effects/testing';
import { Actions } from '@ngrx/effects';
import { cold, hot } from 'jasmine-marbles';
import { of } from 'rxjs';

import { ImageCrudService } from '../../services/image-crud/image-crud.service';
import * as fromActions from './js-concurrency.actions';
import { JsConcurrencyEffects } from './js-concurrency.effects';
import { waitForAsync } from '@angular/core/testing';

describe('JsConcurrencyEffects', () => {
    let spectator: SpectatorService<JsConcurrencyEffects>;
    let actions: Actions;

    const createEffect = createServiceFactory({
        service: JsConcurrencyEffects,
        providers: [
            provideMockActions(() => actions),
            {
                provide: ImageCrudService,
                useValue: {
                    fetch: jest.fn().mockImplementation((url) => {
                        if (url === 'http://example.com/1.jpg') {
                            return of('http://example.com/1.jpg');
                        } else {
                            return of('http://example.com/2.jpg');
                        }
                    }),
                }
            }
        ]
    });

    beforeEach(() => {
        spectator = createEffect();
    });


    it('should fetch images successfully with concurrency of 1', waitForAsync(() => {
        const urls = ['http://example.com/1.jpg', 'http://example.com/2.jpg'];
        const maxConcurrency = 1;

        actions = hot('-a', {
            a: fromActions.fetchImages({ urls, maxConcurrency })
        });

        const expected = cold('-(bc)', {
            b: fromActions.fetchImagesSuccess({ urlResponse: 'http://example.com/1.jpg' }),
            c: fromActions.fetchImagesSuccess({ urlResponse: 'http://example.com/2.jpg' })
        });

        expect(spectator.service.fetchUrls$).toBeObservable(expected);
    }));

    // Add more tests for other scenarios, including error handling
});
