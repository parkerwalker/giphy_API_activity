$(onReady);
var oops = "https://media.giphy.com/media/80TEu4wOBdPLG/giphy.gif?response_id=5925e85668c66efd24a18672";

function  onReady(){
  console.log('js link');

  $('#search').on('click', newGif);
  $('.display').on('click', '#remove', deleteGif);
  $('.display').on('click', '#favoritesButton', addFav);
}

function newGif(){
  var input = $('#input').val();

  if (input === ''){
    alert('Please enter search');
  }
  else{

    var searchURL = 'http://api.giphy.com/v1/gifs/search?q=' + input + '&api_key=dc6zaTOxFJmzC';



    $.ajax({
      url: searchURL,
      type: 'GET',
      dataType: 'JSON',
      success: function(response){
        if (response.data.length === 0){
          $('.display').append('<img src=' + oops +'>')
          reset();
        }
        else{


      var url =  response.data[0].images.downsized.url;
      var textUrl = '<img src=' + url + '><br><button id="remove">remove</button>';
      textUrl += '<button id="favorites">favorites</button>';

      var append = $('.display').append('<div class="results">' + textUrl + '</div>');

      console.log(response);

      }//end success
    }//end else for error  
    });//end ajax
  };//end newGif
  reset();
}
//end else

function reset(){
  document.getElementById('input').value = '';
}//end reset

function deleteGif(){
  $(this).parent().remove();
}

function addFav(){
  $(this).parent().appendTo('.favorites');
}
