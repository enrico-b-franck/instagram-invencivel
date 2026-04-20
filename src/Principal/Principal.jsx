import './Principal.css';
import thominho from '../assets/thominho.jpg'
import post0001 from '../assets/post0001.jpg'
import post0002 from '../assets/post0002.jpg'
import mark from '../assets/Mark Grayson _ Invincible.jpg'
import omniman from '../assets/Ominiman.jpg'
import thragg from '../assets/thragg.jpg'
import eve from '../assets/eve.jpg'
import anissa from '../assets/anissa.jpg'
import rex from '../assets/REX.jpg'
import allen from '../assets/Allen.jpg'
import oliver from '../assets/OLIVER.jpg'
import loveu2 from '../assets/loveu2.jpg'
import viltrum from '../assets/viltrum.jpg'
import mf from '../assets/mf.jpg'
import brother from '../assets/brother.jpg'
import cheguei from '../assets/cheguei.jpg'
import conquest from '../assets/conquest.jpg'


import Post from './Post'

export default function Principal() {
    return (
        <div className='Principal'>
            <div className='storie-item'>
                <div className="lista">

                    <div className="story-border-sem-nd"><img src={mark} alt="perfil" />

                        <p className='storie-name'>Seu story</p>
                    </div>
                    <div className="story-border"><img src={omniman} alt="perfil" />

                        <p className='storie-name'>Omni-Man_onlyone</p>
                    </div>

                    <div className="story-border"><img src={eve} alt="perfil" />

                        <p className='storie-name'>Atom_Eve01</p>


                    </div>
                    <div className="story-border"><img src={thragg} alt="perfil" />

                        <p className='storie-name'>Thr4gg</p>

                    </div>

                    <div className="story-border"><img src={rex} alt="perfil" />

                        <p className='storie-name'>R3X_PLODE</p>

                    </div>

                    <div className="story-border"><img src={oliver} alt="perfil" />

                        <p className='storie-name'>0livexzy</p>

                    </div>


                    <div className="story-border"><img src={anissa} alt="perfil" />

                        <p className='storie-name'>AN1SS4</p>

                    </div>

                    <div className="story-border"><img src={allen} alt="perfil" />

                        <p className='storie-name'>Allen1'-'</p>

                    </div>

                 



                </div>
            </div>



            <div className='Feed'>
                <Post
                    profileImage={conquest}
                    username="cONquetyz"
                    time="480 anos luz atrás"
                    postImage={cheguei}
                    likes={3510}
                    caption="Vou te pegar @Invencible.viltrum"
                />
                <Post
                    profileImage={eve}
                    username="Atom_Eve01"
                    time="2 horas atrás"
                    postImage={loveu2}
                    likes={1830}
                    caption="Eu te amo"
                />


                <Post
                    profileImage={thragg}
                    username="Thr4gg"
                    time="4 horas atrás"
                    postImage={viltrum}
                    likes={1}
                    caption="Nosso lindo império"
                />

                <Post
                    profileImage={allen}
                    username="Allen1'-'"
                    time="4 horas atrás"
                    postImage={mf}
                    likes={684}
                    caption="Amigão"
                />

                <Post
                    profileImage={oliver}
                    username="0livexzy"
                    time="30 min atrás"
                    postImage={brother}
                    likes={519}
                    caption="Eu e o Invencivel!"
                />
            </div>
        </div>
    );
}