import { useAuthContext } from "./useAuthContext";

export function useVerifyAuth() {
  const { user, loading } = useAuthContext();

  return {
    authenticated: Boolean(user),
    loading,
  };
}