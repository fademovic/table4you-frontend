export default function() {

  // These comments are here to help you get started. Feel free to delete them.

  this.get('/restaurants', function() {
    return [
    {
      restaurantId:1 ,
      name: 'Restoran1',
      streetName: 'Adresa1',
      city: 'Grad1',
      country: 'Drzava1',
      image:'/assets/images/popular.jpg'
    }, 
    {
      restaurantId:2,
      name: 'Restoran2',
      streetName: 'Adresa2',
      city: 'Grad2',
      country: 'Drzava2',
      image:'/assets/images/new.jpg'
    }, 
    {
      restaurantId:3, 
      name: 'Restoran3',
      streetName: 'Adresa3',
      city: 'Grad3',
      country: 'Drzava3',
      image:'/assets/images/jumbotron.jpg'
    },
    {
      restaurantId:4 ,
      name: 'Restoran4',
      streetName: 'Adresa4',
      city: 'Grad4',
      country: 'Drzava4',
      image:'/assets/images/popular.jpg'
    },
    {
      restaurantId:5 ,
      name: 'Restoran5',
      streetName: 'Adresa5',
      city: 'Grad5',
      country: 'Drzava5',
      image:'/assets/images/new.jpg'
    },
    {
      restaurantId:6 ,
      name: 'Restoran6',
      streetName: 'Adresa6',
      city: 'Grad6',
      country: 'Drzava6',
      image:'/assets/images/jumbotron.jpg'
    },
    {
      restaurantId:7 ,
      name: 'Restoran7',
      streetName: 'Adresa7',
      city: 'Grad7',
      country: 'Drzava7',
      image:'/assets/images/popular.jpg'
    },
    {
      restaurantId:8 ,
      name: 'Restoran8',
      streetName: 'Adresa8',
      city: 'Grad8',
      country: 'Drzava8',
      image:'/assets/images/new.jpg'
    },
    {
      restaurantId:9 ,
      name: 'Restoran9',
      streetName: 'Adresa9',
      city: 'Grad9',
      country: 'Drzava9',
      image:'/assets/images/jumbotron.jpg'
    }
    ];
  });


  this.get('/restaurants/1', function() {
    return {
      restaurantId:1, 
      name: 'Restoran1',
      streetName: 'Adresa1',
      city: 'Grad1',
      country: 'Drzava1', 
      image:'/assets/images/popular.jpg'
    };
  });

    this.get('/restaurants/2', function() {
    return {
      restaurantId:2, 
      name: 'Restoran2',
      streetName: 'Adresa2',
      city: 'Grad2',
      country: 'Drzava2', 
      image:'/assets/images/new.jpg'
    };
  });

  this.get('/restaurants/3', function() {
    return {
      restaurantId:3, 
      name: 'Restoran3',
      streetName: 'Adresa3',
      city: 'Grad3',
      country: 'Drzava3', 
      image:'/assets/images/jumbotron.jpg'
    };
  });

  this.get('/restaurants/4', function() {
    return {
       restaurantId:4, 
      name: 'Restoran4',
      streetName: 'Adresa4',
      city: 'Grad4',
      country: 'Drzava4', 
      image:'/assets/images/popular.jpg'
    };
  });







  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */
  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Route shorthand cheatsheet
  */
  /*
    GET shorthands

    // Collections
    this.get('/contacts');
    this.get('/contacts', 'users');
    this.get('/contacts', ['contacts', 'addresses']);

    // Single objects
    this.get('/contacts/:id');
    this.get('/contacts/:id', 'user');
    this.get('/contacts/:id', ['contact', 'addresses']);
  */
  /*this.get('ovdje ide moja url kreiran u servisu vezanom za ovo/popular-Restaurants',function()
  {
    return 
    {
      data: [
      {
        type:'popular-Restaurants',
        id:1,
        attributes:
        {
          image:'assets/images/popular.jpg',
          adress: Adresa1,
          name: Resotran1
        }
      },
      {
        type:'popular-Restaurants',
        id:2,
        attributes:
        {
          image:'assets/images/popular.jpg',
          adress: Adresa2,
          name: Resotran2
        }
      }  
      }]
    };
        });

  }*/

  /*
    POST shorthands

    this.post('/contacts');
    this.post('/contacts', 'user'); // specify the type of resource to be created
  */

  /*
    PUT shorthands

    this.put('/contacts/:id');
    this.put('/contacts/:id', 'user'); // specify the type of resource to be updated
  */

  /*
    DELETE shorthands

    this.del('/contacts/:id');
    this.del('/contacts/:id', 'user'); // specify the type of resource to be deleted

    // Single object + related resources. Make sure parent resource is first.
    this.del('/contacts/:id', ['contact', 'addresses']);
  */

  /*
    Function fallback. Manipulate data in the db via

      - db.{collection}
      - db.{collection}.find(id)
      - db.{collection}.where(query)
      - db.{collection}.update(target, attrs)
      - db.{collection}.remove(target)

    // Example: return a single object with related models
    this.get('/contacts/:id', function(db, request) {
      var contactId = +request.params.id;

      return {
        contact: db.contacts.find(contactId),
        addresses: db.addresses.where({contact_id: contactId})
      };
    });

  */

  



}

/*
You can optionally export a config that is only loaded during tests
export function testConfig() {

}
*/
