import { loginRequest } from "@/requests";
import { LoginResponse } from "@/responses";
import { useAppDispatch } from "@/hooks";
import { setAuthState } from "@/lib";
import { useRouter } from "next/navigation";

export function authActions() {
  const dispatch = useAppDispatch();
  const router = useRouter();

  async function useLogin(dto: LoginDto) {
    try {
      const response: LoginResponse = await loginRequest(dto);
      dispatch(
        setAuthState({
          loggedIn: true,
          email: response.data.email,
        })
      );
    } catch (error: any) {
      console.error(error);
    }
  }

  async function logout() {
    dispatch(
      setAuthState({
        loggedIn: false,
        email: "",
      })
    );
    router.push("/");
  }

  return {
    useLogin: useLogin,
    logout,
  };
}
