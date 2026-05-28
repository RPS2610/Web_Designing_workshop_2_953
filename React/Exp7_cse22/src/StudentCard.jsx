function StudentCard(props) {
    return(
        <div>
        <h2 style={{backgroundColor:"pink"}}>Name:{}</h2>
        <p>course:{props.course}</p>
        <p> Marks:{props.marks}</p>
        </div>
    );
}
export default App;