const WHATSAPP_NUMBER = '918585989137';
const PRESET_MESSAGE = 'Hi! Abhishek I need help.';

const translations = {
  en: {
    badge: 'Your Digital Center',
    heroTitle: 'Abhishek Online Center',
    heroText: 'All government and online services in one place. Fast, secure, and reliable digital support for every need.',
    serviceBtn: 'Our Services',
    whatsappBtn: 'WhatsApp Help',
    slide1Title: 'Digital India Support',
    slide1Text: 'Trusted guidance for government and digital service work.',
    slide2Title: 'Fast & Transparent',
    slide2Text: 'Clear fees, quick processing, and reliable updates.',
    slide3Title: 'Friendly Support',
    slide3Text: 'Get help from your first enquiry to final completion.',
    aboutEyebrow: 'Why choose us',
    aboutTitle: 'Your digital service partner',
    feature1Title: 'Fast Service',
    feature1Text: 'We help process applications quickly and keep every step simple and clear.',
    feature2Title: 'Secure Process',
    feature2Text: 'Your documents and personal details stay safe, private, and handled with care.',
    feature3Title: 'Transparent Fees',
    feature3Text: 'No hidden charges. Honest pricing and clear guidance for every service.',
    servicesEyebrow: 'Main services',
    servicesTitle: 'Everything you need in one place',
    serviceAadhaarTitle: 'Aadhaar Services',
    serviceAadhaarText: 'Aadhaar updates, corrections, biometric support, and document guidance.',
    servicePanTitle: 'PAN Card',
    servicePanText: 'PAN applications, corrections, and new card support with quick processing.',
    serviceBankTitle: 'Banking & AEPS',
    serviceBankText: 'AEPS, money transfer, and safe banking support using Aadhaar-linked access.',
    serviceCertTitle: 'Certificates',
    serviceCertText: 'Caste, domicile, income, and other official certificate help.',
    serviceGovTitle: 'Government Schemes',
    serviceGovText: 'PM Kisan, ration, e-Shramik, and other government support applications.',
    serviceUtilityTitle: 'Utility Bills',
    serviceUtilityText: 'Electricity, mobile, DTH, and gas bill payment support.',
    formsEyebrow: 'All forms',
    formsTitle: 'Choose the service you need',
    formAadhaar: 'Aadhaar Services',
    formPan: 'PAN Card',
    formCertificate: 'Certificates',
    formBank: 'Banking & AEPS',
    formScheme: 'Government Schemes',
    formOther: 'Other Services',
    contactEyebrow: 'Quick enquiry',
    contactTitle: 'Let us help you today',
    contactText: 'Fill in your details and we will contact you quickly through WhatsApp or call.',
    fieldName: 'Full Name',
    fieldPhone: 'Mobile Number',
    fieldService: 'Select Service',
    selectDefault: 'Select service',
    selectAadhaar: 'Aadhaar Services',
    selectPan: 'PAN Card',
    selectCertificate: 'Certificates',
    selectBank: 'Banking & AEPS',
    selectScheme: 'Government Schemes',
    selectOther: 'Other',
    submitBtn: 'Send Enquiry',
    footerText: 'Built for trusted digital support'
  },
  hi: {
    badge: 'आपका डिजिटल सेंटर',
    heroTitle: 'अभिषेक ऑनलाइन सेंटर',
    heroText: 'सभी सरकारी और ऑनलाइन सेवाएं एक ही स्थान पर। तेज, सुरक्षित और भरोसेमंद डिजिटल सहायता।',
    serviceBtn: 'हमारी सेवाएं',
    whatsappBtn: 'व्हाट्सऐप मदद',
    slide1Title: 'डिजिटल इंडिया सहायता',
    slide1Text: 'सरकारी और डिजिटल सेवाओं के लिए भरोसेमंद मार्गदर्शन।',
    slide2Title: 'तेज़ और पारदर्शी',
    slide2Text: 'स्पष्ट शुल्क, जल्दी प्रक्रिया और सही अपडेट।',
    slide3Title: 'दोस्तीपूर्ण सहायता',
    slide3Text: 'पहली enquiry से लेकर अंतिम काम तक मदद मिलती है।',
    aboutEyebrow: 'हम क्यों चुनें',
    aboutTitle: 'आपका डिजिटल सेवा भागीदार',
    feature1Title: 'तेज़ सेवा',
    feature1Text: 'हम आवेदन को जल्दी और स्पष्ट तरीके से पूरा करने में मदद करते हैं।',
    feature2Title: 'सुरक्षित प्रक्रिया',
    feature2Text: 'आपके दस्तावेज़ और जानकारी सुरक्षित, निजी और सावधानी से संभाले जाते हैं।',
    feature3Title: 'पारदर्शी शुल्क',
    feature3Text: 'कोई छिपा शुल्क नहीं। हर सेवा के लिए साफ और सही pricing।',
    servicesEyebrow: 'मुख्य सेवाएँ',
    servicesTitle: 'सब कुछ एक ही जगह पर',
    serviceAadhaarTitle: 'आधार सेवाएँ',
    serviceAadhaarText: 'आधार अपडेट, सुधार, बायोमेट्रिक सहायता और दस्तावेज़ मार्गदर्शन।',
    servicePanTitle: 'पैन कार्ड',
    servicePanText: 'पैन आवेदन, सुधार और नए कार्ड की जल्दी प्रक्रिया।',
    serviceBankTitle: 'बैंकिंग और AEPS',
    serviceBankText: 'AEPS, पैसे ट्रांसफर और सुरक्षित बैंकिंग सहायता।',
    serviceCertTitle: 'प्रमाणपत्र',
    serviceCertText: 'जाति, निवास, आय और अन्य सरकारी प्रमाणपत्र की सहायता।',
    serviceGovTitle: 'सरकारी योजनाएँ',
    serviceGovText: 'PM Kisan, राशन कार्ड, e-Shramik और अन्य सरकारी आवेदन।',
    serviceUtilityTitle: 'यूटिलिटी बिल',
    serviceUtilityText: 'बिजली, मोबाइल, DTH और गैस बिल भुगतान सहायता।',
    formsEyebrow: 'सभी फॉर्म',
    formsTitle: 'अपनी सेवा चुनें',
    formAadhaar: 'आधार सेवाएँ',
    formPan: 'पैन कार्ड',
    formCertificate: 'प्रमाणपत्र',
    formBank: 'बैंकिंग और AEPS',
    formScheme: 'सरकारी योजनाएँ',
    formOther: 'अन्य सेवाएँ',
    contactEyebrow: 'त्वरित enquiry',
    contactTitle: 'आज ही मदद लें',
    contactText: 'अपनी जानकारी भरें, हम तुरंत WhatsApp या कॉल के जरिए संपर्क करेंगे।',
    fieldName: 'पूरा नाम',
    fieldPhone: 'मोबाइल नंबर',
    fieldService: 'सेवा चुनें',
    selectDefault: 'सेवा चुनें',
    selectAadhaar: 'आधार सेवाएँ',
    selectPan: 'पैन कार्ड',
    selectCertificate: 'प्रमाणपत्र',
    selectBank: 'बैंकिंग और AEPS',
    selectScheme: 'सरकारी योजनाएँ',
    selectOther: 'अन्य',
    submitBtn: 'Enquiry भेजें',
    footerText: 'बिराजमान डिजिटल सहायता के लिए बनाया गया'
  }
};

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');
const langButtons = document.querySelectorAll('.lang-btn');
const i18nEls = document.querySelectorAll('[data-i18n]');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
const cscForm = document.getElementById('cscForm');
const formLinks = document.querySelectorAll('.form-link');

