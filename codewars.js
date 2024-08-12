const API_URL = 'https://www.codewars.com/api/v1/users/spereddigari23';
async function fetchUserData() {
    try {
        const response = await fetch(API_URL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const score = data.honor;
        const rank = data.leaderboardPosition;
        document.getElementById('score').textContent = score;
        document.getElementById('rank').textContent = rank;
    } catch (error) {
        console.error('Error fetching user data:', error);
        document.getElementById('score').textContent = 'Error';
        document.getElementById('rank').textContent = 'Error';
    }
}
fetchUserData();
