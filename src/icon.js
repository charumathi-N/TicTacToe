import { FaPen, FaRegCircle, FaTimes } from 'react-icons/fa';


export default function Icon({item}){
   switch(item){
    case "circle":
        return <FaRegCircle className='icon'/>;
    case "cross":
        return <FaTimes className='icon'/>
    default:
        return <FaPen className='icon'/>
   }
}