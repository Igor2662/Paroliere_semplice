
/* ---------- dati originali ---------- */
const originalObjects = [
  { emoji: "🎵️", word: "INNO", mediaSrc: "media/inno.mp4" },
  { emoji: "🐱", word: "GATTO", mediaSrc: "media/gatto.mp3" },
  { emoji: "🚲", word: "BICICLETTA", mediaSrc: "media/bici.jpg" },
  // 🎒 Oggetti dell'astuccio
  { emoji: "✏️", word: "MATITA" },
  { emoji: "🖊️", word: "PENNA" },
  { emoji: "🖍️", word: "PASTELLO" },
  { emoji: "📏", word: "RIGHELLO" },
  { emoji: "📐", word: "SQUADRA" },
  { emoji: "✂️", word: "FORBICI" },
  { emoji: "🧽", word: "SPUGNA" },
  { emoji: "📕", word: "LIBRO" },

  // 🛝 Oggetti del parco
  { emoji: "🛝", word: "SCIVOLO" },
  { emoji: "🧸", word: "ORSO" },
  { emoji: "⚽", word: "PALLONE" },
  { emoji: "🚲", word: "BICICLETTA" },
  { emoji: "🪁", word: "AQUILONE" },
  { emoji: "🛴", word: "MONOPATTINO" },
  { emoji: "🪀", word: "YOYO" },
  { emoji: "🧃", word: "SUCCO" },
  { emoji: "🧢", word: "CAPPELLINO" },
  
  // tecnicamente frutta!
  { emoji: "🍎", word: "MELA" },
  { emoji: "🍐", word: "PERA" },
  { emoji: "🍊", word: "ARANCIA" },
  { emoji: "🍋", word: "LIMONE" },
  { emoji: "🍌", word: "BANANA" },
  { emoji: "🍉", word: "ANGURIA" },
  { emoji: "🍇", word: "UVA" },
  { emoji: "🍓", word: "FRAGOLA" },
  { emoji: "🫐", word: "MIRTILLI" },
  { emoji: "🥝", word: "KIWI" , mediaSrc: "media/kiwi.jpg"},
  { emoji: "🍍", word: "ANANAS" },
  { emoji: "🥭", word: "MANGO" },
  { emoji: "🍈", word: "MELONE" },
  { emoji: "🍒", word: "CILIEGIE" },
  { emoji: "🍅", word: "POMODORO" },
    // 🧼 Extra oggetti familiari
  { emoji: "🪥", word: "SPAZZOLINO" },
  { emoji: "🧺", word: "CESTO" },
  { emoji: "🧦", word: "CALZINI" },
  { emoji: "🧤", word: "GUANTI" },
  // 🍽️ Oggetti da cucina
  { emoji: "🥄", word: "CUCCHIAIO" },
  { emoji: "🔪", word: "COLTELLO" },
  { emoji: "🧊", word: "GHIACCIO" },
    // 🛝 Oggetti del parco
  { emoji: "🛝", word: "SCIVOLO" },
  { emoji: "🎈", word: "PALLONCINO" },

  // 🧼 Extra oggetti familiari
  { emoji: "🧼", word: "SAPONE" },
  { emoji: "👟", word: "SCARPA" }

];

let objects = [...originalObjects];
let score = 0;
let mistakes = 0;
let currentWord = ''; // parola corrente per il bottone "Pronuncia"
let isUppercase = true; // stato iniziale

function toggleCase() {
  isUppercase = !isUppercase;
  const btn = document.getElementById('toggleCase');
  btn.textContent = isUppercase ? '🔠 Maiuscolo' : '🔡 Minuscolo';
}
document.getElementById('toggleCase').addEventListener('click', toggleCase);


/* ---------- helper display ---------- */
function updateScoreDisplay(){ document.getElementById('scoreNumber').textContent = score; }
function registerCorrect(){ score++; updateScoreDisplay(); animateStar(); }
function registerMistake(){ mistakes++; if (mistakes % 2 === 0 && score>0) score--; updateScoreDisplay(); }
function animateStar(){ const star = document.getElementById('scoreStar'); star.classList.add('animate'); setTimeout(()=>star.classList.remove('animate'),400); }

