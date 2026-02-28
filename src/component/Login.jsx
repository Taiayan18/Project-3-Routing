import { useEffect, useState } from "react";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";
import { auth, provider } from "../firebase";

const Login = () => {

  const [user, setUser] = useState(null);

  // Check user login state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogout = async () => {
    await signOut(auth);
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-600">
      
      <div className="bg-white p-8 rounded-xl shadow-lg text-center w-80">
        
        <h1 className="text-2xl font-bold mb-6">Authentication</h1>

        {user ? (
          <>
            <img
              src={user.photoURL}
              alt="profile"
              className="w-16 h-16 rounded-full mx-auto mb-3"
            />
            <p className="mb-4 font-semibold">{user.displayName}</p>

            <button
              onClick={handleLogout}
              className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </>
        ) : (
          <button
            onClick={handleGoogleLogin}
            className="w-full bg-white border py-3 rounded-lg shadow hover:shadow-lg transition flex justify-center items-center gap-2"
          >
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="google"
              className="w-5"
            />
            Continue with Google
          </button>
        )}

      </div>
    </div>
  );
};

export default Login;