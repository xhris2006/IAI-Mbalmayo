document.addEventListener('DOMContentLoaded', () => {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
      const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
      menuBtn.setAttribute('aria-expanded', (!expanded).toString());
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
          mobileMenu.classList.add('hidden');
          menuBtn && menuBtn.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  const form = document.getElementById('apply-form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const alertBox = document.getElementById('form-alert');
      const name = document.getElementById('full-name');
      const email = document.getElementById('email');
      const phone = document.getElementById('phone');
      const level = document.getElementById('level');
      const program = document.getElementById('program');
      const message = document.getElementById('message');

      const errors = [];
      const emailOk = email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
      const phoneOk = phone && phone.value.trim().length >= 6;

      if (!name || !name.value.trim()) errors.push('Veuillez indiquer votre nom complet.');
      if (!emailOk) errors.push('Veuillez entrer une adresse email valide.');
      if (!phoneOk) errors.push('Veuillez indiquer un numéro de téléphone valide.');
      if (!level || !level.value) errors.push('Veuillez sélectionner votre niveau d\'étude.');
      if (!program || !program.value) errors.push('Veuillez choisir une formation.');
      if (!message || !message.value.trim()) errors.push('Veuillez ajouter un message.');

      if (alertBox) {
        if (errors.length) {
          alertBox.className = 'notice-error';
          alertBox.textContent = errors[0];
          alertBox.classList.remove('hidden');
          return;
        }
        alertBox.className = 'notice-success';
        alertBox.textContent = 'Merci. Votre candidature a été préparée. Nous vous répondons sous 48h.';
        alertBox.classList.remove('hidden');
      }

      const whatsappNumber = '237694600007';
      const text = [
        '*NOUVELLE CANDIDATURE - IAI MBALMAYO*',
        `Nom: ${name.value.trim()}`,
        `Email: ${email.value.trim()}`,
        `Téléphone: ${phone.value.trim()}`,
        `Niveau d\'étude: ${level.value}`,
        `Formation: ${program.value}`,
        `Message: ${message.value.trim()}`
      ].join('\n');

      const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
      window.open(url, '_blank', 'noopener');
      form.reset();
    });
  }
});