function showSection(id){
  ['menu','composeMode','missingMode','firstLetterMode','vowelMode']
  .forEach(s=>document.getElementById(s).classList.remove('visible'));
  document.getElementById(id).classList.add('visible');
}

/* ---------- festa finale + riavvio + video finale ---------- */
function celebrate() {
  const sound = new Audio("celebration.mp3");
  sound.play().catch(() => {});

  const overlay = document.createElement("div");
  overlay.id = "celebration";
  overlay.style.position = "fixed";
  overlay.style.top = 0;
  overlay.style.left = 0;
  overlay.style.width = "100%";
  overlay.style.height = "100%";
  overlay.style.background = "rgba(255,255,255,0.95)";
  overlay.style.display = "flex";
  overlay.style.flexDirection = "column";
  overlay.style.alignItems = "center";
  overlay.style.justifyContent = "center";
  overlay.style.zIndex = "1000";
  overlay.innerHTML = `<h1 style="font-size:100px; color:#ff4081;">EVVIVA! 🎉</h1>`;
  document.body.appendChild(overlay);

  // 🌟 Logo fluttuante
  const logo = document.createElement("img");
  logo.src = "igorproget-logo.png";
  logo.alt = "IGORproget";
  logo.id = "floatingLogo";
  logo.style.width = "150px";
  logo.style.position = "absolute";
  logo.style.animation = "floatLogo 4s infinite";
  overlay.appendChild(logo);

  // 🌟 Pioggia di stelle
  for (let i = 0; i < 80; i++) {
    const star = document.createElement("div");
    star.textContent = "⭐";
    star.style.position = "absolute";
    star.style.left = Math.random() * 100 + "vw";
    star.style.top = -20 + "px";
    star.style.fontSize = Math.random() * 20 + 20 + "px";
    star.style.animation = `fall ${2 + Math.random() * 3}s linear forwards`;
    star.style.pointerEvents = "none";
    overlay.appendChild(star);
  }

  // 🔁 Bottone "Ricomincia"
  const btnContainer = document.createElement("div");
  btnContainer.style.display = "flex";
  btnContainer.style.alignItems = "center";
  btnContainer.style.gap = "20px";
  btnContainer.style.marginTop = "50px";

  const restartBtn = document.createElement("button");
  restartBtn.textContent = "🔄 Ricomincia";
  restartBtn.style.fontSize = "24px";
  restartBtn.style.padding = "10px 20px";
  restartBtn.style.background = "#4caf50";
  restartBtn.style.color = "white";
  restartBtn.style.border = "none";
  restartBtn.style.borderRadius = "8px";
  restartBtn.style.cursor = "pointer";
  restartBtn.style.opacity = "0";
  restartBtn.style.transition = "opacity 1s";

  restartBtn.addEventListener("click", () => {
    document.body.removeChild(overlay);
    resetGame();
  });

  overlay.appendChild(btnContainer);

  // ⭐ Appare gradualmente
  setTimeout(() => {
    restartBtn.style.opacity = "1";
  }, 2000);

  // 🎵 Quando finisce la musica → ferma logo + mostra video premio
  sound.addEventListener("ended", () => {
    logo.style.animation = "none";
    logo.style.position = "static";
    logo.style.width = "70px";

    btnContainer.appendChild(restartBtn);
    btnContainer.appendChild(logo);

    // 🎬 Riquadro video premio
    const videoBox = document.createElement("div");
    videoBox.style.marginTop = "40px";
    videoBox.style.display = "flex";
    videoBox.style.justifyContent = "center";

    const rewardVideo = document.createElement("video");
    rewardVideo.src = "media/Pitti.mp4";   // <-- QUI IL TUO VIDEO
    rewardVideo.width = 420;
    rewardVideo.controls = true;
    rewardVideo.autoplay = true;

    videoBox.appendChild(rewardVideo);
    overlay.appendChild(videoBox);
  });
}


