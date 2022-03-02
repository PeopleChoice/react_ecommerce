import "./styles.css";
import React, { createContext, useCallback, useContext } from "react";

let theme = {
  dark: {
    background: "#000",
    color: "#fff"
  },
  light: {
    background: "#fff",
    color: "#000"
  }
};

const ThemContext = createContext(theme.dark);
const FormContext = createContext({});
function DefaultButton({ children }) {
  const value = useContext(ThemContext);
  return <button style={value}>{children}</button>;
  // return  <ThemContext.Consumer>

  //     {value=>{

  //      return  <button style={value} >{children}</button>
  //       }
  //     }

  //    </ThemContext.Consumer>
}

function ToolBar() {
  return (
    <div>
      <DefaultButton>chercher</DefaultButton>
    </div>
  );
}

class PanePricipal extends React.Component {
  constructor(props) {
    super(props);

    this.state = { theme: theme.dark };
  }

  handchange(e) {
    e.preventDefault();
    if (e.target.value == "dark") {
      this.setState({
        theme: theme.dark
      });
      document.title = "Dark";
    } else {
      this.setState({
        theme: theme.light
      });
      document.title = "Light";
    }
  }

  render() {
    return (
      <div>
        <select value="" onChange={this.handchange.bind(this)}>
          <option value="">Change Theme</option>
          <option value="dark">dark</option>
          <option value="light">light</option>
        </select>{" "}
        <br />
        <ThemContext.Provider value={this.state.theme}>
          <ToolBar />
        </ThemContext.Provider>
      </div>
    );
  }
}

function FormPrincipale({ defaultValue, onSubmit, children }) {
  return  <FormContext.Provider value={defaultValue}>
          <form onSubmit={onSubmit}>{children}</form>
          </FormContext.Provider>
}

function FormField({ name, children }) {
  const dataFromeContext = useContext(FormContext);
  return (

    <div>
      <label htmlFor={name}>{children}</label>
      <input type="text"  name={name} value={dataFromeContext[name] || ''} />
    </div>
  );
}

function PrimaryButton({ children }) {
  return <button>{children}</button>;
}

function App2() {
  const handClick = useCallback((value) => {
    console.log(value.target);
  }, []);

  return (
    <FormPrincipale
      defaultValue={{ nom: "diop", prenom: "cheikh" }}
      onSubmit={handClick}
    >
      <FormField name="nom">Nom </FormField>
      <FormField name="prenom">Prenom </FormField>
      <PrimaryButton>Valider </PrimaryButton>
    </FormPrincipale>
  );
}

export default function App() {
  return (
    <div className="App">
      {/* <PanePricipal /> */}
      <App2 />
    </div>
  );
}
