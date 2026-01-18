// Translations
const translations = {
    en: {
        'nav.home': 'Home',
        'nav.about': 'About',
        'nav.services': 'Services',
        'nav.clinic': 'Clinic',
        'nav.contact': 'Contact',
        'hero.welcome': 'Welcome to',
        'hero.clinic': 'Dr. Lama Daher Dental Clinic',
        'hero.tagline': 'Your smile is our priority',
        'hero.description': 'Experience gentle, personalized dental care in a warm and welcoming environment. Over 10 years of expertise dedicated to your oral health.',
        'hero.cta': 'Book an Appointment',
        'hero.learnMore': 'Learn More',
        'hero.years': 'Years',
        'hero.graduate': 'Graduate',
        'hero.smiles': 'Smiles',
        'about.title': 'About Dr. Lama Daher',
        'about.subtitle': 'Dedicated to Excellence in Dental Care',
        'about.description': 'Dr. Lama Daher is a passionate dentist from Lebanon, graduated from the prestigious Université Saint-Joseph (USJ). With more than 10 years of professional experience, she combines expertise with compassion to provide the highest quality dental care.',
        'about.education': 'Education',
        'about.education.text': 'Doctor of Dental Surgery from Université Saint-Joseph (USJ), Beirut',
        'about.experience': 'Experience',
        'about.experience.text': '10+ years of professional practice in general and cosmetic dentistry',
        'about.values': 'Values',
        'about.values.text': 'Patient comfort, gentle care, and lasting relationships built on trust',
        'services.title': 'Our Services',
        'services.subtitle': 'Comprehensive Dental Care for the Whole Family',
        'services.general.title': 'General Dentistry',
        'services.general.description': 'Complete dental exams, cleanings, fillings, and restorative treatments to maintain your oral health.',
        'services.cosmetic.title': 'Cosmetic Dentistry',
        'services.cosmetic.description': 'Teeth whitening, veneers, and smile makeovers to enhance your natural beauty.',
        'services.preventive.title': 'Preventive Care',
        'services.preventive.description': 'Regular check-ups, dental hygiene education, and early detection to prevent future problems.',
        'services.pediatric.title': 'Pediatric Dentistry',
        'services.pediatric.description': 'Gentle, child-friendly dental care to establish healthy habits from an early age.',
        'clinic.title': 'Visit Our Clinic',
        'clinic.subtitle': 'We look forward to welcoming you',
        'clinic.hours': 'Working Hours',
        'clinic.monday': 'Monday - Friday',
        'clinic.saturday': 'Saturday',
        'clinic.sunday': 'Sunday',
        'clinic.closed': 'Closed',
        'clinic.location': 'Location',
        'clinic.address': 'Beirut, Lebanon',
        'clinic.phone': 'Phone',
        'clinic.callNow': 'Call now to book your appointment',
        'contact.title': 'Contact Us',
        'contact.subtitle': "We'd love to hear from you",
        'contact.name': 'Your Name',
        'contact.email': 'Email Address',
        'contact.message': 'Your Message',
        'contact.send': 'Send Message',
        'contact.success': "Thank you! We'll get back to you soon.",
        'footer.tagline': 'Creating beautiful smiles, one patient at a time.',
        'footer.rights': 'All rights reserved.',
        'footer.madeWith': 'Made with',
        'footer.inLebanon': 'in Lebanon'
    },
    fr: {
        'nav.home': 'Accueil',
        'nav.about': 'À propos',
        'nav.services': 'Services',
        'nav.clinic': 'Clinique',
        'nav.contact': 'Contact',
        'hero.welcome': 'Bienvenue à',
        'hero.clinic': 'Clinique Dentaire Dr. Lama Daher',
        'hero.tagline': 'Votre sourire est notre priorité',
        'hero.description': "Découvrez des soins dentaires personnalisés dans un environnement chaleureux et accueillant. Plus de 10 ans d'expertise dédiés à votre santé bucco-dentaire.",
        'hero.cta': 'Prendre Rendez-vous',
        'hero.learnMore': 'En Savoir Plus',
        'hero.years': 'Années',
        'hero.graduate': 'Diplômée',
        'hero.smiles': 'Sourires',
        'about.title': 'À propos de Dr. Lama Daher',
        'about.subtitle': "Dévouée à l'Excellence des Soins Dentaires",
        'about.description': "Dr. Lama Daher est une dentiste passionnée du Liban, diplômée de la prestigieuse Université Saint-Joseph (USJ). Avec plus de 10 ans d'expérience professionnelle, elle allie expertise et compassion pour offrir des soins dentaires de la plus haute qualité.",
        'about.education': 'Formation',
        'about.education.text': "Doctorat en Chirurgie Dentaire de l'Université Saint-Joseph (USJ), Beyrouth",
        'about.experience': 'Expérience',
        'about.experience.text': 'Plus de 10 ans de pratique professionnelle en dentisterie générale et esthétique',
        'about.values': 'Valeurs',
        'about.values.text': 'Confort du patient, soins délicats et relations durables fondées sur la confiance',
        'services.title': 'Nos Services',
        'services.subtitle': 'Soins Dentaires Complets pour Toute la Famille',
        'services.general.title': 'Dentisterie Générale',
        'services.general.description': 'Examens dentaires complets, nettoyages, obturations et traitements restaurateurs pour maintenir votre santé bucco-dentaire.',
        'services.cosmetic.title': 'Dentisterie Esthétique',
        'services.cosmetic.description': 'Blanchiment des dents, facettes et relooking du sourire pour sublimer votre beauté naturelle.',
        'services.preventive.title': 'Soins Préventifs',
        'services.preventive.description': "Bilans réguliers, éducation à l'hygiène dentaire et détection précoce pour prévenir les problèmes futurs.",
        'services.pediatric.title': 'Dentisterie Pédiatrique',
        'services.pediatric.description': 'Soins dentaires doux et adaptés aux enfants pour établir de bonnes habitudes dès le plus jeune âge.',
        'clinic.title': 'Visitez Notre Clinique',
        'clinic.subtitle': 'Nous avons hâte de vous accueillir',
        'clinic.hours': "Heures d'Ouverture",
        'clinic.monday': 'Lundi - Vendredi',
        'clinic.saturday': 'Samedi',
        'clinic.sunday': 'Dimanche',
        'clinic.closed': 'Fermé',
        'clinic.location': 'Adresse',
        'clinic.address': 'Beyrouth, Liban',
        'clinic.phone': 'Téléphone',
        'clinic.callNow': 'Appelez maintenant pour prendre rendez-vous',
        'contact.title': 'Contactez-nous',
        'contact.subtitle': 'Nous serions ravis de vous entendre',
        'contact.name': 'Votre Nom',
        'contact.email': 'Adresse Email',
        'contact.message': 'Votre Message',
        'contact.send': 'Envoyer le Message',
        'contact.success': 'Merci! Nous vous répondrons bientôt.',
        'footer.tagline': 'Créer de beaux sourires, un patient à la fois.',
        'footer.rights': 'Tous droits réservés.',
        'footer.madeWith': 'Fait avec',
        'footer.inLebanon': 'au Liban'
    },
    ar: {
        'nav.home': 'الرئيسية',
        'nav.about': 'من نحن',
        'nav.services': 'خدماتنا',
        'nav.clinic': 'العيادة',
        'nav.contact': 'اتصل بنا',
        'hero.welcome': 'مرحباً بكم في',
        'hero.clinic': 'عيادة الدكتورة لمى ضاهر لطب الأسنان',
        'hero.tagline': 'ابتسامتك هي أولويتنا',
        'hero.description': 'اختبر رعاية أسنان لطيفة وشخصية في بيئة دافئة ومرحبة. أكثر من 10 سنوات من الخبرة مكرسة لصحة فمك.',
        'hero.cta': 'احجز موعداً',
        'hero.learnMore': 'اعرف المزيد',
        'hero.years': 'سنوات خبرة',
        'hero.graduate': 'خريجة',
        'hero.smiles': 'ابتسامات',
        'about.title': 'عن الدكتورة لمى ضاهر',
        'about.subtitle': 'ملتزمة بالتميز في رعاية الأسنان',
        'about.description': 'الدكتورة لمى ضاهر طبيبة أسنان متحمسة من لبنان، تخرجت من جامعة القديس يوسف المرموقة. مع أكثر من 10 سنوات من الخبرة المهنية، تجمع بين الخبرة والرأفة لتقديم أعلى جودة من رعاية الأسنان.',
        'about.education': 'التعليم',
        'about.education.text': 'دكتوراه في جراحة الأسنان من جامعة القديس يوسف، بيروت',
        'about.experience': 'الخبرة',
        'about.experience.text': 'أكثر من 10 سنوات من الممارسة المهنية في طب الأسنان العام والتجميلي',
        'about.values': 'القيم',
        'about.values.text': 'راحة المريض، الرعاية اللطيفة، وبناء علاقات دائمة قائمة على الثقة',
        'services.title': 'خدماتنا',
        'services.subtitle': 'رعاية أسنان شاملة لجميع أفراد العائلة',
        'services.general.title': 'طب الأسنان العام',
        'services.general.description': 'فحوصات الأسنان الكاملة، التنظيف، الحشوات، والعلاجات الترميمية للحفاظ على صحة فمك.',
        'services.cosmetic.title': 'طب الأسنان التجميلي',
        'services.cosmetic.description': 'تبييض الأسنان، القشور، وتجميل الابتسامة لتعزيز جمالك الطبيعي.',
        'services.preventive.title': 'الرعاية الوقائية',
        'services.preventive.description': 'الفحوصات المنتظمة، التثقيف حول نظافة الأسنان، والكشف المبكر لمنع المشاكل المستقبلية.',
        'services.pediatric.title': 'طب أسنان الأطفال',
        'services.pediatric.description': 'رعاية أسنان لطيفة ومناسبة للأطفال لترسيخ عادات صحية منذ الصغر.',
        'clinic.title': 'زوروا عيادتنا',
        'clinic.subtitle': 'نتطلع لاستقبالكم',
        'clinic.hours': 'ساعات العمل',
        'clinic.monday': 'الاثنين - الجمعة',
        'clinic.saturday': 'السبت',
        'clinic.sunday': 'الأحد',
        'clinic.closed': 'مغلق',
        'clinic.location': 'العنوان',
        'clinic.address': 'بيروت، لبنان',
        'clinic.phone': 'الهاتف',
        'clinic.callNow': 'اتصل الآن لحجز موعد',
        'contact.title': 'اتصل بنا',
        'contact.subtitle': 'يسعدنا سماع رأيكم',
        'contact.name': 'الاسم',
        'contact.email': 'البريد الإلكتروني',
        'contact.message': 'رسالتك',
        'contact.send': 'إرسال الرسالة',
        'contact.success': 'شكراً لك! سنتواصل معك قريباً.',
        'footer.tagline': 'نخلق ابتسامات جميلة، مريض تلو الآخر.',
        'footer.rights': 'جميع الحقوق محفوظة.',
        'footer.madeWith': 'صُنع بـ',
        'footer.inLebanon': 'في لبنان'
    }
};

