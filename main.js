import translations from './translations.js';

function updateLanguage(lang) {
    // Update active button
    document.querySelectorAll('.language-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update all translatable elements
    const namesElement = document.querySelector('.names textPath');
    if (namesElement) {
        namesElement.textContent = translations[lang].names;
    }
    
    document.querySelector('.save-date').textContent = translations[lang].saveDate;
    document.querySelector('.date').textContent = translations[lang].date;
    document.querySelector('.location').textContent = translations[lang].location;
    
    // Update celebration message
    const celebrationMessage = document.querySelector('.celebration-message p');
    if (celebrationMessage) {
        celebrationMessage.textContent = translations[lang].celebrationMessage;
    }
    
    // Update section headings and content
    document.querySelector('section:nth-child(1) h2').textContent = translations[lang].venue;
    document.querySelector('section:nth-child(1) p:nth-child(2)').textContent = translations[lang].venueText;
    
    // Update event details
    const eventDetailsSection = document.querySelector('section h2:nth-of-type(2)');
    if (eventDetailsSection) {
        eventDetailsSection.textContent = translations[lang].eventDetails;
        const timeline = eventDetailsSection.nextElementSibling;
        if (timeline) {
            timeline.querySelector('.time:nth-child(1)').textContent = '18:00';
            timeline.querySelector('.event:nth-child(2)').textContent = translations[lang].guestArrival;
            timeline.querySelector('.time:nth-child(3)').textContent = '20:00';
            timeline.querySelector('.event:nth-child(4)').textContent = translations[lang].dinnerBegins;
        }
    }
    
    // Update dress code section
    const dressCodeSection = document.querySelector('section h2:nth-of-type(3)');
    if (dressCodeSection) {
        dressCodeSection.textContent = translations[lang].dressCode;
        dressCodeSection.nextElementSibling.textContent = translations[lang].dressCodeText;
    }

    // Update what to expect section
    const whatToExpectSection = document.querySelector('section h2:nth-of-type(4)');
    if (whatToExpectSection) {
        whatToExpectSection.textContent = translations[lang].whatToExpect;
        const expectationsList = whatToExpectSection.nextElementSibling;
        if (expectationsList) {
            const items = expectationsList.querySelectorAll('li');
            translations[lang].expectations.forEach((text, index) => {
                if (items[index]) {
                    items[index].textContent = text;
                }
            });
        }
    }
    
    // Update accommodation section
    const accommodationSection = document.querySelector('section h2:nth-of-type(5)');
    if (accommodationSection) {
        accommodationSection.textContent = translations[lang].accommodation;
        accommodationSection.nextElementSibling.textContent = translations[lang].accommodationText;
    }
    
    // Update RSVP section
    document.querySelector('section:nth-child(2) h2').textContent = translations[lang].rsvp;
    document.querySelector('section:nth-child(2) p').textContent = translations[lang].rsvpText;
    document.querySelector('.rsvp-button').textContent = translations[lang].rsvpButton;
    
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

// Update language on page load
updateLanguage('en'); 