// ==================== DATA ====================
const drinks = [
  { name: "Velvet Lumen", image: "/images/drinks/velvet-lumen.png", desc: "Soft and charming. For someone hiding exhaustion behind perfect manners." },
  { name: "Cinderold", image: "/images/drinks/cinderold.png", desc: "A tad smoky. Perfect for someone who is finished with comfort." },
  { name: "Glasswater No.7", image: "/images/drinks/glasswater-no7.png", desc: "Clear, sharp, and unsentimental. For someone who watches closely and says what others avoid." },
  { name: "Juniper Static", image: "/images/drinks/juniper-static.png", desc: "Restless but perfectly balanced. For one whose thoughts keep arranging the room." },
  { name: "Blue Atrium", image: "/images/drinks/blue-atrium.png", desc: "Bright and flavorful. For those who mix revelation with class." },
  { name: "Ashen Nectar", image: "/images/drinks/ashen-nectar.png", desc: "Pale and restrained. Great for someone controlled and composed." },
  { name: "Orchid Hour", image: "/images/drinks/orchid-hour.png", desc: "Floral and theatrical. For someone performing the person they wish to become." },
  { name: "Sable Tonic", image: "/images/drinks/sable-tonic.png", desc: "Dark, steady, and composed. For someone holding themselves together out of sight." }
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

const checkInSnapshots = {
  calder_venn: {
    image: "/images/checkins/john-stone.png",
    text: "John Stone waits at the balcony for a baroness who keeps him guessing."
  },
  lila_march: {
    image: "/images/checkins/lila-march.png",
    text: "Lila March strolls through the garden as if the flowers were another audience."
  },
  arthur_sable: {
    image: "/images/checkins/silas-weaver.png",
    text: "Silas Weaver stands in the library, already deciding which version of the room will survive in print."
  },
  evelyn_cross: {
    image: "/images/checkins/evelyn-cross.png",
    text: "Evelyn Cross smiles as she dances with her husband, bright enough to make exhaustion look graceful."
  },
  jonas_keir: {
    image: "/images/checkins/rene-de-clairmont.png",
    text: "Rene de Clairmont retells his days in the war, turning memory into something almost polished."
  },
  madeline_roe: {
    image: "/images/checkins/liesel-ziegler.png",
    text: "Liesel Ziegler discusses investment plans as though every hallway were already part of a blueprint."
  },
  theo_brann: {
    image: "/images/checkins/andrew-smith.png",
    text: "Viscount Andrew Smith looks for a private place to discuss business with Mr. Swan."
  },
  isolde_faye: {
    image: "/images/checkins/flora-calderon.png",
    text: "Flora Calderon drifts through color and birdsong, turning the room into one of her paintings."
  }
};
const endingOutros = {
  garden: {
    title: "A Stroll With Swan",
    musicTrack: "intro",
    text: "You stepped outside with Mr. Swan. For a little while, the party became something distant and almost gentle."
  },
  normal: {
    title: "Just Another Night",
    musicTrack: "intro",
    text: "You go home like any other night, to a house smaller than any of the guests you served, a life lesser, and a wage inferior."
  },
  dance: {
    title: "Among the Elites",
    musicTrack: "intro",
    text: "You danced among people who spent the night being perceived. For a moment, the room perceived you."
  },
  cleanup: {
    title: "The Middle Class Man",
    musicTrack: "intro",
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
  swanQuestionsAsked: 0,
  swanImpressions: [],
  settings: {
    textSpeed: "normal",
    musicVolume: 70,
    chatterVolume: 70
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

const musicTracks = {
  intro: "/audio/intro-jazz-waltz.mp3",
  location: "/audio/location-jazz.mp3",
  band: "/audio/watch-band.mp3"
};

const audioState = {
  currentMusic: null,
  currentMusicKey: null,
  musicFadeTimer: null,
  musicUnlockHandler: null,
  pendingMusicKey: null,
  musicElements: {},
  chatter: null,
  chatterUnlockHandler: null
};

function loadSettings() {
  try {
    const saved = localStorage.getItem("lcamsSettings");
    if (saved) {
      const parsed = JSON.parse(saved);
      state.settings = { ...state.settings, ...parsed };
      if (typeof parsed.soundVolume === "number" && typeof parsed.chatterVolume !== "number") {
        state.settings.chatterVolume = parsed.soundVolume;
      }
    }
  } catch (error) {
    state.settings = { textSpeed: "normal", musicVolume: 70, chatterVolume: 70 };
  }
  normalizeAudioDefaults();
}

function saveSettings() {
  localStorage.setItem("lcamsSettings", JSON.stringify(state.settings));
}

function normalizeAudioDefaults() {
  if (!Number.isFinite(Number(state.settings.musicVolume)) || Number(state.settings.musicVolume) <= 0) {
    state.settings.musicVolume = 70;
  }
  if (!Number.isFinite(Number(state.settings.chatterVolume)) || Number(state.settings.chatterVolume) <= 0) {
    state.settings.chatterVolume = 70;
  }
}

function setTextSpeed(speed) {
  if (!dialogueSpeedDelays.hasOwnProperty(speed)) return;
  state.settings.textSpeed = speed;
  saveSettings();
  updateSettingsControls();
}

function setMusicVolume(value) {
  state.settings.musicVolume = Number(value);
  applyAudioSettings();
  saveSettings();
  updateSettingsControls();
}

function setChatterVolume(value) {
  state.settings.chatterVolume = Number(value);
  applyAudioSettings();
  saveSettings();
  updateSettingsControls();
}

function setSoundVolume(value) {
  setChatterVolume(value);
}

function updateSettingsControls() {
  document.querySelectorAll(".speed-option").forEach(button => {
    button.classList.toggle("selected", button.dataset.speed === state.settings.textSpeed);
  });

  const musicSlider = $("musicVolume");
  const chatterSlider = $("chatterVolume");
  const musicValue = $("musicVolumeValue");
  const chatterValue = $("chatterVolumeValue");

  if (musicSlider) musicSlider.value = state.settings.musicVolume;
  if (chatterSlider) chatterSlider.value = state.settings.chatterVolume;
  if (musicValue) musicValue.textContent = `${state.settings.musicVolume}%`;
  if (chatterValue) chatterValue.textContent = `${state.settings.chatterVolume}%`;
}

function applyAudioSettings() {
  Object.values(audioState.musicElements).forEach(audio => {
    audio.volume = audio === audioState.currentMusic ? state.settings.musicVolume / 100 : audio.volume;
  });

  if (audioState.chatter) {
    audioState.chatter.volume = audioState.chatter.paused ? audioState.chatter.volume : state.settings.chatterVolume / 100;
  }
}

function getMusicElement(key) {
  if (!musicTracks[key]) return null;
  if (audioState.musicElements[key]) return audioState.musicElements[key];

  const existingAudio = key === "intro" ? $("titleMusicAudio") : null;
  const audio = existingAudio || new Audio(musicTracks[key]);
  if (!existingAudio) {
    audio.src = musicTracks[key];
  }
  audio.preload = "auto";
  audio.playsInline = true;
  audio.muted = false;
  if (!existingAudio || existingAudio.paused) audio.volume = 0;
  audio.dataset.musicKey = key;
  audio.dataset.restarting = "false";
  audio.addEventListener("timeupdate", () => {
    if (audio !== audioState.currentMusic || audio.dataset.restarting === "true") return;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    if (audio.duration - audio.currentTime < 1.1) restartMusicCleanly(audio);
  });
  audio.addEventListener("ended", () => restartMusicCleanly(audio));
  audioState.musicElements[key] = audio;
  return audio;
}

function ensureTrackSource(audio, key) {
  if (!audio || key === "intro" || !musicTracks[key]) return;
  const expectedSrc = new URL(musicTracks[key], window.location.href).href;
  if (audio.currentSrc && audio.currentSrc !== expectedSrc) {
    audio.pause();
    audio.src = musicTracks[key];
    audio.load();
  }
}

function restartMusicCleanly(audio) {
  if (!audio || audio !== audioState.currentMusic) return;
  audio.dataset.restarting = "true";
  fadeAudio(audio, 0, 650, () => {
    if (audio !== audioState.currentMusic) return;
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    fadeAudio(audio, state.settings.musicVolume / 100, 900, () => {
      audio.dataset.restarting = "false";
    });
  });
}

function pauseAudioCleanly(audio) {
  if (!audio) return;
  fadeAudio(audio, 0, 500, () => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function stopOtherMusic(activeAudio) {
  const titleAudio = $("titleMusicAudio");
  const tracks = new Set([...Object.values(audioState.musicElements), titleAudio].filter(Boolean));

  tracks.forEach(audio => {
    if (audio && audio !== activeAudio && !audio.paused) {
      pauseAudioCleanly(audio);
    }
  });
}

function stopTitleMusicNow() {
  const titleAudio = $("titleMusicAudio");
  if (!titleAudio) return;
  if (titleAudio._lcamsFadeFrame) {
    cancelAnimationFrame(titleAudio._lcamsFadeFrame);
    titleAudio._lcamsFadeFrame = null;
  }
  titleAudio.pause();
  titleAudio.currentTime = 0;
  titleAudio.volume = 0;
  if (audioState.currentMusic === titleAudio) {
    audioState.currentMusic = null;
    audioState.currentMusicKey = null;
  }
}

function transitionTitleToGameMusic() {
  const titleAudio = $("titleMusicAudio");
  const gameAudio = getMusicElement("location");
  if (!gameAudio) return;

  ensureTrackSource(gameAudio, "location");
  Object.entries(audioState.musicElements).forEach(([trackKey, audio]) => {
    if (trackKey !== "location" && trackKey !== "intro" && audio) {
      if (audio._lcamsFadeFrame) {
        cancelAnimationFrame(audio._lcamsFadeFrame);
        audio._lcamsFadeFrame = null;
      }
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    }
  });

  audioState.currentMusic = gameAudio;
  audioState.currentMusicKey = "location";
  gameAudio.muted = false;
  gameAudio.volume = 0;

  requestAudioPlay(gameAudio, "location", () => {
    fadeAudio(gameAudio, state.settings.musicVolume / 100, 850);
  });

  if (titleAudio && !titleAudio.paused) {
    fadeAudio(titleAudio, 0, 520, () => {
      titleAudio.pause();
      titleAudio.currentTime = 0;
    });
  } else if (titleAudio) {
    titleAudio.volume = 0;
    titleAudio.currentTime = 0;
  }
}

function playAudioWithUnlock(audio, key) {
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      audioState.pendingMusicKey = key;
      if (audioState.musicUnlockHandler) return;
      audioState.musicUnlockHandler = () => {
        const pending = audioState.pendingMusicKey;
        audioState.pendingMusicKey = null;
        audioState.musicUnlockHandler = null;
        if (pending) playMusicTrack(pending, 900);
      };
      document.addEventListener("pointerdown", audioState.musicUnlockHandler, { once: true });
      document.addEventListener("keydown", audioState.musicUnlockHandler, { once: true });
    });
  }
}

function requestAudioPlay(audio, key, onStarted) {
  if (!audio) return;
  audio.muted = false;
  const playPromise = audio.play();
  const markStarted = () => {
    if (onStarted) onStarted();
  };

  if (playPromise && typeof playPromise.then === "function") {
    playPromise.then(markStarted).catch(() => {
      audioState.pendingMusicKey = key;
      if (audioState.musicUnlockHandler) return;
      audioState.musicUnlockHandler = () => {
        const pending = audioState.pendingMusicKey;
        audioState.pendingMusicKey = null;
        audioState.musicUnlockHandler = null;
        if (pending) playMusicTrack(pending);
      };
      document.addEventListener("pointerdown", audioState.musicUnlockHandler, { once: true });
      document.addEventListener("keydown", audioState.musicUnlockHandler, { once: true });
    });
  } else {
    markStarted();
  }
}

function ensureChatter() {
  if (audioState.chatter) return audioState.chatter;

  const audio = new Audio("/audio/bar-chatter.m4a");
  audio.preload = "auto";
  audio.playsInline = true;
  audio.volume = 0;
  audio.dataset.restarting = "false";
  audio.addEventListener("timeupdate", () => {
    if (audio.dataset.restarting === "true") return;
    if (!Number.isFinite(audio.duration) || audio.duration <= 0) return;
    if (audio.duration - audio.currentTime < 1.1) restartChatterCleanly();
  });
  audio.addEventListener("ended", restartChatterCleanly);
  audioState.chatter = audio;
  return audio;
}

function restartChatterCleanly() {
  const audio = audioState.chatter;
  if (!audio) return;
  audio.dataset.restarting = "true";
  fadeAudio(audio, 0, 650, () => {
    audio.currentTime = 0;
    const playPromise = audio.play();
    if (playPromise && typeof playPromise.catch === "function") playPromise.catch(() => {});
    fadeAudio(audio, state.settings.chatterVolume / 100, 900, () => {
      audio.dataset.restarting = "false";
    });
  });
}

function playChatter(fadeMs = 1200) {
  const audio = ensureChatter();
  audio.muted = false;
  audio.volume = state.settings.chatterVolume / 100;
  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(() => {
      if (audioState.chatterUnlockHandler) return;
      audioState.chatterUnlockHandler = () => {
        audioState.chatterUnlockHandler = null;
        playChatter(900);
      };
      document.addEventListener("pointerdown", audioState.chatterUnlockHandler, { once: true });
      document.addEventListener("keydown", audioState.chatterUnlockHandler, { once: true });
    });
  }
}

function stopChatterNow() {
  const audio = audioState.chatter;
  if (!audio) return;
  if (audio._lcamsFadeFrame) {
    cancelAnimationFrame(audio._lcamsFadeFrame);
    audio._lcamsFadeFrame = null;
  }
  audio.pause();
  audio.currentTime = 0;
  audio.volume = 0;
  audio.dataset.restarting = "false";
}

function fadeOutChatter(duration = 1200) {
  const audio = audioState.chatter;
  if (!audio) return;
  audio.dataset.restarting = "false";
  fadeAudio(audio, 0, duration, () => {
    audio.pause();
    audio.currentTime = 0;
  });
}

function fadeAudio(audio, targetVolume, duration = 1200, onComplete) {
  if (audio._lcamsFadeFrame) {
    cancelAnimationFrame(audio._lcamsFadeFrame);
    audio._lcamsFadeFrame = null;
  }
  const startVolume = audio.volume;
  const startedAt = performance.now();

  function tick(now) {
    const progress = Math.min(1, (now - startedAt) / duration);
    audio.volume = startVolume + (targetVolume - startVolume) * progress;
    if (progress < 1) {
      audio._lcamsFadeFrame = requestAnimationFrame(tick);
    } else {
      audio._lcamsFadeFrame = null;
      if (onComplete) onComplete();
    }
  }

  audio._lcamsFadeFrame = requestAnimationFrame(tick);
}

function playMusicTrack(key, fadeMs = 1200) {
  if (!musicTracks[key]) {
    stopMusic(fadeMs);
    return;
  }

  const next = getMusicElement(key);
  if (!next) return;
  ensureTrackSource(next, key);
  const previousTracks = new Set([...Object.values(audioState.musicElements), $("titleMusicAudio")].filter(Boolean));
  previousTracks.delete(next);
  audioState.currentMusic = next;
  audioState.currentMusicKey = key;
  next.volume = state.settings.musicVolume / 100;
  next.muted = false;

  requestAudioPlay(next, key, () => {
    previousTracks.forEach(audio => {
      if (!audio || audio === next) return;
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    });
  });
}

function forceLocationMusic(key, restartTrack = false) {
  const next = getMusicElement(key);
  if (!next) return;
  const expectedSrc = new URL(musicTracks[key], window.location.href).href;
  if (key !== "intro" && (restartTrack || next.currentSrc !== expectedSrc)) {
    next.pause();
    next.src = musicTracks[key];
    next.load();
    next.currentTime = 0;
  }

  Object.entries(audioState.musicElements).forEach(([trackKey, audio]) => {
    if (trackKey !== key && audio) {
      if (audio._lcamsFadeFrame) {
        cancelAnimationFrame(audio._lcamsFadeFrame);
        audio._lcamsFadeFrame = null;
      }
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    }
  });

  const titleAudio = $("titleMusicAudio");
  if (key !== "intro" && titleAudio) {
    if (titleAudio._lcamsFadeFrame) {
      cancelAnimationFrame(titleAudio._lcamsFadeFrame);
      titleAudio._lcamsFadeFrame = null;
    }
    titleAudio.pause();
    titleAudio.currentTime = 0;
    titleAudio.volume = 0;
  }

  if (key === "intro" && titleAudio && titleAudio !== next) {
    titleAudio.pause();
    titleAudio.currentTime = 0;
    titleAudio.volume = 0;
  }

  audioState.currentMusic = next;
  audioState.currentMusicKey = key;
  next.volume = state.settings.musicVolume / 100;
  next.muted = false;
  requestAudioPlay(next, key);
}

function startTitleMusic() {
  if (state.phase !== "intro" || !$("introScreen")?.classList.contains("active")) return;
  stopChatterNow();
  playMusicTrack("intro", 1400);
}

function primeGameAudio() {
  // Kept for older cached buttons; the Play click now owns the music handoff.
}

function stopMusic(fadeMs = 800) {
  const current = audioState.currentMusic;
  if (!current) return;
  audioState.currentMusic = null;
  audioState.currentMusicKey = null;
  fadeAudio(current, 0, fadeMs, () => {
    current.pause();
    current.currentTime = 0;
  });
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
  if (state.phase !== "intro") return;
  state.phase = "instructions";
  transitionTitleToGameMusic();
  playChatter(1400);
  setGameTime(21, 0);
  setObjective("Read instructions");
  document.body.classList.add("intro-butterfly-transition");

  playButterflyEndingReveal(() => {
    document.body.classList.remove("intro-butterfly-transition");
    showDialogue(instructions, () => {
      state.phase = "firstCycle";
      state.guestQueue = [...guests];
      setGameTime(21, 30);
      spawnNextGuest();
    });
  }, () => {
    showScreen("barView");
    startGameClock();
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

  $("guestArea").innerHTML = renderGuestSprite(state.currentGuest);
  updateNavigation();
}

function renderGuestSprite(guest) {
  if (guest.id === "calder_venn") {
    return `
      <div class="guest-sprite guest-sprite-art john-stone-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image john-stone-sprite" src="/images/characters/john-stone-cutout.png" alt="${guest.name}" draggable="false">
      </div>
    `;
  }

  if (guest.id === "lila_march") {
    return `
      <div class="guest-sprite guest-sprite-art lila-march-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image lila-march-sprite" src="/images/characters/lila-march-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "arthur_sable") {
    return `
      <div class="guest-sprite guest-sprite-art silas-weaver-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image silas-weaver-sprite" src="/images/characters/silas-weaver-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "evelyn_cross") {
    return `
      <div class="guest-sprite guest-sprite-art evelyn-cross-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image evelyn-cross-sprite" src="/images/characters/evelyn-cross-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "jonas_keir") {
    return `
      <div class="guest-sprite guest-sprite-art rene-de-clairmont-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image rene-de-clairmont-sprite" src="/images/characters/rene-de-clairmont-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "madeline_roe") {
    return `
      <div class="guest-sprite guest-sprite-art liesel-ziegler-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image liesel-ziegler-sprite" src="/images/characters/liesel-ziegler-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "theo_brann") {
    return `
      <div class="guest-sprite guest-sprite-art andrew-smith-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image andrew-smith-sprite" src="/images/characters/andrew-smith-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  if (guest.id === "isolde_faye") {
    return `
      <div class="guest-sprite guest-sprite-art flora-calderon-guest">
        <button class="interact-button" onclick="startGuestDialogue()">!</button>
        <img class="guest-image flora-calderon-sprite" src="/images/characters/flora-calderon-cutout.png" alt="${guest.name}" draggable="false">
        <div class="guest-nameplate">${guestDisplayName(guest)}</div>
      </div>
    `;
  }

  return `
    <div class="guest-sprite">
      <button class="interact-button" onclick="startGuestDialogue()">!</button>
      <div class="guest-body">${guestDisplayName(guest)}</div>
    </div>
  `;
}

function hideGuestInteractButtons() {
  document.querySelectorAll(".guest-sprite-art .interact-button").forEach(button => {
    button.classList.add("hidden");
  });
}

function startGuestDialogue() {
  if (state.isInteracting) return;
  if (!state.currentGuest) return;
  const guest = state.currentGuest;
  hideGuestInteractButtons();

  showDialogue(
    guest.dialogue.map(line => [guest.name, line]),
    showDrinkChoices
  );
}

function playPourSound(callback) {
  const audio = new Audio("/audio/pour-drink.mp3");
  audio.preload = "auto";
  audio.volume = Math.max(0.35, state.settings.chatterVolume / 100);

  const finish = () => {
    audio.onended = null;
    audio.onerror = null;
    if (callback) callback();
  };

  audio.onended = finish;
  audio.onerror = finish;

  const playPromise = audio.play();
  if (playPromise && typeof playPromise.catch === "function") {
    playPromise.catch(finish);
  }
}

function showDrinkChoices() {
  const guest = state.currentGuest;
  if (!guest) return;

  const options = getDrinkOptions(guest.correctDrink);
  setObjective("Choose drink");

  $("guestArea").innerHTML = `
    ${renderGuestSprite(guest)}
    <div class="overlay-card drink-choice-card">
      <h2>Select a Drink for ${guest.name}</h2>
      ${guest.role ? `<div class="guest-choice-role">${guest.role}</div>` : ``}
      <div class="drink-choice-row">
        ${options.map(drink => {
          const drinkInfo = drinks.find(item => item.name === drink);
          return `<button class="drink-choice-button" onclick="serveDrink('${drink}')">
            <span class="drink-choice-title">${drink}</span>
            ${drinkInfo ? `<img class="drink-choice-image" src="${drinkInfo.image}" alt="${drink}">` : ``}
          </button>`;
        }).join("")}
      </div>
    </div>
  `;
  hideGuestInteractButtons();
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
  state.isInteracting = true;
  updateNavigation();
  $("guestArea").innerHTML = renderGuestSprite(guest);
  hideGuestInteractButtons();

  playPourSound(() => {
    showDialogue(
      [[guest.name, isCorrect ? guest.responses.correct : guest.responses.wrong]],
      () => {
        $("guestArea").innerHTML = "";
        state.currentGuest = null;
        updateNavigation();
        enterWaiting();
      }
    );
  });
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
  if ($("roomView")?.classList.contains("active")) {
    forceLocationMusic("location");
    playChatter(700);
  } else if ($("barView")?.classList.contains("active")) {
    forceLocationMusic("location");
    playChatter(700);
  }
  advanceToNextGuest();
}

function showRoom() {
  if (state.isInteracting || state.currentGuest) return;
  showScreen("roomView");
  if (state.phase === "host") {
    forceLocationMusic("intro");
    stopChatterNow();
    setObjective("Find Mr. Swan at the bar");
  } else {
    forceLocationMusic("location");
    playChatter(900);
  }
  updateRoomControls();
}

function showBar() {
  if (state.isInteracting) return;
  showScreen("barView");
  if (state.phase === "host") {
    forceLocationMusic("intro");
    stopChatterNow();
    setObjective("Serve your final guest");
  } else {
    forceLocationMusic("location");
    playChatter(900);
  }
  updateRoomControls();
}

function ensureActiveLocationMusic() {
  if (state.phase === "intro") return;
  if (!$("snapshotOverlay")?.classList.contains("hidden") && audioState.currentMusicKey === "band") return;

  let key = null;
  if (state.phase === "host") {
    key = "intro";
  } else {
    if ($("roomView")?.classList.contains("active")) key = "location";
    if ($("barView")?.classList.contains("active")) key = "location";
  }
  if (!key) return;

  const audio = getMusicElement(key);
  if (!audio) return;
  Object.entries(audioState.musicElements).forEach(([trackKey, trackAudio]) => {
    if (trackKey !== key && trackAudio && !trackAudio.paused) {
      if (trackAudio._lcamsFadeFrame) {
        cancelAnimationFrame(trackAudio._lcamsFadeFrame);
        trackAudio._lcamsFadeFrame = null;
      }
      trackAudio.pause();
      trackAudio.currentTime = 0;
      trackAudio.volume = 0;
    }
  });
  if (audioState.currentMusicKey !== key || audio.paused || audio.volume <= 0.01) {
    forceLocationMusic(key);
  }
  if (state.phase === "host") {
    stopChatterNow();
  } else {
    playChatter(300);
  }
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

  const checkInPanel = $("checkInPanel");
  hideOverlayImmediately(checkInPanel);

  const overlay = $("snapshotOverlay");
  const checkIn = checkInSnapshots[guest.id];
  overlay.classList.toggle("portrait-checkin-overlay", !!checkIn);
  overlay.innerHTML = checkIn ? `
    <div class="snapshot-placeholder portrait-checkin-card">
      <div class="portrait-checkin-header">
        <h2>${guest.name}</h2>
        ${guest.role ? `<div class="portrait-checkin-title">${guest.role}</div>` : ``}
      </div>
      <img class="portrait-checkin-image" src="${checkIn.image}" alt="${guest.name} check in">
      <p class="portrait-checkin-text">${checkIn.text}</p>
    </div>
  ` : `
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
    hideOverlayImmediately(overlay);
    checkRequirements();
    updateEavesdropButton();
    if (state.currentGuest === null && state.phase !== "requirements" && state.phase !== "host") {
      advanceToNextGuest();
    }
  };
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
  forceLocationMusic("band");
  snapshotTransition(() => {
    const overlay = $("snapshotOverlay");
    overlay.classList.add("band-overlay");

    overlay.innerHTML = `
      <div class="band-snapshot">
        <img class="band-snapshot-image" src="/images/band-scene.png" alt="The band">
      </div>
    `;

    showOverlay(overlay);
    overlay.onclick = () => {
      overlay.onclick = null;
      snapshotTransition(() => {
        hideOverlayImmediately(overlay);
        overlay.classList.remove("band-overlay");
        forceLocationMusic("location");
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
  clearEavesdropBackdrop();
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

function setEavesdropBackdrop(scene) {
  const roomView = $("roomView");
  if (!roomView) return;
  document.body.classList.add("eavesdrop-scene-active");
  roomView.classList.toggle("eavesdrop-balcony-bg", scene?.id === "balcony");
  roomView.classList.toggle("eavesdrop-cards-bg", scene?.id === "cards");
  roomView.classList.toggle("eavesdrop-music-bg", scene?.id === "gramophone");
  roomView.classList.toggle("eavesdrop-stairs-bg", scene?.id === "stairs");
  roomView.classList.toggle("eavesdrop-mirror-bg", scene?.id === "mirror");
  roomView.classList.remove("eavesdrop-maze-bg");
}

function clearEavesdropBackdrop() {
  document.body.classList.remove("eavesdrop-scene-active");
  $("roomView")?.classList.remove("eavesdrop-balcony-bg");
  $("roomView")?.classList.remove("eavesdrop-cards-bg");
  $("roomView")?.classList.remove("eavesdrop-music-bg");
  $("roomView")?.classList.remove("eavesdrop-stairs-bg");
  $("roomView")?.classList.remove("eavesdrop-mirror-bg");
  $("roomView")?.classList.remove("eavesdrop-maze-bg");
}

function showEavesdropMaze() {
  if (state.hasCompletedEavesdrop) return;
  clearEavesdropBackdrop();
  $("roomView")?.classList.add("eavesdrop-maze-bg");

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
          ${isPlayer ? `<span class="maze-player-icon" title="You">You</span>` : ""}
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
  setEavesdropBackdrop(scene);
  $("roomCenter").innerHTML = "";
  showDialogue(scene.setup, () => showEavesdropChoices(scene));
}

function showEavesdropChoices(scene) {
  setObjective("Listen to the room");
  state.isInteracting = true;
  updateNavigation();

  $("roomCenter").innerHTML = `
    <div class="overlay-card eavesdrop-choice-card">
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
        clearEavesdropBackdrop();
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
    spawnSwanMeeting();
  }
}

function spawnSwanMeeting() {
  state.phase = "host";
  state.currentGuest = null;
  state.isInteracting = false;
  setGameTime(24, 0);
  showScreen("roomView");
  Object.entries(audioState.musicElements).forEach(([trackKey, audio]) => {
    if (trackKey !== "intro" && audio) {
      if (audio._lcamsFadeFrame) {
        cancelAnimationFrame(audio._lcamsFadeFrame);
        audio._lcamsFadeFrame = null;
      }
      audio.pause();
      audio.currentTime = 0;
      audio.volume = 0;
    }
  });
  forceLocationMusic("intro");
  stopChatterNow();
  setObjective("Find Mr. Swan at the bar");
  removeHostChoiceLayer();

  $("guestArea").innerHTML = `
    <div class="guest-sprite guest-sprite-art mr-swan-guest">
      <button id="hostInteractButton" class="interact-button">!</button>
      <img class="guest-image mr-swan-sprite" src="/images/characters/mr-swan-cutout.png" alt="Mr. Swan" draggable="false">
      <div class="guest-nameplate">Mr. Swan</div>
    </div>
  `;

  $("hostInteractButton").addEventListener("click", startHostDialogue);
  updateBandButton();
  updateEavesdropButton();
  updateRoomControls();
}

// ==================== MR. SWAN ====================
function startHostDialogue() {
  $("hostInteractButton")?.classList.add("hidden");
  state.swanQuestionsAsked = 0;
  state.swanImpressions = [];
  showDialogue([
    ["Mr. Swan", "You've been watching this place pretty closely."],
    ["Mr. Swan", "Most people don't do that. They just serve and leave."]
  ], showHostFirstChoices);
}

function showHostChoices(prompt, options) {
  setObjective("Answer Mr. Swan");
  removeHostChoiceLayer();
  document.body.insertAdjacentHTML("beforeend", `
    <div id="hostChoiceLayer" class="host-choice-layer">
    <div class="overlay-card host-choice-card">
      <h2>${prompt}</h2>
      ${options.map((opt, i) => `
        <button class="host-choice-button" data-choice="${i}">${opt.text}</button><br><br>
      `).join("")}
    </div>
    </div>
  `);

  document.querySelectorAll(".host-choice-button").forEach(btn => {
    btn.addEventListener("click", () => {
      removeHostChoiceLayer();
      options[Number(btn.dataset.choice)].onSelect();
    });
  });
}

function removeHostChoiceLayer() {
  $("hostChoiceLayer")?.remove();
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
    ["Mr. Swan", "Before I ask you properly, do you have any questions for me?"]
  ], showSwanQuestionChoices);
}

function showSwanQuestionChoices() {
  const questions = [
    { text: "Why did you invite them here?", response: [["Mr. Swan", "Invitation is a generous word."], ["Mr. Swan", "Most people arrive anywhere they believe they will be seen."], ["Mr. Swan", "I like seeing the distance between how people see themselves and how someone like you sees them."], ["Mr. Swan", "I only gave the room a name. They brought themselves to it."]] },
    { text: "What did you want me to notice?", response: [["Mr. Swan", "Not what they owned."], ["Mr. Swan", "Not what they performed."], ["Mr. Swan", "What slipped when they thought the glass was between you and them."]] },
    { text: "What happens if I choose wrong?", response: [["Mr. Swan", "Wrong is useful."], ["Mr. Swan", "A wrong drink tells me what you were protecting."], ["Mr. Swan", "A right one tells me what you were willing to admit."]] }
  ];

  showHostChoices("Ask Mr. Swan one question.", questions.map(question => ({
    text: question.text,
    onSelect: () => showDialogue(question.response, () => showSwanImpressions(question.text))
  })));
}

function showSwanImpressions(questionText) {
  const impressions = [
    { key: "control", label: "Control", image: "/images/butterfly-control.png" },
    { key: "mercy", label: "Mercy", image: "/images/butterfly-mercy.png" },
    { key: "truth", label: "Truth", image: "/images/butterfly-truth.png" }
  ];

  removeHostChoiceLayer();
  document.body.insertAdjacentHTML("beforeend", `
    <div id="hostChoiceLayer" class="host-choice-layer swan-impression-layer">
      <div class="swan-impression-card">
        <h2>Which impression stays with you?</h2>
        <div class="swan-impression-row">
          ${impressions.map((impression, index) => `
            <button class="swan-butterfly-choice butterfly-step-${index + 1}" data-impression="${impression.key}">
              <img src="${impression.image}" alt="">
              <span>${impression.label}</span>
            </button>
          `).join("")}
        </div>
      </div>
    </div>
  `);

  document.querySelectorAll(".swan-butterfly-choice").forEach(btn => {
    btn.addEventListener("click", () => {
      state.swanImpressions.push(btn.dataset.impression);
      state.swanQuestionsAsked++;
      removeHostChoiceLayer();
      if (state.swanQuestionsAsked < 2) {
        showDialogue([
          ["Mr. Swan", "Good."],
          ["Mr. Swan", "One more, then."]
        ], showSwanQuestionChoices);
      } else {
        showDialogue([
          ["Mr. Swan", "We're done with all that now."],
          ["Mr. Swan", "So I'll ask you properly."],
          ["Mr. Swan", "What drink are you serving me tonight?"]
        ], showEndings);
      }
    });
  });
}

function showEndings() {
  setObjective("Serve Mr. Swan");
  removeHostChoiceLayer();
  document.body.insertAdjacentHTML("beforeend", `
    <div id="hostChoiceLayer" class="host-choice-layer">
    <div class="overlay-card host-choice-card">
      <h2>Choose Mr. Swan's Drink</h2>
      <div class="ending-drink-row">
        <button class="swan-drink-choice" onclick="triggerEnding(1)" aria-label="Serve the golden citrus drink">
          <img src="/images/swan-drink-1.png" alt="">
        </button>
        <button class="swan-drink-choice" onclick="triggerEnding(2)" aria-label="Serve the red drink">
          <img src="/images/swan-drink-2.png" alt="">
        </button>
        <button class="swan-drink-choice" onclick="triggerEnding(3)" aria-label="Serve the dark cherry drink">
          <img src="/images/swan-drink-3.png" alt="">
        </button>
      </div>
    </div>
    </div>
  `);
}

function triggerEnding(n) {
  removeHostChoiceLayer();

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
      ["Mr. Swan", "Then come on. Let us see if the room remembers you are staff."]
    ], showAmongTheElitesEnding);
  } else {
    showDialogue([
      ["Mr. Swan", "Ah. Practical."],
      ["Mr. Swan", "Some nights end with fireworks. Some end with clean glasses."],
      ["Mr. Swan", "The party will be ending soon. Start clearing up, would you?"]
    ], showMiddleClassManEnding);
  }
}