// Current language state
let currentLanguage = 'en';

// DOM Elements
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navMobile = document.getElementById('navMobile');
const langButtons = document.querySelectorAll('.lang-btn');
const contactForm = document.getElementById('contactForm');
const toast = document.getElementById('toast');
const currentYearEl = document.getElementById('currentYear');

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    if (currentYearEl) {
        currentYearEl.textContent = new Date().getFullYear();
    }

    // Initialize language
    setLanguage('en');
});

// Mobile menu toggle
if (mobileMenuBtn && navMobile) {
    mobileMenuBtn.addEventListener('click', function() {
        const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
        const closeIcon = mobileMenuBtn.querySelector('.close-icon');
        
        navMobile.classList.toggle('hidden');
        menuIcon.classList.toggle('hidden');
        closeIcon.classList.toggle('hidden');
    });
}

// Language switcher
langButtons.forEach(btn => {
    btn.addEventListener('click', function() {
        const lang = this.getAttribute('data-lang');
        setLanguage(lang);
    });
});

// Set language function
function setLanguage(lang) {
    currentLanguage = lang;
    
    // Update active button
    langButtons.forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Update RTL direction
    if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    } else {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', lang);
    }

    // Update all translatable elements
    document.querySelectorAll('[data-key]').forEach(el => {
        const key = el.getAttribute('data-key');
        if (translations[lang] && translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });
}

// Smooth scroll to section
function scrollToSection(event, sectionId) {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Close mobile menu if open
    if (navMobile && !navMobile.classList.contains('hidden')) {
        navMobile.classList.add('hidden');
        const menuIcon = mobileMenuBtn.querySelector('.menu-icon');
        const closeIcon = mobileMenuBtn.querySelector('.close-icon');
        menuIcon.classList.remove('hidden');
        closeIcon.classList.add('hidden');
    }
}

// Contact form submission
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Show success toast
        showToast();
        
        // Reset form
        contactForm.reset();
    });
}

// Show toast notification
function showToast() {
    if (toast) {
        // Update toast text based on current language
        const toastText = toast.querySelector('[data-key]');
        if (toastText && translations[currentLanguage]) {
            const key = toastText.getAttribute('data-key');
            toastText.textContent = translations[currentLanguage][key];
        }
        
        toast.classList.remove('hidden');
        
        // Hide after 5 seconds
        setTimeout(() => {
            toast.classList.add('hidden');
        }, 5000);
    }
}

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (header) {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.05)';
        }
    }
});
