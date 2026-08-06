// ==================== DATA ====================
const drinks = [
  { name: "Velvet Lumen", desc: "For someone hiding exhaustion under charm and good manners." },
  { name: "Cinderold", desc: "For someone who has burned through regret and speaks plainly now." },
  { name: "Glasswater No.7", desc: "For someone who wants the truth, even when it costs them." },
  { name: "Juniper Static", desc: "For someone whose thoughts will not sit still." },
  { name: "Blue Atrium", desc: "For someone caught between memory, longing, and what really happened." },
  { name: "Ashen Nectar", desc: "For someone who keeps control by staying distant." },
  { name: "Orchid Hour", desc: "For someone carefully performing the person they wish they were." },
  { name: "Sable Tonic", desc: "For someone holding themselves together where no one can see." }
];

const guests = [
  {
    id: "calder_venn",
    name: "Mr. John Stone",
    role: "The Industrialist",
    usesName: false,
    dialogue: [
      "I don't stay too long at parties.",
      "Though Swan seems to enjoy watching people get drunk and soften around the edges. Frankly, I find it inefficient.",
      "Make me anything quiet. No use trying to make sweet with me."
    ],
    correctDrink: "Ashen Nectar",
    responses: {
      correct: "Hm. You understand more than most care to. You listen. I appreciate that in a worker.",
      wrong: "...Interesting choice. I'll come back later."
    },
    snapshotText: "A high-rise office with glass walls and silent telephones."
  },
  {
    id: "lila_march",
    name: "Lila March",
    role: "The Actress",
    usesName: true,
    dialogue: [
      "Do you think people come here to be seen or disappear, bartender?"
    ],
    correctDrink: "Orchid Hour",
    responses: {
      correct: "Exactly! You've guessed me right tonight!",
      wrong: "That's not quite me tonight."
    },
    snapshotText: "A dressing room mirror covered in fading stage lights."
  },
  {
    id: "arthur_sable",
    name: "Silas Weaver",
    role: "The Critic",
    usesName: false,
    dialogue: [
      "Everyone unburdens their story to the bartender, I've noticed.",
      "Everyone has a story. I just choose which version gets published.",
      "Hm... give me something that isn't showy."
    ],
    correctDrink: "Glasswater No.7",
    responses: {
      correct: "Ah. You're quite the observer yourself.",
      wrong: "That's not my story."
    },
    snapshotText: "A newsroom cluttered with half-written headlines."
  },
  {
    id: "evelyn_cross",
    name: "Evelyn Cross",
    role: "The Aristocrat",
    usesName: true,
    dialogue: [
      "Everything here seems like it is pretending to be something better.",
      "I know, I know. So am I.",
      "Make me something lovely enough to forget how tired I am."
    ],
    correctDrink: "Velvet Lumen",
    responses: {
      correct: "You're surprisingly perceptive.",
      wrong: "Hm. Not quite."
    },
    snapshotText: "A grand hall filled with silent chandeliers."
  },
  {
    id: "jonas_keir",
    name: "Rene de Clairmont",
    role: "The General",
    usesName: false,
    dialogue: [
      "I'll spare you the bar talk.",
      "Just pour me something honest.",
      "I've had enough comfort for a lifetime."
    ],
    correctDrink: "Cinderold",
    responses: {
      correct: "Now this'll get me through the night.",
      wrong: "I might've liked this before the war. Not now. I'll come back later."
    },
    snapshotText: "A battlefield frozen under grey morning fog."
  },
  {
    id: "madeline_roe",
    name: "Liesel Ziegler",
    role: "The Architect",
    usesName: false,
    dialogue: [
      "Everything here is intentional. Even you.",
      "Did you notice? The chairs are arranged for conversation, not comfort and leisure.",
      "Make me something... balanced."
    ],
    correctDrink: "Juniper Static",
    responses: {
      correct: "Perfect! Not too strong, not too dull. Just how I like it!",
      wrong: "...Something's off. I shall return later."
    },
    snapshotText: "A blueprint-covered table under sterile white lighting."
  },
  {
    id: "theo_brann",
    name: "Viscount Andrew Smith",
    role: "The Landowner",
    usesName: true,
    dialogue: [
      "Take it from me, bartender, money doesn't in fact buy happiness.",
      "Acres of land don't equate to smiles.",
      "I am one... one business contract away from blowing up! Whatever you make, make it steady."
    ],
    correctDrink: "Sable Tonic",
    responses: {
      correct: "Smart. I like that.",
      wrong: "This won't keep the nerve down."
    },
    snapshotText: "A luxury penthouse with city lights cracking through glass."
  },
  {
    id: "isolde_faye",
    name: "Flora Calderon",
    role: "The Artist",
    usesName: true,
    dialogue: [
      "Hmm... hmm... Bartender! Do you think we, people, ever really see each other clearly?",
      "Hmm... give me something that'll taste like... colors! No!",
      "Hm... hmm... something that'll taste like... remembering!"
    ],
    correctDrink: "Blue Atrium",
    responses: {
      correct: "Yes! That's exactly it! It reminds me of my first impressionist piece!",
      wrong: "No... hmm. Perhaps for someone else."
    },
    snapshotText: "A quiet studio filled with unfinished paintings."
  }
];
const endingOutros = {
  garden: {
    title: "A Stroll With Swan",
    musicTrack: "TheGarden",
    text: "You stepped outside with Mr. Swan. You share jokes and observation ik icccccccn the still night."
  },
  normal: {
    title: "Just Another Night",
    musicTrack: "normal-night",
    text: "You stayed at your post. The party continued, ordinary and strange but expected. Nothing new. Nothing facinating. You return home at the end of the night."
  },
  dance: {
    title: "Among the Elites",
    musicTrack: "dance-floor",
    text: "You danced with someone who had spent the night percieving others. For once, the room percieved you."
  },
  cleanup: {
    title: "The Middle Class Man",
    musicTrack: "closing-room",
    text: "You cleaned until the room forgot your name. Morning found every glass in its place."
  }
};
const instructions = [
  ["Narrator", "Welcome to Mr Swans house party."],
  ["Narrator", "Guests will arrive one by one."],
  ["Narrator", "Click the exclamation mark to interact with them."],
  ["Narrator", "Listen to what they have to say, then, choose a drink best suited to them. How will you percieve them?"],
  ["Narrator", "Refrence the drink menu in the top right for assistance. There are no mistakes. Only corrections."],
  ["Narrator", "When ready, begin."]
];