function resetGame(){
  objects = [...originalObjects];
  score = 0; mistakes = 0; updateScoreDisplay();
  showSection('menu');
}

/* ---------- compose mode (desktop drag + touch visual drag) ---------- */
function startCompose(){
  if(objects.length === 0){ celebrate(); return; }
  const idx = Math.floor(Math.random()*objects.length);
  const chosen = objects.splice(idx,1)[0];
  showMedia(chosen.mediaSrc);
  const word = isUppercase ? chosen.word.toUpperCase() : chosen.word.toLowerCase();
  //currentWord = word; // aggiorna la parola da pronunciare
  currentWord = chosen.word.toLowerCase();
  const shuffled = word.split('').sort(()=>Math.random()-0.5);

  const imageBox = document.getElementById('imageBox');
  const target = document.getElementById('targetWord');
  const pool = document.getElementById('letters');
  imageBox.textContent = chosen.emoji;
  target.innerHTML = ''; pool.innerHTML = '';

  // create slots
  for(let i=0;i<word.length;i++){
    const slot = document.createElement('div');
    slot.className='slot';
    slot.dataset.index = i;
    // desktop drop
    slot.addEventListener('dragover', e=>e.preventDefault());
    slot.addEventListener('drop', e=>{
      e.preventDefault();
      const letter = e.dataTransfer.getData('text');
      const originId = e.dataTransfer.getData('origin');
      const origin = document.getElementById(originId);
      const corr = word[i];
      if(letter === corr){
        slot.textContent = letter; slot.classList.add('correct');
        document.getElementById('soundCorrect').play();
        registerCorrect();
        if(origin) origin.remove();
        if([...target.children].every(s=>s.classList.contains('correct'))){
          document.getElementById('soundComplete').play();
          if(objects.length===0) setTimeout(celebrate,800);
        }
      } else {
        document.getElementById('soundWrong').play();
        if(origin) origin.classList.add('bounce');
        setTimeout(()=>origin && origin.classList.remove('bounce'),400);
        registerMistake();
      }
    });
    target.appendChild(slot);
  }

  // create letters (desktop + touch)
  shuffled.forEach((char, i)=>{
    const el = document.createElement('div');
    el.className='letter';
    el.textContent = char;
    el.id = 'letter-' + i + '-' + Date.now(); // uniq id
    el.draggable = true;

    // desktop dragstart
    el.addEventListener('dragstart', e=>{
      e.dataTransfer.setData('text', char);
      e.dataTransfer.setData('origin', el.id);
    });

    // --- touch visual drag: clone follows finger ---
    el.addEventListener('touchstart', function ts(e){
      // prevent multi-touch weirdness: only first touch
      const touch = e.touches[0];
      // create clone
      const rect = el.getBoundingClientRect();
      const clone = el.cloneNode(true);
      clone.classList.add('letter','draggingClone');
      clone.style.width = rect.width + 'px';
      clone.style.height = rect.height + 'px';
      clone.style.left = (touch.clientX - rect.width/2) + 'px';
      clone.style.top = (touch.clientY - rect.height/2) + 'px';
      clone.style.transform = 'scale(1.15)';
      document.body.appendChild(clone);

      // move handler
      const move = function(ev){
        ev.preventDefault && ev.preventDefault();
        const t = ev.touches ? ev.touches[0] : ev;
        clone.style.left = (t.clientX - rect.width/2) + 'px';
        clone.style.top = (t.clientY - rect.height/2) + 'px';
      };

      // end handler
      const end = function(ev){
        const changed = ev.changedTouches ? ev.changedTouches[0] : ev;
        // element under finger
        clone.remove();
        document.removeEventListener('touchmove', move, {passive:false});
        document.removeEventListener('touchend', end);
        const targetEl = document.elementFromPoint(changed.clientX, changed.clientY);
        // if dropped on a slot
        if(targetEl && targetEl.classList.contains('slot')){
          const slotIndex = targetEl.dataset.index;
          const correct = word[slotIndex];
          if(char === correct){
            targetEl.textContent = char;
            targetEl.classList.add('correct');
            document.getElementById('soundCorrect').play();
            registerCorrect();
            el.remove();
            if([...target.children].every(s=>s.classList.contains('correct'))){
              document.getElementById('soundComplete').play();
              if(objects.length===0) setTimeout(celebrate,800);
            }
          } else {
            document.getElementById('soundWrong').play();
            el.classList.add('bounce');
            setTimeout(()=>el.classList.remove('bounce'),400);
            registerMistake();
          }
        }
      };

      // attach listeners
      document.addEventListener('touchmove', move, {passive:false});
      document.addEventListener('touchend', end);
    });

    pool.appendChild(el);
  });
}

