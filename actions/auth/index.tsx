import { loginRequest } from "@/requests";
import { LoginResponse } from "@/responses";
import { useAppDispatch } from "@/hooks";
import { setAuthState } from "@/lib";

export function authActions() {
  const dispatch = useAppDispatch();

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

  return {
    useLogin: useLogin,
  };
}
