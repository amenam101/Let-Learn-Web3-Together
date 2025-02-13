import Buttons from '../Buttons'
import { LongLogoWeb3 } from '../../assets/Logos'
import { ArrowDown, FotoPoligon } from '../../assets/Imagenes'

const Hero = () => {
    return(
        <div className='flex flex-col items-center gap-12 w-1/2 mt-16'>
            <p className='text-4xl'>Bienvenido(a) a</p>
            <LongLogoWeb3 />
            <p className='text-4xl text-center'>crecimiento y sostenibilidad del ecosistema web3</p>
            <Buttons
                textButton='Conectar '
                iconButton={'->'}
                navigateTo='/conectado'
            />
            <FotoPoligon />
            <ArrowDown />
        </div>
    )
}


export default Hero