import { connect } from 'react-redux'
import { SHOW_POSTS } from './../actions/showPosts'
import Content from './../components/content.jsx'

const mapStateToProps = (state, ownProps) => {
    return {
        id: state.post.id,
        content: state.post.content,
        title: state.post.title
    }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch({ type: SHOW_POSTS })
        }
    }
};

const ShowPosts = connect(
    mapStateToProps,
    mapDispatchToProps
)(Content);

export default ShowPosts