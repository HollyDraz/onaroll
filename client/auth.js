const API_URL = 'http://localhost:3000/api/auth';
const output = document.getElementById('output');

// ---------- SIGNUP ----------
document.getElementById('signup-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const username = document.getElementById('signup-username').value;
  const email = document.getElementById('signup-email').value;
  const password = document.getElementById('signup-password').value;

  try {
    const res = await fetch(`${API_URL}/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, email, password })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);

    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  } catch (err) {
    output.textContent = 'Signup failed';
  }
});

// ---------- LOGIN ----------
document.getElementById('login-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('login-email').value;
  const password = document.getElementById('login-password').value;

  try {
    const res = await fetch(`${API_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);

    if (data.token) {
      localStorage.setItem('token', data.token);
    }
  } catch (err) {
    output.textContent = 'Login failed';
  }
});