/* ---------- missing mode ---------- */
/* ---------- missing mode ---------- */
function startMissing(){
  if(objects.length===0){ celebrate(); return; }
  const idx = Math.floor(Math.random()*objects.length);
  const chosen = objects.splice(idx,1)[0];
  showMedia(chosen.mediaSrc);

  // rispetta lo stato maiuscolo/minuscolo se esiste isUppercase
  const word = (typeof isUppercase === 'undefined' || isUppercase) ? chosen.word.toUpperCase() : chosen.word.toLowerCase();
  currentWord = chosen.word.toUpperCase(); // parola piena per la pronuncia (maiuscola per TTS)

  const missingIndex = Math.floor(Math.random()*word.length);
  const missingLetter = word[missingIndex];

  document.getElementById('imageBoxMissing').textContent = chosen.emoji;
  document.getElementById('wordBox').textContent = word.split('').map((c,i)=> i===missingIndex ? '_' : c).join('');
  const options = document.getElementById('options'); options.innerHTML='';

  // usa l'alfabeto nella stessa case della parola
  const alphabet = (typeof isUppercase === 'undefined' || isUppercase) ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "abcdefghijklmnopqrstuvwxyz";
  const distractors = alphabet.split('').filter(l=> l !== missingLetter);
  const choices = [missingLetter, ...distractors.sort(()=>Math.random()-0.5).slice(0,2)].sort(()=>Math.random()-0.5);

  choices.forEach(letter=>{
    const btn = document.createElement('div');
    btn.className='option'; btn.textContent = letter;
    btn.addEventListener('click', ()=>{
      if(letter === missingLetter){
        btn.classList.add('correct');
        document.getElementById('wordBox').textContent = word;
        document.getElementById('soundCorrect').play();
        registerCorrect();
        document.getElementById('soundComplete').play();
        if(objects.length===0) setTimeout(celebrate,500);
      } else {
        btn.classList.add('bounce');
        document.getElementById('soundWrong').play();
        registerMistake();
        setTimeout(()=>btn.classList.remove('bounce'),400);
      }
    });
    options.appendChild(btn);
  });
}


/* ---------- first letter mode ---------- */
/* ---------- first letter mode ---------- */
function startFirstLetter(){
  if(objects.length===0){ celebrate(); return; }
  const idx = Math.floor(Math.random()*objects.length);
  const chosen = objects.splice(idx,1)[0];
  showMedia(chosen.mediaSrc);

  // rispetta lo stato maiuscolo/minuscolo
  const word = (typeof isUppercase === 'undefined' || isUppercase) ? chosen.word.toUpperCase() : chosen.word.toLowerCase();
  currentWord = chosen.word.toUpperCase();

  const firstLetter = word[0];

  document.getElementById('imageBoxFirst').textContent = chosen.emoji;
  document.getElementById('wordBoxFirst').textContent = word.split('').map((c,i)=> i===0 ? '_' : c).join('');
  const optionsDiv = document.getElementById('optionsFirst'); optionsDiv.innerHTML='';

  const alphabet = (typeof isUppercase === 'undefined' || isUppercase) ? "ABCDEFGHIJKLMNOPQRSTUVWXYZ" : "abcdefghijklmnopqrstuvwxyz";
  const distractors = alphabet.split('').filter(l=> l !== firstLetter);
  const choices = [firstLetter, ...distractors.sort(()=>Math.random()-0.5).slice(0,2)].sort(()=>Math.random()-0.5);

  choices.forEach(letter=>{
    const btn = document.createElement('div');
    btn.className='option'; btn.textContent = letter;
    btn.addEventListener('click', ()=>{
      if(letter === firstLetter){
        btn.classList.add('correct');
        document.getElementById('wordBoxFirst').textContent = word;
        document.getElementById('soundCorrect').play();
        registerCorrect();
        document.getElementById('soundComplete').play();
        if(objects.length===0) setTimeout(celebrate,500);
      } else {
        btn.classList.add('bounce');
        document.getElementById('soundWrong').play();
        registerMistake();
        setTimeout(()=>btn.classList.remove('bounce'),400);
      }
    });
    optionsDiv.appendChild(btn);
  });
}

