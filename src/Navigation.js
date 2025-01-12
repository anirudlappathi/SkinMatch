import './App.css';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
        <div className='fbask-reg text-2xl border-b-black border-b-2'>
            <div className='flex justify-between'>
                <Link to="/">
                    <div>
                        <button className='flex fbask-reg p-4 mx-32'>
                            Skin <div className='fbask-ital'>Match</div>
                        </button>
                    </div>
                </Link>
                <div className='justify-center'>
                    <Link to="/camera">
                        <button className='p-4 ml-32'>
                            Camera
                        </button>
                    </Link>
                    <Link to="/aboutus">
                        <button className='p-4 mr-32'>
                            About Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
