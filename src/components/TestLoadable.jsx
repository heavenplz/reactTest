import React, { Suspense } from 'react'
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom'
// import PageHome from 'lazy!@/components/PageHome'

import Loadable from 'react-loadable';

// import("./PageHome").then(math => {
//        console.log("12345"+math)
//      })

// const PageHome = React.lazy(() => import("./PageHome").then((e) => {
//     console.log(e);
//   }));


// const Page3 = React.lazy(() => import("@/components/Page3"));
// import PageHome from '@/components/PageHome'

const Loading = ({ pastDelay, timedOut, error }) => {
    if (pastDelay) {
        return <div><Icon type="loading" /></div>;
    } else if (timedOut) {
        return <div>Taking a long time...</div>;
    } else if (error) {
        return <div>Error!</div>;
    }
    return null;
};
const PageHome = Loadable({
    loader: () => import('./PageHome'),
    loading: Loading,
    timeout: 10000
});
const Page3 = Loadable({
    loader: () => import('@/components/Page3'),
    loading: Loading,
    timeout: 10000
});

export default class TestLoadable extends React.Component {
    render() {
        return <BrowserRouter><div>123333</div>
            <Link to="/abc">test1</Link><br />
            <Link to="/a3">test2</Link>

            <Switch>
                <Route path="/abc" component={PageHome} />
                <Route path="/a3" component={Page3} />
            </Switch>

        </BrowserRouter>
    }
}