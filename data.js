// University and academic data for Algerian universities

const UNIVERSITIES_DATA = [
    { 
        value: 'alger1', 
        name_fr: 'Université d\'Alger 1 - Benyoucef Benkhedda', 
        name_ar: 'جامعة الجزائر 1 - بن يوسف بن خدة',
        city: 'Alger'
    },
    { 
        value: 'alger2', 
        name_fr: 'Université d\'Alger 2 - Abou El Kacem Saâdallah', 
        name_ar: 'جامعة الجزائر 2 - أبو القاسم سعد الله',
        city: 'Alger'
    },
    { 
        value: 'alger3', 
        name_fr: 'Université d\'Alger 3 - Ibrahim Sultan Chiboub', 
        name_ar: 'جامعة الجزائر 3 - إبراهيم سلطان شيبوط',
        city: 'Alger'
    },
    { 
        value: 'oran1', 
        name_fr: 'Université d\'Oran 1 - Ahmed Ben Bella', 
        name_ar: 'جامعة وهران 1 - أحمد بن بلة',
        city: 'Oran'
    },
    { 
        value: 'oran2', 
        name_fr: 'Université d\'Oran 2 - Mohamed Ben Ahmed', 
        name_ar: 'جامعة وهران 2 - محمد بن أحمد',
        city: 'Oran'
    },
    { 
        value: 'constantine1', 
        name_fr: 'Université de Constantine 1 - Frères Mentouri', 
        name_ar: 'جامعة قسنطينة 1 - الإخوة منتوري',
        city: 'Constantine'
    },
    { 
        value: 'constantine2', 
        name_fr: 'Université de Constantine 2 - Abdelhamid Mehri', 
        name_ar: 'جامعة قسنطينة 2 - عبد الحميد مهري',
        city: 'Constantine'
    },
    { 
        value: 'constantine3', 
        name_fr: 'Université de Constantine 3 - Salah Boubnider', 
        name_ar: 'جامعة قسنطينة 3 - صالح بوبنيدر',
        city: 'Constantine'
    },
    { 
        value: 'annaba', 
        name_fr: 'Université Badji Mokhtar - Annaba', 
        name_ar: 'جامعة عنابة - باجي مختار',
        city: 'Annaba'
    },
    { 
        value: 'batna1', 
        name_fr: 'Université de Batna 1 - Hadj Lakhdar', 
        name_ar: 'جامعة باتنة 1 - الحاج لخضر',
        city: 'Batna'
    },
    { 
        value: 'batna2', 
        name_fr: 'Université de Batna 2 - Mostefa Ben Boulaid', 
        name_ar: 'جامعة باتنة 2 - مصطفى بن بولعيد',
        city: 'Batna'
    },
    { 
        value: 'setif1', 
        name_fr: 'Université Ferhat Abbas - Sétif 1', 
        name_ar: 'جامعة سطيف 1 - فرحات عباس',
        city: 'Sétif'
    },
    { 
        value: 'setif2', 
        name_fr: 'Université Mohamed Lamine Debaghine - Sétif 2', 
        name_ar: 'جامعة سطيف 2 - محمد لمين دباغين',
        city: 'Sétif'
    },
    { 
        value: 'blida1', 
        name_fr: 'Université Saad Dahlab - Blida 1', 
        name_ar: 'جامعة البليدة 1 - سعد دحلب',
        city: 'Blida'
    },
    { 
        value: 'blida2', 
        name_fr: 'Université Lounici Ali - Blida 2', 
        name_ar: 'جامعة البليدة 2 - علي لونيسي',
        city: 'Blida'
    },
    { 
        value: 'tlemcen', 
        name_fr: 'Université Abou Bekr Belkaïd - Tlemcen', 
        name_ar: 'جامعة تلمسان - أبو بكر بلقايد',
        city: 'Tlemcen'
    },
    { 
        value: 'bejaia', 
        name_fr: 'Université Abderrahmane Mira - Béjaïa', 
        name_ar: 'جامعة بجاية - عبد الرحمان ميرة',
        city: 'Béjaïa'
    },
    { 
        value: 'tizi', 
        name_fr: 'Université Mouloud Mammeri - Tizi Ouzou', 
        name_ar: 'جامعة تيزي وزو - مولود معمري',
        city: 'Tizi Ouzou'
    },
    { 
        value: 'mostaganem', 
        name_fr: 'Université Abdelhamid Ibn Badis - Mostaganem', 
        name_ar: 'جامعة مستغانم - عبد الحميد بن باديس',
        city: 'Mostaganem'
    },
    { 
        value: 'biskra', 
        name_fr: 'Université Mohamed Khider - Biskra', 
        name_ar: 'جامعة بسكرة - محمد خيضر',
        city: 'Biskra'
    },
    { 
        value: 'ouargla', 
        name_fr: 'Université Kasdi Merbah - Ouargla', 
        name_ar: 'جامعة ورقلة - قاصدي مرباح',
        city: 'Ouargla'
    },
    { 
        value: 'jijel', 
        name_fr: 'Université Mohamed Seddik Ben Yahia - Jijel', 
        name_ar: 'جامعة جيجل - محمد الصديق بن يحيى',
        city: 'Jijel'
    },
    { 
        value: 'skikda', 
        name_fr: 'Université 20 Août 1955 - Skikda', 
        name_ar: 'جامعة سكيكدة - 20 أوت 1955',
        city: 'Skikda'
    },
    { 
        value: 'msila', 
        name_fr: 'Université Mohamed Boudiaf - M\'sila', 
        name_ar: 'جامعة المسيلة - محمد بوضياف',
        city: 'M\'sila'
    },
    { 
        value: 'mascara', 
        name_fr: 'Université Mustapha Stambouli - Mascara', 
        name_ar: 'جامعة معسكر - مصطفى اسطمبولي',
        city: 'Mascara'
    },
    { 
        value: 'chlef', 
        name_fr: 'Université Hassiba Benbouali - Chlef', 
        name_ar: 'جامعة الشلف - حسيبة بن بوعلي',
        city: 'Chlef'
    },
    { 
        value: 'bechar', 
        name_fr: 'Université Tahri Mohamed - Béchar', 
        name_ar: 'جامعة بشار - طاهري محمد',
        city: 'Béchar'
    },
    { 
        value: 'adrar', 
        name_fr: 'Université Ahmed Draia - Adrar', 
        name_ar: 'جامعة أدرار - أحمد دراية',
        city: 'Adrar'
    },
    { 
        value: 'laghouat', 
        name_fr: 'Université Amar Telidji - Laghouat', 
        name_ar: 'جامعة الأغواط - عمار ثليجي',
        city: 'Laghouat'
    },
    { 
        value: 'tiaret', 
        name_fr: 'Université Ibn Khaldoun - Tiaret', 
        name_ar: 'جامعة تيارت - ابن خلدون',
        city: 'Tiaret'
    },
    { 
        value: 'bordj', 
        name_fr: 'Université Mohamed El Bachir El Ibrahimi - Bordj Bou Arreridj', 
        name_ar: 'جامعة برج بوعريريج - محمد البشير الإبراهيمي',
        city: 'Bordj Bou Arreridj'
    },
    { 
        value: 'djelfa', 
        name_fr: 'Université Ziane Achour - Djelfa', 
        name_ar: 'جامعة الجلفة - زيان عاشور',
        city: 'Djelfa'
    },
    { 
        value: 'tamanrasset', 
        name_fr: 'Université de Tamanrasset', 
        name_ar: 'جامعة تمنراست',
        city: 'Tamanrasset'
    },
    { 
        value: 'ghardaia', 
        name_fr: 'Université de Ghardaïa', 
        name_ar: 'جامعة غرداية',
        city: 'Ghardaïa'
    },
    { 
        value: 'khenchela', 
        name_fr: 'Université Abbas Laghrour - Khenchela', 
        name_ar: 'جامعة خنشلة - عباس لغرور',
        city: 'Khenchela'
    },
    { 
        value: 'oeb', 
        name_fr: 'Université Larbi Ben M\'hidi - Oum El Bouaghi', 
        name_ar: 'جامعة أم البواقي - العربي بن مهيدي',
        city: 'Oum El Bouaghi'
    },
    { 
        value: 'souk', 
        name_fr: 'Université Mohamed Chérif Messaadia - Souk Ahras', 
        name_ar: 'جامعة سوق أهراس - محمد الشريف مساعدية',
        city: 'Souk Ahras'
    },
    { 
        value: 'mila', 
        name_fr: 'Université Abdelhafid Boussouf - Mila', 
        name_ar: 'جامعة ميلة - عبد الحفيظ بوالصوف',
        city: 'Mila'
    },
    { 
        value: 'aintemouchent', 
        name_fr: 'Université Belhadj Bouchaib - Aïn Témouchent', 
        name_ar: 'جامعة عين تموشنت - بلحاج بوشعيب',
        city: 'Aïn Témouchent'
    },
    { 
        value: 'relizane', 
        name_fr: 'Université Ahmed Zabana - Relizane', 
        name_ar: 'جامعة غليزان - أحمد زبانة',
        city: 'Relizane'
    },
    { 
        value: 'tindouf', 
        name_fr: 'Université de Tindouf', 
        name_ar: 'جامعة تندوف',
        city: 'Tindouf'
    },
    { 
        value: 'tipaza', 
        name_fr: 'Université Morsli Abdellah - Tipaza', 
        name_ar: 'جامعة تيبازة - عبد الله مرسلي',
        city: 'Tipaza'
    },
    { 
        value: 'bouira', 
        name_fr: 'Université Akli Mohand Oulhadj - Bouira', 
        name_ar: 'جامعة البويرة - أكلي محند أولحاج',
        city: 'Bouira'
    },
    { 
        value: 'illizi', 
        name_fr: 'Université d\'Illizi', 
        name_ar: 'جامعة إليزي',
        city: 'Illizi'
    }
];