const eavesdropScenes = [
  {
    id: "stairs",
    icon: "Stairs",
    label: "Stairs",
    x: 0,
    y: 0,
    setup: [["Narrator", "Two guests pause near the staircase. One is laughing. The other is not."]],
    choices: [
      { text: "Listen for Mr. Swan's name", result: [["Narrator", "\"Swan said no one leaves before the last song.\" The laughing guest says it like a joke. The other guest checks the stairs before smiling."]] },
      { text: "Watch the one who isn't laughing", result: [["Narrator", "The quiet one keeps one hand on the railing, as if deciding whether or not to escape to the upstairs."]] },
      { text: "Polish the same glass and wait", result: [["Narrator", "They stop talking when they notice you. One asks for water, then forgets to take it."]] }
    ]
  },
  {
    id: "gramophone",
    icon: "Music",
    label: "Gramophone",
    x: 6,
    y: 0,
    setup: [["Narrator", "Near a gramophone, a man changes the record before the song has ended."]],
    choices: [
      { text: "Ask if something is wrong with the music", result: [["Narrator", "\"Wrong?\" he says. \"No. Just not the version he likes. He prefers Armstrong.\" He does not say who he means."]] },
      { text: "Listen without interrupting", result: [["Narrator", "The needle drops. For a second, several guests look relieved before remembering to look bored."]] },
      { text: "Offer a new song", result: [["Narrator", "Three people shove past you, as you make your way to the gramaphone. You ask the man to play some blues. He doesnt respond, just gives you a look as he drops the needle onto some jazz."]] }
    ]
  },
  {
    id: "balcony",
    icon: "Balcony",
    label: "Balcony",
    x: 6,
    y: 4,
    setup: [["Narrator", "Someone has opened the balcony door. Cold air reaches the bar before the music does."]],
    choices: [
      { text: "Step closer", result: [["Narrator", "A woman outside says, \"I met him in Chicago.\" A man answers, \"No, you didn't.\" Neither of them sounds angry."]] },
      { text: "Stay where you are", result: [["Narrator", "From the bar, the balcony looks empty. Still, two glasses sit on the rail."]] },
      { text: "Listen for the conversation outside", result: [["Narrator", "\"He always introduces himself last,\" someone says. \"Makes people grateful for the delay.\""]] }
    ]
  },
  {
    id: "cards",
    icon: "Cards",
    label: "Cards",
    x: 3,
    y: 2,
    setup: [["Narrator", "At the card table, 5 guests in feathers and hats and feathered hats are gathered around discussing bets."]],
    choices: [
      { text: "Look at the cards", result: [["Narrator", "Every player seems to hold at least one Queen in their hands. Different suits. Same face."]] },
      { text: "Listen to the players", result: [["Narrator", "\"Don't ask Swan what he wants,\" one player says. \"Ask what he already knows.\""]] },
      { text: "Clear the empty glasses", result: [["Narrator", "One glass is full. One is empty. One has lipstick on both sides of the rim."]] }
    ]
  },
  {
    id: "mirror",
    icon: "Mirror",
    label: "Mirror",
    x: 0,
    y: 4,
    setup: [["Narrator", "In the hall mirror, the party looks brighter than it does in the room."]],
    choices: [
      { text: "Look at the reflection", result: [["Narrator", "You see the guests dancing across the room. To each other, they may represent different classes, wealth, and power dynamics. But to you, their wealth is all the same."]] },
      { text: "Look at the room", result: [["Narrator", "In the room, everyone seems ordinary for a moment, as if they all werent masking thier elitist lives with fake humility. That's almost worse."]] },
      { text: "Look at yourself", result: [["Narrator", "You look like a bartender. Tired collar, steady hands, face arranged for others. You wonder why all these elitist guests divide themselves up into ranks and lables and the idea of old versus new money whilst people like you cannot even fathom their wealth."]] }
    ]
  }
];

// ==================== STATE ====================
const state = {
  phase: "intro",
  currentGuest: null,
  guestQueue: [],
  correctGuests: new Set(),
  metGuests: new Set(),
  checkedInGuests: new Set(),
  hasWatchedBand: false,
  hasCompletedEavesdrop: false,
  eavesdropIndex: 0,
  eavesdropVisited: new Set(),
  eavesdropPlayer: { x: 3, y: 4 },
  activeEavesdropScene: null,
  eavesdropMode: null,
  firstCycleComplete: false,
  isInteracting: false,
  currentMinute: 21 * 60,
  currentEnding: null,
  currentMusicTrack: null,
  settings: {
    textSpeed: "normal",
    musicVolume: 70,
    soundVolume: 70
  },
  dialogue: [],
  dialogueIndex: 0,
  dialogueTextTimer: null,
  isTypingDialogue: false,
  currentDialogueLine: null
};

// ==================== HELPERS ====================
const $ = id => document.getElementById(id);

const dialogueSpeedDelays = {
  instant: 0,
  normal: 18,
  slow: 38
};

function loadSettings() {
  try {
    const saved = localStorage.getItem("lcamsSettings");
    if (!saved) return;
    const parsed = JSON.parse(saved);
    state.settings = { ...state.settings, ...parsed };
  } catch (error) {
    state.settings = { textSpeed: "normal", musicVolume: 70, soundVolume: 70 };
  }
}

