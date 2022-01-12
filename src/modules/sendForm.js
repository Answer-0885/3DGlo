const sendForm = ({
   formId,
   someElem = []
}) => {
   const form = document.getElementById(formId);
   const statusBlock = document.createElement('div')
   const loadText = 'Загрузка...'
   const errorText = 'Ошибка...'
   const successText = 'Спасибо!Наш менеджер с вами свяжется.'

   const validate = (list) => {
      let success = true;

      list.forEach((item) => {
         if (item.classList.contains('form-email')) {
            if (item.value.match(/[^A-Za-z0-9@\-_.!~*']/, "")) {
               success = false;
               return false;
            }
         } else if (item.classList.contains('form-phone')) {
            if (item.value.match(/[^0-9()+\-]/, "")) {
               success = false;
               return false;
            }
         } else if (item.classList.contains('form-name') || item.classList.contains('top-form')) {
            if (item.value.match(/\w+/, "")) {
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

      statusBlock.textContent = loadText
      form.append(statusBlock)

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
               statusBlock.textContent = successText

               formElements.forEach(input => {
                  input.value = ''
               });
            })
            .catch(error => {
               statusBlock.textContent = errorText
            })
      } else {
         alert('Данные не валидны!!!')
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