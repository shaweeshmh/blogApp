
import {Link} from 'react-router-dom'

const Wrong = () => {
    return ( 
        <div className='not-found'>
            <h2>The page does not exist</h2>

            <Link to="/">
            Back to the homepage..
        </Link>
        </div>
       
     );
}
 
export default Wrong;