function saveSettings() {
  localStorage.setItem("lcamsSettings", JSON.stringify(state.settings));
}

function setTextSpeed(speed) {
  if (!dialogueSpeedDelays.hasOwnProperty(speed)) return;
  state.settings.textSpeed = speed;
  saveSettings();
  updateSettingsControls();
}

function setMusicVolume(value) {
  state.settings.musicVolume = Number(value);
  saveSettings();
  updateSettingsControls();
}

function setSoundVolume(value) {
  state.settings.soundVolume = Number(value);
  saveSettings();
  updateSettingsControls();
}

function updateSettingsControls() {
  document.querySelectorAll(".speed-option").forEach(button => {
    button.classList.toggle("selected", button.dataset.speed === state.settings.textSpeed);
  });

  const musicSlider = $("musicVolume");
  const soundSlider = $("soundVolume");
  const musicValue = $("musicVolumeValue");
  const soundValue = $("soundVolumeValue");

  if (musicSlider) musicSlider.value = state.settings.musicVolume;
  if (soundSlider) soundSlider.value = state.settings.soundVolume;
  if (musicValue) musicValue.textContent = `${state.settings.musicVolume}%`;
  if (soundValue) soundValue.textContent = `${state.settings.soundVolume}%`;
}


function guestDisplayName(guest) {
  return guest.role ? `${guest.name}<br><span class="guest-role">${guest.role}</span>` : guest.name;
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(screen =>
    screen.classList.remove("active")
  );
  const screen = $(id);
  if (screen) screen.classList.add("active");
}

function setObjective(text) {
  if ($("objective")) $("objective").textContent = "Objective: " + text;
  if ($("objectiveRoom")) $("objectiveRoom").textContent = "Objective: " + text;
}

function setObjectiveVisible(isVisible) {
  if ($("objective")) $("objective").classList.toggle("hidden", !isVisible);
  if ($("objectiveRoom")) $("objectiveRoom").classList.toggle("hidden", !isVisible);
}

function showOverlay(overlay) {
  overlay.classList.remove("fading-out");
  overlay.classList.add("fading-in");
  overlay.classList.remove("hidden");

  requestAnimationFrame(() => {
    overlay.classList.remove("fading-in");
  });
}

function fadeOutOverlay(overlay, callback) {
  overlay.classList.add("fading-out");
  setTimeout(() => {
    overlay.classList.add("hidden");
    overlay.classList.remove("fading-out", "fading-in");
    if (callback) callback();
  }, 160);
}

function hideOverlayImmediately(overlay) {
  if (!overlay) return;
  overlay.classList.add("hidden");
  overlay.classList.remove("fading-out", "fading-in");
  overlay.onclick = null;
}

function snapshotTransition(callback) {
  const trans = $("eyeTransition");
  if (!trans) {
    if (callback) callback();
    return;
  }

  trans.classList.add("quick-fade");
  trans.style.opacity = "1";

  setTimeout(() => {
    if (callback) callback();
    requestAnimationFrame(() => {
      trans.style.opacity = "0";
      setTimeout(() => trans.classList.remove("quick-fade"), 260);
    });
  }, 230);
}

function formatGameTime(totalMinutes) {
  const minutesInDay = ((totalMinutes % 1440) + 1440) % 1440;
  const hour24 = Math.floor(minutesInDay / 60);
  const minute = minutesInDay % 60;
  const period = hour24 >= 12 ? "PM" : "AM";
  const hour12 = hour24 % 12 || 12;
  return `${hour12}:${String(minute).padStart(2, "0")} ${period}`;
}

function updateTimeDisplay() {
  const timeValue = $("timeValue");
  if (timeValue) timeValue.textContent = formatGameTime(state.currentMinute);
}

function setGameTime(hour24, minute = 0) {
  state.currentMinute = hour24 * 60 + minute;
  updateTimeDisplay();
}

function startGameClock() {
  const display = $("timeDisplay");
  if (display) display.classList.remove("hidden");
  updateTimeDisplay();
}

function updateRequirementsObjective() {
  if (state.phase === "requirements") {
    setObjective("Pass time while you wait for your last guest: check in, watch the band, and eavesdrop");
  } else if (state.phase === "host") {
    setObjective("Serve your final guest");
  }
}

function updateRoomControls() {
  const dillyDallyButton = $("dillyDallyButton");
  if (dillyDallyButton) {
    const shouldHide = state.phase === "requirements" || state.phase === "host";
    dillyDallyButton.classList.toggle("hidden", shouldHide);
  }
}

function updateNavigation() {
  const roomBtn = document.querySelector("#barView .nav-right");
  if (roomBtn) {
    const roomLocked = state.isInteracting || !!state.currentGuest;
    roomBtn.style.pointerEvents = roomLocked ? "none" : "auto";
    roomBtn.style.opacity = roomLocked ? "0.4" : "1";
  }

  const checkInButton = document.querySelector(".checkin-button");
  if (checkInButton) {
    checkInButton.disabled = state.isInteracting;
  }

  const roomActions = document.querySelector(".room-actions");
  if (roomActions) {
    const eavesdropActive = state.eavesdropMode === "maze" || state.eavesdropMode === "scene";
    roomActions.classList.toggle("hidden", eavesdropActive);
  }

  updateBandButton();
  updateEavesdropButton();
}

function eyeTransition(callback) {
  const trans = $("eyeTransition");
  if (trans) trans.style.opacity = "1";

  setTimeout(() => {
    if (trans) trans.style.opacity = "0";
    if (callback) callback();
  }, 600);
}

