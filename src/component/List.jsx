import Item from "./Item";
import './List.css'
const  List = ({todos, complete, loading }) => {

 if (loading) {
    return (   
     <div className="todo.list" >
    { [1,2,3,4,5,6,7].map((todo, i) => (
    <Item text={'loading'} key={i} complete={complete}/>
    ))}
        
    </div>)
 }



    if(todos.length === 0){
        return (
            <div className="emty">
                All tasks completed!
            </div>
        )
    }

    return ( 
        <div className="todo-list">
		{ todos.map((todo, i) => (
        <Item text={todo} key={i} complete={complete}/>
        )
        )}
			
        </div>
     );
}
 
export default List ; 




