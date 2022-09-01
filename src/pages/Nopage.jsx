import {Link} from 'react-router-dom'

function NoPage (){
    return (
        <div id='nopage'>
            <h1>Oops, the page you are looking for does not exist does not exist</h1>
<Link to='/latracal'><button className='nopagebutton'>Go back</button></Link>
        </div>
    )
}



export default NoPage;