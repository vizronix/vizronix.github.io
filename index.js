const getEventTarget = e => {
  e = e || window.event;
  return e.target || e.srcElement;
};
const navBar = document.querySelector('.navbar');
const dropDown = document.querySelectorAll('.dropdown');
//const dropBtn = document.querySelectorAll('.dropbtn');
const dropMenu = document.querySelectorAll('.dropdown-content');
const noState = () => {
  dropMenu.forEach(el => {
    el.setAttribute('data-state', 'closed');
    el.style.display = "none";
  });
  /*
  dropBtn.forEach(el => {
    el.backgroundColor = '#333';
  });
  */
}
const dropDownMenu = (e) => {
  let $this = getEventTarget(e);
  if ($this.className === 'dropbtn') {
    let $that = $this.nextElementSibling;
    $that.setAttribute('data-state', $that.getAttribute('data-state') === 'open' ?
      'closed' : 'open'
    );
    $that.style.display = {
      'open': 'block',
      'closed': 'none'
    }[$that.getAttribute('data-state')];
    //$this.style.backgroundColor = 'inherit';
  }
}
navBar.addEventListener('click', dropDownMenu);
dropDown.forEach(el => {el.addEventListener('mouseleave', noState);});
dropMenu.forEach(el => {el.addEventListener('click', noState);});
noState();

