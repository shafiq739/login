let users = [];

      function submitSignup() {
          const username = document.getElementById('signupUsername').value;
          const email = document.getElementById('signupEmail').value;
          const password = document.getElementById('signupPassword').value;

          if (username && email && password) {
              users.push({ username, email, password });
              alert(`Thank you for signing up, ${username}!`);
              console.log(`User signed up with Username: ${username}, Email: ${email}`);
              document.getElementById('signupForm').reset();
          } else {
              alert('Please fill in all fields.');
          }
      }

      function submitLogin() {
          const loginUsername = document.getElementById('loginUsername').value;
          const loginPassword = document.getElementById('loginPassword').value;

          const user = users.find(u => (u.username === loginUsername || u.email === loginUsername) && u.password === loginPassword);

          if (user) {
              alert(`Welcome back, ${user.username}!`);
              console.log(`User logged in with Username: ${user.username}`);
              showWelcomePage(user.username);
          } else {
              alert('Invalid username/email or password. Please try again.');
          }
      }

      function showWelcomePage(username) {
          document.getElementById('signupContainer').style.display = 'none';
          document.getElementById('loginContainer').style.display = 'none';
          document.getElementById('welcomeContainer').style.display = 'block';
          document.getElementById('welcomeMessage').innerText = Welcome, `${username}!`;
      }

      function showLoginPage() {
          document.getElementById('signupContainer').style.display = 'none';
          document.getElementById('loginContainer').style.display = 'block';
          document.getElementById('welcomeContainer').style.display = 'none';
      }

      function showSignupPage() {
          document.getElementById('signupContainer').style.display = 'block';
          document.getElementById('loginContainer').style.display = 'none';
          document.getElementById('welcomeContainer').style.display = 'none';
      }