const ItemListContainer = ({greeting}) => {

    return(
        <>
        <h1>{greeting}</h1>
        <br/>
        <div className="card text-white bg-dark mb-3" style={{maxWidth: '20rem'}}>
            <div className="card-header">Suplementos</div>
             <div className="card-body">
                <h4 className="card-title">Whey-Protein</h4>
                <p className="card-text">Suplemento utilizado para incrementar la masa muscular.</p>
            </div>
        </div>
        </>
      
    );
  }
  
  export default ItemListContainer;