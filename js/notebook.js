/**
 * CAFÉ ESPAÑOL — Vocabulary Notebook & Cultural Reference System
 * Tracks learned words, categories, pronunciations, and Madrid culture notes.
 * Author: Hemasri Kumar
 */

class VocabularyNotebook {
  constructor() {
    this.modal = document.getElementById("notebook-modal");
    this.contentContainer = document.getElementById("notebook-vocab-list");
    this.cultureContainer = document.getElementById("notebook-culture-list");
    this.searchBar = document.getElementById("notebook-search");
    this.categoryTabs = document.querySelectorAll(".notebook-tab");
    this.counterEl = document.getElementById("notebook-counter");

    this.activeCategory = "all";
    this.activeTabMode = "vocab"; // 'vocab' or 'culture'
    this.learnedIds = new Set(this.loadLearnedWords());

    this.initEventListeners();
  }

  loadLearnedWords() {
    try {
      const saved = localStorage.getItem("cafe_espanol_learned_words");
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {}
    // Seed initial greetings and common words as discovered
    return ["hola", "buenos-dias", "por-favor", "gracias", "cafe", "cafe-con-leche"];
  }

  saveLearnedWords() {
    try {
      localStorage.setItem("cafe_espanol_learned_words", JSON.stringify([...this.learnedIds]));
    } catch (e) {}
  }

  markWordLearned(id) {
    if (!this.learnedIds.has(id)) {
      this.learnedIds.add(id);
      this.saveLearnedWords();
      this.updateCounter();
    }
  }

  markWordsLearnedFromOrder(itemIds) {
    itemIds.forEach(id => this.markWordLearned(id));
    this.markWordLearned("por-favor");
    this.markWordLearned("quisiera");
  }

  initEventListeners() {
    // Search input
    if (this.searchBar) {
      this.searchBar.addEventListener("input", () => this.render());
    }

    // Category Tabs
    if (this.categoryTabs) {
      this.categoryTabs.forEach(tab => {
        tab.addEventListener("click", (e) => {
          this.categoryTabs.forEach(t => t.classList.remove("active"));
          tab.classList.add("active");
          const cat = tab.getAttribute("data-category");

          if (cat === "culture") {
            this.activeTabMode = "culture";
          } else {
            this.activeTabMode = "vocab";
            this.activeCategory = cat;
          }
          this.render();
        });
      });
    }

    // Close button & outside click
    const closeBtn = document.getElementById("notebook-close-btn");
    if (closeBtn) {
      closeBtn.addEventListener("click", () => this.close());
    }

    if (this.modal) {
      this.modal.addEventListener("click", (e) => {
        if (e.target === this.modal) {
          this.close();
        }
      });
    }

    // Keyboard ESC to close
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && this.isOpen()) {
        this.close();
      }
    });
  }

  open() {
    if (!this.modal) return;
    this.modal.classList.add("open");
    this.modal.setAttribute("aria-hidden", "false");
    this.updateCounter();
    this.render();
  }

  close() {
    if (!this.modal) return;
    this.modal.classList.remove("open");
    this.modal.setAttribute("aria-hidden", "true");
  }

  isOpen() {
    return this.modal && this.modal.classList.contains("open");
  }

  updateCounter() {
    if (this.counterEl) {
      const total = GAME_DATA.vocabulary.length;
      const learned = this.learnedIds.size;
      this.counterEl.textContent = `${learned} / ${total} aprendidas`;
    }
  }

  render() {
    if (!this.contentContainer || !this.cultureContainer) return;

    if (this.activeTabMode === "culture") {
      this.contentContainer.style.display = "none";
      this.cultureContainer.style.display = "grid";
      this.renderCulture();
    } else {
      this.cultureContainer.style.display = "none";
      this.contentContainer.style.display = "grid";
      this.renderVocab();
    }
  }

  renderVocab() {
    const query = this.searchBar ? this.searchBar.value.trim().toLowerCase() : "";
    let words = GAME_DATA.vocabulary;

    if (this.activeCategory !== "all") {
      words = words.filter(w => w.category === this.activeCategory);
    }

    if (query) {
      words = words.filter(w =>
        w.term.toLowerCase().includes(query) ||
        w.translation.toLowerCase().includes(query) ||
        w.example.toLowerCase().includes(query)
      );
    }

    if (words.length === 0) {
      this.contentContainer.innerHTML = `
        <div class="notebook-empty-state">
          <p>No se encontraron palabras que coincidan con la búsqueda.</p>
          <small>No matching vocabulary found.</small>
        </div>
      `;
      return;
    }

    this.contentContainer.innerHTML = words.map(word => {
      const isLearned = this.learnedIds.has(word.id);
      const categoryLabels = {
        "greetings": "Saludos y Cortesía",
        "food-drink": "Comida y Bebida",
        "expressions": "Expresiones Cotidianas"
      };

      return `
        <article class="vocab-card ${isLearned ? 'is-learned' : 'is-unlearned'}">
          <div class="vocab-card-header">
            <span class="vocab-cat-tag">${categoryLabels[word.category] || word.category}</span>
            <span class="vocab-status-badge ${isLearned ? 'badge-learned' : 'badge-new'}">
              ${isLearned ? '✓ Aprendida' : '○ Por descubrir'}
            </span>
          </div>

          <h3 class="vocab-term">${word.term}</h3>
          <p class="vocab-translation">${word.translation}</p>

          <div class="vocab-example-box">
            <span class="example-label">Ejemplo en el café:</span>
            <p class="example-spanish">"${word.example}"</p>
          </div>

          <div class="vocab-note-box">
            <span class="note-icon">💡</span>
            <p class="vocab-note">${word.note}</p>
          </div>
        </article>
      `;
    }).join("");
  }

  renderCulture() {
    this.cultureContainer.innerHTML = GAME_DATA.culturalNotes.map(note => {
      return `
        <article class="culture-card">
          <div class="culture-header">
            <span class="culture-tag">${note.tag}</span>
            <span class="culture-flag">🇪🇸 Madrid</span>
          </div>
          <h3 class="culture-title-es">${note.title}</h3>
          <h4 class="culture-title-en">${note.enTitle}</h4>
          
          <div class="culture-body">
            <p class="culture-p-es">${note.content}</p>
            <p class="culture-p-en">${note.enContent}</p>
          </div>
        </article>
      `;
    }).join("");
  }
}

let notebook = null;

if (typeof window !== "undefined") {
  window.VocabularyNotebook = VocabularyNotebook;
  window.notebook = notebook;
}
