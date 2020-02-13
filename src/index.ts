import {User} from './User';
import {Company} from './Company';

import {CustomMap} from './CustomMap';

const customMap = new CustomMap('map');
const user = new User();
customMap.addMarker(user);
customMap.addMarker(new Company());