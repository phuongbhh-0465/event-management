import Wrapper from "../assets/wrappers/EventsContainer";
import { useSelector, useDispatch } from "react-redux";
import { selectAllEvents, fetchEvents } from "../context/eventsSlice";
import { useEffect } from "react";
import Event from "./Event";
import PageBntContainner from "./PageBtnContainer";
import Loading from "./Loading";

function EventsContainer() {
    const dispatch = useDispatch();
    const events = useSelector(selectAllEvents);

    const eventStatus = useSelector((state) => state.events.status);
    const error = useSelector((state) => state.events.error);
    const page = useSelector((state) => state.events.page);

    useEffect(() => {
        dispatch(fetchEvents());
    }, [page, dispatch]);

    let content;

    if (eventStatus === "loading") {
        content = <Loading center />;
    } else if (eventStatus === "succeeded") {
        content = (
            <>
                {events.map((event) => (
                    <Event
                        key={event.id}
                        userName={event.user.name}
                        name={event.name}
                        description={event.description}
                        startTime={event.start_time}
                        endTime={event.end_time}
                    />
                ))}
                <PageBntContainner />
            </>
        );
    } else if (eventStatus === "failed") {
        content = <div>{error}</div>;
    }

    return <Wrapper>{content}</Wrapper>;
}

export default EventsContainer;
