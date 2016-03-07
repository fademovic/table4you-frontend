import Base from './Base';

export default Base.extend({
 
 reservation: null,
 
 setReservation(reserve)
 {   
    this.set('reservation', reserve);
 },

   
});