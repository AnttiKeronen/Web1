document.getElementById("my-button").addEventListener("click", function () {
  console.log("hello world");
  document.querySelector("h1").textContent = "Moi maailma";
});

document.getElementById("add-data").addEventListener("click", function () {
  const text = document.getElementById("custom-text").value;

  const listItem = document.createElement("li");
  listItem.textContent = text;

  document.getElementById("my-list").appendChild(listItem);
});