const FACULTIES_DATA = [
    {
        value: 'letters',
        name_fr: 'Faculté des Lettres et Langues',
        name_ar: 'كلية الآداب واللغات'
    },
    {
        value: 'humanities',
        name_fr: 'Faculté des Sciences Humaines et Sociales',
        name_ar: 'كلية العلوم الإنسانية والاجتماعية'
    },
    {
        value: 'economics',
        name_fr: 'Faculté des Sciences Économiques, Commerciales et de Gestion',
        name_ar: 'كلية العلوم الاقتصادية والتجارية وعلوم التسيير'
    },
    {
        value: 'law',
        name_fr: 'Faculté de Droit et Sciences Politiques',
        name_ar: 'كلية الحقوق والعلوم السياسية'
    },
    {
        value: 'sciences',
        name_fr: 'Faculté des Sciences Exactes',
        name_ar: 'كلية العلوم الدقيقة'
    },
    {
        value: 'nature',
        name_fr: 'Faculté des Sciences de la Nature et de la Vie',
        name_ar: 'كلية علوم الطبيعة والحياة'
    },
    {
        value: 'medicine',
        name_fr: 'Faculté de Médecine',
        name_ar: 'كلية الطب'
    },
    {
        value: 'engineering',
        name_fr: 'Faculté de Technologie et Génie',
        name_ar: 'كلية التكنولوجيا والهندسة'
    },
    {
        value: 'architecture',
        name_fr: 'Faculté d\'Architecture et d\'Urbanisme',
        name_ar: 'كلية الهندسة المعمارية والعمران'
    },
    {
        value: 'media',
        name_fr: 'Faculté des Sciences de l\'Information et de la Communication',
        name_ar: 'كلية علوم الإعلام والاتصال'
    },
    {
        value: 'agriculture',
        name_fr: 'Faculté des Sciences Agronomiques',
        name_ar: 'كلية العلوم الفلاحية'
    },
    {
        value: 'veterinary',
        name_fr: 'Faculté de Médecine Vétérinaire',
        name_ar: 'كلية الطب البيطري'
    },
    {
        value: 'islamic',
        name_fr: 'Faculté des Sciences Islamiques',
        name_ar: 'كلية العلوم الإسلامية'
    },
    {
        value: 'sports',
        name_fr: 'Institut d\'Éducation Physique et Sportive',
        name_ar: 'معهد التربية البدنية والرياضية'
    }
];

