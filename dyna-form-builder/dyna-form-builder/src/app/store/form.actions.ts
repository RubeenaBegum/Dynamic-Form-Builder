import { createAction, props } from '@ngrx/store';

export const loadForms = createAction('[Form] Load Forms');
export const loadFormsSuccess = createAction('[Form] Load Forms Success', props<{ forms: any[] }>());
export const loadFormsFailure = createAction('[Form] Load Forms Failure', props<{ error: string }>());

export const addForm = createAction('[Form] Add Form', props<{ form: any }>());
export const updateForm = createAction('[Form] Update Form', props<{ form: any }>());
export const deleteForm = createAction('[Form] Delete Form', props<{ formId: string }>());
export const selectForm = createAction('[Form] Select Form', props<{ formId: string }>());