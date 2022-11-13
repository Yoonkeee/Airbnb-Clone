import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <h1>
      This is Root.tsx
      <Outlet />
    </h1>
  );
}
