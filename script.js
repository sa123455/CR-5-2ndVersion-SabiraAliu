var jsonData = JSON.parse(movies);
console.log(jsonData);
console.table(jsonData);

for (let i = 0; i < jsonData.length; i++) {
    $("#output").append(`
     <div class="col-lg-2 bg-secondary ml-lg-5 mb-2">
     <img class="img-fluid p-lg-1" src="${jsonData[i].image}" alt="">
  </div>
 
  <div class="col-lg-3 bg-secondary mr-2 mb-2">
      <div id="text" class="card-body text-white">${jsonData[i].movieName}
      </div>
      <span class="des mb-5" id="result1">${jsonData[i].description}</span>
      <br>
      <br>
     
      <p id="${i}"><i class="far fa-thumbs-up mr-3"></i> <button class="plus bg-success mr-5">Like</button><span class="points">${jsonData[i].likes}</span>
      
      
  </div>
     
     `)



}


//increment the likes
$(document).ready(function() {
    $(".plus").on("click", function() {
        var index = $(this).parent().attr("id");
        jsonData[index].likes += 1;
        $(this).parent().find(".points").html(jsonData[index].likes);

    })
})