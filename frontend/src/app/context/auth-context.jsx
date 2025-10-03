'use client';
import { usePathname } from 'next/navigation';
import React, {
   createContext,
   useEffect,
   useState,
   useMemo,
   useContext,
} from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
   const [user, setUser] = useState(null);
   const [users, setUsers] = useState(null);
   const [loading, setLoading] = useState(true);
   const [usersLoading, setUsersLoading] = useState(true);
   

   // useEffect(() => {
   //    if (session) {
   //       const setCustomCookie = async () => {
   //          try {
   //             const res = await fetch('/api/auth/custom');
   //             if (!res.ok) {
   //                console.error('Failed to set custom cookie.');
   //                return;
   //             }
   //          } catch (error) {
   //             console.error('Error setting custom cookie:', error);
   //          }
   //       };

   //       const dispatch = async () => {
   //          try {
   //             const res = await fetch('/api/auth/user');
   //             if (!res.ok) {
   //                return;
   //             }

   //             window.dispatchEvent(new CustomEvent('userUpdated'));
   //          } catch (error) {
   //             console.error('Error fetching user data:', error);
   //          }
   //       };

   //       const runFunctionsInOrder = async () => {
   //          await setCustomCookie();
   //          await dispatch();
   //       };

   //       runFunctionsInOrder().catch((error) => console.error('Error', error));
   //    }
   // }, [session]);
   const clearCookies = async () => {
      try {
         const response = await fetch('/api/clear-cookies', {
            method: 'POST',
         });
   
      } catch (error) {
         console.error('Error clearing cookies:', error);
      }
   };
   const pathname = usePathname();
   useEffect(() => {
      const fetchUser = async () => {
         try {
            const res = await fetch('/api/auth/user', {
               credentials: 'include',
            });

            if (!res.ok) {
               clearCookies().catch((error) => console.error('Error', error));
               setUser(null);
               return;
            }

            const data = await res.json();
            setUser(data.user);
         } catch (err) {
            clearCookies().catch((error) => console.error('Error', error));
            setUser(null);
         } finally {
            setLoading(false);
         }
      };

      (async () => {
         await fetchUser().catch((error) => console.error('Error', error));
      })();
      const handleUserUpdated = () => {
         fetchUser().catch((error) => console.error('Error', error));
      };

      window.addEventListener('userUpdated', handleUserUpdated);

      return () => {
         window.removeEventListener('userUpdated', handleUserUpdated);
      };
   }, [pathname]);

   useEffect(() => {
      const fetchUsers = async () => {
         try {
            const res = await fetch('/api/auth/users');

            if (!res.ok) {
               setUsers(null);
               return;
            }
            const data = await res.json();
            setUsers(data.users);
         } catch (err) {
            setUsers(null);
         } finally {
            setUsersLoading(false);
         }
      };

      (async () => {
         await fetchUsers().catch((error) => console.error('Error', error));
      })();
      const handleUsersUpdated = () => {
         fetchUsers().catch((error) => console.error('Error', error));
      };

      window.addEventListener('usersUpdated', handleUsersUpdated);

      return () => {
         window.removeEventListener('usersUpdated', handleUsersUpdated);
      };
   }, []);

   const [createPassword, setCreatePassword] = useState(false);
   const providerValue = useMemo(
      () => ({
         user,
         loading,
         createPassword,
         setCreatePassword,
         users,
         usersLoading,
      }),
      [user, loading, createPassword, setCreatePassword, users, setUsersLoading]
   );

   return (
      <UserContext.Provider value={providerValue}>
         {children}
      </UserContext.Provider>
   );
};
export const useUser = () => useContext(UserContext);
