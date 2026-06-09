// Web Application Controller for English Grade 4 Global Success Portal

// --- GAME STATE ---
let state = {
  username: "",
  avatar: "🦖",
  stars: 0,
  xp: 0,
  level: 1,
  completedUnits: {}, // e.g. { 1: { vocab: true, grammar: true, quiz: 100 } }
  badges: {},         // e.g. { first_steps: true }
  lastUnitId: null
};

// Default constants
const XP_PER_LEVEL = 100;

// Web Audio API Synthesizer
function playSound(type) {
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    const now = ctx.currentTime;
    if (type === 'correct') {
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.1); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.2); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.3); // C6
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.4);
      osc.start(now);
      osc.stop(now + 0.4);
    } else if (type === 'incorrect') {
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(150, now);
      osc.frequency.setValueAtTime(110, now + 0.1);
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.35);
      osc.start(now);
      osc.stop(now + 0.35);
    } else if (type === 'levelup') {
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(523.25, now); // C5
      osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
      osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
      osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
      osc.frequency.setValueAtTime(1318.51, now + 0.32); // E6
      osc.frequency.setValueAtTime(1567.98, now + 0.40); // G6
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.01, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.6);
    }
  } catch (e) {
    console.log("Audio synthesis blocked or not supported:", e);
  }
}

// Text to Speech Pronunciation
function speakWord(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.85; // Speak slightly slower for kids
    window.speechSynthesis.speak(utterance);
  } else {
    alert("Trình duyệt không hỗ trợ phát âm tiếng Anh.");
  }
}

// --- STATE MANAGEMENT ---
function loadState() {
  const saved = localStorage.getItem('grade4_english_portal');
  if (saved) {
    try {
      state = JSON.parse(saved);
    } catch (e) {
      console.error("Error parsing saved state:", e);
    }
  }
}

function saveState() {
  localStorage.setItem('grade4_english_portal', JSON.stringify(state));
}

function addStars(amount) {
  state.stars += amount;
  animateCountUp('header-stars', state.stars);
  animateCountUp('stat-stars', state.stars);
  saveState();
}

function addXP(amount) {
  state.xp += amount;
  let levelUp = false;
  
  while (state.xp >= state.level * XP_PER_LEVEL) {
    state.xp -= state.level * XP_PER_LEVEL;
    state.level++;
    levelUp = true;
  }
  
  if (levelUp) {
    setTimeout(() => {
      playSound('levelup');
      alert(`🌟 Chúc mừng bé đã lên Cấp ${state.level}! Bé thật là tuyệt vời! 🎉`);
      updateDashboard();
    }, 500);
  }
  
  document.getElementById('header-xp').innerText = state.xp;
  updateDashboard();
  saveState();
}

function animateCountUp(elementId, targetValue) {
  const el = document.getElementById(elementId);
  if (!el) return;
  el.innerText = targetValue;
}

// Check and award badges
function checkBadges() {
  let changed = false;
  
  // Badge 1: First Steps
  if (!state.badges.first_steps) {
    // Check if at least one quiz has been completed
    const hasQuiz = Object.values(state.completedUnits).some(u => u.quiz !== undefined);
    if (hasQuiz) {
      state.badges.first_steps = true;
      showBadgeAlert("Khởi Đầu ⭐");
      changed = true;
    }
  }
  
  // Badge 2: Perfect Quiz
  if (!state.badges.perfect_quiz) {
    const perfectQuiz = Object.values(state.completedUnits).some(u => u.quiz === 100);
    if (perfectQuiz) {
      state.badges.perfect_quiz = true;
      showBadgeAlert("Điểm 10 Đỏ Chói 💯");
      changed = true;
    }
  }
  
  // Badge 3: Word Master
  if (!state.badges.word_master) {
    const readVocabCount = Object.values(state.completedUnits).filter(u => u.vocab === true).length;
    if (readVocabCount >= 5) {
      state.badges.word_master = true;
      showBadgeAlert("Nhà Thông Thái 📖");
      changed = true;
    }
  }
  
  // Badge 6: Diligent Student (completed all 20 units)
  if (!state.badges.diligent) {
    const completedCount = Object.keys(state.completedUnits).filter(id => {
      const u = state.completedUnits[id];
      return u.vocab && u.grammar && u.quiz >= 80;
    }).length;
    
    if (completedCount >= 20) {
      state.badges.diligent = true;
      showBadgeAlert("Học Giả Chăm Chỉ 👑");
      changed = true;
    }
  }
  
  if (changed) {
    saveState();
    renderBadges();
  }
}

