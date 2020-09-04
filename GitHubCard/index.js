import axios from "axios";
/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

axios.get('https://api.github.com/users/MrJmhouston')
  .then(({data}) => {
    cardMaker(data);
    console.log(data)

  })
  .catch(function(error) {

    console.log('There is an error');

  });

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

const cards = document.querySelector(".cards");

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

function cardMaker(info) {

  const card = document.createElement("div");

  const userImg = document.createElement("img");
  card.appendChild(userImg);
  userImg.src = info.avatar_url;

  const cardInfo = document.createElement("div");
  card.appendChild(cardInfo);
  

  const name = document.createElement("h3");
  cardInfo.appendChild(name);
  name.textContent = `${info.name}`;

  const userName = document.createElement("p");
  cardInfo.appendChild(userName);
  userName.textContent = `${info.login}`;

  const userLocation = document.createElement("p");
  cardInfo.appendChild(userLocation);
  userLocation.textContent = `Location: ${info.location}`;

  const profile = document.createElement("p");
  cardInfo.appendChild(profile);
  profile.textContent = "Profile";

  const githubAddress = document.createElement("a");
  profile.appendChild(githubAddress);
  githubAddress.href = info.html_url;
  githubAddress.textContent = `${info.html_url}`;
  

  const followers = document.createElement("p");
  cardInfo.appendChild(followers);
  followers.textContent = `Followers: ${info.followers}`;

  const following = document.createElement("p");
  cardInfo.appendChild(following);
  following.textContent = `Following: ${info.following}`;

  const userBio = document.createElement("p");
  cardInfo.appendChild(userBio);
  userBio.textContent = `Bio: ${info.bio}`;
  

  card.classList.add("card");
  cardInfo.classList.add("card-info");
  name.classList.add("name");
  userName.classList.add("username");

  cards.appendChild(card);
}

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

followersArray.forEach((followers) => {
  let mainURL = "http://api.github.com/users/";
  let followerURL = mainURL.concat(followers);
  axios
    .get(followerURL)
    .then((response) => {
      console.log(response.data);
      const myCard = cardMaker(response.data);
      console.log(myCard);
      cards.appendChild(myCard);
    })
    .catch((error) => {
      // handle error
      console.log("FOUND AN ERROR", error);
    });
});

/*
  STEP 3: Create a function that accepts a single infoect as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
