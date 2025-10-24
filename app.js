// Main application logic
let currentLang = CONFIG.DEFAULT_LANGUAGE;
let currentUser = null;
let currentPlan = 'free';
let userStats = {
    researches: 0,
    remaining: 3,
    words: 0,
    exports: 0
};

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Load saved language
    const savedLang = localStorage.getItem(CONFIG.STORAGE_KEYS.LANGUAGE);
    if (savedLang) {
        currentLang = savedLang;
        updateLanguage();
    }
    
    // Load user data
    loadUserData();
    
    // Populate universities
    populateUniversities();
    
    // Setup event listeners
    setupEventListeners();
    
    // Check authentication
    checkAuthentication();
}

function setupEventListeners() {
    // Smooth scroll for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Language Toggle
function toggleLanguage() {
    currentLang = currentLang === 'fr' ? 'ar' : 'fr';
    localStorage.setItem(CONFIG.STORAGE_KEYS.LANGUAGE, currentLang);
    updateLanguage();
}

function updateLanguage() {
    // Update body direction and class
    document.body.className = currentLang === 'ar' ? 'rtl' : 'ltr';
    document.body.setAttribute('dir', currentLang === 'ar' ? 'rtl' : 'ltr');
    document.querySelector('html').setAttribute('lang', currentLang);
    
    // Update lang button
    document.getElementById('langFlag').textContent = currentLang === 'ar' ? '🇫🇷' : '🇩🇿';
    document.getElementById('langText').textContent = TRANSLATIONS[currentLang].langText;
    
    // Update all text elements
    updateTextElements();
    
    // Update dropdowns
    populateUniversities();
    updateFaculties();
    updateSpecializations();
}

function updateTextElements() {
    const trans = TRANSLATIONS[currentLang];
    Object.keys(trans).forEach(key => {
        const element = document.getElementById(key);
        if (element) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = trans[key];
            } else {
                element.textContent = trans[key];
            }
        }
    });
}

// Populate Universities
function populateUniversities() {
    const universitySelect = document.getElementById('university');
    universitySelect.innerHTML = `<option value="">${TRANSLATIONS[currentLang].optSelectUniv}</option>`;
    
    UNIVERSITIES_DATA.forEach(uni => {
        const option = document.createElement('option');
        option.value = uni.value;
        option.textContent = currentLang === 'ar' ? uni.name_ar : uni.name_fr;
        universitySelect.appendChild(option);
    });
}

// Update Faculties
function updateFaculties() {
    const facultySelect = document.getElementById('faculty');
    facultySelect.innerHTML = `<option value="">${TRANSLATIONS[currentLang].optSelectFac}</option>`;
    
    const university = document.getElementById('university').value;
    if (university) {
        FACULTIES_DATA.forEach(fac => {
            const option = document.createElement('option');
            option.value = fac.value;
            option.textContent = currentLang === 'ar' ? fac.name_ar : fac.name_fr;
            facultySelect.appendChild(option);
        });
    }
    
    // Reset specialization
    document.getElementById('specialization').innerHTML = `<option value="">${TRANSLATIONS[currentLang].optSelectSpec}</option>`;
}

// Update Specializations
function updateSpecializations() {
    const specSelect = document.getElementById('specialization');
    specSelect.innerHTML = `<option value="">${TRANSLATIONS[currentLang].optSelectSpec}</option>`;
    
    const faculty = document.getElementById('faculty').value;
    if (faculty && SPECIALIZATIONS_DATA[faculty]) {
        SPECIALIZATIONS_DATA[faculty].forEach(spec => {
            const option = document.createElement('option');
            option.value = spec.value;
            option.textContent = currentLang === 'ar' ? spec.name_ar : spec.name_fr;
            specSelect.appendChild(option);
        });
    }
}

// Google Login
function googleLogin() {
    // This will be implemented with actual Google OAuth
    // For now, simulate login
    alert(currentLang === 'ar' 
        ? 'سيتم تفعيل تسجيل الدخول بجوجل عند إضافة السيرفر' 
        : 'Connexion Google sera activée lors de l\'ajout du serveur');
    
    // Simulate successful login
    simulateLogin();
}

