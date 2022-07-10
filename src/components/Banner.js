import '../styles/Banner.css'
import logo from '../assets/logo.png' // Ici, on déclare en fait une variable logo à laquelle on assigne le contenu de notre image.
// Les images sont importées par React grâce à Webpack. Il suffit d'importer l'image souhaitée.

function Banner() {
    const title = 'La maison jungle'
    return (
        <div className='lmj-banner'>
            <img src={logo} alt='La maison jungle' className='lmj-logo' />
            <h1 className='lmj-title'>{title}</h1>
        </div>
    )
}

export default Banner