/* ---------- vowel mode ---------- */
/* ---------- modalità INSERISCI LA VOCALE ---------- */
function startVowel() {
  // ✅ Se non ci sono parole disponibili, mostra un messaggio e torna al menu
  if (!objects || objects.length === 0) {
    alert("⚠️ Nessuna parola disponibile! Carica un file JSON o riavvia il gioco.");
    showMenu();
    return;
  }

  // ✅ Scelta casuale della parola
  const idx = Math.floor(Math.random() * objects.length);
  const chosen = objects.splice(idx, 1)[0];
  showMedia(chosen.mediaSrc);

  // ✅ Applica maiuscolo/minuscolo in base al toggle
  const word = (typeof isUppercase === "undefined" || isUppercase)
    ? chosen.word.toUpperCase()
    : chosen.word.toLowerCase();
  currentWord = chosen.word.toUpperCase(); // serve per la pronuncia

  // ✅ Scegli una vocale casuale da togliere
  const vowels = ["A", "E", "I", "O", "U"];
  const wordUpper = word.toUpperCase();
  const vowelPositions = [];

  for (let i = 0; i < wordUpper.length; i++) {
    if (vowels.includes(wordUpper[i])) vowelPositions.push(i);
  }

  // Se la parola non contiene vocali, ne scegliamo un’altra
  if (vowelPositions.length === 0) {
    startVowel();
    return;
  }

  const missingIndex = vowelPositions[Math.floor(Math.random() * vowelPositions.length)];
  const missingVowel = word[missingIndex];

  // ✅ Mostra immagine e parola con vocale mancante
  document.getElementById("imageBoxVowel").textContent = chosen.emoji;

  // Inserisci underscore come span per poterlo colorare poi
  const wordBox = document.getElementById("wordBoxVowel");
  wordBox.innerHTML = word
    .split("")
    .map((c, i) =>
      i === missingIndex
        ? `<span id="missingVowelSlot" style="color: #ff5555; font-weight: bold;">_</span>`
        : c
    )
    .join("");

  // ✅ Mostra le 5 opzioni vocali in linea orizzontale
  const optionsDiv = document.getElementById("optionsVowel");
  optionsDiv.innerHTML = "";
  optionsDiv.style.display = "flex";
  optionsDiv.style.flexDirection = "row";
  optionsDiv.style.justifyContent = "center";
  optionsDiv.style.gap = "20px";
  optionsDiv.style.marginTop = "20px";

  vowels.forEach((v) => {
    const btn = document.createElement("div");
    btn.className = "option";
    btn.textContent = (typeof isUppercase === "undefined" || isUppercase)
      ? v
      : v.toLowerCase();

    btn.addEventListener("click", () => {
      const correct = v === missingVowel.toUpperCase();
      if (correct) {
        btn.classList.add("correct");

        // 💚 Effetto visivo: coloriamo la vocale nel punto giusto
        const slot = document.getElementById("missingVowelSlot");
        if (slot) {
          slot.textContent = missingVowel;
          slot.style.color = "#2ecc71"; // verde chiaro
          slot.style.transition = "color 0.3s ease";
        }

        document.getElementById("soundCorrect").play();
        registerCorrect();
        document.getElementById("soundComplete").play();

        if (objects.length === 0) {
          setTimeout(celebrate, 500);
        }
      } else {
        btn.classList.add("bounce");
        document.getElementById("soundWrong").play();
        registerMistake();
        setTimeout(() => btn.classList.remove("bounce"), 400);
      }
    });

    optionsDiv.appendChild(btn);
  });
}