function showDillyDallyWarning() {
  const existing = $("dillyDallyWarning");
  if (existing) existing.remove();

  const warning = document.createElement("div");
  warning.id = "dillyDallyWarning";
  warning.textContent = "There's already a guest waiting!";

  warning.style.position = "absolute";
  warning.style.bottom = "85px";
  warning.style.right = "30px";
  warning.style.width = "240px";
  warning.style.padding = "8px 12px";
  warning.style.background = "rgba(0, 0, 0, 0.92)";
  warning.style.border = "1px solid rgba(255,255,255,0.5)";
  warning.style.color = "#ffffff";
  warning.style.fontSize = "14px";
  warning.style.textAlign = "center";
  warning.style.opacity = "0";
  warning.style.transition = "opacity 0.3s ease";
  warning.style.pointerEvents = "none";
  warning.style.zIndex = "2000";

  $("roomView").appendChild(warning);

  requestAnimationFrame(() => warning.style.opacity = "1");

  setTimeout(() => {
    warning.style.opacity = "0";
    setTimeout(() => warning.remove(), 300);
  }, 3500);
}

// ==================== DIALOGUE ====================
function clearDialogueTimer() {
  if (state.dialogueTextTimer) {
    clearTimeout(state.dialogueTextTimer);
    state.dialogueTextTimer = null;
  }
}

function finishTypingDialogue() {
  const box = $("dialogueBox");
  if (!box || !state.currentDialogueLine) return;

  const [speaker, text] = state.currentDialogueLine;
  clearDialogueTimer();
  state.isTypingDialogue = false;
  box.innerHTML = `
    <div class="dialogue-speaker">${speaker}</div>
    <div>${text}</div>
  `;
}

function showDialogue(lines, callback) {
  state.dialogue = lines;
  state.dialogueIndex = 0;
  state.isInteracting = true;
  updateNavigation();

  const box = $("dialogueBox");
  box.classList.remove("hidden");

  function render() {
    if (state.dialogueIndex >= state.dialogue.length) return;
    const [speaker, text] = state.dialogue[state.dialogueIndex];
    const delay = dialogueSpeedDelays[state.settings.textSpeed] ?? dialogueSpeedDelays.normal;
    state.currentDialogueLine = [speaker, text];
    clearDialogueTimer();

    if (delay === 0) {
      state.isTypingDialogue = false;
      box.innerHTML = `
        <div class="dialogue-speaker">${speaker}</div>
        <div>${text}</div>
      `;
      return;
    }

    state.isTypingDialogue = true;
    let index = 0;

    function typeNextCharacter() {
      box.innerHTML = `
        <div class="dialogue-speaker">${speaker}</div>
        <div>${text.slice(0, index)}</div>
      `;

      if (index >= text.length) {
        state.isTypingDialogue = false;
        state.dialogueTextTimer = null;
        return;
      }

      index++;
      state.dialogueTextTimer = setTimeout(typeNextCharacter, delay);
    }

    typeNextCharacter();
  }

  box.onclick = () => {
    if (state.isTypingDialogue) {
      finishTypingDialogue();
      return;
    }

    state.dialogueIndex++;
    if (state.dialogueIndex >= state.dialogue.length) {
      clearDialogueTimer();
      box.classList.add("hidden");
      box.onclick = null;
      state.isInteracting = false;
      state.currentDialogueLine = null;
      updateNavigation();
      if (callback) callback();
    } else {
      render();
    }
  };

  render();
}

// ==================== GAME FLOW ====================
function startGame() {
  showScreen("barView");
  startGameClock();
  setGameTime(21, 0);
  setObjective("Read instructions");

  showDialogue(instructions, () => {
    state.phase = "firstCycle";
    state.guestQueue = [...guests];
    setGameTime(21, 30);
    spawnNextGuest();
  });
}

function spawnNextGuest() {
  if (state.guestQueue.length === 0) {
    if (!state.firstCycleComplete) {
      state.firstCycleComplete = true;
      state.phase = "correction";
      setGameTime(23, 0);
    }

    state.guestQueue = guests.filter(g => !state.correctGuests.has(g.id));
  }

  if (state.guestQueue.length === 0) {
    checkIfAllCorrect();
    return;
  }

  state.currentGuest = state.guestQueue.shift();
  setObjective("Serve guest");

  $("guestArea").innerHTML = `
    <div class="guest-sprite">
      <button class="interact-button" onclick="startGuestDialogue()">!</button>
      <div class="guest-body">${guestDisplayName(state.currentGuest)}</div>
    </div>
  `;
  updateNavigation();
}

function startGuestDialogue() {
  if (!state.currentGuest) return;
  const guest = state.currentGuest;

  showDialogue(
    guest.dialogue.map(line => [guest.name, line]),
    showDrinkChoices
  );
}

function showDrinkChoices() {
  const guest = state.currentGuest;
  if (!guest) return;

  const options = getDrinkOptions(guest.correctDrink);
  setObjective("Choose drink");

  $("guestArea").innerHTML = `
    <div class="overlay-card">
      <h2>Select a Drink for ${guest.name}</h2>
      ${guest.role ? `<div class="guest-choice-role">${guest.role}</div>` : ``}
      ${options.map(drink => 
        `<button onclick="serveDrink('${drink}')">${drink}</button><br>`
      ).join("")}
    </div>
  `;
}

function getDrinkOptions(correctDrink) {
  const wrongDrinks = drinks
    .map(d => d.name)
    .filter(name => name !== correctDrink);

  const selectedWrong = wrongDrinks
    .sort(() => Math.random() - 0.5)
    .slice(0, 2);

  return [correctDrink, ...selectedWrong].sort(() => Math.random() - 0.5);
}

function serveDrink(drinkName) {
  const guest = state.currentGuest;
  if (!guest) return;

  const isCorrect = drinkName === guest.correctDrink;
  if (isCorrect) state.correctGuests.add(guest.id);

  state.metGuests.add(guest.id);

  showDialogue(
    [[guest.name, isCorrect ? guest.responses.correct : guest.responses.wrong]],
    () => {
      $("guestArea").innerHTML = "";
      state.currentGuest = null;
      updateNavigation();
      enterWaiting();
    }
  );
}

