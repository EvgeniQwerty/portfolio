import { certsList } from '../utils/cert-data';
import Cert from './Cert';

const Certs = () => {
    return (
        <div className='certs'>
            <div className='certs-container'>
                {certsList.map((item, i) => (
                    <Cert key={i} certData={item} />
                ))}
            </div>
        </div>
    );
};

export default Certs;
