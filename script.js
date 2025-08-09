const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".head-link");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80; // adjust for header height
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
      currentSection = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (currentSection && link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});

window.onload = function () {
  animateProgress("js-progres", "js-percent", 1, 70);
  animateProgress("html-progres", "html-percent", 0, 90);
  animateProgress("java-progres", "java-percent", 0, 60);
  animateProgress("mysql-progres", "mysql-percent", 0, 70);
  animateProgress("git-progres", "git-percent", 0, 60);
  animateProgress("vscode-progres", "vscode-percent", 0, 85);
  animateProgress("eclipse-progres", "eclipse-percent", 0, 75);
};

function animateProgress(barId, percentId, start, end) {
  const progress = document.getElementById(barId);
  const percent = document.getElementById(percentId);
  let value = start;
  const interval = setInterval(() => {
    if (value >= end) {
      clearInterval(interval);
    } else {
      value++;
      progress.value = value;
      if (percent) percent.textContent = value + "%";
    }
  }, 5);
}



function getDetails(){
  

  var uname=document.getElementById("name-txt").value;
  var email=document.getElementById("email-txt").value;
  var phone=document.getElementById("phone-txt").value;
  var message=document.getElementById("message-txt").value;

  if(uname !="" && email !="" && phone !="" && message !=""){ 
    
  }else{
    alert("All fields are required");
  }

  }

 
window.addEventListener('scroll', function() {
    const btn = document.getElementById('back-to-top');
    if (window.pageYOffset > 100) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
document.getElementById('back-to-top').onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
