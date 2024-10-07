export function Tweet({id, name, content,like, onDelete, onLike}){
    return (
        <div className="tweet">
            {/* <button type="submit" style={styles.button}><a href="./src/poste.jsx"><style></style>Se connecter</a></button> */}
            <button onClick={()=> onDelete(id)} className="delete">
            ❌
        
            </button>
            <h3>{name}</h3>
            <p>{content}</p>
            <button onClick={()=>onLike(id)}>{like} ❤</button>
        </div>
       
        );
}