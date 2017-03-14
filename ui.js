(function todoModule() {

//    window.jobApp = window.jobApp || {};

    //This prevents default action
    document.querySelector('form').addEventListener('submit', function addNewItem(eventObj) {
        eventObj.preventDefault();
        console.log('preventDefault function for submission');
        // prevent bubbling: eventObj.stopPropagation();
    });

    document.querySelector('#full-name').addEventListener('blur', function boxBlur(eventObj) {
      console.log(eventObj);
    });

// clicking start over button to output click

    document.querySelector('.btn-warning').addEventListener('click', function outputHello(eventObj){
      console.log('click');
      console.log(eventObj);
    } );

// scrolling the bar to show experience level

    document.querySelector('#exp')
    .addEventListener('change', function scrollExperience(eventObj){

          console.log('did range input change');
          console.log(eventObj);

          document.querySelector('figure').innerText = eventObj.target.value + ' years';
    });


//language checkbox and counter

    let count = 0;

    Array.from(document.querySelectorAll('[name="languages"]'))
      .forEach(function addChangeEvent(checkbox) {
        checkbox.addEventListener('change', function accumalitiveLangagues(eventObj){

          if (eventObj.target.checked){

              count++;

          } else{

              count--;

          }

          console.log(eventObj.target.parentNode.parentNode.childNodes);
          eventObj.target.parentNode.parentNode.childNodes[7].innerText = count + ' languages';

        });
      });
      //
      //  http://requestb.in/17059rw1
      //
      // let emailPromise = fetch(
      //   document.querySelector('#work-url')
      //     .addEventListener('input', forEach(function emailInquiry(eventObj){
      //
      //       console.log(eventObj);
      //
      //       if (emailPromise.status > 199 && emailPromise.status < 300)
      //
      //     })));
      //



})();
