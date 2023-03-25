//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector("input").value
  console.log(choice)
  const url = `https://api.nasa.gov/planetary/apod?api_key=O9WGBosH9AkWRMAF6OXFaQ93Jt7Y2Ezvsj1ouczf&date=${choice}`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data)
        document.querySelector(".title").textContent = data.title
        document.querySelector(".explanation-description").textContent = data.explanation        
        document.querySelector(".date").textContent = data.date
        if(data.media_type === "image") {
          document.querySelector("img").src = data.hdurl
          document.querySelector("iframe").style.display = "none"
        } else {
          document.querySelector("iframe").src = data.url
          document.querySelector("img").style.display = "none"
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
}