function showMiddleClassManEnding() {
  showEndingSequence("cleanup", [
    {
      title: "The Middle Class Man",
      image: "/images/ending-cleanup-serving.png",
      position: "center",
      text: "You serve drink after drink after drink, watching the party continue without ever needing you to join it. You see Mr. Swan talking with the other guests and wonder what they are laughing about."
    },
    {
      title: "The Middle Class Man",
      image: "/images/ending-cleanup-leaving.jpg",
      position: "center",
      text: "Later, you look back at the party as you leave. You count your tips, tuck them away, and head home."
    }
  ]);
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
    showEndingSequence("garden", [
      {
        title: "A Stroll With Swan",
        image: "/images/ending-garden.jpg",
        position: "center",
        text: "You and Mr. Swan slip into the garden, where the party music thins into night air and flowers. For once, the house feels far away."
      }
    ]);
  } else {
    showJustAnotherNightEnding();
  }
}

function showJustAnotherNightEnding() {
  showEndingSequence("normal", [
    {
      title: "Just Another Night",
      image: "/images/ending-normal-balcony.png",
      position: "center 72%",
      text: "You look outside and see Mr. Swan on the balcony with a guest you have not seen before. They spend a quiet moment together beyond the noise of the room."
    },
    {
      title: "Just Another Night",
      image: "/images/ending-normal-bar.png",
      text: "You wonder why you did not choose to escape the noise with him as well. Instead, you continue to serve guests until the end of the party, understanding your place in society."
    }
  ]);
}