function pronounceWord() {
  // Trova la parola attualmente mostrata in una delle modalità
  const visibleSection = document.querySelector('.visible');
  if (!visibleSection) return;

  let word = null;
  const possibleIds = ['targetWord', 'wordBox', 'wordBoxFirst', 'wordBoxVowel'];
  for (const id of possibleIds) {
    const el = visibleSection.querySelector('#' + id);
    if (el && el.textContent && el.textContent.includes('_') === false) {
      word = el.textContent.trim();
      break;
    }
  }

  // Se non è ancora completa (ha "_"), prova a usare la parola in corso
  if (!word) {
    const incomplete = visibleSection.querySelector('#wordBox, #wordBoxFirst, #wordBoxVowel, #targetWord');
    if (incomplete && incomplete.textContent)
      word = incomplete.textContent.replace(/_/g, '');
  }

  if (!word) {
    alert("Nessuna parola da pronunciare!");
    return;
  }

  // Usa la sintesi vocale del browser
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'it-IT';
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  speechSynthesis.speak(utterance);
}

/* ---------- listeners ---------- */
document.getElementById('startCompose').addEventListener('click', ()=>{ showSection('composeMode'); startCompose(); });
document.getElementById('startMissing').addEventListener('click', ()=>{ showSection('missingMode'); startMissing(); });
document.getElementById('startFirst').addEventListener('click', ()=>{ showSection('firstLetterMode'); startFirstLetter(); });
document.getElementById('nextCompose').addEventListener('click', startCompose);
document.getElementById('nextMissing').addEventListener('click', startMissing);
document.getElementById('nextFirst').addEventListener('click', startFirstLetter);
document.getElementById('backMenu1').addEventListener('click', ()=> showSection('menu'));
document.getElementById('backMenu2').addEventListener('click', ()=> showSection('menu'));
document.getElementById('backMenu3').addEventListener('click', ()=> showSection('menu'));
document.getElementById('startVowel').addEventListener('click', ()=>{ showSection('vowelMode'); startVowel(); });
document.getElementById('nextVowel').addEventListener('click', startVowel);
document.getElementById('backMenu4').addEventListener('click', ()=> showSection('menu'));
/* ---------- Gestione bottone "Pronuncia" ---------- */

// Mostra / nasconde il bottone in base alla modalità
function updateSpeakButtonVisibility(sectionId) {
  const btn = document.getElementById('speakWord');
  if (!btn) return;
  const visibleModes = ['composeMode', 'missingMode', 'firstLetterMode', 'vowelMode'];
  btn.style.display = visibleModes.includes(sectionId) ? 'inline-block' : 'none';
}

// 🔄 Sovrascrive showSection per aggiornare visibilità del bottone
const originalShowSection = showSection;
showSection = function (id) {
  originalShowSection(id);
  updateSpeakButtonVisibility(id);
};

// 🔊 Pronuncia la parola corrente (robusta)
function speakCurrentWord() {
  let wordToSpeak = currentWord || '';

  // fallback: se vuota, prova a leggere dal testo visibile
  if (!wordToSpeak) {
    const visibleSection = document.querySelector('.visible');
    if (visibleSection) {
      const el = visibleSection.querySelector('#targetWord, #wordBox, #wordBoxFirst, #wordBoxVowel');
      if (el && el.textContent) {
        wordToSpeak = el.textContent.replace(/_/g, '');
      }
    }
  }

  // pulizia testo
  wordToSpeak = (wordToSpeak || '').trim().toUpperCase().replace(/[^A-ZÀ-ÖÙ-Ú]/gi, '');
  if (!wordToSpeak) return;

  if (speechSynthesis.speaking) speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(wordToSpeak);
  utterance.lang = 'it-IT';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;
  speechSynthesis.speak(utterance);
}

