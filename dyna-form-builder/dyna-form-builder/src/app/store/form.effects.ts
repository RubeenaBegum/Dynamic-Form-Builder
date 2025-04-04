import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, mergeMap, of } from 'rxjs';
import { FormService } from '../services/form.service';
import * as FormActions from './form.actions';

@Injectable()
export class FormEffects {
  constructor(private actions$: Actions, private formService: FormService) {}

  loadForms$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.loadForms),
      mergeMap(() =>
        this.formService.getForms().pipe(
          map(forms => FormActions.loadFormsSuccess({ forms })),
          catchError(error => of(FormActions.loadFormsFailure({ error: error.message })))
        )
      )
    )
  );
}
