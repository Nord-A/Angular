import { routerReducer } from '@angular-redux/router';
import { combineReducers } from 'redux';
import { sittersReducer } from '../app/portal/sitter-list/sitter.reducer';

export class SittersState {
isBaby: boolean;
}

// My app's state is defined here. Every variable that my application needs,
// should be here.
export class IAppState {
sitters?: SittersState;
}
export const rootReducer = combineReducers<IAppState>({
sitters: sittersReducer,

// router: routerReducer
});