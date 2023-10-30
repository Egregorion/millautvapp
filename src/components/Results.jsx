export function Results({shows}){
    return (
        <>
            {shows.map((item, index) => 
                <article 
                    key={index}
                >
                    <img src={item.show.image?.medium} alt={item.show.name} />
                    <h2>{item.show.name}</h2>
                    {item.show.genres.map((genre) => 
                        <button>{genre}</button>
                    )} 
                </article>
            )}
        </>
    )
}