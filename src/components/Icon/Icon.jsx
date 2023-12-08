import { FaRegCircle, FaTimes, FaPen } from 'react-icons/fa';

function Icon({ name }){
if(name == 'circle'){
    return <FaRegCircle />;
}else if(name == 'cross'){
    return < FaTimes />
}else{
  return < FaPen />
}
}

export default Icon;

// when here comes eslint error it would be resolve by adding the below line into this file(eslintrc.cjs)
// "react/prop-types":"off"