function showDanceChoices() {
  showAmongTheElitesEnding();
}

function chooseDancePartner(id) {
  $("guestArea").innerHTML = "";
  showAmongTheElitesEnding();
}

function showAmongTheElitesEnding() {
  $("guestArea").innerHTML = "";
  showEndingSequence("dance", [
    {
      title: "Among the Elites",
      image: "/images/ending-dance-search.png",
      position: "center",
      text: "You look for a guest to dance with as you converse with the others, pretending, for a moment, to be of their class."
    },
    {
      title: "Among the Elites",
      image: "/images/ending-dance-swan.jpg",
      position: "center",
      size: "contain",
      text: "Then you and Mr. Swan dance to the next song. You notice they are finally playing some blues, and for a moment, you feel like one of the elites."
    }
  ]);
}

function playButterflyEndingReveal(onComplete, onReveal) {
  $("butterflySwarmOverlay")?.remove();

  const images = [
    "/images/butterfly-swarm-01.png",
    "/images/butterfly-swarm-02.png",
    "/images/butterfly-swarm-03.png",
    "/images/butterfly-swarm-04.png",
    "/images/butterfly-swarm-05.png",
    "/images/butterfly-swarm-06.png",
    "/images/butterfly-swarm-07.png",
    "/images/butterfly-swarm-08.png",
    "/images/butterfly-control.png",
    "/images/butterfly-mercy.png",
    "/images/butterfly-truth.png"
  ];

  const placements = Array.from({ length: 78 }, (_, index) => {
    const pseudoA = Math.sin((index + 2) * 12.9898) * 43758.5453;
    const pseudoB = Math.sin((index + 7) * 78.233) * 18341.117;
    const randA = pseudoA - Math.floor(pseudoA);
    const randB = pseudoB - Math.floor(pseudoB);
    const x = -10 + randA * 118;
    const y = -12 + randB * 116;
    const size = 190 + ((index * 47) % 190);
    const fromLeft = index % 2 === 0;
    const startX = fromLeft ? -(48 + (index % 7) * 7) : 48 + (index % 7) * 7;
    const endX = fromLeft ? 58 + (index % 6) * 8 : -(58 + (index % 6) * 8);
    const startY = -42 + ((index * 29) % 92);
    const endY = -54 + ((index * 37) % 112);
    const startRot = -18 + ((index * 13) % 36);
    const endRot = -22 + ((index * 17) % 44);
    const delay = ((index * 0.027) % 0.92).toFixed(2);
    return [`${x.toFixed(1)}%`, `${y.toFixed(1)}%`, `${size}px`, `${startX}vw`, `${startY}vh`, `${endX}vw`, `${endY}vh`, `${startRot}deg`, `${endRot}deg`, `${delay}s`];
  });

  const overlay = document.createElement("div");
  overlay.id = "butterflySwarmOverlay";
  overlay.className = "butterfly-swarm-overlay";
  overlay.innerHTML = placements.map((placement, index) => `
    <img src="${images[index % images.length]}" alt="" style="
      --swarm-x:${placement[0]};
      --swarm-y:${placement[1]};
      --swarm-size:${placement[2]};
      --swarm-start-x:${placement[3]};
      --swarm-start-y:${placement[4]};
      --swarm-end-x:${placement[5]};
      --swarm-end-y:${placement[6]};
      --swarm-rotate-start:${placement[7]};
      --swarm-rotate-end:${placement[8]};
      --swarm-delay:${placement[9]};
    ">
  `).join("");

  document.body.appendChild(overlay);
  window.setTimeout(() => {
    if (onReveal) onReveal();
  }, 2020);
  window.setTimeout(() => {
    overlay.remove();
    if (onComplete) onComplete();
  }, 4400);
}

