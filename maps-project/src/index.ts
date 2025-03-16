import { Company } from "./Company";
import { CustomMap } from "./CustomMap";
import { User } from "./User";

const user = new User();
console.log(user);
const company = new Company();
console.log(company);
// console.log(google);
const map = new CustomMap('map')
map.addMarker(user)
map.addMarker(company)