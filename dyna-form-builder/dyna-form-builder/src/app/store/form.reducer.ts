import { createReducer, on } from '@ngrx/store';
import * as FormActions from './form.actions';

export interface FormState {
  forms: any[];
  error: string | null;
}

const initialState: FormState = {
  forms: [],
  error: null,
};

export const formReducer = createReducer(
  initialState,
  on(FormActions.loadFormsSuccess, (state, { forms }) => ({ ...state, forms })),
  on(FormActions.loadFormsFailure, (state, { error }) => ({ ...state, error })),
  on(FormActions.addForm, (state, { form }) => ({ ...state, forms: [...state.forms, form] })),
  on(FormActions.updateForm, (state, { form }) => ({
    ...state,
    forms: state.forms.map(f => (f.id === form.id ? form : f)),
  })),
  on(FormActions.deleteForm, (state, { formId }) => ({
    ...state,
    forms: state.forms.filter(f => f.id !== formId),
  }))
);
