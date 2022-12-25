async function populate() {

  const requestURL = 'assets/projects.json';
  const request = new Request(requestURL);

  const response = await fetch(request);
  const projects = await response.json();
  

  let div = $(".projects");
  let offset = 3;
  for(let i = 0; i < projects.length; i++) {
    
    console.log(projects[i])
    var cardDiv = $('<div></div>').addClass("col p-4 mb-5")
    
    var card = $('<div></div>').addClass("card")
    card.append($('<img/>').attr('class', "card-img-top").attr('src', projects[i]["img"]))


    var cardBody = $('<div></div>').addClass(`card-body ${projects[i]["color"]}-bg`).append($("<h4></h4>").addClass("card-title").text(projects[i]["name"]))
    var description = $('<p></p>').addClass("card-text").text(projects[i]["description"])
    var tags = $('<p></p>').addClass("card-tag").text(projects[i]["tags"])

    cardBody.append(description)
    cardBody.append(tags)

    // if (projects[i]["url"] != "") {
    //   let anchor = $('<a></a>').attr("href", projects[i]["url"]).attr("target","_blank").attr("rel", "noopener noreferrer")
    //   anchor.append($("<i></i>").addClass("card-link bi bi-box-arrow-up-right text-right pl-1"))
    //   tags.append(anchor)
    // }
      
    
    card.append(cardBody)

    cardDiv.append(card)
    div.append(cardDiv)
  }

}



// <div class="card card2">
//           <img class="card-img-top" src="assets/img/seattle.png">
//           <div class="card-body text-center">
//             <h6 class="card-title">seattle, wa</h6>
//           </div>
//         </div>