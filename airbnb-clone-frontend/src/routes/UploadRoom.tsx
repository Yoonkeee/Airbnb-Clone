import ProtectedPage from "../components/ProtectedPage";
import HostOnlyPage from "../components/HostOnlyPage";

export default function UploadRoom() {
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <p>test</p>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
