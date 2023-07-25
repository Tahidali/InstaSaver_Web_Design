const urlInput = document.querySelector("input");
const Downloadbtn = document.querySelector("#SubmitBtn");

Downloadbtn.addEventListener("click", async () => {
  try {
    const response = await fetch(urlInput.value);
    const file = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(file);
    link.download = new Date().getTime();
    link.click();
  } catch (error) {
    alert("failed to download to file!");
  }
  console.log("response",response);
});