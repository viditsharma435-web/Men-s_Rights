// Theme Toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});

// Print Page
function printPage() {
  window.print();
}

// Story Form
const storyForm = document.getElementById("storyForm");
const storyList = document.getElementById("storyList");

// Load stories from localStorage
function loadStories() {
  storyList.innerHTML = "";
  const stories = JSON.parse(localStorage.getItem("stories")) || [];
  stories.forEach((story) => {
    const div = document.createElement("div");
    div.classList.add("story");
    div.innerHTML = `<p><strong>${story.name || "Anonymous"}:</strong> ${story.text}</p>`;
    storyList.appendChild(div);
  });
}

storyForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const story = document.getElementById("story").value;

  if (story.trim() === "") return;

  const stories = JSON.parse(localStorage.getItem("stories")) || [];
  stories.push({ name, text: story });
  localStorage.setItem("stories", JSON.stringify(stories));

  document.getElementById("name").value = "";
  document.getElementById("story").value = "";

  loadStories();
});

window.onload = loadStories;

