import Modal from 'react-bootstrap/Modal';
import { useSelector, useDispatch } from 'react-redux'
import { pop } from '../actions';

import { BsInfoCircleFill } from "react-icons/bs";
function Popup() {
    const changePop = useSelector(pop => pop.pop);
    const dispatch = useDispatch();
    return (
        <>
            <BsInfoCircleFill className="ms-3"size={35} onClick={() => dispatch(pop())}></BsInfoCircleFill>
            <Modal
                size="lg"
                show={changePop}
                onHide={() => dispatch(pop())}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Marcin Łogwinowicz
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>I didn't encounter any major difficulties, I had some dilemmas on how to present the thing,
                         I was wondering how to display the tiles, whether to use nested divs or ready-made Cards,
                         so in the end I used Cards. I took some time to apply Redux since it was my first time using it,
                         but it didn't take me more than 40 minutes. I gave up testing, I realize that they are very important in commercial solutions,
                         but I decided to focus on other aspects of my work. Everything is written in pure JavaScript,
                         but I know the basics of TypeScript because I used it in one class at my university.</p>
                    <p>
                        I really liked the topic of this task, I liked the fact that I can do the whole thing according to my will
                        while maintaining certain rules imposed by the author. I like to reflect people's expectations for the work I do.
                        I've been working well with the message display API. I had a lot of fun creating a way to display elements and
                        creating a page that is responsive.
                    </p>
                </Modal.Body>
            </Modal>
        </>
    );
}
export default Popup;