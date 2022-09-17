import './Section.css';


const Section = (props) => {
    return(
        <section class="section">
            <header class="section__header">
                <i className="fa-solid fa-mug-hot"></i>
                <h2 class="section__h2">{props.Title || 'Default Title'}</h2>
            </header>
            <div class="section__wrapper">
                {props.children}
            </div>

        </section>
    );
}

export default Section;