import Wrapper from "../assets/wrappers/EventInfo";

function EventInfo({ icon, text }) {
    return (
        <Wrapper>
            <span className="icon">{icon}</span>
            <span className="text">{text}</span>
        </Wrapper>
    );
}

export default EventInfo;
