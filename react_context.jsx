

import "./styles.css";
import React ,{createContext} from 'react';


let theme = {
  dark:{
       background : '#000',
       color:'#fff'
      
  },
      light:{
       background : '#fff',
       color:'#000'
      
  }
}


 

const ThemContext = createContext(theme.dark);

  function DefaultButton({children}){
      return  <ThemContext.Consumer>

          {value=>{ 

           return  <button style={value} >{children}</button>
            }
          }
         
         </ThemContext.Consumer>
   }

 function ToolBar(){
        return(
            <div>
                <DefaultButton>chercher</DefaultButton>
            </div>
            );
  }


 
  class  PanePricipal extends React.Component{

         constructor(props){
           super(props)

         this.state  = {theme : theme.dark};
         }
          
          handchange(e){
            e.preventDefault()
            if(e.target.value == "dark"){
                  this.setState({
                      theme: theme.dark
                   })
              document.title = "Dark"
            }else{
                this.setState({
                    theme: theme.light
                })
                document.title = "Light"
            }
          
            
          }
       
       

       render(){
          return(
             <div>
              <select value="" onChange={this.handchange.bind(this)}>
                <option value="">Change Theme</option>
                <option value="dark">dark</option>
                <option value="light">light</option>
              </select> <br/>
              <ThemContext.Provider value={this.state.theme}>
              <ToolBar/>       
              </ThemContext.Provider>
            </div>
         
        )
       }
       
       
     
           
  }



export default function App() {
  return (
    <div className="App">
     <PanePricipal />
    </div>
  );
}