if (menuToggle && navMenu) {
  menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
  });
}

function updateLanguage(lang) {
  const activeLang = translations[lang] ? lang : 'en';
  document.documentElement.lang = activeLang;

  i18nEls.forEach((element) => {
    const key = element.getAttribute('data-i18n');
    if (translations[activeLang][key]) {
      element.textContent = translations[activeLang][key];
    }
  });

  langButtons.forEach((button) => {
    button.classList.toggle('active', button.dataset.lang === activeLang);
  });
}

langButtons.forEach((button) => {
  button.addEventListener('click', () => {
    updateLanguage(button.dataset.lang);
  });
});

let slideIndex = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });

  dots.forEach((dot, i) => {
    dot.classList.toggle('active', i === index);
  });
}

setInterval(() => {
  slideIndex = (slideIndex + 1) % slides.length;
  showSlide(slideIndex);
}, 2800);

dots.forEach((dot) => {
  dot.addEventListener('click', () => {
    slideIndex = Number(dot.dataset.slide);
    showSlide(slideIndex);
  });
});

function openWhatsApp(name, phone, service) {
  const message = `Hi! Abhishek I need help.\nName: ${name}\nPhone: ${phone}\nService: ${service}`;
  const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank');
}

if (cscForm) {
  cscForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const service = document.getElementById('service').value;

    if (!name || !phone || !service) {
      alert('Please fill all fields before sending.');
      return;
    }

    openWhatsApp(name, phone, service);
    cscForm.reset();
  });
}

formLinks.forEach((link) => {
  link.addEventListener('click', () => {
    const chosenService = link.dataset.service || 'Other';
    const serviceSelect = document.getElementById('service');
    if (serviceSelect) {
      const matchingOption = Array.from(serviceSelect.options).find((option) => option.value === chosenService);
      if (matchingOption) {
        serviceSelect.value = chosenService;
      }
    }
  });
});

updateLanguage('en');
