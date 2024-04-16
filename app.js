// HTML içerisinde "joke" ve "jokeBtn" id'li öğeleri seçiyoruz.
const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

// "jokeBtn" düğmesine tıklandığında "generateJoke" fonksiyonunu tetikleyen bir olay dinleyicisi ekliyoruz.
jokeBtn.addEventListener('click', generateJoke);

// Sayfa yüklendiğinde otomatik olarak bir şaka oluşturulması için "generateJoke" fonksiyonunu çağırıyoruz.
generateJoke();

// Asenkron bir şekilde şaka oluşturan fonksiyon.
async function generateJoke() {
  // API'ye gönderilecek olan talep başlıklarını içeren bir konfigürasyon objesi oluşturuyoruz.
  const config = {
    headers: {
      Accept: 'application/json',
    },
  };

  // "fetch" fonksiyonu ile API'den veri çekiyoruz.
  const res = await fetch('https://icanhazdadjoke.com', config);

  // API'den gelen veriyi JSON formatına çeviriyoruz.
  const data = await res.json();

  // Şakanın metnini HTML içindeki "jokeEl" öğesine ekliyoruz.
  jokeEl.innerHTML = data.joke;
}

// "then" kullanarak şaka oluşturan fonksiyon (alternatif olarak yukarıdaki asenkron fonksiyonun yerine geçebilir).
// function generateJoke() {
//   // API'ye gönderilecek olan talep başlıklarını içeren bir konfigürasyon objesi oluşturuyoruz.
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   };

//   // "fetch" fonksiyonu ile API'den veri çekiyoruz.
//   fetch('https://icanhazdadjoke.com', config)
//     .then((res) => res.json())
//     .then((data) => {
//       // API'den gelen veriyi JSON formatına çeviriyoruz ve şakanın metnini HTML içindeki "jokeEl" öğesine ekliyoruz.
//       jokeEl.innerHTML = data.joke;
//     });
// }