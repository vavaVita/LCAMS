import React, { useEffect } from "react";

const callGame = (name) => {
  const action = window[name];
  if (typeof action === "function") action();
};

function SettingsButton() {
  return (
    <button
      id="settingsButton"
      className="settings-button"
      onClick={() => callGame("toggleSettings")}
      aria-label="Settings"
    >
      Settings
    </button>
  );
}

function IntroScreen() {
  return (
    <section id="introScreen" className="screen active intro-screen">
      <audio
        id="titleMusicAudio"
        src="/audio/intro-jazz-waltz.mp3"
        loop
        playsInline
        preload="auto"
        ref={(audio) => {
          if (audio) audio.volume = 0;
        }}
      />
      <h1>Last Call at Mr Swan&apos;s</h1>
      <button
        onClick={() => callGame("startGame")}
      >
        Play
      </button>
    </section>
  );
}

function BarView() {
  return (
    <section id="barView" className="screen">
      <div id="objective">Objective: Read instructions</div>
      <button className="menu-button" onClick={() => callGame("toggleDrinkGuide")} aria-label="Cocktail Menu">
        Cocktail Menu
      </button>
      <button className="nav-right" onClick={() => callGame("showRoom")}>
        Room
      </button>
      <div id="guestArea" />
    </section>
  );
}

function RoomView() {
  return (
    <section id="roomView" className="screen">
      <div id="objectiveRoom">Objective: Check in or Dilly Dally</div>
      <button className="nav-left" onClick={() => callGame("showBar")}>
        Bar
      </button>
      <div className="room-actions">
        <button className="checkin-button" onClick={() => callGame("toggleCheckIn")}>
          Check In
        </button>
        <button
          id="bandButton"
          className="band-button hidden"
          onClick={() => callGame("watchBand")}
        >
          Watch the Band
        </button>
        <button
          id="eavesdropButton"
          className="eavesdrop-button hidden"
          onClick={() => callGame("startEavesdrop")}
        >
          Eavesdrop
        </button>
      </div>
      <button
        id="dillyDallyButton"
        className="nav-right"
        onClick={() => callGame("dillyDally")}
      >
        Dilly Dally
      </button>
      <div id="roomCenter" />
    </section>
  );
}

function Overlays() {
  return (
    <>
      <div id="drinkGuide" className="overlay hidden" />
      <div id="settingsPanel" className="overlay hidden" />
      <div id="checkInPanel" className="overlay hidden" />
      <div id="snapshotOverlay" className="overlay hidden" />
      <div id="endingOverlay" className="overlay hidden" />
      <div id="creditsPanel" className="overlay hidden" />
      <div id="dialogueBox" className="dialogue-box hidden" />
      <div id="timeDisplay" className="time-display hidden">
        <div className="time-label">Time</div>
        <div id="timeValue">9:00 PM</div>
      </div>
    </>
  );
}

function OutroScreen() {
  return (
    <section id="outroScreen" className="screen outro-screen">
      <div className="outro-art" aria-hidden="true" />
      <div className="outro-content">
        <p className="outro-kicker">Thanks for playing</p>
        <h1>Last Call at Mr Swan&apos;s</h1>
        <h2 id="endingTitle">The party is over.</h2>
        <p id="endingText">Thank you for playing.</p>
        <div className="credits-block">
          <button className="credits-button" onClick={() => callGame("toggleCredits")}>Credits</button>
        </div>
        <button onClick={() => callGame("restartGame")}>Replay</button>
      </div>
    </section>
  );
}

export default function App() {
  useEffect(() => {
    if (document.querySelector('script[data-legacy-game="true"]')) return;

    const script = document.createElement("script");
    script.src = `/legacy/script.js?v=${Date.now()}`;
    script.dataset.legacyGame = "true";
    document.body.appendChild(script);
  }, []);

  return (
    <>
      <SettingsButton />
      <IntroScreen />
      <BarView />
      <RoomView />
      <Overlays />
      <OutroScreen />
      <div id="eyeTransition" />
    </>
  );
}
