import { IEmployee } from './type';
import './style.css';
import { useState } from 'react';

type Props = {
    data: IEmployee;
    onBackBtnClickHnd: () => void;
    onUpdateClickHnd: (data: IEmployee) => void;
};

const EditEmployee = (props: Props) => {
  const { data, onBackBtnClickHnd, onUpdateClickHnd } = props;

  const [firstName, setFirstName] = useState(data.firstName);
  const [lastName, setLastName] = useState(data.lastName);
  const [email, setEmail] = useState(data.email);

  const onFirstNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFirstName(e.target.value)
  }
  const onLastNameChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
      setLastName(e.target.value)
  }
  const onEmailChangeHnd = (e: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(e.target.value)
  }

  const onSubmitBtnClickHnd = () => {
      const updatedData: IEmployee = {
          id: data.id,
          firstName: firstName,
          lastName: lastName,
          email: email,
      }
      onUpdateClickHnd(updatedData);
      onBackBtnClickHnd();
  } 

  const inputCls = "shadow appearance-none border text-sm rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500";
  const labelCls = "block text-gray-700 text-sm mb-2"
  
  return (
    <div className="w-full items-start h-screen bg-gray-200 pt-8 flex justify-center">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 relative">
            <p onClick={onBackBtnClickHnd} className="cursor-pointer absolute top-0 right-0 text-white bg-red-700 text-center w-[30px] leading-[30px]">&times;</p>
            <form onSubmit={onSubmitBtnClickHnd} className="w-[300px]">
                <p className="text-lg mb-4 pb-2 uppercase border-b border-dashed font-bold">Update Details</p>
                <div className="mb-4">
                    <label className={labelCls}>First Name: </label>
                    <input type="text" value={firstName} onChange={onFirstNameChangeHnd} className={inputCls} />
                </div>
                <div className="pb-4">
                    <label className={labelCls}>Last Name: </label>
                    <input type="text" value={lastName} onChange={onLastNameChangeHnd} className={inputCls}/>
                </div>
                <div className="pb-4">
                    <label className={labelCls}>Email Address: </label>
                    <input type="email" value={email} onChange={onEmailChangeHnd} className={inputCls}/>
                </div>
                <div>
                    <input type="submit"  className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-bold p-4 rounded w-full focus:outline-none focus:shadow-outline" value="Update Details"/>
                </div>
            </form>
        </div>
    </div>
  );
};

export default EditEmployee;
