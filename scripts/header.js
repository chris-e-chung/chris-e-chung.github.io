document.addEventListener("DOMContentLoaded", () => {
    const header1 = document.getElementById("header1");
    const header2 = document.getElementById('header2');

    const trigger = document.getElementById("trigger");
  
    window.addEventListener("scroll", () => {
      const triggerPosition = trigger.getBoundingClientRect().top;
      console.log(triggerPosition);
  
      if (triggerPosition <= 230) {
        header1.classList.add("hidden"); // Hide the header1
        header2.classList.remove("hidden"); // Show the header2

      } else {
        header1.classList.remove("hidden"); // Show the header1
        header2.classList.add("hidden"); // Hide the header2
      }
    });
  });
  