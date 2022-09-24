
import Country from '../Country/Country';
import './Countries.css'

const Countries = ({countries}) => {
    return (
        <div className='Display container'>
            {
                countries?.map(country => <Country country = {country}></Country>)
            }
        </div>
    );
};

export default Countries;