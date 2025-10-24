// Configuration file for the Academic Research Platform
// Replace these values with your actual API keys and configuration

const CONFIG = {
    // OpenRouter API Configuration
    OPENROUTER_API_KEY: 'YOUR_OPENROUTER_API_KEY_HERE',
    OPENROUTER_API_URL: 'https://openrouter.ai/api/v1/chat/completions',
    MODEL: 'meta-llama/llama-3.3-70b-instruct', // Using Meta Llama 3.3 70B Instruct
    
    // Google OAuth Configuration
    GOOGLE_CLIENT_ID: 'YOUR_GOOGLE_CLIENT_ID_HERE',
    
    // Application Settings
    APP_NAME: 'Plateforme de Recherche Académique',
    APP_VERSION: '1.0.0',
    
    // API Endpoints (to be configured when backend is ready)
    API_BASE_URL: 'https://your-backend-url.com/api',
    PAYMENT_API_URL: 'https://your-backend-url.com/api/payment',
    
    // Payment Methods Configuration
    PAYMENT_METHODS: {
        CIB: {
            enabled: true,
            name: 'CIB (Carte Interbancaire)',
            icon: '💳',
            description: 'Paiement par carte bancaire algérienne'
        },
        BARIDIMOB: {
            enabled: true,
            name: 'Baridimob',
            icon: '📱',
            description: 'Paiement mobile Algérie Poste'
        },
        BARIDIWEB: {
            enabled: true,
            name: 'BaridiWeb',
            icon: '🌐',
            description: 'Paiement en ligne Algérie Poste'
        },
        TRANSFER: {
            enabled: true,
            name: 'Virement Bancaire',
            icon: '🏦',
            description: 'Virement direct vers notre compte'
        }
    },
    
    // Plan Limits
    PLANS: {
        FREE: {
            researches_per_month: 3,
            max_words: 2000,
            export_formats: ['pdf'],
            features: {
                plagiarism_check: false,
                bibliography: false,
                priority: false,
                support: 'email'
            }
        },
        STANDARD: {
            researches_per_month: 20,
            max_words: 10000,
            export_formats: ['pdf', 'word', 'latex', 'html', 'txt'],
            features: {
                plagiarism_check: true,
                bibliography: true,
                priority: true,
                support: 'priority'
            }
        },
        PREMIUM: {
            researches_per_month: -1, // unlimited
            max_words: -1, // unlimited
            export_formats: ['pdf', 'word', 'latex', 'html', 'txt'],
            features: {
                plagiarism_check: true,
                bibliography: true,
                priority: true,
                support: '24/7',
                linguistic_review: true,
                academic_consultation: true
            }
        }
    },
    
    // Storage Keys
    STORAGE_KEYS: {
        USER_DATA: 'ara_user_data',
        AUTH_TOKEN: 'ara_auth_token',
        LANGUAGE: 'ara_language',
        CURRENT_PLAN: 'ara_current_plan',
        RESEARCHES: 'ara_researches',
        STATS: 'ara_stats'
    },
    
    // Default Settings
    DEFAULT_LANGUAGE: 'fr',
    DEFAULT_CITATION_STYLE: 'apa',
    MAX_FILE_SIZE: 10485760, // 10MB in bytes
    
    // Feature Flags
    FEATURES: {
        GOOGLE_LOGIN: true,
        PAYMENT_GATEWAY: true,
        PLAGIARISM_CHECK: true,
        EXPORT_FORMATS: true,
        DASHBOARD: true
    }
};

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
