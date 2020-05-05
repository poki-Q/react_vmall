
import Loadable from 'react-loadable'
import Loading from '../components/loading'

const Index = Loadable({
    loader:() => import('./index/index.js'),
    loading: Loading

})

const List = Loadable({
    loader: () => import('./list'),
    loading: Loading
})

const NotFound = Loadable({
    loader: () => import('./notfound'),
    loading:Loading

})

export {
    Index,
    List,
    NotFound
}