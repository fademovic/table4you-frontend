/*
  This is an example factory definition.

  Create more files in this directory to define additional factories.
*/
import Mirage, {faker} from 'ember-cli-mirage';

export default Mirage.Factory.extend({
  // name: 'Pete',                         // strings
  // age: 20,                              // numbers
  // tall: true,                           // booleans

  // email: function(i) {                  // and functions
  //   return 'person' + i + '@test.com';
  // },

  // firstName: faker.name.firstName,       // using faker
  // lastName: faker.name.firstName,
  // zipCode: faker.address.zipCode

  //ovo je izgled unosa u bazu {i} omogucava da dinamicki (u ovom slucaju) dodajes korisnike
  /*firstName(i){ return `Name ${i}`; },
  lastName(i){ return `Surname ${i}`; },
  email(i){ return `Email ${i}`; }, 
  phone(i){ return `Phone ${i}`; },
  pass(i){ return `Pass ${i}`; },          
  passConfirmation(i){ return `Pass ${i}`; },
  city(i){ return `City ${i}`; },
  country(i){ return `Country ${i}`; },
  streetName(i){ return `Adress ${i}`; },
  */

});
