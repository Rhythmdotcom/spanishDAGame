/**
 * CAFÉ ESPAÑOL — Core Gameplay Engine (Good Pizza, Great Pizza Edition)
 * Interactive Hands-On Cooking: Heat, pour, sprinkle, spread, slice & craft dishes!
 * Author: Hemasri Kumar
 */

class CafeGame {
  constructor() {
    this.currentLevelIndex = 0;
    this.score = 0;
    this.coins = 60; // Starting pocket coins
    this.dayTips = 0;
    this.dayEarnings = 0;
    this.satisfaction = 100;
    this.customersServedInLevel = 0;
    this.totalCustomersServed = 0;
    this.totalCorrect = 0;
    this.totalIncorrect = 0;
    
    this.isPaused = false;
    this.isProcessingServe = false;
    this.askedQue = false;
    this.currentView = "counter"; // 'counter' or 'kitchen'
    
    this.selectedTrayItems = [];
    this.currentCustomer = null;
    this.currentOrder = null;
    
    // Active Crafting State
    this.activeCraftItem = null;
    this.activeCraftStepIndex = 0;
    
    this.patienceTimer = null;
    this.patienceRemaining = 36;
    this.maxPatience = 36;

    this.cacheDOMElements();
    this.bindEvents();
    this.renderRecipeShelf();
    this.updateHUD();
  }

  cacheDOMElements() {
    // Screens
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");
    
    // Modals
    this.pauseModal = document.getElementById("pause-modal");
    this.tutorialModal = document.getElementById("tutorial-modal");
    this.newspaperModal = document.getElementById("newspaper-modal");
    this.creditsModal = document.getElementById("credits-modal");

    // Views
    this.counterView = document.getElementById("cafe-counter-view");
    this.kitchenView = document.getElementById("cafe-kitchen-view");
    this.btnGoToKitchen = document.getElementById("btn-go-to-kitchen");
    this.btnBackToCounter = document.getElementById("btn-back-to-counter");

    // HUD
    this.levelBadge = document.getElementById("hud-level");
    this.coinsDisplay = document.getElementById("hud-coins");
    this.scoreDisplay = document.getElementById("hud-score");
    this.satisfactionBar = document.getElementById("hud-satisfaction-bar");
    this.satisfactionDisplay = document.getElementById("hud-satisfaction");
    this.muteBtn = document.getElementById("btn-mute");

    // Counter Elements
    this.customerAvatar = document.getElementById("counter-customer-avatar");
    this.customerName = document.getElementById("counter-customer-name");
    this.customerTitle = document.getElementById("counter-customer-title");
    this.speechSpanish = document.getElementById("counter-speech-spanish");
    this.speechEnglish = document.getElementById("counter-speech-english");
    this.btnAskQue = document.getElementById("btn-ask-que");
    this.btnHint = document.getElementById("btn-hint-toggle");
    this.tipJarCoins = document.getElementById("tip-jar-coins");
    this.counterBell = document.getElementById("service-counter-bell");

    // Order Ticket Clip
    this.orderTicket = document.getElementById("hanging-order-ticket");
    this.ticketSummaryText = document.getElementById("ticket-summary-text");
    this.ticketCustName = document.getElementById("ticket-customer-name");

    // Patience Meter
    this.patienceBarFill = document.getElementById("patience-bar-fill");
    this.patienceTimerText = document.getElementById("patience-time-text");

    // Kitchen Worktop & Crafting Elements
    this.shelfDrinksList = document.getElementById("shelf-drinks-list");
    this.shelfFoodList = document.getElementById("shelf-food-list");
    this.craftItemName = document.getElementById("craft-item-name");
    this.craftDishDesc = document.getElementById("craft-dish-desc");
    this.craftDishVisual = document.getElementById("craft-dish-visual");
    this.craftActionsContainer = document.getElementById("craft-actions-container");
    this.craftFinishRow = document.getElementById("craft-finish-row");
    this.btnTransferToTray = document.getElementById("btn-transfer-to-tray");

    // Tray & Deliver
    this.trayList = document.getElementById("tray-items-list");
    this.trayEmptyNotice = document.getElementById("tray-empty-notice");
    this.serveBtn = document.getElementById("btn-serve-order");
    this.trashBtn = document.getElementById("btn-clear-tray");
    this.feedbackBanner = document.getElementById("feedback-banner");

    // Newspaper
    this.newspaperDayTitle = document.getElementById("newspaper-day-title");
    this.newspaperHeadline = document.getElementById("newspaper-headline");
    this.newspaperStory = document.getElementById("newspaper-story");
    this.newspaperStoryEn = document.getElementById("newspaper-story-en");
    this.newspaperSales = document.getElementById("newspaper-stat-sales");
    this.newspaperTips = document.getElementById("newspaper-stat-tips");
    this.newspaperAccuracy = document.getElementById("newspaper-stat-accuracy");
    this.newspaperVocab = document.getElementById("newspaper-stat-vocab");
    this.newspaperContinueBtn = document.getElementById("btn-newspaper-continue");

    // End Screen
    this.endScore = document.getElementById("end-stat-score");
    this.endCoins = document.getElementById("end-stat-coins");
    this.endServed = document.getElementById("end-stat-served");
    this.endAccuracy = document.getElementById("end-stat-accuracy");
    this.endVocabCount = document.getElementById("end-stat-vocab");
    this.endSatisfaction = document.getElementById("end-stat-satisfaction");
    this.restartBtn = document.getElementById("btn-restart-game");
  }