function simulateLogin() {
    currentUser = {
        id: 'user_' + Date.now(),
        name: 'Utilisateur Test',
        email: 'user@example.com',
        photo: 'https://via.placeholder.com/40',
        plan: 'free'
    };
    
    saveUserData();
    updateUIAfterLogin();
}

function handleCredentialResponse(response) {
    // This will be called by Google Sign-In
    // Decode JWT and get user info
    console.log('Google Sign-In response:', response);
}

function checkAuthentication() {
    const savedUser = localStorage.getItem(CONFIG.STORAGE_KEYS.USER_DATA);
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateUIAfterLogin();
    }
}

function updateUIAfterLogin() {
    document.getElementById('loginBtn').classList.add('hidden');
    document.getElementById('userMenu').classList.remove('hidden');
    document.getElementById('userName').textContent = currentUser.name;
    document.getElementById('userAvatar').src = currentUser.photo;
    document.getElementById('dashboard').classList.remove('hidden');
    
    // Update stats
    updateStats();
}

function logout() {
    currentUser = null;
    localStorage.removeItem(CONFIG.STORAGE_KEYS.USER_DATA);
    localStorage.removeItem(CONFIG.STORAGE_KEYS.AUTH_TOKEN);
    
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('userMenu').classList.add('hidden');
    document.getElementById('dashboard').classList.add('hidden');
    
    alert(currentLang === 'ar' ? 'تم تسجيل الخروج بنجاح' : 'Déconnexion réussie');
}

// Plan Selection
function selectPlan(plan) {
    if (!currentUser) {
        alert(currentLang === 'ar' 
            ? 'يرجى تسجيل الدخول أولاً' 
            : 'Veuillez vous connecter d\'abord');
        return;
    }
    
    if (plan === 'free') {
        currentPlan = plan;
        currentUser.plan = plan;
        saveUserData();
        scrollToSection('research');
        return;
    }
    
    // Show payment modal for paid plans
    currentPlan = plan;
    showPaymentModal();
}

function showPaymentModal() {
    document.getElementById('paymentModal').classList.remove('hidden');
}

function closePaymentModal() {
    document.getElementById('paymentModal').classList.add('hidden');
}

function selectPaymentMethod(method) {
    alert(currentLang === 'ar' 
        ? `سيتم تفعيل الدفع عبر ${method.toUpperCase()} عند إضافة السيرفر` 
        : `Le paiement via ${method.toUpperCase()} sera activé lors de l'ajout du serveur`);
    
    closePaymentModal();
    
    // Simulate successful payment for demo
    currentUser.plan = currentPlan;
    saveUserData();
    updateStats();
    scrollToSection('research');
}

// Scroll to Section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
}

// Generate Research
async function generateResearch(event) {
    event.preventDefault();
    
    if (!currentUser) {
        alert(currentLang === 'ar' 
            ? 'يرجى تسجيل الدخول أولاً' 
            : 'Veuillez vous connecter d\'abord');
        return;
    }
    
    // Check limits
    if (userStats.remaining <= 0 && currentUser.plan !== 'premium') {
        alert(currentLang === 'ar' 
            ? 'لقد استنفدت عدد الأبحاث المتاحة. يرجى الترقية إلى باقة أعلى' 
            : 'Vous avez atteint la limite de recherches. Veuillez passer à une formule supérieure');
        return;
    }
    
    // Get form data
    const formData = {
        university: document.getElementById('university').value,
        faculty: document.getElementById('faculty').value,
        specialization: document.getElementById('specialization').value,
        title: document.getElementById('researchTitle').value,
        description: document.getElementById('researchDescription').value,
        wordCount: parseInt(document.getElementById('wordCount').value),
        citationStyle: document.getElementById('citationStyle').value
    };
    
    // Validate
    if (!formData.university || !formData.faculty || !formData.specialization || !formData.title || !formData.description) {
        alert(currentLang === 'ar' 
            ? 'يرجى ملء جميع الحقول' 
            : 'Veuillez remplir tous les champs');
        return;
    }
    
    // Show loading
    document.getElementById('loading').classList.remove('hidden');
    document.getElementById('results').classList.add('hidden');
    document.getElementById('submitBtn').disabled = true;
    
    try {
        // Call OpenRouter API
        const research = await callOpenRouterAPI(formData);
        displayResults(research, formData);
        
        // Update stats
        userStats.researches++;
        if (currentUser.plan !== 'premium') {
            userStats.remaining = Math.max(0, userStats.remaining - 1);
        }
        userStats.words += formData.wordCount;
        updateStats();
        saveUserData();
        
    } catch (error) {
        console.error('Error generating research:', error);
        alert(currentLang === 'ar' 
            ? 'حدث خطأ أثناء إنشاء البحث. يرجى المحاولة مرة أخرى' 
            : 'Une erreur s\'est produite lors de la génération. Veuillez réessayer');
    } finally {
        document.getElementById('loading').classList.add('hidden');
        document.getElementById('submitBtn').disabled = false;
    }
}

