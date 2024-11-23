

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        // console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
}, {
    rootMargin: "0px",
    threshold: 0.25,
});

const hiddenText = document.querySelectorAll('.hidden');
hiddenText.forEach((text) => observer.observe(text));

const observerSectionScrollFix = new IntersectionObserver((entries) => {
    let newEntries = entries.filter((entry) => {
        if (entry.isIntersecting !== true) {
            return true;
        }
        return false;
    });

    for (let newEntryIndex = 0; newEntryIndex < newEntries.length; newEntryIndex++) {
        const newEntry = newEntries[newEntryIndex];
        newEntry.target.scrollTo(0, 0);
    }
}, {
    rootMargin: "0px",
    threshold: 0.25,
});

const sections = document.getElementsByClassName('pseudosection');
for (let sectionIndex = 0; sectionIndex < sections.length; sectionIndex++) {
    const section = sections[sectionIndex];
    observerSectionScrollFix.observe(section);
}