import { createContext , useState } from 'react';

export const UserIdContext = createContext();

export default function UserIdProvider( {children} ) {

  const [userId, setUserId] = useState(null);
  const [targetPath, setTargetPath] = useState(null);
  
  return (
    <UserIdContext.Provider value={{ userId, setUserId ,targetPath , setTargetPath }}>
      {children}
    </UserIdContext.Provider>
  );
};


