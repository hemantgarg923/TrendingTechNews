var apiKey = "df71e747fbee44c3975651451417d024";
var data;
var news = "";

window.onload = () => {
  // ------------- using xhr object -----------------

  let xhr = new XMLHttpRequest();

  xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);

  xhr.onload = function () {
    data = JSON.parse(this.responseText);
    console.log("data fetched successfully");
    console.log(data);
    populateNews(data);

  };

  xhr.send();

  // --------------- using fetch api -----------------

  // fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`).then((response)=>{
  //   console.log("inside first then");
  //   return response.text();
  // }).then((data)=>{
  //   console.log("inside second then");
  //   data = JSON.parse(data);
  //   console.log(data);
  //   populateNews(data);
  // });

}

function populateNews(data) {

  for (let i = 0; i < 10; i++) {
    let singleNews = `<a class="headline accordion-item" data-bs-toggle="collapse" href="#collapseExample${i}" role="button" aria-expanded="false" aria-controls="collapseExample">
          ${data.articles[i].title}
        </a>
        <div class="collapse" id="collapseExample${i}">
          <div class="card card-body">
            ${data.articles[i].description}
            <a href="${data.articles[i].url}" target="_blank">...Read more</a>
          </div>
          </div>
          `;

    news += singleNews;
  }

  document.getElementById("container").innerHTML = news;
}