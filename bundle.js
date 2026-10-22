/**
 * CAFÉ ESPAÑOL — All-In-One Unified Bundle
 * Contains: data.js + audio.js + notebook.js + game.js
 * Author: Hemasri Kumar
 */

(function(window) {
  // If already initialized by modular scripts, do not duplicate
  if (window.GAME_DATA && window.game) {
    return;
  }

// ============================================================================
// PART 1: GAME DATA & VOCABULARY
// ============================================================================
const GAME_DATA = {
  vocabulary: [
    { id: "hola", term: "¡Hola!", translation: "Hello!", category: "greetings", example: "¡Hola! ¿Cómo estás hoy?", note: "Universal Spanish greeting used at any time of day." },
    { id: "buenos-dias", term: "Buenos días", translation: "Good morning", category: "greetings", example: "Buenos días, don Alejandro.", note: "Used in Spain from dawn until lunchtime (around 2:00 PM)." },
    { id: "buenas-tardes", term: "Buenas tardes", translation: "Good afternoon", category: "greetings", example: "Buenas tardes, ¿tienen mesa libre?", note: "Used in Spain from after lunch (approx. 2:00 PM) until nightfall." },
    { id: "por-favor", term: "Por favor", translation: "Please", category: "greetings", example: "Un café con leche, por favor.", note: "Essential polite marker for ordering food and drinks." },
    { id: "gracias", term: "Gracias / Muchas gracias", translation: "Thank you / Thank you very much", category: "greetings", example: "¡Muchas gracias por el servicio!", note: "Standard way to express gratitude." },
    { id: "de-nada", term: "De nada", translation: "You're welcome", category: "greetings", example: "—Gracias. —De nada, ¡un placer!", note: "Literally means 'of nothing' (think 'it's nothing')." },
    { id: "hasta-luego", term: "Hasta luego", translation: "See you later", category: "greetings", example: "¡Hasta luego y que tenga un buen día!", note: "Common casual farewell in Spanish cafés and shops." },
    { id: "que-desea", term: "¿Qué desea?", translation: "What would you like?", category: "greetings", example: "¿Qué desea tomar hoy?", note: "Polite formal phrase used by café staff (camareros) to ask for orders." },
    { id: "disculpe", term: "Disculpe", translation: "Excuse me", category: "greetings", example: "Disculpe, ¿me trae una servilleta?", note: "Polite way to catch the waiter's attention." },

    { id: "cafe", term: "El café", translation: "Coffee", category: "food-drink", example: "En España, el café se toma varias veces al día.", note: "A central pillar of daily Spanish social life." },
    { id: "cafe-solo", term: "Café solo", translation: "Black coffee / Espresso", category: "food-drink", example: "Quisiera un café solo bien cargado.", note: "A small, strong shot of pure espresso with no milk." },
    { id: "cafe-con-leche", term: "Café con leche", translation: "Coffee with milk", category: "food-drink", example: "Un café con leche templada, por favor.", note: "Half espresso, half steamed milk; the standard Spanish breakfast drink." },
    { id: "cafe-cortado", term: "Café cortado", translation: "Espresso with a dash of milk", category: "food-drink", example: "Para mí, un cortado con sacarina.", note: "'Cortado' means 'cut'—the intense espresso is cut with just a splash of warm milk." },
    { id: "te", term: "Té", translation: "Tea", category: "food-drink", example: "Un té con limón para la tarde.", note: "Commonly herbal teas (manzanilla / poleo menta) or black tea." },
    { id: "agua", term: "Agua", translation: "Water", category: "food-drink", example: "Una botella de agua sin gas, por favor.", note: "'Sin gas' is still water; 'con gas' is sparkling water." },
    { id: "zumo-naranja", term: "Zumo de naranja", translation: "Fresh orange juice", category: "food-drink", example: "Un zumo de naranja recién exprimido.", note: "In Spain, 'zumo' is used (in Latin America, 'jugo' is more common)." },
    { id: "churros", term: "Churros", translation: "Churros", category: "food-drink", example: "Los churros son crujientes por fuera y tiernos por dentro.", note: "Fried dough pastries, traditionally dipped in thick hot chocolate." },
    { id: "croissant", term: "Croissant / Cruasán", translation: "Croissant", category: "food-drink", example: "Un croissant de mantequilla calentito.", note: "French pastry beloved across Spanish bakeries and cafeterías." },
    { id: "tortilla-espanola", term: "Tortilla española", translation: "Spanish omelette", category: "food-drink", example: "Un pincho de tortilla española con patatas.", note: "Iconic Spanish dish made of eggs, potatoes, and optionally onion." },
    { id: "bocadillo", term: "Bocadillo", translation: "Baguette sandwich", category: "food-drink", example: "Un bocadillo de jamón serrano con pan crujiente.", note: "Made on a crusty baguette; distinguished from a 'sándwich' (sliced white bread)." },
    { id: "tostada", term: "Tostada con tomate", translation: "Toast with crushed tomato & olive oil", category: "food-drink", example: "Tostada con tomate natural y aceite de oliva virgen extra.", note: "The quintessential Spanish breakfast, often finished with sea salt." },
    { id: "leche", term: "Leche", translation: "Milk", category: "food-drink", example: "¿La leche la prefiere fría, caliente o templada?", note: "Can be 'entera' (whole), 'semidesnatada' (semi-skimmed), or 'desnatada' (skimmed)." },
    { id: "azucar", term: "Azúcar", translation: "Sugar", category: "food-drink", example: "¿Desea azúcar blanco, moreno o edulcorante?", note: "Offered at every Spanish café table." },
    { id: "canela", term: "Canela", translation: "Cinnamon", category: "food-drink", example: "Espolvorear canela sobre los churros calientes.", note: "Sweet aromatic spice used in Spanish café treats." },
    { id: "pan", term: "Pan", translation: "Bread", category: "food-drink", example: "Pan artesanal horneado cada mañana.", note: "Fresh bread is served with nearly every meal in Spain." },
    { id: "galleta", term: "Galleta", translation: "Biscuit / Cookie", category: "food-drink", example: "Una galleta artesana de canela para acompañar el café.", note: "Sweet biscuit served as a light treat." },
    { id: "chocolate", term: "Chocolate caliente", translation: "Thick hot chocolate", category: "food-drink", example: "Chocolate espeso para mojar los churros.", note: "Spanish hot chocolate is very thick and luxurious, meant for dipping." },

    { id: "verter", term: "Verter", translation: "To pour", category: "expressions", example: "Verter la leche caliente sobre el espresso.", note: "Core barista action for serving coffee and tea." },
    { id: "calentar", term: "Calentar", translation: "To heat / warm up", category: "expressions", example: "Calentar el croissant en el horno antes de servir.", note: "Used when toasting pastries and breads." },
    { id: "espolvorear", term: "Espolvorear", translation: "To sprinkle / dust", category: "expressions", example: "Espolvorear azúcar y canela sobre los churros.", note: "Delightful finish for sweets." },
    { id: "untar", term: "Untar", translation: "To spread", category: "expressions", example: "Untar la pulpa de tomate sobre el pan tostado.", note: "Classic action for preparing 'tostada con tomate'." },
    { id: "exprimir", term: "Exprimir", translation: "To squeeze / press juice", category: "expressions", example: "Exprimir naranjas frescas de Valencia.", note: "Action used when making fresh citrus juices." },
    { id: "cortar", term: "Cortar", translation: "To cut / slice", category: "expressions", example: "Cortar una rebanada generosa de pan de barra.", note: "Used for baguettes and tortilla portions." },

    { id: "quisiera", term: "Quisiera...", translation: "I would like...", category: "expressions", example: "Quisiera pedir un desayuno completo.", note: "A very polite and natural conditional phrasing used by patrons." },
    { id: "un-momento", term: "Un momento, por favor", translation: "One moment, please", category: "expressions", example: "Un momento, por favor, enseguida le atiendo.", note: "Polite phrase used when preparing orders or checking tables." },
    { id: "aqui-tiene", term: "Aquí tiene", translation: "Here you are", category: "expressions", example: "Aquí tiene su café recién hecho.", note: "The standard phrase spoken when handing food to a guest." },
    { id: "algo-mas", term: "¿Algo más?", translation: "Anything else?", category: "expressions", example: "¿Desea algo más de comer?", note: "Helpful inquiry after taking an initial order." },
    { id: "la-cuenta", term: "La cuenta, por favor", translation: "The bill / check, please", category: "expressions", example: "Camarero, la cuenta cuando pueda, por favor.", note: "Standard request when finishing your visit." },
    { id: "delicioso", term: "Está delicioso", translation: "It is delicious", category: "expressions", example: "¡Esta tortilla está deliciosa!", note: "Compliment given to the cook or barista." },
    { id: "lo-siento", term: "Lo siento", translation: "I am sorry", category: "expressions", example: "Lo siento por la espera, aquí está su pedido.", note: "Used to apologize politely." },
    { id: "muy-bien", term: "Muy bien", translation: "Very good / Great", category: "expressions", example: "Muy bien, enseguida se lo preparo.", note: "Confirms understanding of an instruction or order." },
    { id: "que-rico", term: "¡Qué rico!", translation: "How delicious! / So tasty!", category: "expressions", example: "¡Qué rico está este zumo!", note: "Spontaneous enthusiastic exclamation of enjoyment." },
    { id: "tengo-prisa", term: "Tengo prisa", translation: "I am in a hurry", category: "expressions", example: "Tengo prisa, ¿puede ser para llevar?", note: "Commonly said by busy workers during morning rush hour." },
    { id: "tengo-hambre", term: "Tengo hambre", translation: "I am hungry", category: "expressions", example: "¡Tengo mucha hambre esta mañana!", note: "In Spanish, one says 'to have hunger' (tener hambre)." },
    { id: "tengo-sed", term: "Tengo sed", translation: "I am thirsty", category: "expressions", example: "Hace calor y tengo mucha sed.", note: "In Spanish, one says 'to have thirst' (tener sed)." },
    { id: "sobremesa", term: "La sobremesa", translation: "After-meal conversation", category: "expressions", example: "La sobremesa en Madrid puede durar horas.", note: "The cherished Spanish custom of leisurely conversation around the table after eating." }
  ],

  menuItems: [
    {
      id: "cafe-con-leche",
      name: "Café con leche",
      category: "bebidas",
      price: 15,
      description: "Café espresso suave con leche cremosa vaporizada.",
      enDescription: "Smooth espresso with creamy steamed milk.",
      craftSteps: [
        { label: "1. Extraer espresso puro", enLabel: "Brew espresso shot", icon: "☕", sound: "steam", clue: "Extraer café negro en la taza de cerámica" },
        { label: "2. Verter leche cremosa al vapor", enLabel: "Pour steamed milk", icon: "🥛", sound: "liquid", clue: "Verter leche caliente espumada hasta arriba" },
        { label: "3. Espolvorear canela / azúcar", enLabel: "Dust cinnamon / sugar", icon: "✨", sound: "sprinkle", clue: "Espolvorear canela aromática en la espuma" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Café con leche">
          <ellipse cx="40" cy="72" rx="26" ry="6" fill="#D3BEAA" opacity="0.6"/>
          <path d="M22 36 L26 66 Q27 70 34 70 L46 70 Q53 70 54 66 L58 36 Z" fill="#FBF8F5" stroke="#54382B" stroke-width="2.5"/>
          <path d="M58 42 C66 42 67 56 56 58" fill="none" stroke="#54382B" stroke-width="3" stroke-linecap="round"/>
          <ellipse cx="40" cy="36" rx="18" ry="6" fill="#8F5B34"/>
          <ellipse cx="40" cy="36" rx="15" ry="4" fill="#C99B72"/>
          <path d="M38 34 C41 33 42 37 40 38 C37 38 36 34 38 34" fill="#FFF4E6"/>
          <path d="M36 28 Q33 22 37 16" fill="none" stroke="#DFA5A0" stroke-width="2" stroke-linecap="round" class="steam-anim-1"/>
          <path d="M44 26 Q47 20 43 14" fill="none" stroke="#DFA5A0" stroke-width="2" stroke-linecap="round" class="steam-anim-2"/>
        </svg>
      `
    },
    {
      id: "cafe-solo",
      name: "Café solo",
      category: "bebidas",
      price: 12,
      description: "Un shot concentrado de café negro con crema dorada.",
      enDescription: "Concentrated shot of pure espresso with rich crema.",
      craftSteps: [
        { label: "1. Extraer espresso doble", enLabel: "Pull double espresso", icon: "☕", sound: "steam", clue: "Cargar espresso oscuro y denso en la tacita de barro" },
        { label: "2. Pizca de azúcar en la crema", enLabel: "Touch of sugar", icon: "✨", sound: "sprinkle", clue: "Espolvorear azúcar para coronar la crema dorada" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Café solo">
          <ellipse cx="40" cy="70" rx="22" ry="5" fill="#D3BEAA" opacity="0.6"/>
          <path d="M25 46 L28 64 Q29 68 35 68 L45 68 Q51 68 52 64 L55 46 Z" fill="#C96B4B" stroke="#54382B" stroke-width="2.5"/>
          <path d="M54 50 C61 50 62 60 53 62" fill="none" stroke="#54382B" stroke-width="2.8" stroke-linecap="round"/>
          <ellipse cx="40" cy="46" rx="15" ry="5" fill="#3D271D"/>
          <ellipse cx="40" cy="46" rx="12" ry="3.5" fill="#6A381F"/>
          <path d="M40 38 Q37 32 40 26" fill="none" stroke="#DFA5A0" stroke-width="2" stroke-linecap="round" class="steam-anim-1"/>
        </svg>
      `
    },
    {
      id: "churros",
      name: "Churros",
      category: "comida",
      price: 16,
      description: "Tres churros dorados tradicionales con taza de chocolate.",
      enDescription: "Three crisp artisan churros with dipping chocolate.",
      craftSteps: [
        { label: "1. Servir churros dorados", enLabel: "Plate crispy churros", icon: "🥖", sound: "crisp", clue: "Colocar tres churros crujientes en el plato" },
        { label: "2. Verter chocolate espeso", enLabel: "Pour thick hot chocolate", icon: "🍫", sound: "liquid", clue: "Llenar la tacita con chocolate caliente para mojar" },
        { label: "3. Espolvorear azúcar y canela", enLabel: "Sprinkle cinnamon sugar", icon: "✨", sound: "sprinkle", clue: "Agitar el espolvoreador de azúcar y canela sobre los churros" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Churros">
          <ellipse cx="40" cy="72" rx="32" ry="7" fill="#D3BEAA" opacity="0.6"/>
          <ellipse cx="40" cy="63" rx="32" ry="8" fill="#FFF4E6" stroke="#54382B" stroke-width="2"/>
          <ellipse cx="56" cy="55" rx="10" ry="4" fill="#3D1E0B"/>
          <path d="M46 55 L48 64 Q49 67 56 67 Q63 67 64 64 L66 55 Z" fill="#54382B"/>
          <path d="M16 62 Q30 38 48 48" stroke="#D98A2C" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M16 62 Q30 38 48 48" stroke="#F4D58D" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" fill="none"/>
          <path d="M22 65 Q36 42 52 52" stroke="#B86C20" stroke-width="6" stroke-linecap="round" fill="none"/>
          <path d="M22 65 Q36 42 52 52" stroke="#F4D58D" stroke-width="2" stroke-linecap="round" stroke-dasharray="2 3" fill="none"/>
        </svg>
      `
    },
    {
      id: "croissant",
      name: "Croissant",
      category: "comida",
      price: 14,
      description: "Hojaldre dorado, crujiente y horneado con mantequilla.",
      enDescription: "Golden, buttery, flaky artisan croissant.",
      craftSteps: [
        { label: "1. Colocar en la rejilla", enLabel: "Place on oven rack", icon: "🥐", sound: "crisp", clue: "Poner el hojaldre en la bandeja del calentador" },
        { label: "2. Calentar en el horno", enLabel: "Warm in oven", icon: "🔥", sound: "oven", clue: "Calentar unos segundos hasta que esté crujiente y humeante" },
        { label: "3. Toque de mantequilla dorada", enLabel: "Brush with golden butter", icon: "🧈", sound: "spread", clue: "Pincelar un toque de mantequilla brillante" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Croissant">
          <ellipse cx="40" cy="70" rx="30" ry="7" fill="#D3BEAA" opacity="0.6"/>
          <ellipse cx="40" cy="62" rx="32" ry="9" fill="#FFF4E6" stroke="#54382B" stroke-width="2"/>
          <path d="M18 58 Q40 36 62 58 Q52 46 40 45 Q28 46 18 58 Z" fill="#E5983B" stroke="#54382B" stroke-width="2"/>
          <path d="M26 53 Q40 40 54 53 Q47 45 40 45 Q33 45 26 53 Z" fill="#F4D58D"/>
          <path d="M34 46 Q35 52 32 55" stroke="#B86C20" stroke-width="1.8" fill="none"/>
          <path d="M40 44 Q40 51 40 55" stroke="#B86C20" stroke-width="1.8" fill="none"/>
          <path d="M46 46 Q45 52 48 55" stroke="#B86C20" stroke-width="1.8" fill="none"/>
        </svg>
      `
    },
    {
      id: "tostada",
      name: "Tostada con tomate",
      category: "comida",
      price: 14,
      description: "Pan de pueblo tostado con pulpa de tomate fresco y aceite.",
      enDescription: "Rustic toasted bread with fresh grated tomato and olive oil.",
      craftSteps: [
        { label: "1. Tostar pan rústico", enLabel: "Toast rustic bread", icon: "🍞", sound: "oven", clue: "Tostar la rebanada de pan de pueblo al punto crujiente" },
        { label: "2. Untar tomate fresco rallado", enLabel: "Spread grated tomato", icon: "🍅", sound: "spread", clue: "Untar la pulpa de tomate maduro sobre la miga caliente" },
        { label: "3. Chorro de aceite de oliva", enLabel: "Drizzle virgin olive oil", icon: "🫒", sound: "spread", clue: "Verter un generoso chorro de aceite de oliva virgen extra" },
        { label: "4. Pizca de sal marina", enLabel: "Pinch of sea salt", icon: "🧂", sound: "sprinkle", clue: "Espolvorear granos de sal marina" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Tostada con tomate">
          <ellipse cx="40" cy="72" rx="32" ry="6" fill="#D3BEAA" opacity="0.6"/>
          <ellipse cx="40" cy="64" rx="30" ry="8" fill="#FFF4E6" stroke="#54382B" stroke-width="2"/>
          <path d="M20 58 Q22 46 36 44 Q56 42 62 54 Q56 64 36 64 Q22 64 20 58 Z" fill="#C98642" stroke="#54382B" stroke-width="2"/>
          <path d="M23 57 Q24 48 37 46 Q54 44 59 53 Q53 61 37 61 Q25 61 23 57 Z" fill="#F4D58D"/>
          <path d="M26 56 Q32 49 42 50 Q52 48 55 54 Q48 59 36 59 Q28 59 26 56 Z" fill="#C94B3C"/>
          <circle cx="35" cy="53" r="1.5" fill="#A7B99E"/>
          <circle cx="44" cy="54" r="1.5" fill="#FFE49E"/>
        </svg>
      `
    },
    {
      id: "bocadillo",
      name: "Bocadillo",
      category: "comida",
      price: 18,
      description: "Bocadillo de pan rústico con lonchas de jamón ibérico.",
      enDescription: "Crusty baguette sandwich filled with savory Spanish jamón.",
      craftSteps: [
        { label: "1. Cortar pan de barra", enLabel: "Slice crusty baguette", icon: "🥖", sound: "crisp", clue: "Cortar el pan crujiente por la mitad" },
        { label: "2. Gotas de aceite de oliva", enLabel: "Drizzle olive oil", icon: "🫒", sound: "spread", clue: "Rociar aceite sobre la miga tierna" },
        { label: "3. Colocar lonchas de jamón ibérico", enLabel: "Layer Iberian ham slices", icon: "🥓", sound: "crisp", clue: "Rellenar con jamón curado español" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Bocadillo">
          <ellipse cx="40" cy="72" rx="32" ry="6" fill="#D3BEAA" opacity="0.6"/>
          <ellipse cx="40" cy="64" rx="32" ry="8" fill="#FFF4E6" stroke="#54382B" stroke-width="2"/>
          <ellipse cx="40" cy="57" rx="26" ry="6" fill="#C4823F" stroke="#54382B" stroke-width="2"/>
          <path d="M18 55 Q28 52 40 54 Q52 52 62 55" stroke="#C94B5E" stroke-width="5" stroke-linecap="round"/>
          <path d="M22 55 Q34 53 46 55" stroke="#FFF4E6" stroke-width="1.5" stroke-dasharray="3 3"/>
          <path d="M16 52 Q40 36 64 52 Q40 50 16 52 Z" fill="#E09B4F" stroke="#54382B" stroke-width="2"/>
          <path d="M26 44 L32 47 M38 42 L44 45 M50 43 L54 46" stroke="#8F511C" stroke-width="2" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "tortilla-espanola",
      name: "Tortilla española",
      category: "comida",
      price: 18,
      description: "Porción de jugosa tortilla casera de patatas y cebolla.",
      enDescription: "Generous slice of classic Spanish potato and egg omelette.",
      craftSteps: [
        { label: "1. Cortar pincho de tortilla", enLabel: "Slice tortilla wedge", icon: "🍳", sound: "crisp", clue: "Cortar un triángulo jugoso de patatas y huevo cuajado" },
        { label: "2. Servir con pan crujiente", enLabel: "Add crusty bread side", icon: "🥖", sound: "crisp", clue: "Añadir una rebanada de pan fresco al plato" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Tortilla española">
          <ellipse cx="40" cy="72" rx="32" ry="7" fill="#D3BEAA" opacity="0.6"/>
          <ellipse cx="40" cy="64" rx="30" ry="8" fill="#FFF4E6" stroke="#54382B" stroke-width="2"/>
          <path d="M24 62 L40 38 L60 56 Q42 66 24 62 Z" fill="#E8A938" stroke="#54382B" stroke-width="2.5"/>
          <path d="M24 62 L40 48 L60 56 Q42 66 24 62 Z" fill="#F4D58D"/>
          <ellipse cx="38" cy="54" rx="4" ry="2.5" fill="#FFEBB3" transform="rotate(-15 38 54)"/>
          <ellipse cx="48" cy="56" rx="4" ry="2.2" fill="#FFEBB3" transform="rotate(20 48 56)"/>
          <circle cx="34" cy="58" r="1.5" fill="#C96B4B"/>
        </svg>
      `
    },
    {
      id: "zumo-naranja",
      name: "Zumo de naranja",
      category: "bebidas",
      price: 15,
      description: "Zumo natural recién exprimido de naranjas valencianas.",
      enDescription: "Freshly squeezed sweet Spanish orange juice.",
      craftSteps: [
        { label: "1. Exprimir naranjas dulces", enLabel: "Squeeze sweet oranges", icon: "🍊", sound: "citrus", clue: "Exprimir naranjas en el cono exprimidor" },
        { label: "2. Añadir hielos y pajita", enLabel: "Add ice & straw", icon: "🧊", sound: "ice", clue: "Poner cubitos de hielo y una rodaja decorativa" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Zumo de naranja">
          <ellipse cx="40" cy="73" rx="18" ry="5" fill="#D3BEAA" opacity="0.6"/>
          <path d="M28 28 L32 68 Q33 71 40 71 Q47 71 48 68 L52 28 Z" fill="#FFB238" stroke="#54382B" stroke-width="2.5"/>
          <path d="M30 36 L33 66 Q34 68 40 68 Q46 68 47 66 L50 36 Z" fill="#F38D00" opacity="0.85"/>
          <circle cx="32" cy="28" r="9" fill="#FFA500" stroke="#54382B" stroke-width="1.5"/>
          <circle cx="32" cy="28" r="7" fill="#FFC857"/>
          <path d="M32 21 L32 35 M25 28 L39 28" stroke="#FFA500" stroke-width="1.2"/>
          <line x1="43" y1="14" x2="38" y2="55" stroke="#A7B99E" stroke-width="3.5" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "te",
      name: "Té",
      category: "bebidas",
      price: 12,
      description: "Infusión aromática en vaso de cristal con saquito.",
      enDescription: "Aromatic herbal or black tea in glass with tag.",
      craftSteps: [
        { label: "1. Verter agua caliente", enLabel: "Pour hot water", icon: "🫖", sound: "liquid", clue: "Llenar el vaso de cristal con agua hirviendo" },
        { label: "2. Sumergir saquito de infusión", enLabel: "Dip tea bag tag", icon: "🌿", sound: "spread", clue: "Sumergir el té aromático hasta infusionar" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Té">
          <ellipse cx="40" cy="71" rx="22" ry="5" fill="#D3BEAA" opacity="0.6"/>
          <rect x="26" y="38" width="28" height="30" rx="4" fill="#F4E9DC" opacity="0.8" stroke="#54382B" stroke-width="2.5"/>
          <path d="M28 44 L28 65 Q28 66 32 66 L48 66 Q52 66 52 65 L52 44 Z" fill="#D87D4A" opacity="0.75"/>
          <path d="M54 44 C62 44 63 56 54 58" fill="none" stroke="#54382B" stroke-width="2.8"/>
          <path d="M38 42 Q32 36 28 50" fill="none" stroke="#A7B99E" stroke-width="1.8"/>
          <rect x="24" y="50" width="7" height="9" rx="1" fill="#C96B4B"/>
          <path d="M42 32 Q40 24 44 18" fill="none" stroke="#A7B99E" stroke-width="2" stroke-linecap="round" class="steam-anim-2"/>
        </svg>
      `
    },
    {
      id: "agua",
      name: "Agua",
      category: "bebidas",
      price: 10,
      description: "Vaso de agua mineral pura y refrescante.",
      enDescription: "Refreshing glass of pure mineral water.",
      craftSteps: [
        { label: "1. Colocar cubos de hielo", enLabel: "Add fresh ice", icon: "🧊", sound: "ice", clue: "Poner cubitos de hielo en el vaso" },
        { label: "2. Verter agua mineral", enLabel: "Pour spring water", icon: "💧", sound: "liquid", clue: "Llenar con agua pura y fresca" }
      ],
      svg: `
        <svg viewBox="0 0 80 80" class="item-svg" role="img" aria-label="Agua">
          <ellipse cx="40" cy="73" rx="18" ry="5" fill="#D3BEAA" opacity="0.6"/>
          <path d="M29 32 L33 68 Q34 71 40 71 Q46 71 47 68 L51 32 Z" fill="#E2F3F5" stroke="#54382B" stroke-width="2.5"/>
          <path d="M31 42 L34 66 Q35 68 40 68 Q45 68 46 66 L49 42 Z" fill="#88D4E4" opacity="0.6"/>
          <rect x="35" y="46" width="7" height="7" rx="1" fill="#FFFFFF" opacity="0.75" transform="rotate(12 38 49)"/>
          <rect x="38" y="55" width="6" height="6" rx="1" fill="#FFFFFF" opacity="0.75" transform="rotate(-8 41 58)"/>
        </svg>
      `
    }
  ],

  customers: [
    {
      id: "lucia",
      name: "Lucía",
      title: "Estudiante de Bellas Artes",
      enTitle: "Fine Arts Student",
      patienceSpeed: 1.0,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M20 90 Q40 76 60 90 Z" fill="#C96B4B"/>
          <rect x="34" y="62" width="12" height="12" fill="#E8C39E"/>
          <circle cx="40" cy="46" r="18" fill="#FCE5CE"/>
          <path d="M22 45 Q20 28 40 28 Q60 28 58 45 Q52 32 40 32 Q28 32 22 45 Z" fill="#4A2E1B"/>
          <path d="M20 45 Q20 62 25 62 Q26 48 24 45" fill="#4A2E1B"/>
          <path d="M60 45 Q60 62 55 62 Q54 48 56 45" fill="#4A2E1B"/>
          <ellipse cx="44" cy="28" rx="19" ry="8" fill="#54382B" transform="rotate(-12 44 28)"/>
          <circle cx="48" cy="19" r="2.5" fill="#54382B"/>
          <circle cx="34" cy="46" r="2.2" fill="#332218"/>
          <circle cx="46" cy="46" r="2.2" fill="#332218"/>
          <path d="M37 54 Q40 57 43 54" stroke="#54382B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
          <circle cx="31" cy="51" r="3" fill="#DFA5A0" opacity="0.6"/>
          <circle cx="49" cy="51" r="3" fill="#DFA5A0" opacity="0.6"/>
        </svg>
      `
    },
    {
      id: "mateo",
      name: "Mateo",
      title: "Arquitecto apurado",
      enTitle: "Hurried Architect",
      patienceSpeed: 1.25,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M18 90 Q40 74 62 90 Z" fill="#3D4F59"/>
          <path d="M30 72 Q40 80 50 72 L47 88 L33 88 Z" fill="#C96B4B"/>
          <rect x="34" y="60" width="12" height="12" fill="#E0BC99"/>
          <circle cx="40" cy="44" r="18" fill="#F5D0B5"/>
          <path d="M22 40 Q22 24 40 24 Q58 24 58 40 Q50 30 40 30 Q28 30 22 40 Z" fill="#242124"/>
          <rect x="29" y="40" width="9" height="7" rx="2" fill="none" stroke="#242124" stroke-width="1.8"/>
          <rect x="42" y="40" width="9" height="7" rx="2" fill="none" stroke="#242124" stroke-width="1.8"/>
          <line x1="38" y1="43" x2="42" y2="43" stroke="#242124" stroke-width="1.8"/>
          <circle cx="33.5" cy="43.5" r="1.5" fill="#242124"/>
          <circle cx="46.5" cy="43.5" r="1.5" fill="#242124"/>
          <path d="M36 53 Q40 56 44 53" stroke="#54382B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "carmen",
      name: "Doña Carmen",
      title: "Abuela del barrio",
      enTitle: "Neighborhood Grandmother",
      patienceSpeed: 0.85,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M16 90 Q40 76 64 90 Z" fill="#7A4B63"/>
          <rect x="34" y="62" width="12" height="12" fill="#E8C39E"/>
          <circle cx="40" cy="46" r="18" fill="#F8DFCB"/>
          <circle cx="40" cy="24" r="8" fill="#D3D3D8"/>
          <path d="M22 44 Q22 28 40 28 Q58 28 58 44 Q52 32 40 32 Q28 32 22 44 Z" fill="#D3D3D8"/>
          <ellipse cx="40" cy="74" rx="10" ry="4" fill="none" stroke="#FFF" stroke-width="2.5" stroke-dasharray="3 3"/>
          <path d="M32 46 Q35 44 37 46" stroke="#4A2E1B" stroke-width="1.8" fill="none"/>
          <path d="M43 46 Q45 44 48 46" stroke="#4A2E1B" stroke-width="1.8" fill="none"/>
          <path d="M36 55 Q40 59 44 55" stroke="#4A2E1B" stroke-width="2" fill="none" stroke-linecap="round"/>
          <circle cx="30" cy="52" r="3.5" fill="#DFA5A0" opacity="0.6"/>
          <circle cx="50" cy="52" r="3.5" fill="#DFA5A0" opacity="0.6"/>
        </svg>
      `
    },
    {
      id: "alejandro",
      name: "Alejandro",
      title: "Profesor de literatura",
      enTitle: "Literature Professor",
      patienceSpeed: 1.0,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M18 90 Q40 76 62 90 Z" fill="#6A5244"/>
          <polygon points="40,74 35,90 45,90" fill="#FFF4E6"/>
          <rect x="34" y="60" width="12" height="12" fill="#E2BD9C"/>
          <circle cx="40" cy="44" r="18" fill="#F8DEC7"/>
          <path d="M22 38 Q24 22 40 22 Q56 22 58 38 Q50 28 40 28 Q28 28 22 38 Z" fill="#755B4B"/>
          <path d="M34 52 Q40 48 46 52 Q40 55 34 52" fill="#755B4B"/>
          <circle cx="33" cy="42" r="6" fill="none" stroke="#8F6E40" stroke-width="1.6"/>
          <circle cx="47" cy="42" r="6" fill="none" stroke="#8F6E40" stroke-width="1.6"/>
          <line x1="39" y1="42" x2="41" y2="42" stroke="#8F6E40" stroke-width="1.6"/>
          <circle cx="33" cy="42" r="1.5" fill="#3D271D"/>
          <circle cx="47" cy="42" r="1.5" fill="#3D271D"/>
        </svg>
      `
    },
    {
      id: "sofia",
      name: "Sofía",
      title: "Viajera curiosa",
      enTitle: "Curious Traveler",
      patienceSpeed: 1.1,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M20 90 Q40 76 60 90 Z" fill="#F4E9DC"/>
          <line x1="24" y1="82" x2="56" y2="82" stroke="#2C3E50" stroke-width="2.5"/>
          <line x1="22" y1="88" x2="58" y2="88" stroke="#2C3E50" stroke-width="2.5"/>
          <rect x="34" y="62" width="12" height="12" fill="#E8C39E"/>
          <circle cx="40" cy="46" r="18" fill="#FCE5CE"/>
          <circle cx="58" cy="34" r="8" fill="#F4D58D"/>
          <path d="M22 44 Q22 26 40 26 Q58 26 58 44 Q50 32 40 32 Q28 32 22 44 Z" fill="#F4D58D"/>
          <circle cx="54" cy="32" r="3" fill="#C94B3C"/>
          <circle cx="34" cy="45" r="2.2" fill="#2C3E50"/>
          <circle cx="46" cy="45" r="2.2" fill="#2C3E50"/>
          <path d="M36 53 Q40 58 44 53" stroke="#54382B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "diego",
      name: "Diego",
      title: "Músico de flamenco",
      enTitle: "Flamenco Musician",
      patienceSpeed: 0.95,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M18 90 Q40 76 62 90 Z" fill="#1C1A1C"/>
          <line x1="20" y1="88" x2="58" y2="76" stroke="#C96B4B" stroke-width="4"/>
          <rect x="34" y="60" width="12" height="12" fill="#D6A57E"/>
          <circle cx="40" cy="44" r="18" fill="#ECC39E"/>
          <path d="M20 40 Q20 22 40 22 Q60 22 60 40 Q62 58 56 60 Q56 32 40 30 Q24 32 24 60 Q18 58 20 40 Z" fill="#1C1A1C"/>
          <path d="M30 38 Q34 36 38 39" stroke="#1C1A1C" stroke-width="1.8" fill="none"/>
          <path d="M42 39 Q46 36 50 38" stroke="#1C1A1C" stroke-width="1.8" fill="none"/>
          <circle cx="34" cy="43" r="2.2" fill="#1C1A1C"/>
          <circle cx="46" cy="43" r="2.2" fill="#1C1A1C"/>
          <path d="M36 54 Q40 57 44 54" stroke="#54382B" stroke-width="1.8" fill="none" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "elena",
      name: "Elena",
      title: "Vecina deportista",
      enTitle: "Active Neighbor",
      patienceSpeed: 1.15,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M18 90 Q40 76 62 90 Z" fill="#476C55"/>
          <line x1="40" y1="76" x2="40" y2="90" stroke="#FFF" stroke-width="2"/>
          <rect x="34" y="60" width="12" height="12" fill="#E2BD9C"/>
          <circle cx="40" cy="44" r="18" fill="#FCE5CE"/>
          <circle cx="40" cy="22" r="7" fill="#8B4513"/>
          <rect x="23" y="32" width="34" height="5" rx="2" fill="#F4D58D"/>
          <path d="M22 42 Q22 28 40 28 Q58 28 58 42 Q50 32 40 32 Q28 32 22 42 Z" fill="#8B4513"/>
          <circle cx="34" cy="44" r="2" fill="#2E4A35"/>
          <circle cx="46" cy="44" r="2" fill="#2E4A35"/>
          <path d="M35 52 Q40 57 45 52" stroke="#54382B" stroke-width="2" fill="none" stroke-linecap="round"/>
        </svg>
      `
    },
    {
      id: "pablo",
      name: "Pablo",
      title: "Librero del barrio",
      enTitle: "Neighborhood Bookseller",
      patienceSpeed: 0.9,
      avatarSvg: `
        <svg viewBox="0 0 80 90" class="customer-avatar-svg">
          <path d="M18 90 Q40 76 62 90 Z" fill="#85533A"/>
          <polygon points="40,75 35,90 45,90" fill="#E8D5B7"/>
          <rect x="34" y="60" width="12" height="12" fill="#ECC39E"/>
          <circle cx="40" cy="44" r="18" fill="#F8DEC7"/>
          <path d="M22 38 Q24 22 40 22 Q58 24 58 38 Q50 28 40 28 Q28 28 22 38 Z" fill="#696969"/>
          <path d="M28 48 Q28 58 40 60 Q52 58 52 48" fill="none" stroke="#696969" stroke-width="3" stroke-linecap="round"/>
          <circle cx="34" cy="42" r="2" fill="#332218"/>
          <circle cx="46" cy="42" r="2" fill="#332218"/>
          <path d="M37 52 Q40 54 43 52" stroke="#54382B" stroke-width="1.8" fill="none"/>
        </svg>
      `
    }
  ],

  levels: [
    {
      levelNumber: 1,
      title: "Día 1: Mañana en Malasaña",
      enTitle: "Day 1: Morning in Malasaña",
      customersNeeded: 4,
      patienceSeconds: 36,
      bonusMultiplier: 1.0,
      newspaperHeadline: "¡UN NUEVO CAFÉ LLENA DE AROMA A MALASAÑA!",
      newspaperStory: "Los vecinos del barrio elogian la llegada de este encantador café. El barista ha demostrado un gran oído para los pedidos matinales.",
      newspaperStoryEn: "Locals praise the opening of this charming café. The barista showed a great ear for morning orders."
    },
    {
      levelNumber: 2,
      title: "Día 2: Tarde en la Plaza Mayor",
      enTitle: "Day 2: Afternoon in Plaza Mayor",
      customersNeeded: 5,
      patienceSeconds: 32,
      bonusMultiplier: 1.3,
      newspaperHeadline: "¡EL CAFÉ ESPAÑOL REVOLUCIONA LA HORA DE LA MERIENDA!",
      newspaperStory: "Desde churros crujientes con chocolate hasta zumos recién exprimidos, la clientela disfruta de pedidos combinados y charlas amenas.",
      newspaperStoryEn: "From crispy churros with chocolate to fresh orange juice, guests enjoy combos and lively chats."
    },
    {
      levelNumber: 3,
      title: "Día 3: La Gran Terraza de Madrid",
      enTitle: "Day 3: The Grand Terrace of Madrid",
      customersNeeded: 6,
      patienceSeconds: 28,
      bonusMultiplier: 1.6,
      newspaperHeadline: "¡ÉXITO TOTAL: EL CAFÉ MÁS QUERIDO DE LA CAPITAL!",
      newspaperStory: "La terraza rebosa de vida, arte y sabor. Turistas y madrileños coinciden: ¡este es el rincón más acogedor y hospitalario de España!",
      newspaperStoryEn: "The terrace overflows with life, art, and flavor. Tourists and locals agree: this is the coziest corner in Spain!"
    }
  ],

  orderPool: [
    {
      levelMin: 1,
      levelMax: 1,
      items: ["cafe-con-leche"],
      spanish: "¡Hola! Para empezar bien el día necesito mitad café espresso y mitad leche templada.",
      queDialogue: "¡Me refiero a un «café con leche», por favor! Solo eso en la bandeja.",
      english: "Hello! To start the day right I need half espresso and half warm milk. (Café con leche)",
      ticketSummary: "1x Café con leche",
      praise: "¡Ahhh, qué espuma tan suave y cremosa! Justo lo que necesitaba.",
      praiseEn: "Ahhh, such smooth and creamy foam! Exactly what I needed."
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["cafe-solo"],
      spanish: "Buenos días. Necesito despertar rápido: un shot oscuro y concentrado sin nada de leche.",
      queDialogue: "Quiero un «café solo», bien negro y potente.",
      english: "Good morning. I need to wake up fast: a dark, concentrated shot with no milk. (Café solo)",
      ticketSummary: "1x Café solo",
      praise: "¡Qué maravilla de café! Pura energía madrileña.",
      praiseEn: "What a marvelous coffee! Pure Madrid energy."
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["churros"],
      spanish: "¡Hola! Tengo antojo de esa masa dorada estriada que se moja en chocolate caliente.",
      queDialogue: "¡Unos «churros» crujientes, por favor! Los que vienen con su tacita de chocolate.",
      english: "Hello! I'm craving that golden ribbed pastry you dip into hot chocolate. (Churros)",
      ticketSummary: "1x Churros",
      praise: "¡Mmm, qué crujientes y dorados! ¡Están para chuparse los dedos!",
      praiseEn: "Mmm, so crispy and golden! Finger-licking good!"
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["croissant"],
      spanish: "Por favor, quisiera un hojaldre francés en forma de media luna horneado con mantequilla.",
      queDialogue: "Quiero un «croissant» calentito y crujiente.",
      english: "Please, I'd like a French crescent puff pastry baked with butter. (Croissant)",
      ticketSummary: "1x Croissant",
      praise: "¡Hojaldre perfecto! Se deshace en la boca.",
      praiseEn: "Perfect puff pastry! It melts in your mouth."
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["zumo-naranja"],
      spanish: "¡Hola! Algo fresco y lleno de vitamina C... recién exprimido de la huerta mediterránea.",
      queDialogue: "¡Un «zumo de naranja» natural, por favor!",
      english: "Hello! Something fresh and full of Vitamin C... freshly squeezed from the orchard. (Zumo de naranja)",
      ticketSummary: "1x Zumo de naranja",
      praise: "¡Súper dulce y natural! Naranjas de primera.",
      praiseEn: "Super sweet and natural! First-class oranges."
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["tortilla-espanola"],
      spanish: "¿Qué desea? Quisiera ese pincho dorado con patatas pochadas y huevo tierno que hace famoso a este país.",
      queDialogue: "¡Una porción de «tortilla española», por favor!",
      english: "What would you like? I'd like that golden slice with tender potatoes and egg that made this country famous. (Tortilla española)",
      ticketSummary: "1x Tortilla española",
      praise: "¡Jugosa en el punto exacto! ¡Qué mano tienes en la cocina!",
      praiseEn: "Juicy to the exact point! What culinary skill you have!"
    },
    {
      levelMin: 1,
      levelMax: 1,
      items: ["tostada"],
      spanish: "Buenos días. Quisiera el clásico desayuno: pan rústico con pulpa de tomate y buen aceite de oliva.",
      queDialogue: "Puse en la comanda una «tostada con tomate».",
      english: "Good morning. I would like the classic breakfast: rustic bread with tomato pulp and good olive oil. (Tostada con tomate)",
      ticketSummary: "1x Tostada con tomate",
      praise: "¡El auténtico sabor de España en una rebanada de pan!",
      praiseEn: "The authentic taste of Spain on a slice of bread!"
    },

    {
      levelMin: 2,
      levelMax: 3,
      items: ["cafe-con-leche", "churros"],
      spanish: "¡Hola! Quisiera la merienda española más famosa: algo caliente con leche y churros con chocolate.",
      queDialogue: "Quiero una taza de «café con leche» y una ración de «churros». ¡Ambos en la bandeja!",
      english: "Hello! I'd like Spain's most famous afternoon snack: a hot coffee with milk and churros with chocolate.",
      ticketSummary: "1x Café con leche + 1x Churros",
      praise: "¡La merienda de mis sueños! ¡Eres el mejor barista de Madrid!",
      praiseEn: "The snack of my dreams! You're the best barista in Madrid!"
    },
    {
      levelMin: 2,
      levelMax: 3,
      items: ["cafe-solo", "croissant"],
      spanish: "Buenas tardes. Busco un golpe de cafeína pura y un dulce de hojaldre para acompañar mi libro.",
      queDialogue: "Un «café solo» bien fuerte y un «croissant» de mantequilla.",
      english: "Good afternoon. I need a hit of pure caffeine and a buttery pastry to accompany my book.",
      ticketSummary: "1x Café solo + 1x Croissant",
      praise: "¡Combinación literaria insuperable! Muchas gracias.",
      praiseEn: "Insurmountable literary combo! Thank you very much."
    },
    {
      levelMin: 2,
      levelMax: 3,
      items: ["zumo-naranja", "tostada"],
      spanish: "¡Buenos días! Para llenarme de energía: fruta exprimida y pan crujiente con tomate y aceite.",
      queDialogue: "Sírvame un «zumo de naranja» y una «tostada con tomate».",
      english: "Good morning! For a boost of energy: squeezed fruit and crusty bread with tomato and oil.",
      ticketSummary: "1x Zumo de naranja + 1x Tostada",
      praise: "¡Desayuno mediterráneo impecable! Me alegra el día.",
      praiseEn: "Impeccable Mediterranean breakfast! Made my day."
    },
    {
      levelMin: 2,
      levelMax: 3,
      items: ["bocadillo", "agua"],
      spanish: "¡Tengo mucha hambre y sed! Tráigame pan de barra con jamón serrano y un vaso de agua mineral.",
      queDialogue: "Un «bocadillo» crujiente y un vaso de «agua». ¡Sin rodeos!",
      english: "I am very hungry and thirsty! Bring me baguette bread with jamón and a glass of mineral water.",
      ticketSummary: "1x Bocadillo + 1x Agua",
      praise: "¡Qué pan tan crujiente y qué jamón tan sabroso!",
      praiseEn: "What crispy bread and such flavorful ham!"
    },
    {
      levelMin: 2,
      levelMax: 3,
      items: ["tortilla-espanola", "cafe-solo"],
      spanish: "Disculpe, una pausa de trabajo: un buen pincho de tortilla de patatas y un café concentrado.",
      queDialogue: "Una «tortilla española» y un «café solo». ¡Rápido que vuelvo a la oficina!",
      english: "Excuse me, a work break: a good slice of potato omelette and an espresso shot.",
      ticketSummary: "1x Tortilla española + 1x Café solo",
      praise: "¡Justo a tiempo para mi reunión! Servicio de 10 estrellas.",
      praiseEn: "Just in time for my meeting! 10-star service."
    },

    {
      levelMin: 3,
      levelMax: 3,
      items: ["cafe-con-leche", "zumo-naranja", "tostada"],
      spanish: "¡Buenos días! Quisiera el desayuno completo de la terraza: café con leche, zumo de naranja y tostada.",
      queDialogue: "Son tres cosas: «café con leche», «zumo de naranja» y «tostada con tomate».",
      english: "Good morning! I'd like the full terrace breakfast: coffee with milk, orange juice, and toast.",
      ticketSummary: "1x Café con leche + 1x Zumo + 1x Tostada",
      praise: "¡El banquete matinal definitivo! No hay mejor terraza en Madrid.",
      praiseEn: "The definitive morning feast! No better terrace in Madrid."
    },
    {
      levelMin: 3,
      levelMax: 3,
      items: ["bocadillo", "tortilla-espanola", "agua"],
      spanish: "¡Buenas tardes! Venimos con mucho apetito: un bocadillo con jamón, una tortilla española y agua fresca.",
      queDialogue: "Marchando una de «bocadillo», una de «tortilla española» y un «agua».",
      english: "Good afternoon! We have a big appetite: a sandwich with jamón, a Spanish omelette, and water.",
      ticketSummary: "1x Bocadillo + 1x Tortilla + 1x Agua",
      praise: "¡Sensacional! Tradición madrileña servida con cariño.",
      praiseEn: "Sensational! Madrid tradition served with warmth."
    },
    {
      levelMin: 3,
      levelMax: 3,
      items: ["te", "croissant", "agua"],
      spanish: "Por favor, una merienda ligera para leer junto a la ventana: una taza de té, un croissant y agua.",
      queDialogue: "Prepara un «té», un «croissant» y un vaso de «agua».",
      english: "Please, a light snack to read by the window: a cup of tea, a croissant, and water.",
      ticketSummary: "1x Té + 1x Croissant + 1x Agua",
      praise: "¡Qué ambiente tan acogedor y qué delicia de merienda!",
      praiseEn: "What a cozy atmosphere and what a delicious snack!"
    }
  ],

  culturalNotes: [
    {
      title: "El Desayuno Tradicional en Madrid",
      enTitle: "Traditional Madrid Breakfast",
      tag: "Costumbres",
      content: "En España, el desayuno suele ser ligero. Muchos madrileños van al bar de su barrio a tomar un café con leche acompañado de una 'tostada con tomate' (pan con pulpa de tomate rallado y aceite de oliva virgen extra) o unos churros recién fritos.",
      enContent: "In Spain, breakfast is often light. Many locals head to their neighborhood café for a 'café con leche' paired with 'tostada con tomate' (rustic bread with grated tomato and extra virgin olive oil) or freshly fried churros."
    },
    {
      title: "¿Bocadillo o Sándwich?",
      enTitle: "Bocadillo vs Sandwich?",
      tag: "Vocabulario Culinario",
      content: "¡No son lo mismo! En España, un 'bocadillo' se elabora siempre con pan de barra tradicional (crujiente por fuera y con miga tierna), mientras que 'sándwich' se reserva exclusivamente para los hechos con pan de molde (pan blanco de rebanadas).",
      enContent: "They are not the same! In Spain, a 'bocadillo' is made using crusty baguette-style bread, while 'sándwich' refers strictly to sandwiches made on sliced white sandwich bread."
    },
    {
      title: "La Sagrada Sobremesa",
      enTitle: "The Sacred 'Sobremesa'",
      tag: "Cultura Social",
      content: "La 'sobremesa' es el tiempo que se pasa charlando relajadamente alrededor de la mesa después de haber terminado de comer o tomar café. En los cafés de Madrid, esta conversación puede durar tanto o más que la propia comida.",
      enContent: "The 'sobremesa' is the leisurely time spent conversing around the table long after finishing the meal or coffee. In Madrid cafés, this conversation can easily outlast the meal itself."
    },
    {
      title: "La Tortilla Española: ¿Con o Sin Cebolla?",
      enTitle: "Spanish Omelette: With or Without Onion?",
      tag: "Gastronomía",
      content: "El debate gastronómico más apasionado de España es si la auténtica tortilla de patatas debe llevar cebolla ('concebollistas') o solo patatas y huevo ('sincebollistas'). Ambos bandos coinciden en que el interior debe quedar tierno y jugoso.",
      enContent: "Spain's most passionate culinary debate is whether authentic tortilla should include onion ('concebollistas') or strictly potatoes and egg ('sincebollistas'). Both camps agree the center should stay tender and juicy."
    },
    {
      title: "Churros y Porras",
      enTitle: "Churros and Porras",
      tag: "Especialidad de Madrid",
      content: "Madrid es famosa por sus churrerías históricas. Además de los churros clásicos finos y estriados, en Madrid se piden a menudo 'porras', que son una versión más gruesa, esponjosa y aireada elaborada con la misma masa.",
      enContent: "Madrid is renowned for its historic churro shops. Alongside the classic thin ribbed churros, patrons often order 'porras'—a thicker, fluffier, and airier cousin made with the same dough."
    },
    {
      title: "El Café en los Bares Españoles",
      enTitle: "Coffee Ordering in Spanish Bars",
      tag: "Lenguaje Cotidiano",
      content: "Al pedir café en España puedes especificar la temperatura de la leche: 'caliente' (hot), 'fría' (cold), o 'templada' (lukewarm). Un 'cortado' tiene solo un chorrito de leche, mientras que un 'café solo' es un espresso puro.",
      enContent: "When ordering coffee in Spain, you can specify milk temperature: 'caliente' (hot), 'fría' (cold), or 'templada' (warm). A 'cortado' has just a dash of milk, while a 'café solo' is pure espresso."
    }
  ]
};

Object.freeze(GAME_DATA);
if (typeof window !== "undefined") {
  window.GAME_DATA = GAME_DATA;
}


// ============================================================================
// PART 2: AUDIO ENGINE (SoundEffects)
// ============================================================================
class SoundEffects {
  constructor() {
    this.ctx = null;
    this.isMuted = localStorage.getItem("cafe_espanol_muted") === "true";
    this.ambientPlaying = false;
    this.ambientTimer = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    localStorage.setItem("cafe_espanol_muted", this.isMuted.toString());
    if (this.isMuted && this.ambientPlaying) {
      this.stopAmbient();
    }
    return this.isMuted;
  }

  playTap() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.05);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.05);
    } catch (e) {}
  }

  playServiceBell() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const overtone = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      overtone.type = "triangle";

      osc.frequency.setValueAtTime(1480, now);
      overtone.frequency.setValueAtTime(2960, now);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.9);

      osc.connect(gain);
      overtone.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      overtone.start(now);
      osc.stop(now + 0.9);
      overtone.stop(now + 0.9);
    } catch (e) {}
  }

  playDoorBell() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        { freq: 1318.5, start: 0, duration: 0.45 },
        { freq: 1661.2, start: 0.12, duration: 0.65 }
      ];

      notes.forEach(({ freq, start, duration }) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = "triangle";
        osc.frequency.setValueAtTime(freq, now + start);

        gain.gain.setValueAtTime(0.12, now + start);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + start + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now + start);
        osc.stop(now + start + duration);
      });
    } catch (e) {}
  }

  playSprinkle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.12;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * (i % 8 === 0 ? 1 : 0.2);
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(4500, now);
      filter.Q.setValueAtTime(2.0, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.15, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.12);
    } catch (e) {}
  }

  playSteamPour() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.28;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "bandpass";
      filter.frequency.setValueAtTime(1100, now);
      filter.Q.setValueAtTime(1.5, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.28);
    } catch (e) {}
  }

  playLiquidPour() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(540, now + 0.22);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }

  playOvenHeat() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(1760, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.setValueAtTime(0.16, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.65);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.65);
    } catch (e) {}
  }

  playCitrusSqueeze() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(120, now + 0.18);

      gain.gain.setValueAtTime(0.14, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.18);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.18);
    } catch (e) {}
  }

  playSpreadOil() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(400, now);
      osc.frequency.linearRampToValueAtTime(250, now + 0.12);

      gain.gain.setValueAtTime(0.09, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.12);
    } catch (e) {}
  }

  playIceClink() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const freqs = [1800, 2200];
      freqs.forEach((f, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + (idx * 0.05);

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, start);

        gain.gain.setValueAtTime(0.08, start);
        gain.gain.exponentialRampToValueAtTime(0.001, start + 0.08);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.08);
      });
    } catch (e) {}
  }

  playCrispPrep() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(110, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.08);
    } catch (e) {}
  }

  playPaperRustle() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const bufferSize = this.ctx.sampleRate * 0.09;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = Math.random() * 2 - 1;
      }

      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = "highpass";
      filter.frequency.setValueAtTime(3000, now);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      noise.connect(filter);
      filter.connect(gain);
      gain.connect(this.ctx.destination);

      noise.start(now);
      noise.stop(now + 0.09);
    } catch (e) {}
  }

  playCoinTip() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        { f: 987.77, t: 0 },
        { f: 1318.51, t: 0.06 },
        { f: 1975.53, t: 0.12 }
      ];

      notes.forEach(({ f, t }) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + t;

        osc.type = "sine";
        osc.frequency.setValueAtTime(f, start);

        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.22);
      });
    } catch (e) {}
  }

  playTrashDiscard() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(140, now);
      osc.frequency.exponentialRampToValueAtTime(60, now + 0.15);

      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.15);
    } catch (e) {}
  }

  playPlateServe() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, now);
      osc.frequency.exponentialRampToValueAtTime(580, now + 0.08);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch (e) {}
  }

  playSuccess() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const freqs = [523.25, 659.25, 783.99, 1046.5];

      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + (idx * 0.07);

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, start);

        gain.gain.setValueAtTime(0.12, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.35);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + 0.35);
      });
    } catch (e) {}
  }

  playError() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(220, now);
      osc.frequency.exponentialRampToValueAtTime(130, now + 0.22);

      gain.gain.setValueAtTime(0.12, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.22);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.22);
    } catch (e) {}
  }

  playLevelUp() {
    if (this.isMuted) return;
    this.init();
    if (!this.ctx) return;

    try {
      const now = this.ctx.currentTime;
      const notes = [
        { f: 523.25, t: 0.00, d: 0.15 },
        { f: 659.25, t: 0.12, d: 0.15 },
        { f: 783.99, t: 0.24, d: 0.15 },
        { f: 1046.50, t: 0.36, d: 0.45 },
        { f: 1318.51, t: 0.48, d: 0.6 }
      ];

      notes.forEach(({ f, t, d }) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + t;

        osc.type = "triangle";
        osc.frequency.setValueAtTime(f, start);

        gain.gain.setValueAtTime(0.14, start);
        gain.gain.exponentialRampToValueAtTime(0.0001, start + d);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(start);
        osc.stop(start + d);
      });
    } catch (e) {}
  }

  startAmbient() {
    if (this.isMuted || this.ambientPlaying) return;
    this.init();
    if (!this.ctx) return;

    this.ambientPlaying = true;
    const chordProgressions = [
      [261.63, 329.63, 392.00],
      [220.00, 261.63, 329.63],
      [174.61, 220.00, 261.63],
      [196.00, 246.94, 293.66]
    ];

    let chordIdx = 0;
    const playChord = () => {
      if (!this.ambientPlaying || this.isMuted) return;
      try {
        const chord = chordProgressions[chordIdx];
        const now = this.ctx.currentTime;

        chord.forEach((note, nIdx) => {
          const osc = this.ctx.createOscillator();
          const gain = this.ctx.createGain();
          const start = now + (nIdx * 0.15);

          osc.type = "sine";
          osc.frequency.setValueAtTime(note, start);

          gain.gain.setValueAtTime(0.016, start);
          gain.gain.exponentialRampToValueAtTime(0.0001, start + 1.8);

          osc.connect(gain);
          gain.connect(this.ctx.destination);

          osc.start(start);
          osc.stop(start + 1.8);
        });

        chordIdx = (chordIdx + 1) % chordProgressions.length;
        this.ambientTimer = setTimeout(playChord, 3200);
      } catch (e) {}
    };

    playChord();
  }

  stopAmbient() {
    this.ambientPlaying = false;
    if (this.ambientTimer) {
      clearTimeout(this.ambientTimer);
      this.ambientTimer = null;
    }
  }
}

const audio = new SoundEffects();
if (typeof window !== "undefined") {
  window.SoundEffects = SoundEffects;
  window.audio = audio;
}


// ============================================================================
// PART 3: VOCABULARY NOTEBOOK & CULTURE REFERENCE
// ============================================================================
class VocabularyNotebook {
  constructor() {
    this.modal = document.getElementById("notebook-modal");
    this.contentContainer = document.getElementById("notebook-vocab-list");
    this.cultureContainer = document.getElementById("notebook-culture-list");
    this.searchBar = document.getElementById("notebook-search");
    this.categoryTabs = document.querySelectorAll(".notebook-tab");
    this.counterEl = document.getElementById("notebook-counter");

    this.activeCategory = "all";
    this.activeTabMode = "vocab";
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
    if (this.searchBar) {
      this.searchBar.addEventListener("input", () => this.render());
    }

    if (this.categoryTabs) {
      this.categoryTabs.forEach(tab => {
        tab.addEventListener("click", () => {
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


// ============================================================================
// PART 4: GAME ENGINE & INTERACTIVE COOKING (CafeGame)
// ============================================================================
class CafeGame {
  constructor() {
    this.currentLevelIndex = 0;
    this.score = 0;
    this.coins = 60;
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
    this.currentView = "counter";
    
    this.selectedTrayItems = [];
    this.currentCustomer = null;
    this.currentOrder = null;
    
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
    this.startScreen = document.getElementById("start-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.endScreen = document.getElementById("end-screen");
    
    this.pauseModal = document.getElementById("pause-modal");
    this.tutorialModal = document.getElementById("tutorial-modal");
    this.newspaperModal = document.getElementById("newspaper-modal");
    this.creditsModal = document.getElementById("credits-modal");

    this.counterView = document.getElementById("cafe-counter-view");
    this.kitchenView = document.getElementById("cafe-kitchen-view");
    this.btnGoToKitchen = document.getElementById("btn-go-to-kitchen");
    this.btnBackToCounter = document.getElementById("btn-back-to-counter");

    this.levelBadge = document.getElementById("hud-level");
    this.coinsDisplay = document.getElementById("hud-coins");
    this.scoreDisplay = document.getElementById("hud-score");
    this.satisfactionBar = document.getElementById("hud-satisfaction-bar");
    this.satisfactionDisplay = document.getElementById("hud-satisfaction");
    this.muteBtn = document.getElementById("btn-mute");

    this.customerAvatar = document.getElementById("counter-customer-avatar");
    this.customerName = document.getElementById("counter-customer-name");
    this.customerTitle = document.getElementById("counter-customer-title");
    this.speechSpanish = document.getElementById("counter-speech-spanish");
    this.speechEnglish = document.getElementById("counter-speech-english");
    this.btnAskQue = document.getElementById("btn-ask-que");
    this.btnHint = document.getElementById("btn-hint-toggle");
    this.tipJarCoins = document.getElementById("tip-jar-coins");
    this.counterBell = document.getElementById("service-counter-bell");

    this.orderTicket = document.getElementById("hanging-order-ticket");
    this.ticketSummaryText = document.getElementById("ticket-summary-text");
    this.ticketCustName = document.getElementById("ticket-customer-name");

    this.patienceBarFill = document.getElementById("patience-bar-fill");
    this.patienceTimerText = document.getElementById("patience-time-text");

    this.shelfDrinksList = document.getElementById("shelf-drinks-list");
    this.shelfFoodList = document.getElementById("shelf-food-list");
    this.craftItemName = document.getElementById("craft-item-name");
    this.craftDishDesc = document.getElementById("craft-dish-desc");
    this.craftDishVisual = document.getElementById("craft-dish-visual");
    this.craftActionsContainer = document.getElementById("craft-actions-container");
    this.craftFinishRow = document.getElementById("craft-finish-row");
    this.btnTransferToTray = document.getElementById("btn-transfer-to-tray");

    this.trayList = document.getElementById("tray-items-list");
    this.trayEmptyNotice = document.getElementById("tray-empty-notice");
    this.serveBtn = document.getElementById("btn-serve-order");
    this.trashBtn = document.getElementById("btn-clear-tray");
    this.feedbackBanner = document.getElementById("feedback-banner");

    this.newspaperDayTitle = document.getElementById("newspaper-day-title");
    this.newspaperHeadline = document.getElementById("newspaper-headline");
    this.newspaperStory = document.getElementById("newspaper-story");
    this.newspaperStoryEn = document.getElementById("newspaper-story-en");
    this.newspaperSales = document.getElementById("newspaper-stat-sales");
    this.newspaperTips = document.getElementById("newspaper-stat-tips");
    this.newspaperAccuracy = document.getElementById("newspaper-stat-accuracy");
    this.newspaperVocab = document.getElementById("newspaper-stat-vocab");
    this.newspaperContinueBtn = document.getElementById("btn-newspaper-continue");

    this.endScore = document.getElementById("end-stat-score");
    this.endCoins = document.getElementById("end-stat-coins");
    this.endServed = document.getElementById("end-stat-served");
    this.endAccuracy = document.getElementById("end-stat-accuracy");
    this.endVocabCount = document.getElementById("end-stat-vocab");
    this.endSatisfaction = document.getElementById("end-stat-satisfaction");
    this.restartBtn = document.getElementById("btn-restart-game");
  }

  bindEvents() {
    const startPlayBtn = document.getElementById("btn-start-play");
    if (startPlayBtn) {
      startPlayBtn.addEventListener("click", () => {
        audio.init();
        audio.playTap();
        this.startGame();
      });
    }

    document.querySelectorAll(".btn-open-tutorial").forEach(btn => {
      btn.addEventListener("click", () => {
        audio.playTap();
        this.openTutorial();
      });
    });

    document.querySelectorAll(".btn-open-notebook").forEach(btn => {
      btn.addEventListener("click", () => {
        audio.playTap();
        notebook.open();
      });
    });

    const creditsBtn = document.getElementById("btn-hud-credits");
    if (creditsBtn) {
      creditsBtn.addEventListener("click", () => {
        audio.playTap();
        this.openCredits();
      });
    }

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

    if (this.muteBtn) {
      this.updateMuteIcon();
      this.muteBtn.addEventListener("click", () => {
        audio.toggleMute();
        this.updateMuteIcon();
      });
    }

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

    if (this.btnAskQue) {
      this.btnAskQue.addEventListener("click", () => {
        this.handleAskQue();
      });
    }

    if (this.btnHint) {
      this.btnHint.addEventListener("click", () => {
        this.toggleTranslationHint();
      });
    }

    if (this.orderTicket) {
      this.orderTicket.addEventListener("click", () => {
        audio.playPaperRustle();
        this.orderTicket.classList.toggle("expanded");
      });
    }

    if (this.counterBell) {
      this.counterBell.addEventListener("click", () => {
        audio.playServiceBell();
        this.counterBell.classList.add("bell-ring");
        setTimeout(() => this.counterBell.classList.remove("bell-ring"), 300);
      });
    }

    if (this.btnTransferToTray) {
      this.btnTransferToTray.addEventListener("click", () => {
        this.finishCraftingAndAddToTray();
      });
    }

    if (this.serveBtn) {
      this.serveBtn.addEventListener("click", () => {
        this.serveOrder();
      });
    }

    if (this.trashBtn) {
      this.trashBtn.addEventListener("click", () => {
        this.clearTray();
      });
    }

    if (this.newspaperContinueBtn) {
      this.newspaperContinueBtn.addEventListener("click", () => {
        audio.playTap();
        this.closeNewspaperAndAdvance();
      });
    }

    if (this.restartBtn) {
      this.restartBtn.addEventListener("click", () => {
        audio.playTap();
        this.resetGame();
      });
    }

    document.querySelectorAll(".modal-close-trigger").forEach(btn => {
      btn.addEventListener("click", (e) => {
        const modal = e.target.closest(".game-modal");
        if (modal) {
          modal.classList.remove("open");
          modal.setAttribute("aria-hidden", "true");
        }
      });
    });

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

    document.querySelectorAll(".shelf-recipe-card").forEach(c => {
      c.classList.toggle("active-cooking", c.getAttribute("data-id") === itemId);
    });

    if (this.craftItemName) this.craftItemName.textContent = item.name;
    if (this.craftDishDesc) this.craftDishDesc.textContent = item.description;

    this.updateCraftVisual(false);
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

    this.activeCraftStepIndex++;

    notebook.markWordLearned(this.activeCraftItem.id);
    if (currentStep.label.includes("canela")) notebook.markWordLearned("canela");
    if (currentStep.label.includes("azúcar")) notebook.markWordLearned("azucar");
    if (currentStep.label.includes("leche")) notebook.markWordLearned("leche");

    const isFullyCrafted = this.activeCraftStepIndex >= steps.length;
    this.updateCraftVisual(isFullyCrafted);

    if (isFullyCrafted) {
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

    this.score += 15;
    this.coins += 2;
    this.updateHUD();

    this.showToastNotification(`¡${this.activeCraftItem.name} colocado en la bandeja! (+15 pts)`);

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
    this.clearTray(true);
    this.hideFeedback();

    const level = GAME_DATA.levels[this.currentLevelIndex];
    this.maxPatience = level.patienceSeconds;
    this.patienceRemaining = this.maxPatience;

    const randomCustomerIndex = Math.floor(Math.random() * GAME_DATA.customers.length);
    this.currentCustomer = GAME_DATA.customers[randomCustomerIndex];

    const validOrders = GAME_DATA.orderPool.filter(ord => 
      this.currentLevelIndex + 1 >= ord.levelMin && this.currentLevelIndex + 1 <= ord.levelMax
    );
    const randomOrderIndex = Math.floor(Math.random() * validOrders.length);
    this.currentOrder = validOrders[randomOrderIndex];

    notebook.markWordLearned("hola");
    notebook.markWordLearned("buenos-dias");
    notebook.markWordsLearnedFromOrder(this.currentOrder.items);

    this.switchView("counter");
    this.renderCustomerScene();
    audio.playDoorBell();
    this.startPatienceTimer();
  }

  renderCustomerScene() {
    if (!this.customerAvatar) return;

    this.customerAvatar.innerHTML = this.currentCustomer.avatarSvg;
    this.customerName.textContent = this.currentCustomer.name;
    this.customerTitle.textContent = `${this.currentCustomer.title} (${this.currentCustomer.enTitle})`;

    this.customerAvatar.classList.remove("customer-bounce", "customer-shake");
    void this.customerAvatar.offsetWidth;
    this.customerAvatar.classList.add("customer-bounce");

    this.speechSpanish.textContent = `«${this.currentOrder.spanish}»`;
    this.speechEnglish.textContent = this.currentOrder.english;
    this.speechEnglish.classList.remove("revealed");

    if (this.btnAskQue) {
      this.btnAskQue.disabled = false;
      this.btnAskQue.classList.remove("used");
      this.btnAskQue.innerHTML = `<span>❓</span> <span>«¿Qué?» (Pardon?)</span>`;
    }

    if (this.btnHint) {
      this.btnHint.classList.remove("active");
      this.btnHint.innerHTML = `<span>💡</span> <span>Pista (Translation)</span>`;
    }

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
    initCafeGame();
  }
}

})(typeof window !== "undefined" ? window : this);