function showBadgeAlert(badgeName) {
  setTimeout(() => {
    playSound('levelup');
    alert(`👑 BÉ ĐẠT DANH HIỆU MỚI: [${badgeName}]!\nHãy kiểm tra tủ đồ lưu niệm trên Bảng điều khiển nhé! 🎉`);
  }, 800);
}

// --- ROUTING / VIEW NAVIGATION ---
const views = ['dashboard', 'learn', 'lesson', 'games'];
function showView(viewName) {
  views.forEach(v => {
    const el = document.getElementById(`view-${v}`);
    if (el) el.style.display = (v === viewName) ? 'block' : 'none';
    
    // Toggle active navbar button
    const navBtn = document.getElementById(`nav-${v}`);
    if (navBtn) {
      if (v === viewName) {
        navBtn.classList.add('active');
      } else {
        navBtn.classList.remove('active');
      }
    }
  });
  
  state.currentView = viewName;
  saveState();
  
  if (viewName === 'dashboard') {
    updateDashboard();
  } else if (viewName === 'learn') {
    renderUnits();
  }
}

// --- ONBOARDING INITIALIZATION ---
function initOnboarding() {
  const onboarding = document.getElementById('onboarding-screen');
  const appShell = document.getElementById('app-shell');
  
  if (!state.username) {
    onboarding.style.display = 'flex';
    appShell.style.display = 'none';
    
    // Setup avatar options
    const avatarOpts = document.querySelectorAll('.avatar-option');
    avatarOpts.forEach(opt => {
      opt.onclick = () => {
        avatarOpts.forEach(o => o.classList.remove('selected'));
        opt.classList.add('selected');
        state.avatar = opt.dataset.avatar;
      };
    });
    
    // Start button handler
    document.getElementById('btn-start').onclick = () => {
      const nameInput = document.getElementById('username-input').value.trim();
      if (!nameInput) {
        alert("Bé ơi, hãy nhập tên hoặc biệt danh của mình trước nhé!");
        return;
      }
      state.username = nameInput;
      state.stars = 0;
      state.xp = 0;
      state.level = 1;
      state.completedUnits = {};
      state.badges = {};
      
      saveState();
      
      onboarding.style.display = 'none';
      appShell.style.display = 'block';
      
      // Load UI
      updateHeaderStatus();
      showView('dashboard');
    };
  } else {
    onboarding.style.display = 'none';
    appShell.style.display = 'block';
    updateHeaderStatus();
    showView('dashboard');
  }
}

function updateHeaderStatus() {
  document.getElementById('header-stars').innerText = state.stars;
  document.getElementById('header-xp').innerText = state.xp;
  document.getElementById('header-avatar').innerText = state.avatar;
}

// Change Profile info on click avatar
document.getElementById('header-avatar').onclick = () => {
  if (confirm("Bé có muốn đặt lại thông tin cá nhân mới không?")) {
    state.username = "";
    saveState();
    initOnboarding();
  }
};

// --- VIEW: DASHBOARD RENDERING ---
function updateDashboard() {
  updateHeaderStatus();
  
  // Welcome text
  document.getElementById('dash-welcome').innerText = `Chào bé, ${state.username}! ${state.avatar}`;
  
  // Level badge
  document.getElementById('dash-level').innerText = state.level;
  
  // XP Progress Bar
  const xpNeeded = state.level * XP_PER_LEVEL;
  const xpPercent = Math.min(100, Math.floor((state.xp / xpNeeded) * 100));
  document.getElementById('dash-xp-fill').style.width = `${xpPercent}%`;
  document.getElementById('dash-xp-text').innerText = `${state.xp} / ${xpNeeded} XP`;
  
  // Statistics values
  document.getElementById('stat-stars').innerText = state.stars;
  
  // Completed units calculation
  const unitsCount = window.unitsData.length;
  const completedCount = Object.keys(state.completedUnits).filter(id => {
    const u = state.completedUnits[id];
    return u.vocab && u.grammar && u.quiz >= 80;
  }).length;
  document.getElementById('stat-units').innerText = `${completedCount}/${unitsCount}`;
  
  // Average accuracy calculation
  const quizzes = Object.values(state.completedUnits).filter(u => u.quiz !== undefined);
  if (quizzes.length > 0) {
    const totalAccuracy = quizzes.reduce((sum, u) => sum + u.quiz, 0);
    document.getElementById('stat-accuracy').innerText = `${Math.round(totalAccuracy / quizzes.length)}%`;
  } else {
    document.getElementById('stat-accuracy').innerText = "0%";
  }
  
  // Render Badges cabinet
  renderBadges();
  
  // Render Recent Activity Widget
  renderRecentActivity();
}