// collega il bottone (una sola volta)
document.getElementById('speakWord').addEventListener('click', speakCurrentWord);

/* ---------- caricamento parole da file JSON ---------- */
document.getElementById('loadWords').addEventListener('click', () => {
  document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', (event) => {
  const file = event.target.files[0];
  if (!file) return;

  const reader = new FileReader();
  reader.onload = (e) => {
    try {
      const data = JSON.parse(e.target.result);

      // Controlla che il formato sia corretto (array di oggetti con emoji e word)
      if (Array.isArray(data) && data.every(item => item.emoji && item.word)) {
        originalObjects.length = 0;
        originalObjects.push(...data);
        objects = [...originalObjects];
        score = 0;
        mistakes = 0;
        updateScoreDisplay();
        alert("✅ Parole caricate correttamente!");
      } else {
        alert("❌ Formato non valido! Assicurati che il file contenga oggetti con 'emoji' e 'word'.");
      }
    } catch (err) {
      alert("❌ Errore nel file JSON: " + err.message);
    }
  };

  reader.readAsText(file);
});
function showMedia(fileName) {
  const box = document.getElementById('mediaBox');
  box.innerHTML = ''; // pulisci il contenuto

  if (!fileName) return;

  const ext = fileName.split('.').pop().toLowerCase();
  let el;

  if (['jpg', 'jpeg', 'png', 'gif', 'webp'].includes(ext)) {
    // 📷 Immagine
    el = document.createElement('img');
    el.src = fileName;
    el.style.maxWidth = '100%';
    el.style.maxHeight = '200px';
  } 
  else if (['mp4', 'webm', 'ogg'].includes(ext)) {
    // 🎥 Video
    el = document.createElement('video');
    el.src = fileName;
    el.autoplay = true;
    //el.muted = true; // necessario per autoplay su mobile
    el.playsInline = true;
    el.loop = false;
    el.controls = true;
    el.style.maxWidth = '100%';
    el.style.maxHeight = '200px';
    // avvia appena è pronto
    el.addEventListener('canplay', () => el.play().catch(()=>{}));
  } 
  else if (['mp3', 'wav', 'ogg'].includes(ext)) {
    // 🔊 Audio
    el = document.createElement('audio');
    el.src = fileName;
    el.autoplay = true;
    el.controls = true;
    el.addEventListener('canplay', () => el.play().catch(()=>{}));
  }

  if (el) box.appendChild(el);
}
// 🪄 Bottone "Bacchetta magica"
document.getElementById("magicHint").addEventListener("click", () => {
  if (!currentWord) {
    alert("Nessuna parola attiva!");
    return;
  }

  const targetWordDiv = document.getElementById("targetWord");
  const letterBoxes = targetWordDiv.querySelectorAll(".slot, .letter-box");

  if (letterBoxes.length === 0) {
    alert("Nessuna casella disponibile!");
    return;
  }

  // Mostra temporaneamente la parola nelle caselle VUOTE
  letterBoxes.forEach((box, index) => {
    if (!box.textContent || box.textContent.trim() === "") {
      box.dataset.original = ""; // salva stato iniziale
      box.textContent = currentWord[index].toUpperCase();
      box.classList.add("magic-visible");
    }
  });

  // 🔊 Pronuncia la parola
  const utterance = new SpeechSynthesisUtterance(currentWord);
  utterance.lang = "it-IT";
  utterance.rate = 0.9;
  utterance.pitch = 1.1;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);

  // Dopo 3 secondi ripristina le caselle bianche
  setTimeout(() => {
    letterBoxes.forEach(box => {
      if (box.classList.contains("magic-visible")) {
        box.textContent = "";
        box.classList.remove("magic-visible");
      }
    });
  }, 1000);
});



