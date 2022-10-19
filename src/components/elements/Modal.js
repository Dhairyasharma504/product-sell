import { AiFillCloseCircle } from 'react-icons/ai';

import styled from 'styled-components';

const Wrapper = styled.div`
  max-height: 85vh !important;
`;
function Modal({ isVisible, onClose, children, isBgLight }) {
  return (
    <div
      className={`${
        isVisible ? 'block' : 'hidden'
      } min-w-screen bg-gray-400 h-screen animated fadeIn faster fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none`}
      id="modal-id"
    >
      <div
        className={`absolute bg-black ${
          isBgLight ? 'opacity-10' : 'opacity-70'
        }  inset-0 z-0`}
      />
      <div className="w-full overflow-x-hidden max-w-md relative mx-auto my-auto rounded-xl shadow-lg bg-white">
        <Wrapper className="mt-5 mb-8 px-8 overflow-y-auto">{children}</Wrapper>
      </div>
      <button
        onClick={onClose}
        type="button"
        className="absolute top-8 text-primary right-10 focus:outline-none"
      >
        <AiFillCloseCircle className="h-6 w-6 " />
      </button>
    </div>
  );
}
export default Modal;