function renderBadges() {
  const container = document.getElementById('badges-locker');
  container.innerHTML = "";
  
  window.badgesData.forEach(badge => {
    const isUnlocked = state.badges[badge.id] === true;
    
    const card = document.createElement('div');
    card.className = `badge-card ${isUnlocked ? 'unlocked' : ''}`;
    card.title = badge.desc;
    
    card.innerHTML = `
      <div class="badge-icon">${badge.icon}</div>
      <div class="badge-title">${badge.title}</div>
      <div class="badge-desc">${isUnlocked ? 'Đã nhận!' : badge.desc}</div>
    `;
    
    container.appendChild(card);
  });
}

function renderRecentActivity() {
  const widget = document.getElementById('recent-unit-widget');
  if (state.lastUnitId) {
    const unit = window.unitsData.find(u => u.id === state.lastUnitId);
    if (unit) {
      const prog = getUnitProgress(unit.id);
      widget.innerHTML = `
        <div class="unit-card" style="margin-bottom:0;" onclick="startUnit(${unit.id})">
          <div class="unit-badge-id">Gần đây</div>
          <div class="unit-card-icon">${unit.emoji}</div>
          <h3 class="unit-card-title">Unit ${unit.id}: ${unit.title}</h3>
          <p class="unit-card-trans">${unit.translation}</p>
          <div class="unit-card-progress">
            <div class="unit-card-progress-bar">
              <div class="unit-card-progress-fill" style="width: ${prog}%; background-color: ${unit.color};"></div>
            </div>
            <div class="unit-card-progress-text">
              <span>Tiến độ:</span>
              <span>${prog}%</span>
            </div>
          </div>
        </div>
      `;
      return;
    }
  }
  
  // Default empty
  widget.innerHTML = `
    <p style="color: var(--text-muted); font-style: italic;">
      Bé chưa bắt đầu bài học nào. Hãy nhấp vào tab <strong>Bài Học</strong> bên trên để lựa chọn bài học đầu tiên nhé!
    </p>
  `;
}

// Calculate progress percentage for a unit (0 - 100)
function getUnitProgress(unitId) {
  const progress = state.completedUnits[unitId];
  if (!progress) return 0;
  
  let score = 0;
  if (progress.vocab) score += 30;    // 30% for reading vocab
  if (progress.grammar) score += 30;  // 30% for reading grammar
  if (progress.quiz !== undefined) {
    // 40% scaled by quiz score (0-100)
    score += Math.round((progress.quiz / 100) * 40);
  }
  
  return score;
}

