import "./App.css";
import { useFlags, useFlagsmith } from "flagsmith/react";

function App() {
  const flags = useFlags(["like-button"]);
  const flagsmith = useFlagsmith();

  const isButtonEnabled = flags["like-button"]?.enabled;
  console.log(isButtonEnabled);

  if (flagsmith?.loadingState?.isLoading) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="card">
        {isButtonEnabled ? (
          <button className="button">{flags["like-button"].value}</button>
        ) : (
          <>
            <div>
              <h2>Send Flagsmith Info</h2>
              <input type="text" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
