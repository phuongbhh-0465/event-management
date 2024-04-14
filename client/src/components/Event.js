import Wrapper from "../assets/wrappers/Event";
import EventInfo from "./EventInfo";
import { FaRegUserCircle } from "react-icons/fa";
import { IoTimeOutline, IoTime } from "react-icons/io5";
import { MdOutlineDescription } from "react-icons/md";

function Event({ name, description, startTime, endTime, userName }) {
    return (
        <Wrapper>
            <header>
                <div className="main-icon">{name.charAt(0)}</div>
                <div className="info">
                    <h5>Event</h5>
                    <p>{name}</p>
                </div>
            </header>
            <div className="content">
                <div className="content-center">
                    <EventInfo
                        icon={<MdOutlineDescription />}
                        text={description}
                    />
                    <EventInfo icon={<FaRegUserCircle />} text={userName} />
                    <EventInfo icon={<IoTimeOutline />} text={startTime} />
                    <EventInfo icon={<IoTime />} text={endTime} />
                </div>
            </div>
            <footer></footer>
        </Wrapper>
    );
}

export default Event;
