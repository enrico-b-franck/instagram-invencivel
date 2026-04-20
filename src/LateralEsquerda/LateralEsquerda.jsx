
import ListItem from './ListItem'
import './LateralEsquerda.css'


// Importações de Imagem
// var nomeDaVariavel = require('caminho/para/imagem.jpg')
import instagram from '../assets/instagram.png'
import home from '../assets/home.png'
import search from '../assets/magnifying-glass.png'
import reels from '../assets/clapper.png'
import hearth from '../assets/love.png'
import barra from '../assets/menu.png' 
import telegram from '../assets/telegram.png' 


//Importação de Ícones
import { RiHomeHeartFill } from "react-icons/ri";
import { HiShoppingCart, HiShieldCheck } from "react-icons/hi";





var x = 10
var y = 20

export default function LateralEsquerda() {
    return (
        <div className='LateralEsquerda'>
            <img src={instagram} alt='Logo do Instagram' className='logoInstagram' />
            <ul>

                <ListItem icone={<img src={home}  alt="Home"  width={27} height={27} className='icone'/>} />                 <ListItem icone={<img src={search} alt="Search" width={27} height={27} className='icone'/>} />
                <ListItem icone={<img src={telegram} alt="Telegram" width={27} height={27} className='icone'/>} />
                <ListItem icone={<img src={reels} alt="Reels" width={27} height={27}  className='icone'/>} />
                <ListItem icone={<img src={hearth} alt="Hearth" width={27} height={27} className='icone'/>} />

                 <ListItem icone={<img src={barra} alt="barra" width={27} height={27} className='barra'/>} />
            </ul>
        </div>
    )
}


function Exemplo() {

}

function Caneca() {

}

function Celular() {
}