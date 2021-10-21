import React, { createContext, useContext, useState } from "react";
import * as AuthSessions from "expo-auth-session";

const CLIENT_ID = "46713b68affdb408ebf1";
const SCOPE = "read:user";

type User = {
  avatar_url: string;
  id: string;
  login: string;
  name: string;
};

type AuthContextData = {
  isSigningIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  user: User | null;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type AuthResponse = {
  token: string;
  user: User;
};

type AuthorizationResponse = {
  params: {
    code?: string;
  };
};

export const AuthContext = createContext({} as AuthContextData);

function AuthProvider({ children }: AuthProviderProps) {
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  async function signIn() {
    const authUrl = `https://github.com/login/oauth/authorize?client_id=${CLIENT_ID}$scope=${SCOPE}`;
    const { params } = (await AuthSessions.startAsync({
      authUrl,
    })) as AuthorizationResponse;
    console.log(params);
  }

  async function signOut() {}

  return (
    <AuthContext.Provider value={{ isSigningIn, signIn, signOut, user }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  return context;
}

export { AuthProvider, useAuth };
