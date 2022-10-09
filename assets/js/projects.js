async function populate() {

  const requestURL = 'assets/projects.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const projects = await response.json();
  

  let div = $(".projects");
  let offset = 3;
  for(let i = 0; i < 6; i++) {
    
    console.log(projects[i])
    // var $card  = $("<div>", {"class": "card", "text": projects[i]["name"]})
    // var $cardBody = $("<div", {"class": "card-body text-center"})
    // $("<h6>", {"class": "card-title", "text": projects[i]["name"]}).appendTo($cardBody)
    var cardDiv = $('<div></div>').addClass("col-lg-3 d-flex justify-content-center")
    
    var card = $('<div></div>').addClass("card project-card mt-5 mb-5")
    var cardBody = $('<div></div>').addClass("card-body").append($("<h6></h6>").addClass("card-title").text(projects[i]["name"]))
    var tags = $('<p></p>').addClass("card-subtitle")
    var tagList = projects[i]['tags']
    for(let j = 0; j < tagList.length; j++) {
      tags.append($('<span></span>').text(tagList[j]).addClass("card-tag"))
    } 
    if (projects[i]["url"] != "") {
      let anchor = $('<a></a>').attr("href", projects[i]["url"]).attr("target","_blank").attr("rel", "noopener noreferrer")
      anchor.append($("<i></i>").addClass("card-link bi bi-box-arrow-up-right text-right pl-1"))
      tags.append(anchor)
    }
      
    
    cardBody.append(tags)

   
    card.append($('<img/>').attr('class', "card-img-top").attr('src', projects[i]["img"]))
    card.append(cardBody)
    cardDiv.append(card)

    if (offset == 0) {
      cardDiv.addClass("offset-lg-2")
      // let newRow = $("<div></div>").addClass("row")
      // div.append(newRow)
      // div = newRow
      offset = 3;
    }

    div.append(cardDiv)
    offset--;
  }

}



// <div class="card card2">
//           <img class="card-img-top" src="assets/img/seattle.png">
//           <div class="card-body text-center">
//             <h6 class="card-title">seattle, wa</h6>
//           </div>
//         </div>