// --- VIEW: LEARN (UNITS DIRECTORY) ---
function renderUnits() {
  const container = document.getElementById('units-container');
  container.innerHTML = "";
  
  window.unitsData.forEach(unit => {
    const progress = getUnitProgress(unit.id);
    
    const card = document.createElement('div');
    card.className = `unit-card unit-theme-${unit.theme}`;
    card.setAttribute('style', `--theme-color: ${unit.color};`);
    card.onclick = () => startUnit(unit.id);
    
    card.innerHTML = `
      <div class="unit-badge-id">Bài ${unit.id}</div>
      <div class="unit-card-icon">${unit.emoji}</div>
      <h3 class="unit-card-title">Unit ${unit.id}: ${unit.title}</h3>
      <p class="unit-card-trans">${unit.translation}</p>
      <div class="unit-card-progress">
        <div class="unit-card-progress-bar">
          <div class="unit-card-progress-fill" style="width: ${progress}%;"></div>
        </div>
        <div class="unit-card-progress-text">
          <span>Độ hoàn thành:</span>
          <span>${progress}%</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);
  });
}

// --- VIEW: LESSON DETAILED ---
let currentUnit = null;
let currentLessonTab = "vocab";

function startUnit(unitId) {
  const unit = window.unitsData.find(u => u.id === unitId);
  if (!unit) return;
  
  currentUnit = unit;
  state.lastUnitId = unitId;
  saveState();
  
  // Set Unit headers
  document.getElementById('lesson-sidebar-title').innerText = `Unit ${unit.id}: ${unit.title}`;
  
  // Set default sub-tab to vocabulary
  switchLessonTab('vocab');
  
  showView('lesson');
}

// Handle Lesson Sidebar Nav click
const lessonNavItems = document.querySelectorAll('.lesson-nav-item');
lessonNavItems.forEach(item => {
  item.onclick = () => {
    lessonNavItems.forEach(i => i.classList.remove('active'));
    item.classList.add('active');
    switchLessonTab(item.dataset.tab);
  };
});

function switchLessonTab(tabName) {
  currentLessonTab = tabName;
  
  // Hide all tabs first
  document.getElementById('lesson-tab-vocab').style.display = 'none';
  document.getElementById('lesson-tab-grammar').style.display = 'none';
  document.getElementById('lesson-tab-quiz').style.display = 'none';
  
  // Show target tab
  document.getElementById(`lesson-tab-${tabName}`).style.display = 'block';
  
  // Update active status on sidebar items manually just in case
  lessonNavItems.forEach(item => {
    if (item.dataset.tab === tabName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  if (tabName === 'vocab') {
    renderVocabulary();
  } else if (tabName === 'grammar') {
    renderGrammar();
  } else if (tabName === 'quiz') {
    initQuiz();
  }
}

// 1. Vocabulary rendering
let viewedVocabs = new Set();

function renderVocabulary() {
  const container = document.getElementById('vocab-cards-container');
  container.innerHTML = "";
  viewedVocabs.clear();
  
  // Ensure unit progress exists in state
  if (!state.completedUnits[currentUnit.id]) {
    state.completedUnits[currentUnit.id] = {};
  }
  
  currentUnit.vocabulary.forEach((item, index) => {
    const card = document.createElement('div');
    card.className = "flip-card";
    
    card.innerHTML = `
      <div class="flip-card-inner">
        <!-- FRONT -->
        <div class="flip-card-front">
          <div class="vocab-emoji">${item.emoji || '📖'}</div>
          <div class="vocab-word">${item.word}</div>
          <div class="vocab-ipa">${item.ipa}</div>
          <button class="vocab-speak-btn" title="Nghe phát âm">🔊</button>
        </div>
        <!-- BACK -->
        <div class="flip-card-back">
          <div class="vocab-meaning">${item.meaning}</div>
          <div class="vocab-example">"${item.example}"</div>
          <div class="vocab-example-trans">${item.exampleMeaning}</div>
        </div>
      </div>
    `;
    
    // Flip event
    card.onclick = (e) => {
      // If clicked the speak button, do not flip
      if (e.target.classList.contains('vocab-speak-btn')) {
        e.stopPropagation();
        speakWord(item.word);
        return;
      }
      
      card.classList.toggle('flipped');
      
      // Track that student viewed this vocabulary card
      viewedVocabs.add(index);
      if (viewedVocabs.size === currentUnit.vocabulary.length) {
        if (!state.completedUnits[currentUnit.id].vocab) {
          state.completedUnits[currentUnit.id].vocab = true;
          addXP(20);
          addStars(5);
          checkBadges();
          saveState();
        }
      }
    };
    
    container.appendChild(card);
  });
}

// 2. Grammar rendering
function renderGrammar() {
  document.getElementById('grammar-pattern-text').innerText = currentUnit.grammar.structure;
  document.getElementById('grammar-explanation-text').innerText = currentUnit.grammar.explanation;
  
  const dialogContainer = document.getElementById('grammar-dialog-container');
  dialogContainer.innerHTML = "";
  
  currentUnit.grammar.dialog.forEach((chat, idx) => {
    const isLeft = idx % 2 === 0;
    const bubble = document.createElement('div');
    bubble.className = `dialog-bubble ${isLeft ? 'left' : 'right'}`;
    
    bubble.innerHTML = `
      <div class="dialog-avatar">${isLeft ? '👦' : '👧'}</div>
      <div class="dialog-text-wrap">
        <div class="dialog-speaker">${chat.speaker}</div>
        <div class="dialog-text">${chat.text}</div>
        <div class="dialog-trans">${chat.translation}</div>
      </div>
    `;
    
    dialogContainer.appendChild(bubble);
  });
  
  // Award XP for reading grammar notes
  if (!state.completedUnits[currentUnit.id]) {
    state.completedUnits[currentUnit.id] = {};
  }
  
  if (!state.completedUnits[currentUnit.id].grammar) {
    state.completedUnits[currentUnit.id].grammar = true;
    addXP(15);
    addStars(5);
    checkBadges();
    saveState();
  }
}

// 3. Practice Quiz Loop
let quizQuestions = [];
let quizIndex = 0;
let quizCorrectCount = 0;

function initQuiz() {
  quizQuestions = currentUnit.quiz;
  quizIndex = 0;
  quizCorrectCount = 0;
  
  renderQuizQuestion();
}

function renderQuizQuestion() {
  const area = document.getElementById('quiz-area');
  
  if (quizIndex >= quizQuestions.length) {
    // Finished Quiz!
    renderQuizResult();
    return;
  }
  
  const q = quizQuestions[quizIndex];
  const progressPercent = Math.round((quizIndex / quizQuestions.length) * 100);
  
  // Generate random messages for mascot
  const mascotMessages = [
    "Cố lên bé yêu! Câu này dễ lắm!",
    "Bé nhớ suy nghĩ kỹ trước khi chọn nhé!",
    "Toby đang cổ vũ cho bé nè! 🦖",
    "Bé là học sinh chăm chỉ nhất!"
  ];
  const randomMessage = mascotMessages[Math.floor(Math.random() * mascotMessages.length)];
  
  area.innerHTML = `
    <div class="quiz-header">
      <span>Câu hỏi ${quizIndex + 1} / ${quizQuestions.length}</span>
      <div class="quiz-progress-bar">
        <div class="quiz-progress-fill" style="width: ${progressPercent}%;"></div>
      </div>
      <span>⭐ Đúng: ${quizCorrectCount}</span>
    </div>
    
    <div class="quiz-card">
      <div class="quiz-question">${q.question}</div>
      <div class="quiz-options-list" id="quiz-options">
        ${q.options.map((opt, idx) => `
          <button class="quiz-option-btn" onclick="submitQuizAnswer(${idx})">
            <span>${idx + 1}. ${opt}</span>
          </button>
        `).join('')}
      </div>
    </div>
    
    <div class="quiz-mascot">
      <div class="mascot-character">🦖</div>
      <div class="mascot-bubble">${randomMessage}</div>
    </div>
  `;
}

function submitQuizAnswer(selectedIndex) {
  const q = quizQuestions[quizIndex];
  const optionsDiv = document.getElementById('quiz-options');
  const buttons = optionsDiv.querySelectorAll('.quiz-option-btn');
  
  // Disable all buttons to prevent double click
  buttons.forEach(btn => btn.disabled = true);
  
  const correctIdx = q.answer;
  const isCorrect = selectedIndex === correctIdx;
  
  if (isCorrect) {
    playSound('correct');
    buttons[selectedIndex].classList.add('correct');
    quizCorrectCount++;
    
    // Mascot updates
    const mascotBubble = document.querySelector('.mascot-bubble');
    if (mascotBubble) mascotBubble.innerText = "Tuyệt vời ông mặt trời! Bé làm đúng rồi! 🎉";
  } else {
    playSound('incorrect');
    buttons[selectedIndex].classList.add('incorrect');
    buttons[correctIdx].classList.add('correct'); // Show correct answer
    
    const mascotBubble = document.querySelector('.mascot-bubble');
    if (mascotBubble) mascotBubble.innerText = `Opps! Sai mất rồi. Bé xem gợi ý nhé: "${q.hint}" 💡`;
  }
  
  // Auto proceed after 2.5 seconds
  setTimeout(() => {
    quizIndex++;
    renderQuizQuestion();
  }, 2500);
}

function renderQuizResult() {
  const area = document.getElementById('quiz-area');
  const scorePercent = Math.round((quizCorrectCount / quizQuestions.length) * 100);
  
  // Gained awards
  const starsEarned = quizCorrectCount * 5;
  const xpEarned = quizCorrectCount * 10;
  
  // Save progress
  if (!state.completedUnits[currentUnit.id]) {
    state.completedUnits[currentUnit.id] = {};
  }
  
  const previousScore = state.completedUnits[currentUnit.id].quiz || 0;
  if (scorePercent > previousScore) {
    state.completedUnits[currentUnit.id].quiz = scorePercent;
  }
  
  addStars(starsEarned);
  addXP(xpEarned);
  checkBadges();
  saveState();
  
  let resultMsg = "";
  let resultEmoji = "🏆";
  if (scorePercent === 100) {
    resultMsg = "Xuất sắc! Bé đã làm đúng tất cả các câu hỏi! Điểm 10 hoàn hảo! 🌟";
    resultEmoji = "👑";
  } else if (scorePercent >= 60) {
    resultMsg = "Tuyệt quá! Bé đã hoàn thành bài kiểm tra khá tốt rồi! Luyện tập thêm nhé!";
    resultEmoji = "🎉";
  } else {
    resultMsg = "Bé hãy xem lại phần Từ vựng và Ngữ pháp để làm bài đạt kết quả cao hơn nhé!";
    resultEmoji = "💪";
  }
  
  area.innerHTML = `
    <div class="quiz-card quiz-result-card">
      <div style="font-size: 5rem; margin-bottom: 20px;">${resultEmoji}</div>
      <h2 class="font-title" style="font-size: 2rem; color: var(--primary-color);">Kết Quả Luyện Tập</h2>
      <div class="quiz-result-score">${quizCorrectCount} / ${quizQuestions.length} Đúng</div>
      <p style="font-size: 1.2rem; font-weight: 700; margin-bottom: 25px; color: var(--text-dark);">${resultMsg}</p>
      
      <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px;">
        <div class="stat-chip stars">⭐ +${starsEarned} Sao</div>
        <div class="stat-chip xp">🟣 +${xpEarned} XP</div>
      </div>
      
      <button class="btn-primary" onclick="switchLessonTab('quiz')">Làm Lại Trắc Nghiệm 🔁</button>
    </div>
  `;
}

// Back button in lesson view
document.getElementById('lesson-back-btn').onclick = () => {
  showView('learn');
};

// --- VIEW: GAMES SYSTEM ---
let memoryCards = [];
let memoryFlipped = [];
let memoryScore = 0;
let memoryMatches = 0;

let wordBuilderWords = [];
let wordBuilderIndex = 0;
let wordBuilderScore = 0;
let wordBuilderCurrentInput = [];

// Initialize navigation cards
document.getElementById('btn-game-memory').onclick = () => {
  startMemoryGame();
};

document.getElementById('btn-game-wordbuilder').onclick = () => {
  startWordBuilderGame();
};

document.getElementById('game-quit-btn').onclick = () => {
  // Clear any timers or active games
  document.getElementById('games-menu-container').style.display = 'grid';
  document.getElementById('game-play-container').style.display = 'none';
};

// Game 1: Memory Match Implementation
function startMemoryGame() {
  document.getElementById('games-menu-container').style.display = 'none';
  document.getElementById('game-play-container').style.display = 'block';
  document.getElementById('game-current-title').innerText = "🧠 Trò Chơi: Lật Thẻ Trí Nhớ";
  
  memoryScore = 0;
  memoryMatches = 0;
  memoryFlipped = [];
  document.getElementById('game-score').innerText = memoryScore;
  
  // Pick vocabulary: If inside a lesson, pick from that unit, otherwise pick from all units
  let sourceWords = [];
  if (currentUnit) {
    sourceWords = [...currentUnit.vocabulary];
  } else {
    // Pick randomly from all units
    window.unitsData.forEach(u => sourceWords.push(...u.vocabulary));
  }
  
  // Select 6 random vocabulary words
  sourceWords = shuffleArray(sourceWords).slice(0, 6);
  
  // Create 12 cards (6 English words, 6 Vietnamese meanings)
  let cardsData = [];
  sourceWords.forEach(wordObj => {
    cardsData.push({ id: wordObj.word, text: wordObj.word, type: 'en', emoji: wordObj.emoji });
    cardsData.push({ id: wordObj.word, text: wordObj.meaning, type: 'vi', emoji: wordObj.emoji });
  });
  
  // Shuffle cards
  memoryCards = shuffleArray(cardsData);
  
  // Render Board
  const board = document.getElementById('game-screen-content');
  board.innerHTML = `
    <div style="text-align: center; margin-bottom: 20px;">
      <p style="color: var(--text-muted); font-weight: 700;">Hãy lật thẻ và tìm các cặp từ tiếng Anh cùng nghĩa tiếng Việt tương ứng!</p>
    </div>
    <div class="memory-grid" id="memory-board-grid"></div>
  `;
  
  const gridContainer = document.getElementById('memory-board-grid');
  memoryCards.forEach((card, idx) => {
    const cardEl = document.createElement('div');
    cardEl.className = "memory-card";
    cardEl.dataset.index = idx;
    
    cardEl.innerHTML = `
      <div class="memory-card-inner">
        <div class="memory-card-front">❓</div>
        <div class="memory-card-back">
          <div class="card-emoji">${card.emoji || '📖'}</div>
          <div class="card-text">${card.text}</div>
        </div>
      </div>
    `;
    
    cardEl.onclick = () => flipMemoryCard(idx);
    gridContainer.appendChild(cardEl);
  });
}

function flipMemoryCard(index) {
  // Limit flips to max 2 cards, and do not flip already flipped/matched cards
  if (memoryFlipped.length >= 2) return;
  const cards = document.querySelectorAll('.memory-card');
  const cardEl = cards[index];
  
  if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;
  
  cardEl.classList.add('flipped');
  memoryFlipped.push(index);
  
  if (memoryFlipped.length === 2) {
    const idx1 = memoryFlipped[0];
    const idx2 = memoryFlipped[1];
    const card1 = memoryCards[idx1];
    const card2 = memoryCards[idx2];
    
    // Check match (both cards share same ID, which is the English word key)
    if (card1.id === card2.id) {
      // MATCH!
      setTimeout(() => {
        playSound('correct');
        cards[idx1].classList.add('matched');
        cards[idx2].classList.add('matched');
        
        memoryMatches++;
        memoryScore += 10;
        document.getElementById('game-score').innerText = memoryScore;
        
        memoryFlipped = [];
        
        // Check win
        if (memoryMatches === 6) {
          triggerMemoryGameWin();
        }
      }, 600);
    } else {
      // MISMATCH
      setTimeout(() => {
        playSound('incorrect');
        cards[idx1].classList.remove('flipped');
        cards[idx2].classList.remove('flipped');
        memoryFlipped = [];
      }, 1200);
    }
  }
}

function triggerMemoryGameWin() {
  const board = document.getElementById('game-screen-content');
  
  addStars(15);
  addXP(25);
  
  // Award badge
  if (!state.badges.memory_pro) {
    state.badges.memory_pro = true;
    showBadgeAlert("Trí Nhớ Siêu Phàm 🧠");
  }
  saveState();
  
  board.innerHTML = `
    <div class="quiz-card quiz-result-card">
      <div style="font-size: 5rem; margin-bottom: 20px;">🏆</div>
      <h2 class="font-title" style="font-size: 2rem; color: var(--accent-green);">Bé Đã Thắng Cuộc!</h2>
      <p style="font-size: 1.2rem; font-weight: 700; margin-top: 15px; margin-bottom: 25px;">
        Bé lật thẻ rất nhanh và chính xác! Thật đáng kinh ngạc!
      </p>
      <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px;">
        <div class="stat-chip stars">⭐ +15 Sao</div>
        <div class="stat-chip xp">🟣 +25 XP</div>
      </div>
      <div style="display: flex; gap: 15px; justify-content: center;">
        <button class="btn-primary" onclick="startMemoryGame()">Chơi Lượt Mới 🔁</button>
        <button class="btn-secondary" onclick="document.getElementById('game-quit-btn').click()">Về Menu Game ⬅️</button>
      </div>
    </div>
  `;
}

// Game 2: Word Builder Implementation
function startWordBuilderGame() {
  document.getElementById('games-menu-container').style.display = 'none';
  document.getElementById('game-play-container').style.display = 'block';
  document.getElementById('game-current-title').innerText = "🎈 Trò Chơi: Bong Bóng Đánh Vần";
  
  wordBuilderScore = 0;
  wordBuilderIndex = 0;
  document.getElementById('game-score').innerText = wordBuilderScore;
  
  // Gather words database
  let sourceWords = [];
  if (currentUnit) {
    sourceWords = [...currentUnit.vocabulary];
  } else {
    window.unitsData.forEach(u => sourceWords.push(...u.vocabulary));
  }
  
  // Select 5 random words
  wordBuilderWords = shuffleArray(sourceWords).slice(0, 5);
  
  renderWordBuilderStep();
}

function renderWordBuilderStep() {
  const board = document.getElementById('game-screen-content');
  
  if (wordBuilderIndex >= wordBuilderWords.length) {
    triggerWordBuilderWin();
    return;
  }
  
  const targetObj = wordBuilderWords[wordBuilderIndex];
  const targetWord = targetObj.word.replace(/\s+/g, '').toLowerCase(); // Remove spaces for spelling
  
  wordBuilderCurrentInput = [];
  
  // Scramble letters
  let letters = targetWord.split('');
  // Add some extra random letter bubbles if the word is short to make it fun!
  if (letters.length <= 4) {
    const extraAlphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let i=0; i<2; i++) {
      letters.push(extraAlphabet[Math.floor(Math.random() * extraAlphabet.length)]);
    }
  }
  letters = shuffleArray(letters);
  
  board.innerHTML = `
    <div class="wordbuilder-container">
      <div style="margin-bottom: 20px; font-weight: 700; color: var(--text-muted);">
        Từ số ${wordBuilderIndex + 1} / ${wordBuilderWords.length}
      </div>
      
      <div class="wordbuilder-hint-emoji">${targetObj.emoji || '📖'}</div>
      <div class="wordbuilder-meaning">${targetObj.meaning}</div>
      
      <div class="wordbuilder-slots" id="spelling-slots">
        ${Array(targetWord.length).fill().map(() => `
          <div class="wordbuilder-slot"></div>
        `).join('')}
      </div>
      
      <div class="wordbuilder-bubbles" id="spelling-bubbles">
        ${letters.map((letter, idx) => `
          <button class="wordbuilder-bubble" data-letter="${letter}" data-index="${idx}" onclick="clickSpellingLetter(this)">
            ${letter}
          </button>
        `).join('')}
      </div>
      
      <div class="wordbuilder-controls">
        <button class="btn-secondary" onclick="clearSpellingInput()">Xóa Chữ 🔁</button>
        <button class="btn-secondary" style="border-color:#FFE699; background:#FFFBF0; color:#D4AF37;" onclick="speakWord('${targetObj.word}')">Nghe Mẫu 🔊</button>
      </div>
    </div>
  `;
}

function clickSpellingLetter(btnEl) {
  const letter = btnEl.dataset.letter;
  btnEl.classList.add('used');
  
  // Append to current input
  wordBuilderCurrentInput.push({ letter: letter, btnIndex: btnEl.dataset.index });
  
  // Update slots UI
  const slots = document.querySelectorAll('.wordbuilder-slot');
  const fillIndex = wordBuilderCurrentInput.length - 1;
  if (slots[fillIndex]) {
    slots[fillIndex].innerText = letter;
    slots[fillIndex].classList.add('filled');
  }
  
  // Check if filled all slots
  const targetObj = wordBuilderWords[wordBuilderIndex];
  const targetWord = targetObj.word.replace(/\s+/g, '').toLowerCase();
  
  if (wordBuilderCurrentInput.length === targetWord.length) {
    const spelled = wordBuilderCurrentInput.map(item => item.letter).join('');
    
    if (spelled === targetWord) {
      // CORRECT SPELLING!
      playSound('correct');
      wordBuilderScore += 20;
      document.getElementById('game-score').innerText = wordBuilderScore;
      
      // Paint slots green
      slots.forEach(slot => slot.style.color = 'var(--accent-green)');
      
      // Auto move to next word after 1.5 seconds
      setTimeout(() => {
        wordBuilderIndex++;
        renderWordBuilderStep();
      }, 1500);
    } else {
      // INCORRECT SPELLING
      playSound('incorrect');
      slots.forEach(slot => slot.style.color = 'var(--accent-pink)');
      
      // Vibrate/Shake slots
      setTimeout(() => {
        clearSpellingInput();
      }, 1200);
    }
  }
}

function clearSpellingInput() {
  wordBuilderCurrentInput = [];
  
  // Reset slots UI
  const slots = document.querySelectorAll('.wordbuilder-slot');
  slots.forEach(slot => {
    slot.innerText = "";
    slot.classList.remove('filled');
    slot.style.color = 'var(--primary-color)';
  });
  
  // Reset bubble buttons
  const bubbles = document.querySelectorAll('.wordbuilder-bubble');
  bubbles.forEach(bubble => bubble.classList.remove('used'));
}

function triggerWordBuilderWin() {
  const board = document.getElementById('game-screen-content');
  
  addStars(15);
  addXP(25);
  
  // Award badge
  if (!state.badges.speller_pro) {
    state.badges.speller_pro = true;
    showBadgeAlert("Thần Đồng Đánh Vần ✏️");
  }
  saveState();
  
  board.innerHTML = `
    <div class="quiz-card quiz-result-card">
      <div style="font-size: 5rem; margin-bottom: 20px;">🎈</div>
      <h2 class="font-title" style="font-size: 2rem; color: var(--accent-green);">Đã Hoàn Thành Đánh Vần!</h2>
      <p style="font-size: 1.2rem; font-weight: 700; margin-top: 15px; margin-bottom: 25px;">
        Bé có khả năng ghi nhớ chữ cái và đánh vần siêu đẳng!
      </p>
      <div style="display: flex; gap: 15px; justify-content: center; margin-bottom: 30px;">
        <div class="stat-chip stars">⭐ +15 Sao</div>
        <div class="stat-chip xp">🟣 +25 XP</div>
      </div>
      <div style="display: flex; gap: 15px; justify-content: center;">
        <button class="btn-primary" onclick="startWordBuilderGame()">Chơi Lượt Mới 🔁</button>
        <button class="btn-secondary" onclick="document.getElementById('game-quit-btn').click()">Về Menu Game ⬅️</button>
      </div>
    </div>
  `;
}

// Utility: Shuffle Array
function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- GLOBAL EVENT LISTENERS ---
window.addEventListener('DOMContentLoaded', () => {
  loadState();
  initOnboarding();
  
  // Navigation Menu Event Handlers
  document.getElementById('nav-dashboard').onclick = () => showView('dashboard');
  document.getElementById('nav-learn').onclick = () => showView('learn');
  document.getElementById('nav-games').onclick = () => showView('games');
  
  // Clicking Logo goes to dashboard
  document.getElementById('logo-btn').onclick = () => {
    if (state.username) showView('dashboard');
  };
});
