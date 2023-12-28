function displayStory(response) {
  new Typewriter("#story", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

function generateStory(event) {
  event.preventDefault();

  let instructionsTopicInput = document.querySelector(
    "#user-instructions-topic"
  );

  let instructionsCharacterInput = document.querySelector(
    "#user-instructions-character"
  );

  let apiKey = "5399eea49f9baa9t4a0de908084b4of2";
  let prompt = `Generate a short story about ${instructionsTopicInput.value} and with ${instructionsCharacterInput.value}`;
  let context =
    "You are great story teller and love to write short stories with a moral lesson. Your mission is to generate a 5 line story in basic HTML. Make sure to follow the user instructions and include the characters below. Please, sign each story with 'SheCodes AI' in <strong>. Generate the story in the same language the user's input is introduced.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating a story...");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiUrl).then(displayStory);
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
