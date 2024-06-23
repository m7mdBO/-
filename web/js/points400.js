document.addEventListener('DOMContentLoaded', () => {
    // Function to prompt for team names and store them
    function promptForTeamNames() {
        let team1Name = localStorage.getItem('team1Name');
        let team2Name = localStorage.getItem('team2Name');

        // Check if names are not set or are empty strings
        if (!team1Name || team1Name.trim() === "") {
            team1Name = prompt("Enter team 1 name:");
            localStorage.setItem('team1Name', team1Name);
        }

        if (!team2Name || team2Name.trim() === "") {
            team2Name = prompt("Enter team 2 name:");
            localStorage.setItem('team2Name', team2Name);
        }

        // Get the elements
        const team1NameElement = document.getElementById('team1_name');
        const team2NameElement = document.getElementById('team2_name');
        const team1Button = document.getElementById('team1_button');
        const team2Button = document.getElementById('team2_button');

        // Display the team names if elements exist
        if (team1NameElement) {
            team1NameElement.textContent = team1Name;
        }

        if (team2NameElement) {
            team2NameElement.textContent = team2Name;
        }

        // Set the button text if buttons exist
        if (team1Button) {
            team1Button.textContent = team1Name;
        }

        if (team2Button) {
            team2Button.textContent = team2Name;
        }
    }

    // Function to update scores
    function updateScores() {
        const team1Score = localStorage.getItem('team1Score') || '0';
        const team2Score = localStorage.getItem('team2Score') || '0';

        const team1ScoreElement = document.getElementById('team1_score');
        const team2ScoreElement = document.getElementById('team2_score');

        if (team1ScoreElement) {
            team1ScoreElement.textContent = team1Score;
        }

        if (team2ScoreElement) {
            team2ScoreElement.textContent = team2Score;
        }
    }

    // Function to handle button clicks and update scores
    function handleButtonClick(team) {
        let team1Score = parseInt(localStorage.getItem('team1Score') || '0');
        let team2Score = parseInt(localStorage.getItem('team2Score') || '0');

        if (team === 'team1') {
            team1Score += 400;
            localStorage.setItem('team1Score', team1Score.toString());
        } else if (team === 'team2') {
            team2Score += 400;
            localStorage.setItem('team2Score', team2Score.toString());
        }

        // Update the displayed score
        updateScores();
    }

    // Function to disable link after it's clicked
    function disableLink(linkId) {
        const link = document.getElementById(linkId);
        if (!link) {
            console.error(`Element with ID '${linkId}' not found.`);
            return; // Exit function early if element is not found
        }
    
        if (localStorage.getItem(linkId)) {
            link.classList.add('disabled'); // Add a class to change appearance
            link.removeEventListener('click', disableLink); // Remove the event listener
        }
        link.addEventListener('click', () => {
            localStorage.setItem(linkId, true); // Save state in localStorage
            link.classList.add('disabled');
        });
    }

    // Call the function to prompt for team names when the DOM is loaded
    promptForTeamNames();
    updateScores();

    // Ensure the elements exist before attaching event listeners
    const team1Button = document.getElementById('team1_button');
    const team2Button = document.getElementById('team2_button');

    if (team1Button) {
        team1Button.onclick = function() {
            handleButtonClick('team1');
        };
    }

    if (team2Button) {
        team2Button.onclick = function() {
            handleButtonClick('team2');
        };
    }

    // Disable links if already clicked
    disableLink('flagsLink1');
    disableLink('flagsLink2');
    disableLink('flagsLink3');
    disableLink('flagsLink4');



    // Add more disableLink calls for other links as needed
});