  bindEvents() {
    // Start game
    const startPlayBtn = document.getElementById("btn-start-play");
    if (startPlayBtn) {
      startPlayBtn.addEventListener("click", () => {
        audio.init();
        audio.playTap();
        this.startGame();
      });
    }

    // Tutorial buttons
    document.querySelectorAll(".btn-open-tutorial").forEach(btn => {
      btn.addEventListener("click", () => {
        audio.playTap();
        this.openTutorial();
      });
    });

    // Vocabulary notebook buttons
    document.querySelectorAll(".btn-open-notebook").forEach(btn => {
      btn.addEventListener("click", () => {
        audio.playTap();
        notebook.open();
      });
    });

    // Credits button
    const creditsBtn = document.getElementById("btn-hud-credits");
    if (creditsBtn) {
      creditsBtn.addEventListener("click", () => {
        audio.playTap();
        this.openCredits();
      });
    }

    // Pause & Resume
    const pauseBtn = document.getElementById("btn-hud-pause");
    if (pauseBtn) {
      pauseBtn.addEventListener("click", () => {
        audio.playTap();
        this.togglePause();
      });
    }
    const resumeBtn = document.getElementById("btn-resume-game");
    if (resumeBtn) {
      resumeBtn.addEventListener("click", () => {
        audio.playTap();
        this.togglePause();
      });
    }

    // Mute toggle
    if (this.muteBtn) {
      this.updateMuteIcon();
      this.muteBtn.addEventListener("click", () => {
        audio.toggleMute();
        this.updateMuteIcon();
      });
    }

    // View Switching (Counter <-> Kitchen)
    if (this.btnGoToKitchen) {
      this.btnGoToKitchen.addEventListener("click", () => {
        audio.playTap();
        this.switchView("kitchen");
      });
    }
    if (this.btnBackToCounter) {
      this.btnBackToCounter.addEventListener("click", () => {
        audio.playTap();
        this.switchView("counter");
      });
    }

    // The Famous "¿Qué?" Button
    if (this.btnAskQue) {
      this.btnAskQue.addEventListener("click", () => {
        this.handleAskQue();
      });
    }

    // Translation Hint Button
    if (this.btnHint) {
      this.btnHint.addEventListener("click", () => {
        this.toggleTranslationHint();
      });
    }

    // Hanging Ticket Click / Peek
    if (this.orderTicket) {
      this.orderTicket.addEventListener("click", () => {
        audio.playPaperRustle();
        this.orderTicket.classList.toggle("expanded");
      });
    }

    // Counter Brass Bell (Ding!)
    if (this.counterBell) {
      this.counterBell.addEventListener("click", () => {
        audio.playServiceBell();
        this.counterBell.classList.add("bell-ring");
        setTimeout(() => this.counterBell.classList.remove("bell-ring"), 300);
      });
    }

    // Transfer crafted dish to tray
    if (this.btnTransferToTray) {
      this.btnTransferToTray.addEventListener("click", () => {
        this.finishCraftingAndAddToTray();
      });
    }

    // Serve Button (Ready to deliver)
    if (this.serveBtn) {
      this.serveBtn.addEventListener("click", () => {
        this.serveOrder();
      });
    }

    // Trash / Clear Button
    if (this.trashBtn) {
      this.trashBtn.addEventListener("click", () => {
        this.clearTray();
      });
    }

    // Newspaper continue button
    if (this.newspaperContinueBtn) {
      this.newspaperContinueBtn.addEventListener("click", () => {
        audio.playTap();
        this.closeNewspaperAndAdvance();
      });
    }

    // Restart game button
    if (this.restartBtn) {
      this.restartBtn.addEventListener("click", () => {
        audio.playTap();
        this.resetGame();
      });
    }

    // Modal close triggers
    document.querySelectorAll(".modal-close-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".game-modal");
        if (modal) {
          modal.classList.remove("open");
          modal.setAttribute("aria-hidden", "true");
        }
      });
    });

    // Keyboard Shortcuts
    window.addEventListener("keydown", (e) => {
      if (this.gameScreen && this.gameScreen.classList.contains("active")) {
        if (e.key === "Escape") {
          this.togglePause();
        } else if (e.key.toLowerCase() === "t") {
          this.switchView(this.currentView === "counter" ? "kitchen" : "counter");
        } else if (e.key.toLowerCase() === "c" && !e.target.matches("input, textarea")) {
          this.clearTray();
        } else if (e.key === " " && !e.target.matches("input, textarea, button")) {
          e.preventDefault();
          if (this.selectedTrayItems.length > 0) {
            this.serveOrder();
          }
        }
      }
    });
  }

  updateMuteIcon() {
    if (!this.muteBtn) return;
    if (audio.isMuted) {
      this.muteBtn.innerHTML = `<span>🔇</span><span class="hud-btn-label">Silencio</span>`;
      this.muteBtn.setAttribute("title", "Activar sonido (Unmute)");
    } else {
      this.muteBtn.innerHTML = `<span>🔔</span><span class="hud-btn-label">Sonido</span>`;
      this.muteBtn.setAttribute("title", "Silenciar sonido (Mute)");
    }
  }

  startGame() {
    this.startScreen.classList.remove("active");
    this.endScreen.classList.remove("active");
    this.gameScreen.classList.add("active");

    audio.startAmbient();
    this.currentLevelIndex = 0;
    this.customersServedInLevel = 0;
    this.score = 0;
    this.coins = 60;
    this.dayTips = 0;
    this.dayEarnings = 0;
    this.satisfaction = 100;
    this.updateHUD();
    this.switchView("counter");
    this.nextCustomer();
  }

  switchView(viewName) {
    this.currentView = viewName;
    if (viewName === "kitchen") {
      this.counterView.style.display = "none";
      this.kitchenView.style.display = "block";
      if (this.btnBackToCounter) this.btnBackToCounter.style.display = "inline-flex";

      // If nothing is on the craft station, load the first requested item
      if (!this.activeCraftItem && this.currentOrder && this.currentOrder.items.length > 0) {
        this.loadRecipeIntoCraftStation(this.currentOrder.items[0]);
      }
    } else {
      this.kitchenView.style.display = "none";
      this.counterView.style.display = "block";
    }
  }

  renderRecipeShelf() {
    if (!this.shelfDrinksList || !this.shelfFoodList) return;

    const drinks = GAME_DATA.menuItems.filter(i => i.category === "bebidas");
    const foods = GAME_DATA.menuItems.filter(i => i.category === "comida");

    const renderCard = (item) => `
      <button class="shelf-recipe-card" data-id="${item.id}" title="${item.enDescription}">
        <div class="shelf-card-icon">${item.svg}</div>
        <div class="shelf-card-info">
          <span class="shelf-card-name">${item.name}</span>
          <span class="shelf-card-price">${item.price} 🪙</span>
        </div>
      </button>
    `;

    this.shelfDrinksList.innerHTML = drinks.map(renderCard).join("");
    this.shelfFoodList.innerHTML = foods.map(renderCard).join("");

    // Shelf click: select item for crafting table
    document.querySelectorAll(".shelf-recipe-card").forEach(card => {
      card.addEventListener("click", () => {
        const id = card.getAttribute("data-id");
        audio.playTap();
        this.loadRecipeIntoCraftStation(id);
      });
    });
  }

  loadRecipeIntoCraftStation(itemId) {
    const item = GAME_DATA.menuItems.find(m => m.id === itemId);
    if (!item) return;

    this.activeCraftItem = item;
    this.activeCraftStepIndex = 0;

    // Highlight selected shelf item
    document.querySelectorAll(".shelf-recipe-card").forEach(c => {
      c.classList.toggle("active-cooking", c.getAttribute("data-id") === itemId);
    });

    if (this.craftItemName) this.craftItemName.textContent = item.name;
    if (this.craftDishDesc) this.craftDishDesc.textContent = item.description;

    // Render progressive visual in work platter
    this.updateCraftVisual(false);

    // Render interactive craft steps
    this.renderCraftSteps();
  }

  renderCraftSteps() {
    if (!this.craftActionsContainer || !this.activeCraftItem) return;

    this.craftActionsContainer.style.display = "flex";
    if (this.craftFinishRow) this.craftFinishRow.style.display = "none";

    const steps = this.activeCraftItem.craftSteps || [];
    this.craftActionsContainer.innerHTML = steps.map((step, idx) => {
      const isDone = idx < this.activeCraftStepIndex;
      const isCurrent = idx === this.activeCraftStepIndex;
      const isLocked = idx > this.activeCraftStepIndex;

      let stepClass = "craft-step-btn";
      if (isDone) stepClass += " step-done";
      if (isCurrent) stepClass += " step-current pulsing";
      if (isLocked) stepClass += " step-locked";

      return `
        <button class="${stepClass}" data-step="${idx}" ${isLocked || isDone ? 'disabled' : ''}>
          <span class="step-icon">${isDone ? '✓' : step.icon}</span>
          <div class="step-labels">
            <span class="step-main-text">${step.label}</span>
            <small class="step-sub-text">${step.clue}</small>
          </div>
        </button>
      `;
    }).join("");

    // Attach step execution
    this.craftActionsContainer.querySelectorAll(".craft-step-btn.step-current").forEach(btn => {
      btn.addEventListener("click", () => {
        this.executeCraftStep();
      });
    });
  }

  executeCraftStep() {
    if (!this.activeCraftItem) return;

    const steps = this.activeCraftItem.craftSteps;
    const currentStep = steps[this.activeCraftStepIndex];
    if (!currentStep) return;

    // Play tactile sound based on action
    if (currentStep.sound === "steam") {
      audio.playSteamPour();
    } else if (currentStep.sound === "liquid") {
      audio.playLiquidPour();
    } else if (currentStep.sound === "sprinkle") {
      audio.playSprinkle();
    } else if (currentStep.sound === "oven") {
      audio.playOvenHeat();
    } else if (currentStep.sound === "citrus") {
      audio.playCitrusSqueeze();
    } else if (currentStep.sound === "spread") {
      audio.playSpreadOil();
    } else if (currentStep.sound === "ice") {
      audio.playIceClink();
    } else {
      audio.playCrispPrep();
    }

    // Advance step
    this.activeCraftStepIndex++;

    // Mark words learned in notebook
    notebook.markWordLearned(this.activeCraftItem.id);
    if (currentStep.label.includes("canela")) notebook.markWordLearned("canela");
    if (currentStep.label.includes("azúcar")) notebook.markWordLearned("azucar");
    if (currentStep.label.includes("leche")) notebook.markWordLearned("leche");

    const isFullyCrafted = this.activeCraftStepIndex >= steps.length;
    this.updateCraftVisual(isFullyCrafted);

    if (isFullyCrafted) {
      // Dish is complete!
      this.craftActionsContainer.innerHTML = `
        <div class="craft-complete-banner">
          <span>✨ ¡${this.activeCraftItem.name} preparado a la perfección! ✨</span>
        </div>
      `;
      if (this.craftFinishRow) {
        this.craftFinishRow.style.display = "flex";
      }
    } else {
      this.renderCraftSteps();
    }
  }

  updateCraftVisual(isComplete) {
    if (!this.craftDishVisual || !this.activeCraftItem) return;

    this.craftDishVisual.innerHTML = `
      <div class="crafting-platter-stage ${isComplete ? 'craft-ready-glow' : 'craft-in-progress'}">
        <div class="craft-center-svg">
          ${this.activeCraftItem.svg}
        </div>
        ${isComplete ? '<div class="steam-sparkle-overlay">✨ ¡Listo! ✨</div>' : '<div class="craft-progress-badge">En preparación...</div>'}
      </div>
    `;
  }

  finishCraftingAndAddToTray() {
    if (!this.activeCraftItem) return;

    if (this.selectedTrayItems.length >= 4) {
      this.showToastNotification("¡La bandeja está llena! (Máximo 4 productos)");
      return;
    }

    audio.playPlateServe();
    this.selectedTrayItems.push(this.activeCraftItem.id);
    this.renderTray();
    this.updateMenuCounters();

    // Reward for hands-on crafting
    this.score += 15;
    this.coins += 2; // +2 bonus coins for artisan touch!
    this.updateHUD();

    this.showToastNotification(`¡${this.activeCraftItem.name} colocado en la bandeja! (+15 pts)`);

    // Reset crafting table or auto-load the next needed item
    const nextMissingItem = this.currentOrder.items.find(id => {
      const neededCount = this.currentOrder.items.filter(x => x === id).length;
      const trayCount = this.selectedTrayItems.filter(x => x === id).length;
      return trayCount < neededCount;
    });

    if (nextMissingItem) {
      this.loadRecipeIntoCraftStation(nextMissingItem);
    } else {
      this.loadRecipeIntoCraftStation(this.activeCraftItem.id);
    }
  }

  nextCustomer() {
    if (this.patienceTimer) {
      clearInterval(this.patienceTimer);
    }

    this.isProcessingServe = false;
    this.askedQue = false;
    this.clearTray(true); // silent tray clear
    this.hideFeedback();

    const level = GAME_DATA.levels[this.currentLevelIndex];
    this.maxPatience = level.patienceSeconds;
    this.patienceRemaining = this.maxPatience;

    // Pick random customer
    const randomCustomerIndex = Math.floor(Math.random() * GAME_DATA.customers.length);
    this.currentCustomer = GAME_DATA.customers[randomCustomerIndex];

    // Pick order suitable for level
    const validOrders = GAME_DATA.orderPool.filter(ord => 
      this.currentLevelIndex + 1 >= ord.levelMin && this.currentLevelIndex + 1 <= ord.levelMax
    );
    const randomOrderIndex = Math.floor(Math.random() * validOrders.length);
    this.currentOrder = validOrders[randomOrderIndex];

    // Mark words in notebook
    notebook.markWordLearned("hola");
    notebook.markWordLearned("buenos-dias");
    notebook.markWordsLearnedFromOrder(this.currentOrder.items);

    // Switch view to front counter
    this.switchView("counter");

    // Render dialogue & ticket
    this.renderCustomerScene();

    // Sound effect
    audio.playDoorBell();

    // Start patience timer
    this.startPatienceTimer();
  }

  renderCustomerScene() {
    if (!this.customerAvatar) return;

    this.customerAvatar.innerHTML = this.currentCustomer.avatarSvg;
    this.customerName.textContent = this.currentCustomer.name;
    this.customerTitle.textContent = `${this.currentCustomer.title} (${this.currentCustomer.enTitle})`;

    // Reset customer animation
    this.customerAvatar.classList.remove("customer-bounce", "customer-shake");
    void this.customerAvatar.offsetWidth;
    this.customerAvatar.classList.add("customer-bounce");

    // Speech texts
    this.speechSpanish.textContent = `«${this.currentOrder.spanish}»`;
    this.speechEnglish.textContent = this.currentOrder.english;
    this.speechEnglish.classList.remove("revealed");

    // Reset "¿Qué?" button
    if (this.btnAskQue) {
      this.btnAskQue.disabled = false;
      this.btnAskQue.classList.remove("used");
      this.btnAskQue.innerHTML = `<span>❓</span> <span>«¿Qué?» (Pardon?)</span>`;
    }

    // Reset Hint button
    if (this.btnHint) {
      this.btnHint.classList.remove("active");
      this.btnHint.innerHTML = `<span>💡</span> <span>Pista (Translation)</span>`;
    }

    // Order Ticket clip update
    if (this.ticketSummaryText) {
      this.ticketSummaryText.textContent = this.currentOrder.ticketSummary;
    }
    if (this.ticketCustName) {
      this.ticketCustName.textContent = `Cliente: ${this.currentCustomer.name}`;
    }

    this.updatePatienceUI();
  }

  handleAskQue() {
    if (this.askedQue || this.isProcessingServe) return;
    this.askedQue = true;

    audio.playTap();
    if (this.btnAskQue) {
      this.btnAskQue.disabled = true;
      this.btnAskQue.classList.add("used");
      this.btnAskQue.innerHTML = `<span>✓</span> <span>Aclarado</span>`;
    }

    // Small patience cost in exchange for crystal clarity
    this.patienceRemaining = Math.max(3, this.patienceRemaining - 3);
    this.updatePatienceUI();

    this.speechSpanish.innerHTML = `«${this.currentOrder.queDialogue}»`;
    
    if (this.customerAvatar) {
      this.customerAvatar.classList.remove("customer-bounce");
      void this.customerAvatar.offsetWidth;
      this.customerAvatar.classList.add("customer-bounce");
    }
  }

  toggleTranslationHint() {
    audio.playTap();
    const isRevealed = this.speechEnglish.classList.toggle("revealed");
    if (isRevealed) {
      this.btnHint.classList.add("active");
      this.btnHint.innerHTML = `<span>👁️</span> <span>Ocultar pista</span>`;
    } else {
      this.btnHint.classList.remove("active");
      this.btnHint.innerHTML = `<span>💡</span> <span>Pista (Translation)</span>`;
    }
  }

  startPatienceTimer() {
    const updateRateMs = 100;
    const rateMultiplier = this.currentCustomer.patienceSpeed || 1.0;

    this.patienceTimer = setInterval(() => {
      if (this.isPaused) return;

      this.patienceRemaining -= (updateRateMs / 1000) * rateMultiplier;

      if (this.patienceRemaining <= 0) {
        this.patienceRemaining = 0;
        this.updatePatienceUI();
        clearInterval(this.patienceTimer);
        this.handleCustomerTimeout();
      } else {
        this.updatePatienceUI();
      }
    }, updateRateMs);
  }

  updatePatienceUI() {
    const percentage = Math.max(0, Math.min(100, (this.patienceRemaining / this.maxPatience) * 100));
    if (this.patienceBarFill) {
      this.patienceBarFill.style.width = `${percentage}%`;

      if (percentage > 55) {
        this.patienceBarFill.style.backgroundColor = "var(--color-sage-green)";
      } else if (percentage > 25) {
        this.patienceBarFill.style.backgroundColor = "var(--color-butter-yellow)";
      } else {
        this.patienceBarFill.style.backgroundColor = "var(--color-terracotta)";
      }
    }

    if (this.patienceTimerText) {
      this.patienceTimerText.textContent = `${Math.ceil(this.patienceRemaining)}s`;
    }
  }

  handleCustomerTimeout() {
    if (this.isProcessingServe) return;
    this.isProcessingServe = true;

    audio.playError();
    this.switchView("counter");

    if (this.customerAvatar) {
      this.customerAvatar.classList.add("customer-shake");
    }

    this.satisfaction = Math.max(10, this.satisfaction - 12);
    this.updateHUD();

    this.showFeedback({
      isSuccess: false,
      title: "¡Se acabó la paciencia!",
      enTitle: "Customer lost patience!",
      message: `${this.currentCustomer.name} tenía prisa y se ha marchado con desilusión.`,
      enMessage: `${this.currentCustomer.name} was in a rush and left disappointed.`,
      vocabTip: `Recuerda: "${this.currentOrder.spanish}" = ${this.currentOrder.ticketSummary}.`
    });

    setTimeout(() => {
      this.nextCustomer();
    }, 3200);
  }

  removeTrayItem(index) {
    if (this.isProcessingServe) return;
    audio.playTrashDiscard();
    this.selectedTrayItems.splice(index, 1);
    this.renderTray();
    this.updateMenuCounters();
  }

  clearTray(silent = false) {
    if (this.isProcessingServe && !silent) return;
    if (!silent) audio.playTrashDiscard();
    this.selectedTrayItems = [];
    this.renderTray();
    this.updateMenuCounters();
  }

  renderTray() {
    if (!this.trayList || !this.trayEmptyNotice || !this.serveBtn) return;

    if (this.selectedTrayItems.length === 0) {
      this.trayEmptyNotice.style.display = "block";
      this.trayList.innerHTML = "";
      this.serveBtn.disabled = true;
      this.serveBtn.classList.remove("ready");
    } else {
      this.trayEmptyNotice.style.display = "none";
      this.serveBtn.disabled = false;
      this.serveBtn.classList.add("ready");

      this.trayList.innerHTML = this.selectedTrayItems.map((id, index) => {
        const item = GAME_DATA.menuItems.find(m => m.id === id);
        if (!item) return "";
        return `
          <div class="tray-item-pill" data-index="${index}" title="Haz clic para descartar en la papelera">
            <span class="tray-item-icon-mini">${item.category === 'bebidas' ? '☕' : '🥐'}</span>
            <span class="tray-item-label">${item.name}</span>
            <button class="tray-item-remove-btn" aria-label="Descartar">&times;</button>
          </div>
        `;
      }).join("");

      this.trayList.querySelectorAll(".tray-item-pill").forEach(pill => {
        pill.addEventListener("click", () => {
          const idx = parseInt(pill.getAttribute("data-index"), 10);
          this.removeTrayItem(idx);
        });
      });
    }
  }

  updateMenuCounters() {
    GAME_DATA.menuItems.forEach(item => {
      const count = this.selectedTrayItems.filter(id => id === item.id).length;
      const counterEl = document.getElementById(`counter-${item.id}`);
      if (counterEl) {
        if (count > 0) {
          counterEl.textContent = count;
          counterEl.classList.add("visible");
        } else {
          counterEl.textContent = "0";
          counterEl.classList.remove("visible");
        }
      }
    });
  }

  serveOrder() {
    if (this.isProcessingServe || this.selectedTrayItems.length === 0) return;

    this.switchView("counter");
    audio.playServiceBell();
    audio.playPlateServe();

    const requiredItems = [...this.currentOrder.items].sort();
    const servedItems = [...this.selectedTrayItems].sort();

    const isMatch = (requiredItems.length === servedItems.length) &&
      requiredItems.every((val, index) => val === servedItems[index]);

    if (isMatch) {
      this.handleCorrectOrder();
    } else {
      this.handleIncorrectOrder(requiredItems, servedItems);
    }
  }

  handleCorrectOrder() {
    this.isProcessingServe = true;
    clearInterval(this.patienceTimer);

    setTimeout(() => audio.playSuccess(), 200);
    setTimeout(() => audio.playCoinTip(), 600);

    if (this.customerAvatar) {
      this.customerAvatar.classList.add("customer-bounce");
    }

    const level = GAME_DATA.levels[this.currentLevelIndex];
    const patienceRatio = this.patienceRemaining / this.maxPatience;
    const speedBonus = Math.round(patienceRatio * 15 * level.bonusMultiplier);
    
    const itemEarnings = this.selectedTrayItems.reduce((acc, id) => {
      const item = GAME_DATA.menuItems.find(m => m.id === id);
      return acc + (item ? item.price : 10);
    }, 0);

    const tipAmount = Math.max(4, Math.round(speedBonus / 2));
    const totalOrderCoins = Math.round(itemEarnings * level.bonusMultiplier) + tipAmount;
    const pointsEarned = 100 + speedBonus;

    this.score += pointsEarned;
    this.coins += totalOrderCoins;
    this.dayTips += tipAmount;
    this.dayEarnings += totalOrderCoins;
    this.satisfaction = Math.min(100, this.satisfaction + 6);
    this.customersServedInLevel++;
    this.totalCustomersServed++;
    this.totalCorrect++;

    this.updateHUD();
    this.triggerConfetti();
    this.animateTipJar();

    this.showFeedback({
      isSuccess: true,
      title: "¡Pedido Excelente!",
      enTitle: "Excellent Order!",
      message: `«${this.currentOrder.praise}»`,
      enMessage: `«${this.currentOrder.praiseEn}»`,
      rewardText: `+${pointsEarned} pts  |  +${totalOrderCoins} 🪙 (Propina: +${tipAmount} 🪙)`,
      vocabTip: `¡Genial! Has preparado: "${this.currentOrder.ticketSummary}"`
    });

    setTimeout(() => {
      if (this.customersServedInLevel >= level.customersNeeded) {
        if (this.currentLevelIndex < GAME_DATA.levels.length - 1) {
          this.triggerNewspaperWrapUp();
        } else {
          this.triggerVictoryEnd();
        }
      } else {
        this.nextCustomer();
      }
    }, 2500);
  }

  handleIncorrectOrder(requiredItems, servedItems) {
    audio.playError();
    this.totalIncorrect++;

    if (this.customerAvatar) {
      this.customerAvatar.classList.add("customer-shake");
      setTimeout(() => this.customerAvatar.classList.remove("customer-shake"), 600);
    }

    this.patienceRemaining = Math.max(2, this.patienceRemaining - 4);
    this.updatePatienceUI();

    const missing = requiredItems.filter(id => !servedItems.includes(id));
    const extra = servedItems.filter(id => !requiredItems.includes(id));

    let mistakeReason = "";
    let mistakeReasonEn = "";

    if (missing.length > 0) {
      const missingNames = missing.map(id => {
        const item = GAME_DATA.menuItems.find(m => m.id === id);
        return item ? `"${item.name}"` : id;
      }).join(", ");
      mistakeReason = `Te faltó preparar: ${missingNames}.`;
      mistakeReasonEn = `You missed preparing: ${missingNames}.`;
    } else if (extra.length > 0) {
      const extraNames = extra.map(id => {
        const item = GAME_DATA.menuItems.find(m => m.id === id);
        return item ? `"${item.name}"` : id;
      }).join(", ");
      mistakeReason = `El cliente no pidió: ${extraNames}.`;
      mistakeReasonEn = `The customer didn't ask for: ${extraNames}.`;
    } else {
      mistakeReason = "Las cantidades en la bandeja no coinciden con la comanda.";
      mistakeReasonEn = "Quantities on tray do not match order.";
    }

    this.showFeedback({
      isSuccess: false,
      title: "¡Vaya! Casi lo tienes...",
      enTitle: "Almost! Check the ticket...",
      message: mistakeReason,
      enMessage: mistakeReasonEn,
      vocabTip: `Comanda: ${this.currentOrder.ticketSummary}. Vuelve a la cocina y ajusta la bandeja.`
    });
  }

  animateTipJar() {
    if (this.tipJarCoins) {
      this.tipJarCoins.classList.add("coin-pop");
      setTimeout(() => this.tipJarCoins.classList.remove("coin-pop"), 600);
    }
  }

  showFeedback({ isSuccess, title, enTitle, message, enMessage, rewardText, vocabTip }) {
    if (!this.feedbackBanner) return;

    this.feedbackBanner.className = `feedback-banner active ${isSuccess ? 'feedback-success' : 'feedback-error'}`;
    this.feedbackBanner.innerHTML = `
      <div class="feedback-icon">${isSuccess ? '🌟' : '💡'}</div>
      <div class="feedback-text-content">
        <div class="feedback-heading">
          <strong>${title}</strong> <small>(${enTitle})</small>
        </div>
        <div class="feedback-body">
          <p class="feedback-main-msg">${message}</p>
          <p class="feedback-sub-msg">${enMessage}</p>
        </div>
        ${rewardText ? `<div class="feedback-rewards"><span>${rewardText}</span></div>` : ''}
        ${vocabTip ? `<div class="feedback-vocab-tip"><em>${vocabTip}</em></div>` : ''}
      </div>
    `;
  }

  hideFeedback() {
    if (this.feedbackBanner) {
      this.feedbackBanner.className = "feedback-banner";
      this.feedbackBanner.innerHTML = "";
    }
  }

  showToastNotification(text) {
    const toast = document.createElement("div");
    toast.className = "cozy-toast";
    toast.textContent = text;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.classList.add("visible");
      setTimeout(() => {
        toast.classList.remove("visible");
        setTimeout(() => toast.remove(), 400);
      }, 2000);
    }, 10);
  }

  triggerNewspaperWrapUp() {
    audio.playLevelUp();
    const currentDay = GAME_DATA.levels[this.currentLevelIndex];

    if (this.newspaperDayTitle) {
      this.newspaperDayTitle.textContent = `Edición del ${currentDay.title}`;
    }
    if (this.newspaperHeadline) {
      this.newspaperHeadline.textContent = `«${currentDay.newspaperHeadline}»`;
    }
    if (this.newspaperStory) {
      this.newspaperStory.textContent = currentDay.newspaperStory;
    }
    if (this.newspaperStoryEn) {
      this.newspaperStoryEn.textContent = currentDay.newspaperStoryEn;
    }

    if (this.newspaperSales) {
      this.newspaperSales.textContent = `+${this.dayEarnings} 🪙`;
    }
    if (this.newspaperTips) {
      this.newspaperTips.textContent = `+${this.dayTips} 🪙`;
    }
    if (this.newspaperAccuracy) {
      const dayTotal = this.customersServedInLevel + this.totalIncorrect;
      const acc = dayTotal > 0 ? Math.round((this.customersServedInLevel / dayTotal) * 100) : 100;
      this.newspaperAccuracy.textContent = `${acc}%`;
    }
    if (this.newspaperVocab) {
      this.newspaperVocab.textContent = `${notebook.learnedIds.size} / ${GAME_DATA.vocabulary.length}`;
    }

    this.newspaperModal.classList.add("open");
    this.newspaperModal.setAttribute("aria-hidden", "false");
  }

  closeNewspaperAndAdvance() {
    if (this.newspaperModal) {
      this.newspaperModal.classList.remove("open");
      this.newspaperModal.setAttribute("aria-hidden", "true");
    }
    this.currentLevelIndex++;
    this.customersServedInLevel = 0;
    this.dayTips = 0;
    this.dayEarnings = 0;
    this.updateHUD();
    this.nextCustomer();
  }

  triggerVictoryEnd() {
    audio.playLevelUp();
    this.gameScreen.classList.remove("active");
    this.endScreen.classList.add("active");

    const totalAttempts = this.totalCorrect + this.totalIncorrect;
    const accuracy = totalAttempts > 0 ? Math.round((this.totalCorrect / totalAttempts) * 100) : 100;

    if (this.endScore) this.endScore.textContent = this.score;
    if (this.endCoins) this.endCoins.textContent = `${this.coins} 🪙`;
    if (this.endServed) this.endServed.textContent = this.totalCustomersServed;
    if (this.endAccuracy) this.endAccuracy.textContent = `${accuracy}%`;
    if (this.endVocabCount) this.endVocabCount.textContent = `${notebook.learnedIds.size} / ${GAME_DATA.vocabulary.length}`;
    if (this.endSatisfaction) this.endSatisfaction.textContent = `${this.satisfaction}%`;
  }

  resetGame() {
    this.currentLevelIndex = 0;
    this.customersServedInLevel = 0;
    this.totalCustomersServed = 0;
    this.totalCorrect = 0;
    this.totalIncorrect = 0;
    this.score = 0;
    this.coins = 60;
    this.dayTips = 0;
    this.dayEarnings = 0;
    this.satisfaction = 100;
    this.selectedTrayItems = [];

    this.endScreen.classList.remove("active");
    this.startScreen.classList.add("active");
    this.updateHUD();
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.pauseModal.classList.add("open");
      this.pauseModal.setAttribute("aria-hidden", "false");
    } else {
      this.pauseModal.classList.remove("open");
      this.pauseModal.setAttribute("aria-hidden", "true");
    }
  }

  openTutorial() {
    if (this.tutorialModal) {
      this.tutorialModal.classList.add("open");
      this.tutorialModal.setAttribute("aria-hidden", "false");
    }
  }

  openCredits() {
    if (this.creditsModal) {
      this.creditsModal.classList.add("open");
      this.creditsModal.setAttribute("aria-hidden", "false");
    }
  }

  updateHUD() {
    const currentLevel = GAME_DATA.levels[this.currentLevelIndex];
    if (this.levelBadge) {
      this.levelBadge.textContent = currentLevel ? currentLevel.title : "Día 1: Mañana en Malasaña";
    }
    if (this.coinsDisplay) {
      this.coinsDisplay.textContent = `${this.coins} 🪙`;
    }
    if (this.scoreDisplay) {
      this.scoreDisplay.textContent = `${this.score} pts`;
    }
    if (this.satisfactionDisplay) {
      this.satisfactionDisplay.textContent = `${this.satisfaction}%`;
    }
    if (this.satisfactionBar) {
      this.satisfactionBar.style.width = `${this.satisfaction}%`;
    }
  }

  triggerConfetti() {
    const colors = ["#C96B4B", "#F4D58D", "#A7B99E", "#DFA5A0", "#FFF4E6"];
    const container = document.body;

    for (let i = 0; i < 24; i++) {
      const conf = document.createElement("div");
      conf.className = "confetti-piece";
      conf.style.left = `${Math.random() * 80 + 10}vw`;
      conf.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      conf.style.animationDuration = `${Math.random() * 1.2 + 0.8}s`;
      conf.style.transform = `rotate(${Math.random() * 360}deg)`;
      container.appendChild(conf);

      setTimeout(() => conf.remove(), 2000);
    }
  }
}

// Global instance initialized safely
let game = null;

function initCafeGame() {
  if (window.game) return window.game;
  
  if (typeof VocabularyNotebook !== "undefined" && !window.notebook) {
    notebook = new VocabularyNotebook();
    window.notebook = notebook;
  }
  
  if (typeof CafeGame !== "undefined" && !window.game) {
    game = new CafeGame();
    window.game = game;
  }
  return window.game;
}

if (typeof window !== "undefined") {
  window.CafeGame = CafeGame;
  window.initCafeGame = initCafeGame;

  if (document.readyState === "loading") {
    window.addEventListener("DOMContentLoaded", initCafeGame);
  } else {
    // DOM already ready!
    initCafeGame();
  }
}