function enterWaiting() {
  if (state.phase === "requirements") {
    updateRequirementsObjective();
  } else {
    setObjective("Check in or Dilly Dally");
  }
}

function advanceToNextGuest() {
  if (state.isInteracting) return;
  eyeTransition(spawnNextGuest);
}

// ==================== NAVIGATION ====================
function dillyDally() {
  if (state.isInteracting) return;
  if (state.currentGuest !== null) {
    showDillyDallyWarning();
    return;
  }
  advanceToNextGuest();
}

function showRoom() {
  if (state.isInteracting || state.currentGuest) return;
  showScreen("roomView");
  updateRoomControls();
}

function showBar() {
  if (state.isInteracting) return;
  showScreen("barView");
  updateRoomControls();
}

// ==================== CHECK-IN ====================
function toggleCheckIn() {
  if (state.isInteracting) return;
  const panel = $("checkInPanel");

  if (!panel.classList.contains("hidden")) {
    fadeOutOverlay(panel);
    return;
  }

  let html = `<div class="overlay-card"><h2>Check In</h2>`;

  guests.forEach(guest => {
    const hasMet = state.metGuests.has(guest.id);
    const hasChecked = state.checkedInGuests.has(guest.id);
    let className = !hasMet ? "locked" : (!hasChecked ? "pending-glow" : "unlocked");

    html += `
      <div class="list-item ${className}"
        ${hasMet ? `onclick="openSnapshot('${guest.id}')"` : ""}>
        ${hasMet ? guestDisplayName(guest) : "???"}
      </div>
    `;
  });

  html += `<button onclick="toggleCheckIn()">Close</button></div>`;
  panel.innerHTML = html;
  showOverlay(panel);
}

function openSnapshot(id) {
  const guest = guests.find(g => g.id === id);
  if (!guest) return;

  snapshotTransition(() => {
    const checkInPanel = $("checkInPanel");
    hideOverlayImmediately(checkInPanel);

    const overlay = $("snapshotOverlay");
    overlay.innerHTML = `
      <div class="snapshot-placeholder">
        <h2>${guest.name}</h2>
        ${guest.role ? `<div class="guest-choice-role">${guest.role}</div>` : ``}
        <p>${guest.snapshotText}</p>
      </div>
    `;

    showOverlay(overlay);
    state.checkedInGuests.add(id);

    overlay.onclick = () => {
      overlay.onclick = null;
      snapshotTransition(() => {
        hideOverlayImmediately(overlay);
        checkRequirements();
        updateEavesdropButton();
        if (state.currentGuest === null && state.phase !== "requirements" && state.phase !== "host") {
          advanceToNextGuest();
        }
      });
    };
  });
}

// ==================== BAND & EAVESDROP ====================
function updateBandButton() {
  const btn = $("bandButton");
  if (btn) {
    const shouldShow = state.phase === "requirements" || state.phase === "host";
    btn.classList.toggle("hidden", !shouldShow);
    btn.disabled = state.isInteracting;
  }
}

function updateEavesdropButton() {
  const btn = $("eavesdropButton");
  if (btn) {
    const shouldShow = state.phase === "requirements" || state.phase === "host";
    btn.classList.toggle("hidden", !shouldShow);
    btn.disabled = state.hasCompletedEavesdrop || state.isInteracting;
  }
}

function watchBand() {
  if ((state.phase !== "requirements" && state.phase !== "host") || state.isInteracting) return;

  state.hasWatchedBand = true;
  snapshotTransition(() => {
    const overlay = $("snapshotOverlay");

    overlay.innerHTML = `
      <div class="snapshot-placeholder">
        <h2>The Band</h2>
        <p>Band artwork placeholder</p>
      </div>
    `;

    showOverlay(overlay);
    overlay.onclick = () => {
      overlay.onclick = null;
      snapshotTransition(() => {
        hideOverlayImmediately(overlay);
        checkRequirements();
      });
    };
  });
}

function startEavesdrop() {
  if (state.phase !== "requirements" || state.hasCompletedEavesdrop || state.isInteracting) return;

  state.eavesdropVisited = new Set();
  state.eavesdropPlayer = { x: 3, y: 4 };
  state.activeEavesdropScene = null;
  showEavesdropMaze();
}

function isEavesdropWall(x, y) {
  const walls = new Set(["1,1", "2,1", "4,1", "5,1", "1,3", "2,3", "4,3", "5,3"]);
  return walls.has(`${x},${y}`);
}

function finishEavesdrop() {
  state.hasCompletedEavesdrop = true;
  state.eavesdropMode = null;
  state.isInteracting = false;
  setObjectiveVisible(true);
  $("roomCenter").innerHTML = "";
  updateNavigation();
  updateEavesdropButton();
  updateRequirementsObjective();
  checkRequirements();
}

