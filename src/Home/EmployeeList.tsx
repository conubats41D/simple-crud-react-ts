import { IEmployee } from './type';
import './style.css';
import { useState } from 'react';
import EmployeeModal from './EmployeeModal';

type Props = {
  list: IEmployee[];
  onDeleteClickHnd: (data: IEmployee) => void
  onEdit: (data: IEmployee) => void
};

const EmployeeList = (props: Props) => {
  const { list, onDeleteClickHnd, onEdit } = props;

  const [showModal, setShowModal] = useState(false)
  const [dataToShow, setDataToShow] = useState(null as IEmployee | null)
  
  const ViewEmployee = (data: IEmployee) => {
      setDataToShow(data);
      setShowModal(true);
  }
  const onCloseModal = () => {
      setShowModal(false);
  }

  return (
    <>
    <div className="flex flex-col mt-4">
      <div className="py-2 -my-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="inline-block min-w-full overflow-hidden align-middle border-b border-gray-200 shadow sm:rounded-lg">
              <table className="min-w-full table-fixed">
                  <thead>
                      <tr>
                          <th
                              className="px-6 py-3 text-sm leading-4 text-left text-gray-500 uppercase border-b border-gray-200 ">
                              Full Name</th>
                          <th
                              className="px-6 py-3 text-sm leading-4 text-left text-gray-500 uppercase border-b border-gray-200">
                              Email</th>
                          <th className="px-6 py-3 text-sm leading-4 text-left text-gray-500 uppercase border-b border-gray-200">
                              Actions</th>
                      </tr>
                  </thead>
                  <tbody> 
                      {list.map((data) => (
                      <tr>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="flex items-center">
                                    <div className="text-sm font-medium leading-5 text-gray-700">
                                    {data.firstName} {data.lastName}
                                    </div>
                              </div>
                          </td>
                          <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                              <div className="text-sm leading-5 text-gray-500">{data.email}</div>
                          </td>
                          <td
                              className="px-6 py-4 text-sm leading-5 text-gray-500 whitespace-no-wrap border-b border-gray-200">
                              <button onClick={() => ViewEmployee(data)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path d="M21.2572 10.9622C21.7314 11.5813 21.7314 12.4187 21.2572 13.0378C19.764 14.9868 16.1818 19 12 19C7.81823 19 4.23598 14.9868 2.74284 13.0378C2.26857 12.4187 2.26856 11.5813 2.74283 10.9622C4.23598 9.01321 7.81823 5 12 5C16.1818 5 19.764 9.01321 21.2572 10.9622Z" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <circle cx="12" cy="12" r="3" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                              </button>
                              <button onClick={() => onEdit(data)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                              </button>
                              <button onClick={() => onDeleteClickHnd(data)}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                              </svg>
                              </button>
                          </td>
                      </tr>
                      ))}
                      {list.length === 0 && (
                        <tr>
                          <td colSpan={3} className="px-6 py-4 text-sm text-center leading-5 text-gray-500">
                           No employee/s added
                          </td>
                        </tr>
                      )}
                  </tbody>
              </table>
          </div>
      </div>
    </div> 
    {showModal && dataToShow !== null && <EmployeeModal onClose={onCloseModal} data={dataToShow}/>}
    </>
  );
};

export default EmployeeList;
