const url =  "https://exceed.superposition.pknn.dev/data/eight"

setInterval(
  get()
  ,3000
)



$('#light-switch').ready(function(){
  $('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
        put('LED','on')
      }
      else if($(this).prop("checked") == false){
        put('LED','off')
      }
  });
});

$('#door').ready(function(){
  $('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
        put('door','open')
      }
      else if($(this).prop("checked") == false){
        put('door','close')
      }
  });
});

$('#buzzer').ready(function(){
  $('input[type="checkbox"]').click(function(){
      if($(this).prop("checked") == true){
        put('buzzer','on')
      }
      else if($(this).prop("checked") == false){
        put('buzzer','off')
      }
  });
});


function checkStatus(myJson) {
  for (value in myJson) {
    if (myJson[value] == "on") {
      $(`#${value}`).attr("checked");
    }else {
      $(`#${value}`).removeAttr('checked')
    }
  }
}



function  get() {
  fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    checkStatus(myJson);
  });
}

// function post(value,status) {
//   let data =  {"data" : 
//         {
          
//         }}
//   postData(`${url}`,data)
//   .then(data => console.log(JSON.stringify(data))) // JSON-string from `response.json()` call
//   .catch(error => console.error(error));

//   function postData(url = '', data = {}) {
//     // Default options are marked with *
//       return fetch(url, {
//           method: 'POST', // *GET, POST, PUT, DELETE, et
//           body: JSON.stringify(data), // body data type must match "Content-Type" header
//   })
//       .then(response => response.json()); // parses JSON response into native JavaScript objects 
//   }
//   }



function put(name,status) {
  fetch((url+ `/${name}`), {
    method: 'PUT', // *GET, POST, PUT, DELETE, et
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      "value" : `${status}`
    }), // body data type must match "Content-Type" header
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error))
}