function showEavesdropMaze() {
  if (state.hasCompletedEavesdrop) return;

  if (state.eavesdropVisited.size >= eavesdropScenes.length) {
    finishEavesdrop();
    return;
  }

  state.eavesdropMode = "maze";
  state.isInteracting = true;
  setObjectiveVisible(false);
  updateNavigation();

  const width = 7;
  const height = 5;
  let cells = "";

  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const scene = eavesdropScenes.find(item =>
        item.x === x && item.y === y && !state.eavesdropVisited.has(item.id)
      );
      const isPlayer = state.eavesdropPlayer.x === x && state.eavesdropPlayer.y === y;
      const isWall = isEavesdropWall(x, y);
      const classes = ["maze-cell"];
      if (isWall) classes.push("maze-wall");
      if (scene) classes.push("maze-scene");
      if (isPlayer) classes.push("maze-player-cell");

      cells += `
        <div class="${classes.join(" ")}" aria-label="${scene ? scene.label : isPlayer ? "Bartender" : "Hall"}">
          ${scene ? `<span class="maze-scene-icon" title="${scene.label}">${scene.icon}</span>` : ""}
          ${isPlayer ? `<span class="maze-player-icon" title="Bartender">BT</span>` : ""}
        </div>
      `;
    }
  }

  $("roomCenter").innerHTML = `
    <div class="maze-panel">
      <div class="maze-title">Explore the room. What will you perceive?</div>
      <div class="maze-grid">${cells}</div>
      <div class="maze-controls" aria-label="Maze controls">
        <button onclick="moveEavesdropPlayer(0, -1)">Up</button>
        <div>
          <button onclick="moveEavesdropPlayer(-1, 0)">Left</button>
          <button onclick="moveEavesdropPlayer(1, 0)">Right</button>
        </div>
        <button onclick="moveEavesdropPlayer(0, 1)">Down</button>
      </div>
    </div>
  `;
}

function moveEavesdropPlayer(dx, dy) {
  if (state.eavesdropMode !== "maze") return;

  const nextX = state.eavesdropPlayer.x + dx;
  const nextY = state.eavesdropPlayer.y + dy;

  if (nextX < 0 || nextX > 6 || nextY < 0 || nextY > 4 || isEavesdropWall(nextX, nextY)) {
    return;
  }

  state.eavesdropPlayer = { x: nextX, y: nextY };

  const scene = eavesdropScenes.find(item =>
    item.x === nextX && item.y === nextY && !state.eavesdropVisited.has(item.id)
  );

  if (scene) {
    openEavesdropScene(scene);
  } else {
    showEavesdropMaze();
  }
}

function openEavesdropScene(scene) {
  state.activeEavesdropScene = scene;
  state.eavesdropMode = "scene";
  setObjectiveVisible(true);
  $("roomCenter").innerHTML = "";
  showDialogue(scene.setup, () => showEavesdropChoices(scene));
}

function showEavesdropChoices(scene) {
  setObjective("Listen to the room");
  state.isInteracting = true;
  updateNavigation();

  $("roomCenter").innerHTML = `
    <div class="overlay-card">
      <h2>What will you do?</h2>
      ${scene.choices.map((choice, i) => `
        <button class="eavesdrop-choice-button" data-choice="${i}">${choice.text}</button><br><br>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".eavesdrop-choice-button").forEach(btn => {
    btn.addEventListener("click", () => {
      const choice = scene.choices[Number(btn.dataset.choice)];
      $("roomCenter").innerHTML = "";
      state.eavesdropVisited.add(scene.id);
      showDialogue(choice.result, () => {
        if (state.eavesdropVisited.size >= eavesdropScenes.length) {
          finishEavesdrop();
        } else {
          showEavesdropMaze();
        }
      });
    });
  });
}

function handleEavesdropKey(event) {
  if (state.eavesdropMode !== "maze") return;

  const keyMoves = {
    ArrowUp: [0, -1],
    w: [0, -1],
    W: [0, -1],
    ArrowDown: [0, 1],
    s: [0, 1],
    S: [0, 1],
    ArrowLeft: [-1, 0],
    a: [-1, 0],
    A: [-1, 0],
    ArrowRight: [1, 0],
    d: [1, 0],
    D: [1, 0]
  };

  const move = keyMoves[event.key];
  if (!move) return;

  event.preventDefault();
  moveEavesdropPlayer(move[0], move[1]);
}

document.addEventListener("keydown", handleEavesdropKey);
function checkIfAllCorrect() {
  if (state.correctGuests.size === guests.length) {
    state.phase = "requirements";
    setGameTime(23, 45);
    updateRequirementsObjective();
    updateBandButton();
    updateEavesdropButton();
    updateRoomControls();
    enterWaiting();
  } else {
    spawnNextGuest();
  }
}

function checkRequirements() {
  if (state.phase === "host") return;

  if (
    state.correctGuests.size === guests.length &&
    state.checkedInGuests.size === guests.length &&
    state.hasWatchedBand &&
    state.hasCompletedEavesdrop
  ) {
    state.phase = "host";
    setGameTime(24, 0);
    showScreen("barView");
    setObjective("Serve your final guest");

    $("guestArea").innerHTML = `
      <div class="guest-sprite">
        <button id="hostInteractButton" class="interact-button">!</button>
        <div class="guest-body">Mr. Swan</div>
      </div>
    `;

    $("hostInteractButton").addEventListener("click", startHostDialogue);
    updateBandButton();
    updateEavesdropButton();
    updateRoomControls();
  }
}

// ==================== MR. SWAN ====================
function startHostDialogue() {
  showDialogue([
    ["Mr. Swan", "You've been watching this place pretty closely."],
    ["Mr. Swan", "Most people don't do that. They just serve and leave."]
  ], showHostFirstChoices);
}

function showHostChoices(prompt, options) {
  setObjective("Answer Mr. Swan");
  $("guestArea").innerHTML = `
    <div class="overlay-card">
      <h2>${prompt}</h2>
      ${options.map((opt, i) => `
        <button class="host-choice-button" data-choice="${i}">${opt.text}</button><br><br>
      `).join("")}
    </div>
  `;

  document.querySelectorAll(".host-choice-button").forEach(btn => {
    btn.addEventListener("click", () => {
      $("guestArea").innerHTML = "";
      options[Number(btn.dataset.choice)].onSelect();
    });
  });
}

function showHostFirstChoices() {
  showHostChoices("What do you say?", [
    { text: "I was just doing my job.", onSelect: () => answerHostFirst(0) },
    { text: "I don't think I really understood what was happening here.", onSelect: () => answerHostFirst(1) },
    { text: "I think I understand it.", onSelect: () => answerHostFirst(2) },
    { text: "What is this place?", onSelect: () => answerHostFirst(3) }
  ]);
}

