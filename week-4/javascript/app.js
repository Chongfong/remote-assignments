document.title = "晨間男子 AsaDanshi";
const menus = ['物件一','Item2','Item3','關於我'];
let menuList = [];
for (let i = 0 ; i<menus.length;i++){
    menuList.push(<li><a href="#" className="menuItem">{menus[i]}</a></li>)
}

//resize 
// class WindowWidth extends React.Component {

// }

class Bar extends React.Component {

    state ={
        width : window.innerWidth,
        display:'none',
        displayBurger:'none',
        displayClose:'none',
        flexDirection: 'column',
        zIndex:'auto',
    }
    handleResizedScreen = () => {
        this.setState({
          width: window.innerWidth,
        });
      };

    componentDidMount() {
      window.addEventListener('resize', this.handleResizedScreen);
    }    

    clickBurger = () => {
        this.setState({
          displayBurger:'flex',
          displayClose:'block',
          zIndex:'100'
    })
}

    clickClose = () => {
        this.setState({
          displayBurger:'none',
          displayClose:'none'
})
}
    render(){
    return(
        <header className="main-header" >
          <ul className="burgermenu" style={{display: this.state.displayBurger, flexDirection:this.state.flexDirection}}>
            {menuList}
          </ul>
          <h1 id="logo">晨間男子</h1>
          <label id="burger" onClick= {this.clickBurger} >☰</label>
          <label id="closed" style={{display: this.state.displayClose, zIndex:this.state.zIndex}} onClick= {this.clickClose}>X</label>
          <ul className="main-nav" style={{display:this.state.width<800 ? this.state.display : 'flex'}}>
            {menuList}
          </ul>
        </header>
    )    
  }
}

class Welcome extends React.Component {
    state = {
        message : "歡迎文字"
    };

    updateMessage = () => {
        this.setState({
            message : "Now the welcome message is changed!"
        }) 
    }
    
    render(){
    return (
        <div className="banner">
            <p id="welcome" onClick={this.updateMessage}>{this.state.message}</p>
        </div>
    );
    }
}

// create the box 
const boxs = [1,2,3,4,5,6,7,8];
let boxList1 = [];
for (let i = 0 ; i<4;i++){
boxList1.push(<div className="content-box">This is box {boxs[i]}</div>)
}
let boxList2 = [];
for (let i = 4 ; i<boxs.length;i++){
    boxList2.push(<div className="content-box">This is box {boxs[i]}</div>)
    }   

class Box extends React.Component {
    
    state = {
        display : 'none',
    }
    
    showBox = () => {
        this.setState({
            display : 'flex'
        }) 
    }

    render(){
    return (
        <div className="main">
        <h2> Second Title</h2>
        <div className="content-container">
          {boxList1}
        </div>
        <button type="button" id="showbtn" onClick= {this.showBox}>Click me</button>
        <div className="hidden-container" style={{display: this.state.display}}>
          {boxList2}
        </div>
    </div>
    )}
}

const Bottom =() => {
    return (
    <footer>
        <div>
            <p> &copy; 2022 Churin WU</p>
        </div>
    </footer>
    )
}


ReactDOM.render(
    <React.Fragment>
      <Bar />
      <Welcome />
      <Box />
      <Bottom />
    </React.Fragment>,
    document.getElementById('root')
);