const classButtons = document.querySelectorAll(".classes-btn button");
const contentArea = document.querySelector(".btn-classes");

const classData = {
  Yoga: {
    title: "Why are your Yoga?",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing<br />
                elit. Laboriosam necessitatibus ut accusantium quia,<br />
                corrupti placeat perferendis ipsa exercitationem voluptatum vel
                facere<br />
                ipsum provident! Distinctio, alias? Quasi eum,<br />
                cupiditate explicabo earum dolorum consequuntur minima,
                inventore<br />
                possimus, corrupti maxime error quia repellendus quibusdam
                <br />debitis quisquam? Molestias id esse, unde repellendus<br />
                placeat assumenda.`,
    schedule: `
      <p>Saturday–Sunday: 8:00am – 10:00am</p>
      <p>Monday–Tuesday: 10:00am – 12:00pm</p>
      <p>Wednesday–Friday: 3:00pm – 6:00pm</p>
    `,
    img: "images/yoga.jpg",
  },

  Group: {
    title: "Group Training",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing<br />
                elit. Laboriosam necessitatibus ut accusantium quia,<br />
                corrupti placeat perferendis ipsa exercitationem voluptatum vel
                facere<br />
                ipsum provident! Distinctio, alias? Quasi eum,<br />
                cupiditate explicabo earum dolorum consequuntur minima,
                inventore<br />
                possimus, corrupti maxime error quia repellendus quibusdam
                <br />debitis quisquam? Molestias id esse, unde repellendus<br />
                placeat assumenda.`,
    schedule: `<p>Everyday: 9:00am – 11:00am</p>`,
    img: "images/group.webp",
  },

  Solo: {
    title: "Solo Training",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing<br />
                elit. Laboriosam necessitatibus ut accusantium quia,<br />
                corrupti placeat perferendis ipsa exercitationem voluptatum vel
                facere<br />
                ipsum provident! Distinctio, alias? Quasi eum,<br />
                cupiditate explicabo earum dolorum consequuntur minima,
                inventore<br />
                possimus, corrupti maxime error quia repellendus quibusdam
                <br />debitis quisquam? Molestias id esse, unde repellendus<br />
                placeat assumenda.`,
    schedule: `<p>Mon–Fri: 1:00pm – 4:00pm</p>`,
    img: "images/solo.jpg",
  },

  Streching: {
    title: "Streching Exercises",
    text: ` Lorem ipsum dolor sit amet consectetur adipisicing<br />
                elit. Laboriosam necessitatibus ut accusantium quia,<br />
                corrupti placeat perferendis ipsa exercitationem voluptatum vel
                facere<br />
                ipsum provident! Distinctio, alias? Quasi eum,<br />
                cupiditate explicabo earum dolorum consequuntur minima,
                inventore<br />
                possimus, corrupti maxime error quia repellendus quibusdam
                <br />debitis quisquam? Molestias id esse, unde repellendus<br />
                placeat assumenda.`,
    schedule: `<p>Weekend: 10:00am – 12:00pm</p>`,
    img: "images/stret.webp",
  },
};

classButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const key = btn.textContent.trim();
    const data = classData[key];

    // 🔥 Eski içeriği sil, yeni içeriği ekle (üst üste binmez!)
    contentArea.innerHTML = `
      <div>
        <h2>${data.title}</h2>
        <p>${data.text}</p>

        <h2>Schedule</h2>
        ${data.schedule}
      </div>

      <div class="classes-img">
        <img src="${data.img}" height="350" />
      </div>
    `;
  });
});

 // BMI Pointer
const btn = document.getElementById("calcBtn");
  const pointer = document.getElementById("bmi-pointer");
  const result = document.getElementById("bmiResult");

  btn.addEventListener("click", () => {
    let h = document.getElementById("height").value;
    let w = document.getElementById("weight").value;

    if (!h || !w) {
      result.textContent = "Lütfen boy ve kilo girişi yapınız!";
      return;
    }

    let meter = h / 100;
    let bmi = (w / (meter * meter)).toFixed(1);

    result.textContent = "Your BMI: " + bmi;

    /* Konum hesaplama */
    let pos = 0;

    if (bmi < 18.5) pos = 40;          // Underweight
    else if (bmi <= 24.9) pos = 140;   // Normal
    else if (bmi <= 29.9) pos = 240;   // Overweight
    else if (bmi <= 34.9) pos = 340;   // Obese
    else pos = 430;                    // Extremely Obese

    pointer.style.left = pos + "px";
  });

  const menuIcon = document.getElementById('menuIcon');
    const navLinks = document.getElementById('navLinks');

    // 2. Eğer bu öğeler sayfada mevcutsa işlemi başlat
    if (menuIcon && navLinks) {
        // 3. Menü ikonuna tıklama olay dinleyicisi ekle
        menuIcon.addEventListener('click', function() {
            
            // A. Menü listesini göster/gizle
            // CSS'te tanımladığınız '#navbar ul.show' sınıfını ekleyip/kaldırır.
            navLinks.classList.toggle('show');
            
            // B. Hamburger ikonunu 'X' işaretine dönüştür
            // CSS'te tanımladığınız '.menu-icon.active' sınıfını ekleyip/kaldırır.
            menuIcon.classList.toggle('active');
        });
    }
