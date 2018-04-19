/**
 *
 * Asynchronously loads the component for HomeDashboard
 *
 */

import Loadable from 'react-loadable';

export default Loadable({
  loader: () => import('./index'),
  loading: () => null,
});
