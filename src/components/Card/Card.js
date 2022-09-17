import './Card.css';

const Card = (props) => {
    let cardImage = <img src={"/images/" + props.imageSrc} alt="" />
    if(props.imageSrc === undefined){
            cardImage = <img src={"/images/Koffie-zetten.jpg"} alt=""/>;
    }
    return(
        <article class="card">
            <figure class="card__figure">
                {cardImage}
            </figure>
            <section class="card__section">
                <p>{props.text || "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam consectetur corporis deserunt distinctio esse harum illo, ipsam laudantium nam nisi nulla quas qui repellat, sapiente sequi tempora tempore temporibus voluptatum?"}</p>
            </section>
        </article>
    );
}

export default Card;