const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const errorEl = document.getElementById('error');

// LOGIN
if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('http://localhost:3000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        errorEl.textContent = data.message || 'Login failed tough luck';
        return;
      }

      localStorage.setItem('token', data.token);
      window.location.href = 'home.html';

    } catch (err) {
      console.error(err);
      errorEl.textContent = 'Server error';
    }
  });
}

// SIGNUP
if (signupForm) {
  signupForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    try {
      const res = await fetch('http://localhost:3000/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password })
      });

      const data = await res.json();

      if (!res.ok) {
        errorEl.textContent = data.message || 'Signup failed';
        return;
      }

      // Optional auto-login after signup
      localStorage.setItem('token', data.token);
      window.location.href = 'home.html';

    } catch (err) {
      console.error(err);
      errorEl.textContent = 'Server error';
    }
  });
}
