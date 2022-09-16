const switcherSlider = document.querySelector('#theme-changer')

const page = document.querySelector('html')

const stateStatement = document.querySelector('.state')

switcherSlider.addEventListener('click', showStatus)

switcherSlider.addEventListener('click', toggleTheme)

function showStatus() {
  console.log(switcherSlider.checked)
}

switcherSlider.checked = false // Estado inicial do programa é no modo light

function toggleTheme() {
  if (switcherSlider.checked) {
    page.classList.add('dark-theme')

    page.classList.remove('light-theme')

    stateStatement.textContent = `Estou no dark mode!`

    localStorage.setItem('theme', 'dark-theme')

    localStorage.setItem('statement', `Estou no dark mode!`)

    console.log('Estou marcado!', stateStatement)
  } else {
    page.classList.add('light-theme')

    page.classList.remove('dark-theme')

    stateStatement.textContent = `Estou no light mode!`

    localStorage.setItem('theme', 'light-theme')

    localStorage.setItem('statement', `Estou no light mode!`)

    console.log('Não estou marcado!')
  }
}

/* CONFERINDO O CARREGAMENTO DA PÁGINA */

window.onload = checkTheme()

function checkTheme() {
  const localStorageTheme = localStorage.getItem('theme')

  const localStorageStatement = localStorage.getItem('statement')

  if (localStorageTheme !== null && localStorageTheme === 'dark-theme') {
    //set the theme of the page

    page.className = localStorageTheme

    //set the statement text of the page

    stateStatement.textContent = localStorageStatement

    // adjusting the slider position

    const themeSwitch = document.querySelector('#theme-changer')

    themeSwitch.checked = true
  }
}
