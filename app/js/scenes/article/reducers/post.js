import { combineReducers } from 'redux'
import { SHOW_POSTS } from './../actions/showPosts'

const initialArticle = {
    id: 0,
    title: 'Title',
    content: 'Lorem ipsum dolor sit amet, no partem inermis vocibus vix, et cum inani petentium patrioque. Eu pro dolore legendos, vel aperiri albucius salutandi te. Mel ut altera vivendum. Ei virtute contentiones duo, eu sed animal senserit, nostro scripserit has eu. Mei ad mnesarchum scriptorem, aliquip accusata nec in. Per eu commune sapientem, ex mei abhorreant definiebas.'
};

const post = (state = initialArticle, action) => {
    switch (action.type) {
    case SHOW_POSTS:
        console.log('reducer: helloWorld');
        return {
            ...state,
            title: "New Title"};
    default:
        return state
    }
};

const Posts = combineReducers({
    post
});

export default Posts;
