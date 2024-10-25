import { FaRegBell } from "react-icons/fa";
import Alert from "./Compenets/Alert/Alert";
import { IProps } from "./Compenets/Alert/Alert";

function App() {
  const alerts: IProps[] = [
    {
      type: "alert-default",
      title: "Default Alert",
      description: "This is a default alert for general information.",
      icon: <FaRegBell />,
    },
    {
      type: "alert-info",
      title: "Info Alert",
      description: "This is an informational alert.",
      icon: <FaRegBell />,
    },
    {
      type: "alert-warning",
      title: "Warning Alert",
      description: "This is a warning alert, pay attention to details.",
      icon: <FaRegBell />,
    },
    {
      type: "alert-error",
      title: "Error Alert",
      description: "An error has occurred, please try again.",
      icon: <FaRegBell />,
    },
    {
      type: "alert-success",
      title: "Success Alert",
      description: "Your operation was successful!",
      icon: <FaRegBell />,
    },
  ];

  return (
    <>
      {alerts.map((alert, index) => (
        <div key={index} >
          <Alert
            type={alert.type}
            icon={alert.icon}
            title={alert.title}
            description={alert.description}
          />
        </div>
      ))}
    </>
  );
}

export default App;
