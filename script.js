
/* ---------- dati originali ---------- */
const originalObjects = [
  { emoji: "🎵️", word: "INNO", phoneticPc: "inno", phoneticAndroid: "inno", mediaSrc: "media/inno.mp4" },
  { emoji: "🐱", word: "GATTO", phoneticPc: "gatto", phoneticAndroid: "gatto", mediaSrc: "media/gatto.mp3"},
  { emoji: "🚲", word: "BICICLETTA", phoneticPc: "bichicletta", phoneticAndroid: "bichicletta", mediaSrc: "media/bici.jpg" },

  // 🎒 Oggetti dell'astuccio
  { emoji: "✏️", word: "MATITA", phoneticPc: "matita", phoneticAndroid: "matita" },
  { emoji: "🖊️", word: "PENNA", phoneticPc: "penna", phoneticAndroid: "penna" },
  { emoji: "🖍️", word: "PASTELLO", phoneticPc: "pastello", phoneticAndroid: "pastello" },
  { emoji: "📏", word: "RIGHELLO", phoneticPc: "righello", phoneticAndroid: "righello" },
  { emoji: "📐", word: "SQUADRA", phoneticPc: "squadra", phoneticAndroid: "squadra" },
  { emoji: "✂️", word: "FORBICI", phoneticPc: "forbici", phoneticAndroid: "forbici" },
  { emoji: "🧽", word: "SPUGNA", phoneticPc: "spugna", phoneticAndroid: "spugna" },
  { emoji: "📕", word: "LIBRO", phoneticPc: "libro", phoneticAndroid: "libro" },

  // 🛝 Oggetti del parco
  { emoji: "🛝", word: "SCIVOLO", phoneticPc: "scivolo", phoneticAndroid: "scivolo" },
  { emoji: "🧸", word: "ORSO", phoneticPc: "orso", phoneticAndroid: "orso" },
  { emoji: "⚽", word: "PALLONE", phoneticPc: "pallone", phoneticAndroid: "pallone" },
  { emoji: "🪁", word: "AQUILONE", phoneticPc: "aquilone", phoneticAndroid: "aquilone" },
  { emoji: "🛴", word: "MONOPATTINO", phoneticPc: "monopattino", phoneticAndroid: "monopattino" },
  { emoji: "🪀", word: "YOYO", phoneticPc: "yoyo", phoneticAndroid: "yoyo" },
  { emoji: "🧃", word: "SUCCO", phoneticPc: "succo", phoneticAndroid: "succo" },
  { emoji: "🧢", word: "CAPPELLINO", phoneticPc: "cappellino", phoneticAndroid: "cappellino" },

  // Frutta
  { emoji: "🍎", word: "MELA", phoneticPc: "mela", phoneticAndroid: "mela" },
  { emoji: "🍐", word: "PERA", phoneticPc: "pera", phoneticAndroid: "pera" },
  { emoji: "🍊", word: "ARANCIA", phoneticPc: "arancia", phoneticAndroid: "arancia" },
  { emoji: "🍋", word: "LIMONE", phoneticPc: "limone", phoneticAndroid: "limone" },
  { emoji: "🍌", word: "BANANA", phoneticPc: "banana", phoneticAndroid: "banana" },
  { emoji: "🍉", word: "ANGURIA", phoneticPc: "anguria", phoneticAndroid: "anguria" },
  { emoji: "🍇", word: "UVA", phoneticPc: "uva", phoneticAndroid: "uva" },
  { emoji: "🍓", word: "FRAGOLA", phoneticPc: "fragola", phoneticAndroid: "fragola" },
  { emoji: "🫐", word: "MIRTILLI", phoneticPc: "mirtilli", phoneticAndroid: "mirtilli" },
  { emoji: "🥝", word: "KIWI", phoneticPc: "kiwi", phoneticAndroid: "kiwi", mediaSrc: "media/kiwi.jpg" },
  { emoji: "🍍", word: "ANANAS", phoneticPc: "ananas", phoneticAndroid: "ananas" },
  { emoji: "🥭", word: "MANGO", phoneticPc: "mango", phoneticAndroid: "mango" },
  { emoji: "🍈", word: "MELONE", phoneticPc: "melone", phoneticAndroid: "melone" },
  { emoji: "🍒", word: "CILIEGIE", phoneticPc: "ciliegi", phoneticAndroid: "ciliegi" },
  { emoji: "🍅", word: "POMODORO", phoneticPc: "pomodoro", phoneticAndroid: "pomodoro" },

  // 🧼 Extra oggetti familiari
  { emoji: "🪥", word: "SPAZZOLINO", phoneticPc: "spazzolino", phoneticAndroid: "spazzolino" },
  { emoji: "🧺", word: "CESTO", phoneticPc: "cesto", phoneticAndroid: "cesto" },
  { emoji: "🧦", word: "CALZINI", phoneticPc: "calzini", phoneticAndroid: "calzini" },
  { emoji: "🧤", word: "GUANTI", phoneticPc: "guanti", phoneticAndroid: "guanti" },

  // 🍽️ Oggetti da cucina
  { emoji: "🥄", word: "CUCCHIAIO", phoneticPc: "cucchiaio", phoneticAndroid: "cucchiaio" },
  { emoji: "🔪", word: "COLTELLO", phoneticPc: "coltello", phoneticAndroid: "coltello" },
  { emoji: "🧊", word: "GHIACCIO", phoneticPc: "ghiaccio", phoneticAndroid: "ghiaccio" },

  // 🛝 Altri oggetti parco
  { emoji: "🎈", word: "PALLONCINO", phoneticPc: "pallonciño", phoneticAndroid: "pallonciño" },

  // 🧼 Extra oggetti familiari
  { emoji: "🧼", word: "SAPONE", phoneticPc: "sapone", phoneticAndroid: "sapone" },
  { emoji: "👟", word: "SCARPA", phoneticPc: "scarpa", phoneticAndroid: "scarpa" }
];

