const logout = () => {
  // Afficher "logout" sur le bouton de connexion
  const btnLogin = document.querySelector("a[href='./login/']");
  btnLogin.textContent = "logout";
  btnLogin.setAttribute("href", "#");

  // Se déconnecter quand on clique sur le bouton
  btnLogin.addEventListener("click", () => {
    localStorage.removeItem("tokenSession");
    window.location.href = "http://127.0.0.1:5500/FrontEnd/login/";
  });
};

export { logout };
