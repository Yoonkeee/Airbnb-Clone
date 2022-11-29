import { useQuery } from "@tanstack/react-query";
import useUser from "../lib/useUser";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface IProtectedPageProps {
  children: React.ReactNode;
}
export default function ProtectedPage({ children }: IProtectedPageProps) {
  const { user, isLoggedIn, userLoading } = useUser();
  const navigate = useNavigate();
  useEffect(() => {
    if (!userLoading && !isLoggedIn) {
      navigate("/");
    }
  }, [userLoading, isLoggedIn, navigate]);
  return <>{children}</>;
}
