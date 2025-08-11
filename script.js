// Année automatique dans le footer
document.getElementById('year').textContent = new Date().getFullYear();

// Adresse email "légèrement" obfusquée dans la page (évite quelques bots très basiques)
const user = 'contact';
const domain = 'tondomaine.fr';
const email = `${user}@${domain}`;
const mailtoDirect = document.getElementById('mailto-direct');
if (mailtoDirect) {
  mailtoDirect.href = `mailto:${email}?subject=Demande%20d%27information&body=Bonjour%2C%0A%0AJe%20souhaite%20en%20savoir%20plus.%0A%0ABien%20cordialement%2C%0A`;
}

// Construit l’URL mailto à partir du formulaire et redirige
function buildMailtoAndGo(e) {
  e.preventDefault();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const fromEmail = document.getElementById('fromEmail').value.trim();

  const parts = [];
  if (subject) parts.push('subject=' + encodeURIComponent(subject));
  // on ajoute l'email de l'expéditeur au début du body pour que tu puisses le voir aisément
  const bodyPrefix = fromEmail ? `De: ${fromEmail}\n\n` : '';
  parts.push('body=' + encodeURIComponent(bodyPrefix + message));

  const mailto = `mailto:${email}?` + parts.join('&');
  window.location.href = mailto;
  return false;
}
