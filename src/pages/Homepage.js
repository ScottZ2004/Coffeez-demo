import Navigation from "../components/Navigation/Navigation";
import Header from "../components/Header/Header";
import Section from "../components/Section/Section";
import Card from "../components/Card/Card";

const Homepage = () => {
    return(
        <>
            <Navigation />
            <Header
                bigTitle="Coffeez"
                smallTitle="Coffee that will make you smile"
                buttonText="Order Now!"
            />
            <Section Title="Collection">
                <Card imageSrc="Koffie-zetten.jpg" alt="Koffie zetten" text="Dit is een koffie zet apparaat, hier word dus de heerlijke koffie gezet waar jij zo van houd. Dit apparaat is de befaamde KZA 340KB met een ultra filter van de Nationale Koffiebond. Met dit apparaat kan ik je beloven dat je de meest heerlijke bakies pleur maken die je oot in je leven gaat maken."/>
                <Card imageSrc="Koffie-inschenken.jpg" alt="Koffie inschenken" text="Vind jij koffie ook zo lekker? Nou ik ook! Vooral bij het ontbijt, is koffie het lekkerst, je word er goed wakker van het het geeft je een lekker warm gevoel. Met de nieuwe koffiebonen van Mediacollege word je ochtend nog lekkerder en komt er nog meer caffeine in je lichaam."/>
                <Card imageSrc="Koffie-lezen.jpg" alt="Koffie en lezen" text="Koffie drinken kan bij het lezen erg veel nut hebben. De Universiteit Leiden heeft onderzoek gedaan naar koffie. Uit dit onderzoek is gebleken dat er een stofje in zit die caffeine heet, dit stofje geeft energie aan de persoon. Caffeine kan ook verslavend zijn en sommige mensen kunnen niet wakker blijven zonder hun dagelijkse doze caffeine."/>
                <Card imageSrc="Koffie-communiceren.jpg" alt="Koffie en communiceren" text="Oh wat lekker! Een kopje koffie drinken met je beste vrienden. Koffie is altijd een uitstekend gespreks onderwerp voor elke vrienden groep. De ene vind het niet lekker, de ander vind het heerlijk en de ander heeft weer eens gelezen dat koffie vergif is. Maar we kunen  het er allemaal over eens zijn dat kofie heerlijk is, de smaak en om over te praten."/>
            </Section>
        </>
    );
}

export default Homepage;