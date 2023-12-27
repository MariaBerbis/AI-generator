function generateStory(event) {
  event.preventDefault();

  let apiKey = "5399eea49f9baa9t4a0de908084b4of2";
  let prompt = "";
  let context = "";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayStory);

  new Typewriter("#story", {
    strings: "Your story will be here",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
