import useUser from "../lib/useUser";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

interface IHostOnlyPageProps {
  children: React.ReactNode;
}
export default function HostOnlyPage({ children }: IHostOnlyPageProps) {
  const { user, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading && !user?.is_host) {
      navigate("/");
    }
  }, [userLoading, user, navigate]);
  return <>{children}</>;
}
