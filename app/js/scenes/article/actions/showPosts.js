export const SHOW_POSTS = 'SHOW_POSTS';

export const showPosts = () => {
    console.log('SHOW_POSTS actions');
    return {
        type: SHOW_POSTS
    }
};