function showEndingSnapshot(title, text, outroText, endingKey) {
  const outro = endingOutros[endingKey] || { title, text: outroText, musicTrack: endingKey || "finale" };
  fadeOutChatter(1300);
  forceLocationMusic("intro");
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
    overlay.classList.add("ending-reveal-waiting");
    playButterflyEndingReveal(() => {
      overlay.onclick = () => {
        overlay.onclick = null;
        snapshotTransition(() => {
          hideOverlayImmediately(overlay);
          finishEnding();
        });
      };
    }, () => {
      overlay.classList.remove("ending-reveal-waiting");
    });
  });
}

function showEndingSequence(endingKey, panels) {
  const outro = endingOutros[endingKey] || endingOutros.normal;
  fadeOutChatter(1300);
  forceLocationMusic("intro");
  state.currentEnding = {
    key: endingKey,
    title: outro.title,
    text: outro.text,
    musicTrack: outro.musicTrack || endingKey
  };
  state.currentMusicTrack = state.currentEnding.musicTrack;

  let panelIndex = 0;

  function renderPanel() {
    const panel = panels[panelIndex];
    snapshotTransition(() => {
      const overlay = $("snapshotOverlay");
      overlay.innerHTML = `
        <div class="snapshot-placeholder ending-snapshot ending-image-snapshot" style="--ending-panel-image: url('${panel.image}'); --ending-panel-position: ${panel.position || "center"}; --ending-panel-size: ${panel.size || "cover"}">
          <div class="ending-snapshot-copy">
            <h2>${panel.title}</h2>
            <p>${panel.text}</p>
          </div>
        </div>
      `;

      showOverlay(overlay);
      if (panelIndex === 0) {
        overlay.classList.add("ending-reveal-waiting");
        playButterflyEndingReveal(() => {
          overlay.onclick = () => {
            overlay.onclick = null;
            panelIndex++;
            if (panelIndex < panels.length) {
              renderPanel();
            } else {
              snapshotTransition(() => {
                hideOverlayImmediately(overlay);
                finishEnding();
              });
            }
          };
        }, () => {
          overlay.classList.remove("ending-reveal-waiting");
        });
      } else {
        overlay.onclick = () => {
          overlay.onclick = null;
          panelIndex++;
          if (panelIndex < panels.length) {
            renderPanel();
          } else {
            snapshotTransition(() => {
              hideOverlayImmediately(overlay);
              finishEnding();
            });
          }
        };
      }
    });
  }

  renderPanel();
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

  let html = `
    <div class="overlay-card drink-menu-card">
      <h2 class="drink-menu-title">
        <img class="drink-menu-swirl drink-menu-swirl-left" src="/images/menu-swirl.png" alt="">
        <span>Cocktail Menu</span>
        <img class="drink-menu-swirl drink-menu-swirl-right" src="/images/menu-swirl.png" alt="">
      </h2>
      <div class="drink-menu-grid">
  `;
  drinks.forEach(drink => {
    html += `
      <div class="drink-menu-item">
        <h3>${drink.name}</h3>
        <div class="drink-menu-image-wrap">
          <img class="drink-menu-image" src="${drink.image}" alt="${drink.name}">
        </div>
        <p>${drink.desc}</p>
      </div>
    `;
  });
  html += `</div><button onclick="toggleDrinkGuide()">Close</button></div>`;

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
        <label class="settings-label" for="chatterVolume">Chatter</label>
        <input id="chatterVolume" type="range" min="0" max="100" step="5" oninput="setChatterVolume(this.value)">
        <span id="chatterVolumeValue" class="settings-value"></span>
      </div>
      <button onclick="toggleSettings()">Close</button>
    </div>
  `;

  showOverlay(panel);
  updateSettingsControls();
}

function toggleCredits() {
  const panel = $("creditsPanel");
  if (!panel) return;

  if (!panel.classList.contains("hidden")) {
    fadeOutOverlay(panel);
    return;
  }

  panel.innerHTML = `
    <div class="overlay-card credits-card">
      <h2>Credits</h2>
      <div class="credits-section">
        <h3>Game Creation</h3>
        <p>Vita</p>
      </div>
      <div class="credits-section">
        <h3>Art</h3>
        <p>Pierre Brissaud</p>
        <p>George Barbier</p>
        <p>Art, Go&ucirc;t, Beaut&eacute; / AGB magazine</p>
        <p>Nadia Illustrations</p>
        <p>Winold Reiss</p>
        <p>Cyril Power</p>
        <p>Vita</p>
        <p>rawpixel.com</p>
      </div>
      <div class="credits-section">
        <h3>Music & Sound</h3>
        <p>Intro music: Shiden Beats Music</p>
        <p>Party music: Waveloom</p>
        <p>Band music: Joris Vermeer</p>
        <p>Ambience and sound effects: Freesound community audio</p>
      </div>
      <div class="credits-section">
        <h3>Additional Visual Sources</h3>
        <p>Public domain and archival Art Deco illustration references, with individual sources to be verified where unsigned.</p>
      </div>
      <button onclick="toggleCredits()">Close</button>
    </div>
  `;

  showOverlay(panel);
}

function restartGame() {
  location.reload();
}

loadSettings();
startTitleMusic();
window.addEventListener("load", startTitleMusic, { once: true });
document.addEventListener("visibilitychange", () => {
  if (!document.hidden) startTitleMusic();
  if (!document.hidden) ensureActiveLocationMusic();
});
window.addEventListener("focus", ensureActiveLocationMusic);
setInterval(ensureActiveLocationMusic, 1500);

if (new URLSearchParams(window.location.search).get("scene") === "swan") {
  window.addEventListener("load", () => {
    stopTitleMusicNow();
    spawnSwanMeeting();
  }, { once: true });
}

// ==================== EXPOSE FUNCTIONS ====================
window.startGame = startGame;
window.primeGameAudio = primeGameAudio;
window.startGuestDialogue = startGuestDialogue;
window.serveDrink = serveDrink;
window.dillyDally = dillyDally;
window.showRoom = showRoom;
window.showBar = showBar;
window.toggleCheckIn = toggleCheckIn;
window.openSnapshot = openSnapshot;
window.toggleDrinkGuide = toggleDrinkGuide;
window.toggleCredits = toggleCredits;
window.toggleSettings = toggleSettings;
window.setTextSpeed = setTextSpeed;
window.setMusicVolume = setMusicVolume;
window.setSoundVolume = setSoundVolume;
window.setChatterVolume = setChatterVolume;
window.watchBand = watchBand;
window.startEavesdrop = startEavesdrop;
window.moveEavesdropPlayer = moveEavesdropPlayer;
window.startHostDialogue = startHostDialogue;
window.spawnSwanMeeting = spawnSwanMeeting;
window.answerHostFirst = answerHostFirst;
window.answerHostDrinkQuestion = answerHostDrinkQuestion;
window.triggerEnding = triggerEnding;
window.chooseDrinkOneEnding = chooseDrinkOneEnding;
window.chooseDancePartner = chooseDancePartner;
window.restartGame = restartGame;