let objects = [...originalObjects];
let score = 0;
let mistakes = 0;
//let currentWord = ''; // parola corrente per il bottone "Pronuncia"
let currentObject = null; // parola corrente per bottone "Pronuncia"
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
  //currentWord = chosen.word.toLowerCase();
  currentObject = chosen;
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
  //currentWord = chosen.word.toUpperCase(); // parola piena per la pronuncia (maiuscola per TTS)
  currentObject = chosen; // per la prouncia da phonetic
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
  //currentWord = chosen.word.toUpperCase(); sostituita dalla riga sotto
  currentObject = chosen;
  
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
  if (!objects || objects.length === 0) {
    alert("⚠️ Nessuna parola disponibile! Carica un file JSON o riavvia il gioco.");
    showMenu();
    return;
  }

  const idx = Math.floor(Math.random() * objects.length);
  const chosen = objects.splice(idx, 1)[0];
  showMedia(chosen.mediaSrc);

  // Rispetta maiuscolo/minuscolo
  const word = (typeof isUppercase === "undefined" || isUppercase)
    ? chosen.word.toUpperCase()
    : chosen.word.toLowerCase();

  // 🔴 Aggiorna anche currentObject
  currentObject = chosen;  // <<< questa riga è cruciale
  currentWord = chosen.word.toUpperCase(); // serve per eventuali altre funzioni

  // Selezione vocale casuale
  const vowels = ["A", "E", "I", "O", "U"];
  const wordUpper = word.toUpperCase();
  const vowelPositions = [];

  for (let i = 0; i < wordUpper.length; i++) {
    if (vowels.includes(wordUpper[i])) vowelPositions.push(i);
  }

  if (vowelPositions.length === 0) {
    startVowel();
    return;
  }

  const missingIndex = vowelPositions[Math.floor(Math.random() * vowelPositions.length)];
  const missingVowel = word[missingIndex];

  document.getElementById("imageBoxVowel").textContent = chosen.emoji;

  const wordBox = document.getElementById("wordBoxVowel");
  wordBox.innerHTML = word
    .split("")
    .map((c, i) =>
      i === missingIndex
        ? `<span id="missingVowelSlot" style="color: #ff5555; font-weight: bold;">_</span>`
        : c
    )
    .join("");

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

        const slot = document.getElementById("missingVowelSlot");
        if (slot) {
          slot.textContent = missingVowel;
          slot.style.color = "#2ecc71";
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

function isAndroid() {
  return /Android/i.test(navigator.userAgent);
}

// 🔊 Pronuncia la parola corrente (robusta)
function speakCurrentWord() {
  if (!currentObject) return;

  let textToSpeak = currentObject.word;

  if (isAndroid() && currentObject.phoneticAndroid) {
    textToSpeak = currentObject.phoneticAndroid;
  } 
  else if (!isAndroid() && currentObject.phoneticPc) {
    textToSpeak = currentObject.phoneticPc;
  }

  if (speechSynthesis.speaking) speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  utterance.lang = 'it-IT';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  speechSynthesis.speak(utterance);
}

// 🔊 Gestione voci e modalità TTS
let selectedVoice = null;
let voiceMode = 'auto';

// Popola il select delle voci disponibili
function populateVoiceList() {
  const voices = speechSynthesis.getVoices();
  const select = document.getElementById('voiceSelect');
  select.innerHTML = ''; // pulisce eventuali voci precedenti

  voices.forEach((voice, i) => {
    const option = document.createElement('option');
    option.value = i;
    option.textContent = `${voice.name} (${voice.lang})${voice.default ? ' [default]' : ''}`;
    select.appendChild(option);
  });

  // Imposta la voce di default
  if (voices.length > 0) {
    selectedVoice = voices[0];
    select.value = 0;
  }
}

// Alcuni browser caricano le voci in modo asincrono
populateVoiceList();
if (speechSynthesis.onvoiceschanged !== undefined) {
  speechSynthesis.onvoiceschanged = populateVoiceList;
}

// Aggiorna la voce quando cambia il select
document.getElementById('voiceSelect').addEventListener('change', (e) => {
  const voices = speechSynthesis.getVoices();
  selectedVoice = voices[e.target.value];
});

// Aggiorna la modalità di pronuncia
document.getElementById('voiceModeSelect').addEventListener('change', (e) => {
  voiceMode = e.target.value;
});

// Sovrascrive speakCurrentWord per usare voce e modalità selezionata
const originalSpeakCurrentWord = speakCurrentWord;
speakCurrentWord = function() {
  if (!currentObject) return;

  let textToSpeak = currentObject.word;

  // Applicazione modalità TTS selezionata
  if (voiceMode === 'auto') {
    // Automatico: usa phonetic se presente
    if (isAndroid() && currentObject.phoneticAndroid) {
      textToSpeak = currentObject.phoneticAndroid;
    } else if (!isAndroid() && currentObject.phoneticPc) {
      textToSpeak = currentObject.phoneticPc;
    }
  } else if (voiceMode === 'pc' && currentObject.phoneticPc) {
    textToSpeak = currentObject.phoneticPc;
  } else if (voiceMode === 'android' && currentObject.phoneticAndroid) {
    textToSpeak = currentObject.phoneticAndroid;
  } else if (voiceMode === 'syllables' && currentObject.syllables) {
    textToSpeak = currentObject.syllables.join(' ');
  }

  if (speechSynthesis.speaking) speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(textToSpeak);
  if (selectedVoice) utterance.voice = selectedVoice;
  utterance.lang = 'it-IT';
  utterance.rate = 0.95;
  utterance.pitch = 1.0;

  speechSynthesis.speak(utterance);
};


// collega il bottone (una sola volta)
document.getElementById('speakWord')
  .addEventListener('click', speakCurrentWord);

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
  if (!currentObject) {
    alert("Nessuna parola attiva!");
    return;
  }

  const targetWordDiv = document.getElementById("targetWord");
  const letterBoxes = targetWordDiv.querySelectorAll(".slot, .letter-box");

  if (letterBoxes.length === 0) {
    alert("Nessuna casella disponibile!");
    return;
  }

  // Mostra temporaneamente la parola nelle caselle vuote
  letterBoxes.forEach((box, index) => {
    if (!box.textContent || box.textContent.trim() === "") {
      box.dataset.original = box.textContent || ""; // salva stato iniziale
      const char = isUppercase ? currentObject.word[index].toUpperCase() : currentObject.word[index].toLowerCase();
      box.textContent = char;
      box.classList.add("magic-visible");
    }
  });

  // 🔊 Pronuncia la parola
  speakCurrentWord(); // usa la funzione già corretta

  // Dopo 1 secondo ripristina le caselle vuote
  setTimeout(() => {
    letterBoxes.forEach(box => {
      if (box.classList.contains("magic-visible")) {
        box.textContent = "";
        box.classList.remove("magic-visible");
      }
    });
  }, 1000);
});



