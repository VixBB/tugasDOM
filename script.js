const button = document.getElementById("tombol");
const teks = document.getElementById("teks");
    button.addEventListener("click",
 () => {
      button.textContent = "Clicked!";
      button.style.backgroundColor = "red";
      teks.style.color = "red";
    });