function answerHostFirst(choice) {
  const responses = [
    [["Mr. Swan", "Sure."], ["Mr. Swan", "That's what people say when they don't want to think about it too much."], ["Mr. Swan", "But you were paying attention. That's different."]],
    [["Mr. Swan", "That's fair."], ["Mr. Swan", "It's not obvious at first."], ["Mr. Swan", "Most people think they're just serving drinks."]],
    [["Mr. Swan", "Do you?"], ["Mr. Swan", "People usually say that right before they miss something important."]],
    [["Mr. Swan", "It's a bar."], ["Mr. Swan", "At least... that's what it's supposed to look like."], ["Mr. Swan", "People come in, talk a little, leave a little different than they came in."]]
  ];
  showDialogue(responses[choice], showHostDrinkQuestion);
}

function showHostDrinkQuestion() {
  showDialogue([
    ["Narration", "Mr. Swan leans on the bar, casually wiping a glass that doesn't seem dirty."],
    ["Mr. Swan", "Let me ask you something."],
    ["Mr. Swan", "When you were choosing drinks... were you picking what people are like?"],
    ["Mr. Swan", "Or what you thought they needed?"]
  ], showHostDrinkChoices);
}

function showHostDrinkChoices() {
  showHostChoices("What were you choosing?", [
    { text: "What they are like.", onSelect: () => answerHostDrinkQuestion(0) },
    { text: "What they needed.", onSelect: () => answerHostDrinkQuestion(1) },
    { text: "There isn't really a difference.", onSelect: () => answerHostDrinkQuestion(2) },
    { text: "I wasn't sure.", onSelect: () => answerHostDrinkQuestion(3) }
  ]);
}

function answerHostDrinkQuestion(choice) {
  const responses = [
    [["Mr. Swan", "That's probably the closest to right."], ["Mr. Swan", "You were paying attention to them, not the outcome."]],
    [["Mr. Swan", "That's what most people try to do here."], ["Mr. Swan", "It doesn't always go the way they expect."]],
    [["Mr. Swan", "Yeah."], ["Mr. Swan", "That's usually where it gets complicated."]],
    [["Mr. Swan", "That's normal."], ["Mr. Swan", "Nobody really is, the first time through."]]
  ];
  showDialogue(responses[choice], showHostFinalShift);
}

function showHostFinalShift() {
  showDialogue([
    ["Narration", "Mr. Swan looks at the room behind you instead of at you."],
    ["Mr. Swan", "You know what's funny?"],
    ["Mr. Swan", "Everyone who works here starts thinking they're just filling time."],
    ["Mr. Swan", "But eventually they start remembering people differently than they actually were."],
    ["Mr. Swan", "Not worse or better."],
    ["Mr. Swan", "Just... adjusted."],
    ["Narration", "He looks back at you."],
    ["Mr. Swan", "Anyway."],
    ["Mr. Swan", "We're done with all that now."],
    ["Mr. Swan", "So I'll ask you properly."],
    ["Mr. Swan", "What drink are you serving me tonight?"]
  ], showEndings);
}

function showEndings() {
  setObjective("Serve Mr. Swan");
  $("guestArea").innerHTML = `
    <div class="overlay-card">
      <h2>Choose Mr. Swan's Drink</h2>
      <div class="ending-drink-row">
        <button onclick="triggerEnding(1)">Drink 1</button>
        <button onclick="triggerEnding(2)">Drink 2</button>
        <button onclick="triggerEnding(3)">Drink 3</button>
      </div>
    </div>
  `;
}

function triggerEnding(n) {
  $("guestArea").innerHTML = "";

  if (n === 1) {
    showDialogue([
      ["Mr. Swan", "Huh, so this is your perception of me? Its quite a beautiful drink, dont you think so?"],
      ["Mr. Swan", "Tell me, would you like to come out for a stroll?"],
      ["Mr. Swan", "Only for a minute. Long enough to escape the party."]
    ], showDrinkOneChoice);
  } else if (n === 2) {
    showDialogue([
      ["Mr. Swan", "Its a tad soft, dont you think? Hm."],
      ["Mr. Swan", "You have been working all night. Take the rest of it off."],
      ["Mr. Swan", "Choose someone. Dance before the house remembers you are staff."]
    ], showDanceChoices);
  } else {
    showDialogue([
      ["Mr. Swan", "Ah. Practical."],
      ["Mr. Swan", "Some nights end with fireworks. Some end with clean glasses."],
      ["Mr. Swan", "The party will be ending soon. Start clearing up, would you?"]
    ], () => showEndingSnapshot(
      "The Middle Class Man",
      "You wash glasses behind the bar while the last bright voices carry on behind you. Laughter, shoes, music, and porcelain. The party keeps sparkling where you are not looking.(put the art thing here)",
      endingOutros.cleanup.text,
      "cleanup"
    ));
  }
}

function showDrinkOneChoice() {
  $("guestArea").innerHTML = `
    <div class="overlay-card">
      <h2>Go with Mr. Swan?</h2>
      <button onclick="chooseDrinkOneEnding(true)">Yes</button><br><br>
      <button onclick="chooseDrinkOneEnding(false)">No</button>
    </div>
  `;
}

function chooseDrinkOneEnding(goOutside) {
  $("guestArea").innerHTML = "";

  if (goOutside) {
    showEndingSnapshot(
      "A Stroll With Swan",
      "You and Mr. Swan slip into the garden, laughing softly where the music cannot quite reach. For once, the party feels far away.",
      endingOutros.garden.text,
      "garden"
    );
  } else {
    showEndingSnapshot(
      "Just Another Night",
      "You stay behind the bar. Mr. Swan smiles as if he expected that too. Glasses empty, guests drift, and the night carries on like any other.",
      endingOutros.normal.text,
      "normal"
    );
  }
}

