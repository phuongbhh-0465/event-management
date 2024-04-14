import { useDispatch, useSelector } from "react-redux";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import { changePage } from "../context/eventsSlice";

function PageBntContainner() {

    const dispatch = useDispatch();
    const page = useSelector((state) => state.events.page);
    const totalPages = useSelector((state) => state.events.totalPages);

    const nextPage = () => {
        dispatch(changePage(page + 1 > totalPages ? 1 : page + 1));
    };
    const prevPage = () => {
        dispatch(changePage(page - 1 < 1 ? totalPages : page - 1));
    };
    const pages = Array.from({ length: totalPages }, (_, index) => index + 1);
    return (
        <Wrapper>
            <button className="prev-btn" onClick={prevPage}>
                <HiChevronDoubleLeft />
                prev
            </button>
            <div className="btn-container">
                {pages.map((value) => {
                    return (
                        <button
                            className={
                                page === value ? "pageBtn active" : "pageBtn"
                            }
                            onClick={() => dispatch(changePage(value))}
                            key={value}
                        >
                            {value}
                        </button>
                    );
                })}
            </div>
            <button className="next-btn" onClick={nextPage}>
                next
                <HiChevronDoubleRight />
            </button>
        </Wrapper>
    );
}

export default PageBntContainner;
