import { User } from './user';
import { Company } from './company';
import { CustomMap } from './CustomMap';


const user = new User();
const customMap = new CustomMap('map');

customMap.addUserMarker(user);

