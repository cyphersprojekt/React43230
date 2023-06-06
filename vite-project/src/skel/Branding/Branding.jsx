import './Branding.css'
import { Link } from 'react-router-dom'
export const Branding = () => {
    return (
        <Link to={`/`}>
        <div className="branding">
            <h1>Hetzner Extended</h1>
            <h2>Coderhouse 43230</h2>
        </div>
        </Link>
    )
}