import logo from './logo.svg';
import './App.css';

function Header(props){
  return(
  <header>
  <h1>
    <a href='/' onClick={function(event){
      event.preventDefault();
      props.onChangeMode();
    }}>{props.title}</a>
  </h1>
</header>
);}
function Nav(props){
  return(
    <nav>
    <ol>
      <li><a href='/read/1'>{props.topics[0].title}</a></li>
      <li><a href='/read/2'>{props.topics[1].title}</a></li>
      <li><a href='/read/3'>{props.topics[2].title}</a></li>
    </ol>

  </nav>
);}

function Nav2(props){
  // const lis = [
  //   <li><a href='/read/1'>{props.topics[0].title}</a></li>,
  //   <li><a href='/read/2'>{props.topics[1].title}</a></li>,
  //   <li><a href='/read/3'>{props.topics[2].title}</a></li>
  // ]

  const lis = []
  for (let i = 0; i < props.topics.length; i++){
      let temp = props.topics[i];
      lis.push(<li><a href={'/read/'+temp.id}>{temp.title}</a></li>)
    }
  
  return(
    <nav>
    <ol>
      {lis}
    </ol>

  </nav>
);}

function Nav3(props){

  const lis = []
  for (let i = 0; i < props.topics.length; i++){
      let temp = props.topics[i];
      lis.push(<li key={temp.id}><a id={temp.id} href={'/read/'+temp.id} onClick={
        event=>{
          event.preventDefault();
          // console.log(event.target.id);
          props.onChangeMode(event.target.id);
        }
      }>{temp.title}</a></li>)
    }
  
  return(
    <nav>
    <ol>
      {lis}
    </ol>

  </nav>
);}

function Article(props){
  return(
    <article>
    <h2> {props.title}</h2>
    <p> {props.body}</p>
  </article>
);}

function App() {
  const topics = [
    {id:1, title:"htmlㅎ", body:"html is ~"},
    {id:2, title:"cssㅎ", body:"html is ~"},
    {id:3, title:"jsㅎ", body:"html is ~"},
  ]
  return (
    <div>
      <Header title="REACT" onChangeMode={function(){alert('Header');}}></Header>
      <Nav topics = {topics}/>
      <Nav2 topics = {topics}/>
      <Nav3 topics= {topics} onChangeMode={(id)=>{alert(id);}}/>
      <Article title="WELCOME" body="HELLO, REACT"/>
    </div>
  );
}

export default App;
