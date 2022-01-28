import {
   preload,
   done,
   errorForm
} from './helper';
const sendForm = ({
   formID,
   someElem = []
}) => {
   const form = document.getElementById(formID);
   const modal = document.querySelector('.popup');
   const statusBlock = document.createElement('div');
   statusBlock.style.color = 'rgb(25,181,254)';
   const loadText = 'Загрузка...';
   const errorText = 'Ошибка...';
   const successText = 'Спасибо!Наш менеджер с вами свяжется.';

   const validate = (list) => {
      let success = true;

      list.forEach((item) => {
         if (item.classList.contains('form-email')) {
            if (!item.value.match(/.+@.+\..+/gi)) {
               success = false;
               return false;
            }
         } else if (item.classList.contains('form-phone')) {
            if (!item.value.match(/^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{6,}$/gi)) {
               success = false;
               return false;
            }
         } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
            if (!item.value.match(/^[а-яА-Я][а-яА-Я]+[а-яА-Я]?$/g)) {
               success = false;
               return false;
            }
         } else if (item.classList.contains('mess')) {
            if (item.value.match(/[a-zA-Z'][a-zA-Z']+[a-zA-Z']?$/gi)) {
               success = false;
               console.log(item);
               return false;
            }
         }

      });

      return success;
   };

   const sendData = (data) => {
      return fetch('https://jsonplaceholder.typicode.com/posts', {
         method: 'POST',
         body: JSON.stringify(data),
         headers: {
            "Content-Type": "application/json"
         }
      }).then(res => res.json())
   }

   const submitForm = () => {
      const formElements = form.querySelectorAll('input')
      const formData = new FormData(form)
      const formBody = {}

      //Если данные не валидны, то надпись "Загрузка" не появляется.
      if (validate(formElements)) {
         form.append(statusBlock)
         statusBlock.textContent = loadText
      } else {
         statusBlock.textContent = "";
      }

      if (validate(formElements)) {
         if (form.contains(done)) {
            form.removeChild(done);
         }
         if (form.contains(errorForm)) {
            form.removeChild(errorForm);
         }
         if (form.contains(preload)) {
            form.removeChild(preload);
         }

         form.append(statusBlock);
         form.append(preload);
      }

      formData.forEach((val, key) => {
         formBody[key] = val
      })

      someElem.forEach(elem => {
         const element = document.getElementById(elem.id)
         if (elem.type === 'block') {
            formBody[elem.id] = element.textContent
         } else if (elem.type === 'input') {
            formBody[elem.id] = element.value
         }
      })

      if (validate(formElements)) {
         sendData(formBody)
            .then(data => {
               form.removeChild(preload);
               form.append(done);
               statusBlock.textContent = successText

               formElements.forEach(input => {
                  input.value = ''
               });
               //Модальное окно после отправки данных закроется через 3 секунды.
               setTimeout(() => {
                  form.removeChild(statusBlock);
                  form.removeChild(done);
                  if (modal.classList.contains('popup')) {
                     modal.style.display = 'none';
                  }
               }, 3000);
            })
            .catch(error => {
               form.removeChild(preload);
               form.append(errorForm);
               statusBlock.textContent = errorText
               // Сообщение об ошибке исчезнет через 3 секунды
               setTimeout(() => {
                  form.removeChild(errorForm);
                  form.removeChild(statusBlock);
               }, 3000);

            })
      } else {
         alert('Введите пожалуйста Ваше имя и номер телефона')
      }

   }

   try {
      if (!form) {
         throw new Error('Верните форму на место, пожааааалуйста!')
      }

      form.addEventListener('submit', (event) => {
         event.preventDefault()
         submitForm()

      })
   } catch (error) {
      console.log(error.message);
   }
}

export default sendForm