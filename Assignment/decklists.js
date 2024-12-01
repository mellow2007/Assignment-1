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
            summary: "Pure P.U.N.K. relies on its strong draw power and powerful on field effects to win games.",
            image: "https://ygodeckprofile.com/wp-content/uploads/2023/05/image-16.png",
            pros: ["Decently high consistency", "Easy to pilot", "Able to run a lot of non-engine"],
            cons: ["Difficult to play through interruption", "Endboard is easily outable"],
        },
        'tcg-kashtira': {
            summary: "P.U.N.K. Kashtira leverages the powerful Ariseheart on top of Amazing Dragon's effect.",
            image: "path/to/tcg-kashtira.jpg",
            pros: ["Strong board presence", "Can play through disruption", "The Deck can easily make generic lvl 10 Synchros.", "Fenrir and Unicorn themselves are powerful Monsters by themselves."],
            cons: ["Poor sequencing could lead to a sub-par endboard", "Ariseheart is counterintutive to P.U.N.K as punk relies on the graveyard", "Using the Kash engine can trigger droll, losing your chance to start your P.U.N.K. combos.", "Drawing into Pressured Planet while Extreme is already activated on the field is technically a harder brick"],
        },
        'tcg-zombies': {
            summary: "P.U.N.K. Zombies leverages graveyard effects and mills.",
            image: "path/to/tcg-zombies.jpg",
            pros: ["Resilient strategy", "Graveyard synergy"],
            cons: ["Weak to banishing effects"],
        },
        'tcg-gold-pride': {
            summary: "P.U.N.K. Gold Pride synergieses well by cutting your own life points.",
            image: "path/to/tcg-gold-pride.jpg",
            pros: ["High burst potential", "Synergy with P.U.N.K.", ""],
            cons: ["Inconsistent setups"],
        },
        'tcg-therion': {
            summary: "TCG P.U.N.K. Therion focusing on control and aggression.",
            image: "path/to/tcg-therion.jpg",
            pros: ["Your end boards are really really good and will often end the game turn 2 but you also have amazing follow-up and grind game.", "Very early Omni-Negate to protect your setup."],
            cons: ["Less space for non-engine cards without exceeding 40 cards.", "While it doesn't brick often, when it does, the bricks in this Deck are unsalvageable."],
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
            image: "images/pureocg.png",
            pros: ["Easy to pilot", "Good draw power"],
            cons: ["Weak to current format", "Board can be broken easily by threatening battle"],
        },
        'ocg-zombies': {
            summary: "OCG P.U.N.K. Zombies focusing on graveyard manipulation.",
            image: "path/to/ocg-zombies.jpg",
            pros: ["Strong graveyard synergy", "Consistent effects"],
            cons: ["Weak to anti-graveyard tech"],
        },
        'ocg-gold-pride': {
            summary: "P.U.N.K. Gold Pride focuses on explosive combos.",
            image: "https://ygodeckprofile.com/wp-content/uploads/2023/05/image-107.png",
            pros: ["High synergy", "Explosive power", "Cuts LP Quickly"],
            cons: ["Resource heavy", "Little room for non-engine"],
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
            image: "lowkeyidk.png",
            pros: ["Easy to pilot", "Good draw power", "Flexible combos"],
            cons: ["Can be disrupted by hand traps", "Limited extra deck options"],
        },
        'kashtira': {
            summary: "P.U.N.K. Kashtira leverages the powerful Ariseheart on top of Amazing Dragon's effect.",
            image: "images/mdpunkkash.png",
            pros: ["Strong board presence", "Can play through disruption", "The Deck can easily make generic lvl 10 Synchros.", "Fenrir and Unicorn themselves are powerful Monsters by themselves."],
            cons: ["Poor sequencing could lead to a sub-par endboard", "Ariseheart is counterintutive to P.U.N.K as punk relies on the graveyard", "Using the Kash engine can trigger droll, losing your chance to start your P.U.N.K. combos.", "Drawing into Pressured Planet while Extreme is already activated on the field is technically a harder brick"],
        },
        'virtual-world': {
            summary: "P.U.N.K. Virtual World blends synchro and XYZ mechanics for versatile playstyles.",
            image: "path/to/vwvari",
            pros: ["Significantly improves the consistency of your Virtual World plays, thanks to the P.U.N.K. engine adding Lulu to your Hand if it goes off.", "Opening with the P.U.N.K. engine also significantly improves the end boards set up by the Virtual World engine.", "ou have room to play a minimum of 9 Hand Traps, meaning you aren’t completely reliant on having to go first to eke out wins on ladder. You can cut a copy of Ze Amin and/or Virtual World Gate - Qinglong to play up to 11 Hand Traps."],
            cons: ["Some anti-synergy due to competing with the Virtual World engine for your Normal Summon.", "Virtual World has a difficult matchup when going second against most of the meta as of this writing. The P.U.N.K. engine does little to fix those matchups."],
        },
        'zombies': {
            summary: "P.U.N.K. Zombies focuses on graveyard control and recurring resources.",
            image: "path/to/zombies-decklist.jpg",
            pros: ["Very consistent endboard if your P.U.N.K cards resolve.", "Easy access to Zombie World which shuts down Decks that rely on Monster types (Tri-Brigade) or tribute Summons (like Floowandereeze)."],
            cons: ["Relies heavily on your P.U.N.K. cards to do anything resembling a combo.", "Not enough room for non-engine without exceeding 40 cards."],
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
        //all this javascript does is show off the decks after you click the buttons for the drop down menu.
        // Display the deck
        deckDisplay.style.display = 'block';
    }
}

