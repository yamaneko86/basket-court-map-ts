import { LoginButton, LogoutButton } from "@/_components/LogInOutButtons";

export default function Login() {
  return (
    <div className=" flex justify-center items-center ">
      <LoginButton />
      <LogoutButton />
    </div>
  );
}