const SPECIALIZATIONS_DATA = {
    letters: [
        { value: 'french', name_fr: 'Langue et Littérature Françaises', name_ar: 'اللغة الفرنسية وآدابها' },
        { value: 'english', name_fr: 'Langue et Littérature Anglaises', name_ar: 'اللغة الإنجليزية وآدابها' },
        { value: 'arabic', name_fr: 'Langue et Littérature Arabes', name_ar: 'اللغة العربية وآدابها' },
        { value: 'spanish', name_fr: 'Langue Espagnole', name_ar: 'اللغة الإسبانية' },
        { value: 'german', name_fr: 'Langue Allemande', name_ar: 'اللغة الألمانية' },
        { value: 'translation', name_fr: 'Traduction', name_ar: 'الترجمة' },
        { value: 'linguistics', name_fr: 'Sciences du Langage', name_ar: 'علوم اللسان' }
    ],
    humanities: [
        { value: 'psychology', name_fr: 'Psychologie', name_ar: 'علم النفس' },
        { value: 'sociology', name_fr: 'Sociologie', name_ar: 'علم الاجتماع' },
        { value: 'history', name_fr: 'Histoire', name_ar: 'التاريخ' },
        { value: 'geography', name_fr: 'Géographie', name_ar: 'الجغرافيا' },
        { value: 'philosophy', name_fr: 'Philosophie', name_ar: 'الفلسفة' },
        { value: 'anthropology', name_fr: 'Anthropologie', name_ar: 'علم الإنسان' },
        { value: 'archaeology', name_fr: 'Archéologie', name_ar: 'علم الآثار' }
    ],
    economics: [
        { value: 'economics', name_fr: 'Sciences Économiques', name_ar: 'علوم اقتصادية' },
        { value: 'management', name_fr: 'Sciences de Gestion', name_ar: 'علوم التسيير' },
        { value: 'commerce', name_fr: 'Sciences Commerciales', name_ar: 'علوم تجارية' },
        { value: 'finance', name_fr: 'Finance et Comptabilité', name_ar: 'المالية والمحاسبة' },
        { value: 'marketing', name_fr: 'Marketing', name_ar: 'التسويق' }
    ],
    law: [
        { value: 'public_law', name_fr: 'Droit Public', name_ar: 'القانون العام' },
        { value: 'private_law', name_fr: 'Droit Privé', name_ar: 'القانون الخاص' },
        { value: 'political_science', name_fr: 'Sciences Politiques', name_ar: 'العلوم السياسية' },
        { value: 'international_relations', name_fr: 'Relations Internationales', name_ar: 'العلاقات الدولية' }
    ],
    sciences: [
        { value: 'mathematics', name_fr: 'Mathématiques', name_ar: 'الرياضيات' },
        { value: 'physics', name_fr: 'Physique', name_ar: 'الفيزياء' },
        { value: 'chemistry', name_fr: 'Chimie', name_ar: 'الكيمياء' },
        { value: 'computer_science', name_fr: 'Informatique', name_ar: 'الإعلام الآلي' },
        { value: 'statistics', name_fr: 'Mathématiques et Statistiques', name_ar: 'الرياضيات والإحصاء' }
    ],
    nature: [
        { value: 'biology', name_fr: 'Biologie', name_ar: 'البيولوجيا' },
        { value: 'geology', name_fr: 'Géologie', name_ar: 'الجيولوجيا' },
        { value: 'environment', name_fr: 'Sciences de l\'Environnement', name_ar: 'علوم البيئة' },
        { value: 'biotechnology', name_fr: 'Biotechnologie', name_ar: 'التكنولوجيا الحيوية' },
        { value: 'ecology', name_fr: 'Écologie', name_ar: 'علم البيئة' }
    ],
    medicine: [
        { value: 'general_medicine', name_fr: 'Médecine Générale', name_ar: 'الطب العام' },
        { value: 'pharmacy', name_fr: 'Pharmacie', name_ar: 'الصيدلة' },
        { value: 'dentistry', name_fr: 'Médecine Dentaire', name_ar: 'طب الأسنان' },
        { value: 'nursing', name_fr: 'Sciences Infirmières', name_ar: 'علوم التمريض' }
    ],
    engineering: [
        { value: 'civil', name_fr: 'Génie Civil', name_ar: 'الهندسة المدنية' },
        { value: 'mechanical', name_fr: 'Génie Mécanique', name_ar: 'الهندسة الميكانيكية' },
        { value: 'electrical', name_fr: 'Génie Électrique', name_ar: 'الهندسة الكهربائية' },
        { value: 'industrial', name_fr: 'Génie Industriel', name_ar: 'الهندسة الصناعية' },
        { value: 'petroleum', name_fr: 'Génie Pétrolier', name_ar: 'هندسة البترول' },
        { value: 'mining', name_fr: 'Génie Minier', name_ar: 'هندسة المناجم' }
    ],
    architecture: [
        { value: 'architecture', name_fr: 'Architecture', name_ar: 'الهندسة المعمارية' },
        { value: 'urbanism', name_fr: 'Urbanisme', name_ar: 'التعمير' }
    ],
    media: [
        { value: 'journalism', name_fr: 'Journalisme', name_ar: 'الصحافة' },
        { value: 'communication', name_fr: 'Communication', name_ar: 'الاتصال' },
        { value: 'public_relations', name_fr: 'Relations Publiques', name_ar: 'العلاقات العامة' }
    ],
    agriculture: [
        { value: 'agronomy', name_fr: 'Agronomie', name_ar: 'الهندسة الزراعية' },
        { value: 'forestry', name_fr: 'Sciences Forestières', name_ar: 'علوم الغابات' },
        { value: 'food_science', name_fr: 'Sciences Alimentaires', name_ar: 'علوم الأغذية' }
    ],
    veterinary: [
        { value: 'veterinary', name_fr: 'Médecine Vétérinaire', name_ar: 'الطب البيطري' }
    ],
    islamic: [
        { value: 'sharia', name_fr: 'Charia et Droit', name_ar: 'الشريعة والقانون' },
        { value: 'usul_din', name_fr: 'Sciences Islamiques', name_ar: 'أصول الدين' }
    ],
    sports: [
        { value: 'physical_education', name_fr: 'Éducation Physique et Sportive', name_ar: 'التربية البدنية والرياضية' }
    ]
};

// Export data
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        UNIVERSITIES_DATA,
        FACULTIES_DATA,
        SPECIALIZATIONS_DATA
    };
}
