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
document.addEventListener('DOMContentLoaded', function() {
    // 1. Elementleri doğru ID'lerle yakaladığımızdan emin olun
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const bmiPointer = document.getElementById('bmi-pointer');
    const bmiValueSpan = document.getElementById('bmiValue');
    const bmiStatusSpan = document.getElementById('bmiStatus');

    // BMI Kategorileri ve İbre Hedef Pozisyonları
    const bmiRanges = [
    // Underweight (Sol Kenara yakın)
    { limit: 18.5, position: 10, status: 'Underweight' }, 
    
    // Normal (Merkeze doğru)
    { limit: 25.0, position: 33, status: 'Normal' }, 
    
    // Overweight (Ortanın sağında)
    { limit: 30.0, position: 55, status: 'Overweight' }, 
    
    // Obese (Sağ tarafa doğru)
    { limit: 35.0, position: 75, status: 'Obese' }, 
    
    // Extremely Obese (En sağ Kenara yakın)
    { limit: Infinity, position: 95, status: 'Extremely Obese' } 
];

    function calculateAndMovePointer() {
        const heightCm = parseFloat(heightInput.value);
        const weightKg = parseFloat(weightInput.value);

        // Giriş kontrolü
        if (!heightCm || !weightKg || heightCm <= 0 || weightKg <= 0) {
            bmiValueSpan.textContent = '0.0';
            bmiStatusSpan.textContent = 'Enter data.';
            bmiPointer.classList.add('hidden'); // İbreyi gizle
            return;
        }

        bmiPointer.classList.remove('hidden'); 
        
        // BMI Hesaplama
        const heightM = heightCm / 100;
        const bmi = weightKg / (heightM * heightM);
        const roundedBmi = bmi.toFixed(1);

        bmiValueSpan.textContent = roundedBmi;

        let pointerPosition = 0;
        let currentStatus = 'Unknown';

        // Pozisyonu belirleme
        for (const range of bmiRanges) {
            if (bmi < range.limit) {
                currentStatus = range.status;
                pointerPosition = range.position;
                break;
            }
        }
        
        bmiStatusSpan.textContent = currentStatus;
        // İbreyi % cinsinden konumlandır
        bmiPointer.style.left = `${pointerPosition}%`;
    }

    // Input alanlarındaki değişiklikleri dinle
    heightInput.addEventListener('input', calculateAndMovePointer);
    weightInput.addEventListener('input', calculateAndMovePointer);

    // Sayfa yüklendiğinde bir kere çalıştır (inputlar boşsa gizler)
    calculateAndMovePointer();
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
