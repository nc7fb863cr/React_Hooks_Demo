import { useEffect, useState } from 'react';

const useDouble = ( initialValue = 1, callback ) => {
  const [ value, setValue ] = useState( initialValue );

  useEffect( callback, [value] );

  const double = () => setValue( value * 2 );

  return { value, double };
}

export default useDouble;