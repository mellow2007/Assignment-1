function toggleDropdown(dropdownId) {
    // Close all dropdowns first
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach((dropdown) => {
        if (dropdown.id !== dropdownId) {
            dropdown.style.display = 'none';
        }
    });

    // Toggle the clicked dropdown
    const dropdown = document.getElementById(dropdownId);
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';

    // Hide deck display when a new dropdown is toggled
    document.getElementById('deck-display').style.display = 'none';
}

function showDeck(variant) {
    const deckData = {
        // TCG Decks
        'tcg-pure': {
            summary: "TCG Pure P.U.N.K. deck focusing on consistency and control.",
            image: "path/to/tcg-pure.jpg",
            pros: ["Consistent draws", "Easy to pilot"],
            cons: ["Weak to specific counters"],
        },
        'tcg-kashtira': {
            summary: "TCG P.U.N.K. Kashtira combining banishing and summoning.",
            image: "path/to/tcg-kashtira.jpg",
            pros: ["Strong board presence", "Flexible combos"],
            cons: ["Weak against anti-banishing tech"],
        },
        'tcg-zombies': {
            summary: "TCG P.U.N.K. Zombies leveraging graveyard effects.",
            image: "path/to/tcg-zombies.jpg",
            pros: ["Resilient strategy", "Graveyard synergy"],
            cons: ["Weak to banishing effects"],
        },
        'tcg-gold-pride': {
            summary: "TCG P.U.N.K. Gold Pride deck for explosive plays.",
            image: "path/to/tcg-gold-pride.jpg",
            pros: ["High burst potential", "Synergy with P.U.N.K."],
            cons: ["Inconsistent setups"],
        },
        'tcg-therion': {
            summary: "TCG P.U.N.K. Therion focusing on control and aggression.",
            image: "path/to/tcg-therion.jpg",
            pros: ["Powerful boss monsters", "Strong board control"],
            cons: ["Relies on specific combos"],
        },
        'tcg-phantom-knight-adventure': {
            summary: "TCG P.U.N.K. Phantom Knight Adventure blending adventure combos.",
            image: "path/to/tcg-pka.jpg",
            pros: ["Flexible strategies", "Strong extensions"],
            cons: ["Resource intensive"],
        },
        'tcg-horus': {
            summary: "TCG P.U.N.K. Horus for synchro and board control.",
            image: "path/to/tcg-horus.jpg",
            pros: ["Unique mechanics", "Board presence"],
            cons: ["Complex combos"],
        },

        // OCG Decks
        'ocg-pure': {
            summary: "OCG Pure P.U.N.K. deck focusing on consistency and control.",
            image: "path/to/ocg-pure.jpg",
            pros: ["Easy to pilot", "Good draw power"],
            cons: ["Limited extra deck options"],
        },
        'ocg-zombies': {
            summary: "OCG P.U.N.K. Zombies focusing on graveyard manipulation.",
            image: "path/to/ocg-zombies.jpg",
            pros: ["Strong graveyard synergy", "Consistent effects"],
            cons: ["Weak to anti-graveyard tech"],
        },
        'ocg-gold-pride': {
            summary: "OCG P.U.N.K. Gold Pride for explosive combos.",
            image: "path/to/ocg-gold-pride.jpg",
            pros: ["High synergy", "Explosive power"],
            cons: ["Resource heavy"],
        },
        'ocg-therion': {
            summary: "OCG P.U.N.K. Therion focusing on control and aggression.",
            image: "path/to/ocg-therion.jpg",
            pros: ["Powerful combos", "Good consistency"],
            cons: ["Vulnerable to hand traps"],
        },
        'ocg-horus': {
            summary: "OCG P.U.N.K. Horus offering unique synchro options.",
            image: "path/to/ocg-horus.jpg",
            pros: ["Strong synergy", "Good resource management"],
            cons: ["Complex combo lines"],
        },

        // Master Duel Decks
        'pure': {
            summary: "Pure P.U.N.K. is a consistent strategy that focuses on utilizing the archetype's full potential.",
            image: "path/to/pure-decklist.jpg",
            pros: ["Easy to pilot", "Good draw power", "Flexible combos"],
            cons: ["Can be disrupted by hand traps", "Limited extra deck options"],
        },
        'kashtira': {
            summary: "P.U.N.K. Kashtira combines powerful banishing and summoning tools with the P.U.N.K. engine.",
            image: "path/to/kashtira-decklist.jpg",
            pros: ["Strong board presence", "Good synergy", "High ceiling"],
            cons: ["Weak against anti-banishing tech", "Complex to pilot"],
        },
        'virtual-world': {
            summary: "P.U.N.K. Virtual World blends synchro and XYZ mechanics for versatile playstyles.",
            image: "path/to/virtual-world-decklist.jpg",
            pros: ["Strong resource management", "Multiple play routes"],
            cons: ["High skill ceiling", "Prone to bricking"],
        },
        'zombies': {
            summary: "P.U.N.K. Zombies focuses on graveyard control and recurring resources.",
            image: "path/to/zombies-decklist.jpg",
            pros: ["Graveyard synergy", "Resilient strategy"],
            cons: ["Weak to graveyard banishing effects", "Limited speed"],
        },
        'goblin-biker': {
            summary: "P.U.N.K. Goblin Biker is an aggressive strategy utilizing Synchro combos.",
            image: "path/to/goblin-biker-decklist.jpg",
            pros: ["High combo potential", "Explosive power"],
            cons: ["Glass cannon", "Resource intensive"],
        },
    };

    const selectedDeck = deckData[variant];
    const deckDisplay = document.getElementById('deck-display');

    if (selectedDeck) {
        // Update deck details
        document.getElementById('deck-summary').textContent = selectedDeck.summary;
        document.getElementById('deck-image').src = selectedDeck.image;

        const prosList = document.getElementById('pros-list');
        const consList = document.getElementById('cons-list');

        prosList.innerHTML = selectedDeck.pros.map((pro) => `<li>${pro}</li>`).join('');
        consList.innerHTML = selectedDeck.cons.map((con) => `<li>${con}</li>`).join('');

        // Display the deck
        deckDisplay.style.display = 'block';
    }
}
