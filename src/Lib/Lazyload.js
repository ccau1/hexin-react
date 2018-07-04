import Loadable from 'react-loadable';
import * as R from 'ramda';

export default R.curry((LoaderComponent, loader) => {
  return Loadable({
    loader,
    loading: LoaderComponent
  });
});
