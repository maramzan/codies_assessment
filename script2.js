const showCodeBtns = document.querySelectorAll(".show-code-btn");

showCodeBtns.forEach((btn) => {
  btn.addEventListener("click", async () => {
    btn.classList.toggle("clicked");
    const questionNo = btn.id.replace("show-btn", "");
    if (btn.classList.contains("clicked")) {
      btn.textContent = "Hide Code";
      const response = await fetch("script.js");
      const text = await response.text();
      const startMarker = `// START OF PROBLEM NO ${questionNo}`;
      const endMarker = `// END OF PROBLEM NO ${questionNo}`;
      const start = text.indexOf(startMarker) + startMarker.length;
      const end = text.indexOf(endMarker);
      const sectionCode = text.slice(start, end);
      document.getElementById(`code-snippet${questionNo}`).textContent =
        sectionCode;
    } else {
      btn.textContent = "Show Code";
      document.getElementById(`code-snippet${questionNo}`).textContent = "";
    }
  });
});
