import { IEmployee } from './type';
import './style.css';

type Props = {
    data: IEmployee;
    onClose: () => void;
};

const EmployeeModal = (props: Props) => {
    const { onClose, data } = props; 

  return (
    <div className="modal">
        <div className="modal-content max-w-screen-sm relative rounded">
        <span className="cursor-pointer absolute z-10 top-2 right-2 text-white bg-red-700 text-center w-[30px] leading-[30px]" onClick={onClose}>&times;</span>
          <div className="modal-header">
            <p className="font-bold">Employee Details</p>
          </div>
            <p className="text-sm mb-1">First name: <span className="text-gray-500">{data.firstName}</span></p>
            <p className="text-sm mb-1">Last name:  <span className="text-gray-500">{data.lastName}</span></p>
            <p className="text-sm">Email:  <span className="text-gray-500">{data.email}</span></p>
        </div>
    </div>
  );
};

export default EmployeeModal;
