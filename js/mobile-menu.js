document.querySelector('.menu-bars').addEventListener('click', () => {
  document.getElementById('desktop-nav').style.cssText = `
      display: flex;
      justify-content: space-around;
      z-index: 50;
      background-color: inherit;
      position: fixed;
      height: 100vh;
      width: 100vw;
      top: 0;
      left: 0;
      `;

  const list = document.querySelector('#desktop-nav > ul');
  list.style.cssText = `
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      `;
});

document.querySelectorAll('.nav-link').forEach((el) => {
  el.addEventListener('click', () => {
    document.getElementById('desktop-nav').style.cssText = `
          display: none;
          `;
  });
  // eslint-disable-next-line no-console
  console.log(el);
});
