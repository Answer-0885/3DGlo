import timer from './modules/timer'
import menu from './modules/menu'
import modal from './modules/modal'
import check from './modules/check'
import tabs from './modules/tabs'
import slider from './modules/slider'
import calc from './modules/calc'
import sendForm from './modules/sendForm'


timer('31 january 2022');
menu();
modal();
check();
tabs();
slider();
calc(100);
sendForm({
   formID: 'form1',
   someElem: [{
      type: 'block',
      id: 'total'
   }]
});
sendForm({
   formID: 'form2',
   someElem: [{
      type: 'block',
      id: 'total'
   }]
});
sendForm({
   formID: 'form3',
   someElem: [{
      type: 'block',
      id: 'total'
   }]
});