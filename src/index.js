function generateStory(event) {
  event.preventDefault();
  console.log();

  new Typewriter("#story", {
    strings: "Your story will be here",
    autoStart: true,
    delay: 20,
    cursor: null,
  });
}

let storyFormElement = document.querySelector("#story-generator-form");
storyFormElement.addEventListener("submit", generateStory);
