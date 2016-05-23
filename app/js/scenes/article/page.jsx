import React from 'react';
import PageHeader from '../../components/page_header.jsx';
import PageFooter from '../../components/page_footer.jsx';
import Articles from './containers/articles.js';
import Aside from './components/aside.jsx';

class Home extends React.Component {
    render() {
        return (
        <div>
            <PageHeader>Blog</PageHeader>
            <Articles />
            <Aside>
                <p>Lorem ipsum dolor sit amet, cu duo alia erat corpora.</p>
                <p>Ei nibh porro mundi qui, ne omnes integre vocibus qui. Graeci reprehendunt ei nec.</p>
            </Aside>
            <PageFooter>
                <h2>This is a footer</h2>
            </PageFooter>
        </div>
        )
    }
}


export default Home;