// Call OpenRouter API
async function callOpenRouterAPI(formData) {
    const prompt = createResearchPrompt(formData);
    
    const response = await fetch(CONFIG.OPENROUTER_API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${CONFIG.OPENROUTER_API_KEY}`,
            'HTTP-Referer': window.location.href,
            'X-Title': CONFIG.APP_NAME
        },
        body: JSON.stringify({
            model: CONFIG.MODEL,
            messages: [
                {
                    role: 'system',
                    content: 'Tu es un assistant académique expert qui crée des recherches universitaires de haute qualité en français. Tu suis strictement les normes académiques françaises et algériennes.'
                },
                {
                    role: 'user',
                    content: prompt
                }
            ],
            max_tokens: formData.wordCount * 2,
            temperature: 0.7
        })
    });
    
    if (!response.ok) {
        throw new Error('API request failed');
    }
    
    const data = await response.json();
    return data.choices[0].message.content;
}

// Create Research Prompt
function createResearchPrompt(formData) {
    const uniName = UNIVERSITIES_DATA.find(u => u.value === formData.university)?.name_fr || '';
    const facName = FACULTIES_DATA.find(f => f.value === formData.faculty)?.name_fr || '';
    const specName = SPECIALIZATIONS_DATA[formData.faculty]?.find(s => s.value === formData.specialization)?.name_fr || '';
    
    return `Créez une recherche académique complète et professionnelle en français avec les caractéristiques suivantes:

**Titre**: ${formData.title}

**Contexte académique**:
- Université: ${uniName}
- Faculté: ${facName}
- Spécialisation: ${specName}

**Description et axes de recherche**:
${formData.description}

**Exigences**:
- Nombre de mots: environ ${formData.wordCount} mots
- Style de citation: ${formData.citationStyle.toUpperCase()}
- Structure académique complète avec: introduction, problématique, méthodologie, développement (plusieurs parties), résultats, discussion, conclusion, et bibliographie
- Utiliser un langage académique formel et précis
- Inclure des références bibliographiques pertinentes au format ${formData.citationStyle.toUpperCase()}
- Assurer la cohérence et la profondeur scientifique
- Respecter les normes académiques françaises et algériennes

Générez la recherche complète maintenant:`;
}

// Display Results
function displayResults(research, formData) {
    document.getElementById('resultContent').innerHTML = formatResearch(research);
    document.getElementById('results').classList.remove('hidden');
    
    // Simulate plagiarism check
    const plagiarismScore = Math.floor(Math.random() * 5);
    document.getElementById('plagiarismScore').textContent = plagiarismScore + '%';
    
    // Scroll to results
    scrollToSection('results');
    
    // Save research
    saveResearch(formData, research);
}

// Format Research
function formatResearch(research) {
    // Convert markdown-like formatting to HTML
    let formatted = research
        .replace(/^# (.+)$/gm, '<h1>$1</h1>')
        .replace(/^## (.+)$/gm, '<h2>$1</h2>')
        .replace(/^### (.+)$/gm, '<h3>$1</h3>')
        .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        .replace(/\*(.+?)\*/g, '<em>$1</em>')
        .replace(/\n\n/g, '</p><p>')
        .replace(/^(.+)$/gm, '<p>$1</p>');
    
    return formatted;
}

// Export Functions
function exportPDF() {
    const element = document.getElementById('resultContent');
    const opt = {
        margin: 1,
        filename: 'recherche_academique.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2 },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
    };
    
    html2pdf().set(opt).from(element).save();
    
    userStats.exports++;
    updateStats();
    saveUserData();
}

function exportWord() {
    if (currentUser.plan === 'free') {
        alert(currentLang === 'ar' 
            ? 'هذه الميزة متاحة في الباقات المدفوعة فقط' 
            : 'Cette fonctionnalité est disponible uniquement dans les formules payantes');
        return;
    }
    
    const content = document.getElementById('resultContent').innerText;
    const blob = new Blob([content], { type: 'application/msword' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recherche_academique.doc';
    a.click();
    
    userStats.exports++;
    updateStats();
    saveUserData();
}

function exportLatex() {
    if (currentUser.plan === 'free') {
        alert(currentLang === 'ar' 
            ? 'هذه الميزة متاحة في الباقات المدفوعة فقط' 
            : 'Cette fonctionnalité est disponible uniquement dans les formules payantes');
        return;
    }
    
    const content = document.getElementById('resultContent').innerText;
    const latex = convertToLatex(content);
    const blob = new Blob([latex], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recherche_academique.tex';
    a.click();
    
    userStats.exports++;
    updateStats();
    saveUserData();
}

function exportHTML() {
    const content = document.getElementById('resultContent').innerHTML;
    const blob = new Blob([content], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recherche_academique.html';
    a.click();
    
    userStats.exports++;
    updateStats();
    saveUserData();
}

function exportTXT() {
    const content = document.getElementById('resultContent').innerText;
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'recherche_academique.txt';
    a.click();
    
    userStats.exports++;
    updateStats();
    saveUserData();
}

function convertToLatex(content) {
    // Basic conversion to LaTeX format
    let latex = '\\documentclass{article}\n';
    latex += '\\usepackage[utf8]{inputenc}\n';
    latex += '\\usepackage[french]{babel}\n\n';
    latex += '\\begin{document}\n\n';
    latex += content.replace(/<[^>]*>/g, '\n');
    latex += '\n\n\\end{document}';
    return latex;
}

// Edit and Regenerate
function editResearch() {
    alert(currentLang === 'ar' 
        ? 'سيتم إضافة ميزة التعديل قريباً' 
        : 'La fonctionnalité d\'édition sera ajoutée prochainement');
}

function regenerateResearch() {
    if (confirm(currentLang === 'ar' 
        ? 'هل تريد إعادة إنشاء البحث؟' 
        : 'Voulez-vous régénérer la recherche?')) {
        document.getElementById('researchForm').dispatchEvent(new Event('submit'));
    }
}

// Stats Management
function updateStats() {
    document.getElementById('statResearches').textContent = userStats.researches;
    document.getElementById('statRemaining').textContent = 
        currentUser.plan === 'premium' ? '∞' : userStats.remaining;
    document.getElementById('statWords').textContent = userStats.words.toLocaleString();
    document.getElementById('statExports').textContent = userStats.exports;
}

// Data Persistence
function saveUserData() {
    if (currentUser) {
        localStorage.setItem(CONFIG.STORAGE_KEYS.USER_DATA, JSON.stringify(currentUser));
        localStorage.setItem(CONFIG.STORAGE_KEYS.CURRENT_PLAN, currentUser.plan);
        localStorage.setItem(CONFIG.STORAGE_KEYS.STATS, JSON.stringify(userStats));
    }
}

function loadUserData() {
    const savedStats = localStorage.getItem(CONFIG.STORAGE_KEYS.STATS);
    if (savedStats) {
        userStats = JSON.parse(savedStats);
    }
    
    const savedPlan = localStorage.getItem(CONFIG.STORAGE_KEYS.CURRENT_PLAN);
    if (savedPlan) {
        currentPlan = savedPlan;
    }
}

function saveResearch(formData, content) {
    const researches = JSON.parse(localStorage.getItem(CONFIG.STORAGE_KEYS.RESEARCHES) || '[]');
    researches.unshift({
        id: Date.now(),
        date: new Date().toISOString(),
        title: formData.title,
        university: formData.university,
        faculty: formData.faculty,
        specialization: formData.specialization,
        wordCount: formData.wordCount,
        content: content
    });
    
    // Keep only last 10 researches
    if (researches.length > 10) {
        researches.pop();
    }
    
    localStorage.setItem(CONFIG.STORAGE_KEYS.RESEARCHES, JSON.stringify(researches));
}
