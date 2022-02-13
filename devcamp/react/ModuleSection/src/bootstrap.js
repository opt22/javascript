// ES6 code goes here
console.log('es6 code goes here');

//import { greeting } from './helper';
//import { multiply } from './helper';

import navigation, { greeting, multiply } from './navigation';
//import navigation, { greeting, multiply } from './navigation';

//import * as nav from '.navigation';

console.log(navigation());

console.log(greeting);

console.log(multiply(2,5));
