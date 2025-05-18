import translations from './translations.js';

function updateLanguage(lang) {
    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    document.querySelector('.names').textContent = translations[lang].names;
    document.querySelector('.save-date').textContent = translations[lang].saveDate;
    document.querySelector('.date').textContent = translations[lang].date;
    document.querySelector('.location').textContent = translations[lang].location;
    
    // Update section headings and content
    document.querySelector('section:nth-child(1) h2').textContent = translations[lang].eventDetails;
    document.querySelector('section:nth-child(2) h2').textContent = translations[lang].venue;
    document.querySelector('section:nth-child(2) p:nth-child(2)').textContent = translations[lang].venueText;
    
    document.querySelector('section:nth-child(3) h2').textContent = translations[lang].accommodation;
    document.querySelector('section:nth-child(3) p:nth-child(2)').textContent = translations[lang].accommodationText;
    document.querySelector('section:nth-child(3) p:nth-child(3)').textContent = translations[lang].accommodationText2;
    
    document.querySelector('section:nth-child(4) h2').textContent = translations[lang].rsvp;
    document.querySelector('section:nth-child(4) p').textContent = translations[lang].rsvpText;
    
    // Update form labels
    document.querySelector('label[for="name"]').textContent = translations[lang].fullName;
    document.querySelector('label[for="email"]').textContent = translations[lang].email;
    document.querySelector('label[for="attendance"]').textContent = translations[lang].attending;
    document.querySelector('#attendance option:nth-child(1)').textContent = translations[lang].selectOption;
    document.querySelector('#attendance option:nth-child(2)').textContent = translations[lang].joyfullyAccept;
    document.querySelector('#attendance option:nth-child(3)').textContent = translations[lang].regretfullyDecline;
    document.querySelector('label[for="guests"]').textContent = translations[lang].numberOfGuests;
    document.querySelector('label[for="dietary"]').textContent = translations[lang].dietaryRestrictions;
    document.querySelector('label[for="message"]').textContent = translations[lang].messageForCouple;
    document.querySelector('button[type="submit"]').textContent = translations[lang].sendRSVP;
    
    // Update footer
    document.querySelector('footer p:nth-child(1)').textContent = translations[lang].footerText;
    document.querySelector('footer p:nth-child(2)').textContent = translations[lang].contactEmail;
}

// Add click event listeners to language buttons
document.querySelectorAll('.language-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        updateLanguage(btn.dataset.lang);
    });
});

// Handle form submission
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your RSVP! We have received your response.');
    this.reset();
}); 