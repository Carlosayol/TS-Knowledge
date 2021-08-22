import { User } from './user';
import { Company } from './company';
import { CustomMap } from './CustomMap';


const user = new User();
const customMap = new CustomMap('map');
const company = new Company();

customMap.addMarker(user);
customMap.addMarker(company);

