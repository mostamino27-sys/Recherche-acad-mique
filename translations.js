// Translations for the Academic Research Platform
// Support for French and Arabic languages

const TRANSLATIONS = {
    fr: {
        // Navigation
        logoText: 'Plateforme de Recherche Académique',
        navHome: 'Accueil',
        navPricing: 'Formules',
        navFeatures: 'Fonctionnalités',
        navAbout: 'À propos',
        langText: 'عربي',
        loginText: 'Connexion avec Google',
        menuDashboard: 'Tableau de bord',
        menuLogout: 'Déconnexion',

        // Hero Section
        heroTitle: 'Plateforme de Recherche Académique Avancée',
        heroSubtitle: 'Créez des recherches académiques professionnelles en français pour les universités algériennes',
        ctaText: 'Commencer Gratuitement',

        // Features
        featuresTitle: 'Fonctionnalités Principales',
        feat1Title: 'Toutes les Universités Algériennes',
        feat1Desc: 'Base de données complète de toutes les universités, facultés et spécialisations',
        feat2Title: 'Génération Professionnelle',
        feat2Desc: 'Recherches structurées selon les normes académiques françaises',
        feat3Title: 'Détection de Plagiat',
        feat3Desc: 'Vérification automatique de l\'originalité du contenu',
        feat4Title: 'Bibliographie Automatique',
        feat4Desc: 'Génération des références selon les normes APA, MLA ou Chicago',
        feat5Title: 'Export Multi-Format',
        feat5Desc: 'PDF, Word, LaTeX, HTML et TXT disponibles',
        feat6Title: 'Interface Bilingue',
        feat6Desc: 'Français et Arabe avec basculement instantané',

        // Pricing
        pricingTitle: 'Choisissez Votre Formule',
        pricingSubtitle: 'Des plans adaptés à tous les besoins académiques',
        planFreeTitle: 'Formule Gratuite',
        planFreePeriod: 'Pour toujours',
        planStdTitle: 'Formule Standard',
        planStdPeriod: 'Par mois',
        planProTitle: 'Formule Professionnelle',
        planProPeriod: 'Par mois',
        popularBadge: 'Plus Populaire',

        // Plan Features
        free1: '3 recherches par mois',
        free2: 'Jusqu\'à 2,000 mots',
        free3: 'Export PDF uniquement',
        free4: 'Modèles de base',
        free5: 'Support par email',
        
        std1: '20 recherches par mois',
        std2: 'Jusqu\'à 10,000 mots',
        std3: 'Tous les formats d\'export',
        std4: 'Détection de plagiat',
        std5: 'Bibliographie automatique',
        std6: 'Modèles avancés',
        std7: 'Priorité de traitement',
        std8: 'Support prioritaire',
        
        pro1: 'Recherches illimitées',
        pro2: 'Mots illimités',
        pro3: 'Tous les formats d\'export',
        pro4: 'Détection de plagiat avancée',
        pro5: 'Révision linguistique',
        pro6: 'Consultation académique',
        pro7: 'Modèles personnalisés',
        pro8: 'Support dédié 24/7',
        pro9: 'Analyse statistique',

        freePlanBtn: 'Commencer Gratuitement',
        stdPlanBtn: 'S\'abonner Maintenant',
        proPlanBtn: 'S\'abonner Maintenant',
        paymentLabel: 'Méthodes de paiement:',
        paymentLabel2: 'Méthodes de paiement:',

        // Form
        formTitle: 'Créer une Nouvelle Recherche',
        labelUniv: 'Université',
        labelFac: 'Faculté',
        labelSpec: 'Spécialisation',
        labelTitle: 'Titre de la recherche (en français)',
        labelDesc: 'Description et axes principaux',
        labelWords: 'Nombre de mots',
        labelCitation: 'Style de citation',
        submitText: 'Générer la Recherche',
        optSelectUniv: 'Sélectionner l\'université',
        optSelectFac: 'Sélectionner la faculté',
        optSelectSpec: 'Sélectionner la spécialisation',

        // Loading & Results
        loadingText: 'Génération de votre recherche académique en cours...',
        loadingSubtext: 'Cela peut prendre quelques instants',
        resultsTitle: 'Votre Recherche est Prête!',
        btnEdit: 'Modifier',
        btnRegenerate: 'Régénérer',
        btnPDF: 'PDF',
        btnWord: 'Word',
        btnLatex: 'LaTeX',
        btnHTML: 'HTML',
        btnTXT: 'TXT',
        plagiarismTitle: 'Vérification de Plagiat',
        plagiarismScore: '0%',
        plagiarismLabel: 'Similarité détectée',
        plagiarismStatus: 'Contenu Original',

        // Dashboard
        dashTitle: 'Tableau de Bord',
        statResearches: '0',
        statResLabel: 'Recherches Créées',
        statRemaining: '3',
        statRemLabel: 'Recherches Restantes',
        statWords: '0',
        statWordsLabel: 'Mots Générés',
        statExports: '0',
        statExpLabel: 'Exports Effectués',
        recentTitle: 'Recherches Récentes',
        emptyState: 'Aucune recherche créée pour le moment',

        // About
        aboutTitle: 'À Propos de la Plateforme',
        aboutP1: 'La Plateforme de Recherche Académique est un outil professionnel conçu spécifiquement pour les étudiants et chercheurs des universités algériennes.',
        aboutP2: 'Notre plateforme utilise des technologies avancées pour générer des recherches académiques de haute qualité en français, conformes aux standards universitaires.',
        aboutP3: 'Nous supportons toutes les universités algériennes avec leurs facultés et spécialisations respectives, garantissant une adaptation parfaite à vos besoins académiques.',
        aboutFeat1: 'Universités Algériennes',
        aboutFeat2: 'Spécialisations',
        aboutFeat3: 'Formats d\'Export',

        // Footer
        footerAbout: 'À Propos',
        footerAboutText: 'Plateforme académique pour les universités algériennes',
        footerLinks: 'Liens Rapides',
        footerPricing: 'Tarifs',
        footerFeatures: 'Fonctionnalités',
        footerAboutLink: 'À propos',
        footerContact: 'Contact',
        footerSupport: 'Support disponible 24/7',
        footerCopyright: '© 2025 Plateforme de Recherche Académique. Tous droits réservés.',

        // Payment Modal
        paymentModalTitle: 'Choisissez votre méthode de paiement',
        cibDesc: 'Paiement par carte bancaire algérienne',
        baridimobDesc: 'Paiement mobile Algérie Poste',
        baridiwebDesc: 'Paiement en ligne Algérie Poste',
        transferTitle: 'Virement Bancaire',
        transferDesc: 'Virement direct vers notre compte'
    },
    ar: {
        // Navigation
        logoText: 'منصة البحث الأكاديمي المتقدمة',
        navHome: 'الرئيسية',
        navPricing: 'الباقات',
        navFeatures: 'المميزات',
        navAbout: 'حول',
        langText: 'Français',
        loginText: 'تسجيل الدخول بجوجل',
        menuDashboard: 'لوحة التحكم',
        menuLogout: 'تسجيل الخروج',

        // Hero Section
        heroTitle: 'منصة البحث الأكاديمي المتقدمة',
        heroSubtitle: 'أنشئ أبحاثاً أكاديمية احترافية بالفرنسية للجامعات الجزائرية',
        ctaText: 'ابدأ مجاناً',

        // Features
        featuresTitle: 'المميزات الرئيسية',
        feat1Title: 'جميع الجامعات الجزائرية',
        feat1Desc: 'قاعدة بيانات شاملة لجميع الجامعات والكليات والتخصصات',
        feat2Title: 'إنشاء احترافي',
        feat2Desc: 'أبحاث منظمة وفق المعايير الأكاديمية الفرنسية',
        feat3Title: 'كشف الانتحال',
        feat3Desc: 'فحص تلقائي لأصالة المحتوى',
        feat4Title: 'مراجع تلقائية',
        feat4Desc: 'إنشاء المراجع حسب معايير APA أو MLA أو Chicago',
        feat5Title: 'تصدير متعدد الصيغ',
        feat5Desc: 'متوفر بصيغ PDF و Word و LaTeX و HTML و TXT',
        feat6Title: 'واجهة ثنائية اللغة',
        feat6Desc: 'فرنسية وعربية مع تبديل فوري',

        // Pricing
        pricingTitle: 'اختر الباقة المناسبة',
        pricingSubtitle: 'باقات مصممة لتلبية جميع الاحتياجات الأكاديمية',
        planFreeTitle: 'الباقة المجانية',
        planFreePeriod: 'للأبد',
        planStdTitle: 'الباقة القياسية',
        planStdPeriod: 'شهرياً',
        planProTitle: 'الباقة المحترفة',
        planProPeriod: 'شهرياً',
        popularBadge: 'الأكثر شعبية',

        // Plan Features
        free1: '3 أبحاث شهرياً',
        free2: 'حتى 2,000 كلمة',
        free3: 'تصدير PDF فقط',
        free4: 'قوالب أساسية',
        free5: 'دعم عبر البريد',
        
        std1: '20 بحثاً شهرياً',
        std2: 'حتى 10,000 كلمة',
        std3: 'جميع صيغ التصدير',
        std4: 'كشف الانتحال',
        std5: 'مراجع تلقائية',
        std6: 'قوالب متقدمة',
        std7: 'أولوية في المعالجة',
        std8: 'دعم ذو أولوية',
        
        pro1: 'أبحاث غير محدودة',
        pro2: 'كلمات غير محدودة',
        pro3: 'جميع صيغ التصدير',
        pro4: 'كشف انتحال متقدم',
        pro5: 'مراجعة لغوية',
        pro6: 'استشارة أكاديمية',
        pro7: 'قوالب مخصصة',
        pro8: 'دعم مخصص 24/7',
        pro9: 'تحليل إحصائي',

        freePlanBtn: 'ابدأ مجاناً',
        stdPlanBtn: 'اشترك الآن',
        proPlanBtn: 'اشترك الآن',
        paymentLabel: 'طرق الدفع:',
        paymentLabel2: 'طرق الدفع:',

        // Form
        formTitle: 'إنشاء بحث جديد',
        labelUniv: 'الجامعة',
        labelFac: 'الكلية',
        labelSpec: 'التخصص',
        labelTitle: 'عنوان البحث (بالفرنسية)',
        labelDesc: 'الوصف والمحاور الرئيسية',
        labelWords: 'عدد الكلمات',
        labelCitation: 'نمط الاستشهاد',
        submitText: 'إنشاء البحث',
        optSelectUniv: 'اختر الجامعة',
        optSelectFac: 'اختر الكلية',
        optSelectSpec: 'اختر التخصص',

        // Loading & Results
        loadingText: 'جارٍ إنشاء بحثك الأكاديمي...',
        loadingSubtext: 'قد يستغرق هذا بضع لحظات',
        resultsTitle: 'بحثك جاهز!',
        btnEdit: 'تعديل',
        btnRegenerate: 'إعادة الإنشاء',
        btnPDF: 'PDF',
        btnWord: 'Word',
        btnLatex: 'LaTeX',
        btnHTML: 'HTML',
        btnTXT: 'TXT',
        plagiarismTitle: 'فحص الانتحال',
        plagiarismScore: '0%',
        plagiarismLabel: 'تشابه مكتشف',
        plagiarismStatus: 'محتوى أصلي',

        // Dashboard
        dashTitle: 'لوحة التحكم',
        statResearches: '0',
        statResLabel: 'أبحاث منشأة',
        statRemaining: '3',
        statRemLabel: 'أبحاث متبقية',
        statWords: '0',
        statWordsLabel: 'كلمات مُنشأة',
        statExports: '0',
        statExpLabel: 'تصديرات منجزة',
        recentTitle: 'الأبحاث الأخيرة',
        emptyState: 'لا توجد أبحاث منشأة حتى الآن',

        // About
        aboutTitle: 'عن المنصة',
        aboutP1: 'منصة البحث الأكاديمي هي أداة احترافية مصممة خصيصاً للطلاب والباحثين في الجامعات الجزائرية.',
        aboutP2: 'تستخدم منصتنا تقنيات متقدمة لإنشاء أبحاث أكاديمية عالية الجودة بالفرنسية، متوافقة مع المعايير الجامعية.',
        aboutP3: 'ندعم جميع الجامعات الجزائرية مع كلياتها وتخصصاتها، مما يضمن تكيفاً مثالياً مع احتياجاتك الأكاديمية.',
        aboutFeat1: 'جامعة جزائرية',
        aboutFeat2: 'تخصص',
        aboutFeat3: 'صيغ تصدير',

        // Footer
        footerAbout: 'عن المنصة',
        footerAboutText: 'منصة أكاديمية للجامعات الجزائرية',
        footerLinks: 'روابط سريعة',
        footerPricing: 'الأسعار',
        footerFeatures: 'المميزات',
        footerAboutLink: 'حول',
        footerContact: 'اتصل بنا',
        footerSupport: 'دعم متاح 24/7',
        footerCopyright: '© 2025 منصة البحث الأكاديمي. جميع الحقوق محفوظة.',

        // Payment Modal
        paymentModalTitle: 'اختر طريقة الدفع',
        cibDesc: 'الدفع ببطاقة بنكية جزائرية',
        baridimobDesc: 'الدفع عبر الهاتف - بريد الجزائر',
        baridiwebDesc: 'الدفع الإلكتروني - بريد الجزائر',
        transferTitle: 'تحويل بنكي',
        transferDesc: 'تحويل مباشر إلى حسابنا'
    }
};

// Export translations
if (typeof module !== 'undefined' && module.exports) {
    module.exports = TRANSLATIONS;
}
