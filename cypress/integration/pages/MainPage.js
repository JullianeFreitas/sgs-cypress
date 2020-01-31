import SinistroPage from './SinistroPage'
import CadastroSeguradoPage from './CadastroSeguradoPage'

class MainPage{

    sinistroPage = new SinistroPage()
    cadastroSeguradoPage = new CadastroSeguradoPage()

    openMenu = '.minimize.hide-btn'
    openMenuOperacoes = ':nth-child(4) > app-item-menu'
    openMenuSinistro = '.showSubMenus > :nth-child(1) > :nth-child(5) > .d-flex'
    openMenuGestao = ':nth-child(5) > app-item-menu'
    openMenuSegurados = '.showSubMenus > .subMenus > :nth-child(2) > .d-flex'
     

}

export default MainPage