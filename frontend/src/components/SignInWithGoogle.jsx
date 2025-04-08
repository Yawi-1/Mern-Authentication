import { FcGoogle } from 'react-icons/fc';

export default function SignInWithGoogle() {
  const handleLogin = () => {
    window.location.href = "http://localhost:3000/auth/google";
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center gap-2 bg-white border border-gray-400 text-black font-medium py-2 rounded hover:bg-gray-100"
    >
      <FcGoogle size={20} />
      Sign in with Google
    </button>
  );
}