function showDanceChoices() {
  const metGuests = guests.filter(guest => state.metGuests.has(guest.id));
  const danceGuests = metGuests.length > 0 ? metGuests : guests;

  $("guestArea").innerHTML = `
    <div class="overlay-card dance-choice-card">
      <h2>Choose a Guest to Dance With</h2>
      <div class="dance-choice-list">
        ${danceGuests.map(guest => `
          <button class="list-item dance-list-item" onclick="chooseDancePartner('${guest.id}')">${guest.name}</button>
        `).join("")}
      </div>
    </div>
  `;
}

function chooseDancePartner(id) {
  const guest = guests.find(item => item.id === id);
  if (!guest) return;

  $("guestArea").innerHTML = "";
  showEndingSnapshot(
    "Among the Elites",
    `You step into the room with ${guest.name}. The band keeps playing, the floor turns warm beneath your shoes, and for a little while you are not only the bartender.`,
    `You danced with ${guest.name}. The party remembered you differently after that.`,
    "dance"
  );
}

function showEndingSnapshot(title, text, outroText, endingKey) {
  const outro = endingOutros[endingKey] || { title, text: outroText, musicTrack: endingKey || "finale" };
  state.currentEnding = {
    key: endingKey || "finale",
    title: outro.title || title,
    text: outroText || outro.text,
    musicTrack: outro.musicTrack || "finale"
  };
  state.currentMusicTrack = state.currentEnding.musicTrack;

  snapshotTransition(() => {
    const overlay = $("snapshotOverlay");
    overlay.innerHTML = `
      <div class="snapshot-placeholder ending-snapshot">
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
    `;

    showOverlay(overlay);
    overlay.onclick = () => {
      overlay.onclick = null;
      snapshotTransition(() => {
        hideOverlayImmediately(overlay);
        finishEnding();
      });
    };
  });
}

function finishEnding() {
  const ending = state.currentEnding || endingOutros.normal;
  const outroScreen = $("outroScreen");
  const endingTitle = $("endingTitle");
  const endingText = $("endingText");
  const timeDisplay = $("timeDisplay");

  if (outroScreen) {
    outroScreen.className = `screen outro-screen ending-${ending.key || "finale"}`;
    outroScreen.dataset.musicTrack = ending.musicTrack || "finale";
  }

  if (endingTitle) endingTitle.textContent = `Ending: ${ending.title || "The party is over."}`;
  if (endingText) endingText.textContent = ending.text || "Thank you for playing.";
  if (timeDisplay) timeDisplay.classList.add("hidden");
  showScreen("outroScreen");
}

// ==================== UTILITIES ====================
function toggleDrinkGuide() {
  if (state.isInteracting) return;
  const guide = $("drinkGuide");

  if (!guide.classList.contains("hidden")) {
    fadeOutOverlay(guide);
    return;
  }

  let html = `<div class="overlay-card"><h2>Drink Menu</h2>`;
  drinks.forEach(drink => {
    html += `<div class="list-item"><b>${drink.name}</b><br>${drink.desc}</div>`;
  });
  html += `<button onclick="toggleDrinkGuide()">Close</button></div>`;

  guide.innerHTML = html;
  showOverlay(guide);
}

function toggleSettings() {
  const panel = $("settingsPanel");
  if (!panel) return;

  if (!panel.classList.contains("hidden")) {
    fadeOutOverlay(panel);
    return;
  }

  panel.innerHTML = `
    <div class="overlay-card settings-card">
      <h2>Settings</h2>
      <div class="settings-row">
        <div class="settings-label">Text Speed</div>
        <div class="settings-options">
          <button class="speed-option" data-speed="instant" onclick="setTextSpeed('instant')">Instant</button>
          <button class="speed-option" data-speed="normal" onclick="setTextSpeed('normal')">Normal</button>
          <button class="speed-option" data-speed="slow" onclick="setTextSpeed('slow')">Slow</button>
        </div>
      </div>
      <div class="settings-row">
        <label class="settings-label" for="musicVolume">Music</label>
        <input id="musicVolume" type="range" min="0" max="100" step="5" oninput="setMusicVolume(this.value)">
        <span id="musicVolumeValue" class="settings-value"></span>
      </div>
      <div class="settings-row">
        <label class="settings-label" for="soundVolume">Sound</label>
        <input id="soundVolume" type="range" min="0" max="100" step="5" oninput="setSoundVolume(this.value)">
        <span id="soundVolumeValue" class="settings-value"></span>
      </div>
      <button onclick="toggleSettings()">Close</button>
    </div>
  `;

  showOverlay(panel);
  updateSettingsControls();
}
function restartGame() {
  location.reload();
}

loadSettings();

// ==================== EXPOSE FUNCTIONS ====================
window.startGame = startGame;
window.startGuestDialogue = startGuestDialogue;
window.serveDrink = serveDrink;
window.dillyDally = dillyDally;
window.showRoom = showRoom;
window.showBar = showBar;
window.toggleCheckIn = toggleCheckIn;
window.openSnapshot = openSnapshot;
window.toggleDrinkGuide = toggleDrinkGuide;
window.toggleSettings = toggleSettings;
window.setTextSpeed = setTextSpeed;
window.setMusicVolume = setMusicVolume;
window.setSoundVolume = setSoundVolume;
window.watchBand = watchBand;
window.startEavesdrop = startEavesdrop;
window.moveEavesdropPlayer = moveEavesdropPlayer;
window.startHostDialogue = startHostDialogue;
window.answerHostFirst = answerHostFirst;
window.answerHostDrinkQuestion = answerHostDrinkQuestion;
window.triggerEnding = triggerEnding;
window.chooseDrinkOneEnding = chooseDrinkOneEnding;
window.chooseDancePartner = chooseDancePartner;
window.restartGame = restartGame;