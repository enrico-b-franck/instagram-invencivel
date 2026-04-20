import './LateralDireita.css'
import thominho from '../assets/thominho.jpg'
import mark from '../assets/Mark Grayson _ Invincible.jpg'
import omniman from '../assets/Ominiman.jpg'
import thragg from'../assets/thragg.jpg'
import eve from '../assets/eve.jpg'

import mark1 from '../assets/mark1.jpg'

export default function LateralDireita() {
    return (

        <ul className="sugestoes-lista">
            <li className="sugestao-item">
                <img src={mark} alt="perfil" className="foto-perfil-thomas" />
                <div>
                    <p className="nome_perfil">Invencible.viltrumite</p>
                    <p className="descricao">Seguido(a) Omni-man, Allen1'-'', Eve Storm</p>
                </div>
                <a href="#">Seguir</a>
            </li>

            <div className='centero'>
                <p>Sugestões para você</p>
                <a href="#">Ver tudo</a>
            </div>
            <li className="sugestao-item">
                <img src={omniman} alt="perfil" className="foto-perfil" />
                <div>
                    <p className="nome">Omni-Man_onlyone</p>
                    <p className="descricao">Seguido(a) por Alle1'-'', Invencible, Thragg</p>
                </div>
                <a href="#">Seguir</a>
            </li>

            <li className="sugestao-item">
                <img src={thragg} alt="perfil" className="foto-perfil" />
                <div>
                    <p className="nome">Thr4gg</p>
                    <p className="descricao">Seguido(a) por Omni-man</p>
                </div>
                <a href="#">Seguir</a>
            </li>

            <li className="sugestao-item">
                <img src={eve} alt="perfil" className="foto-perfil" />
                <div>
                    <p className="nome">Atom_Eve01</p>
                    <p className="descricao">Seguido(a) por Invencible.viltrumite, xer_pl0de</p>
                </div>
                <a href="#">Seguir</a>
            </li>

            <li className="sugestao-item">
                <img src={mark1} alt="perfil" className="foto-perfil" />
                <div>
                    <p className="nome">MissMom</p>
                    <p className="descricao">Seguido(a) Invencible.viltrumite  </p>
                </div>
                <a href="#">Seguir</a>
            </li>
        </ul>

   
    );
       
}