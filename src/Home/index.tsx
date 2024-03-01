import { useState } from 'react'
import { IEmployee, dummyEmployeeList } from './type'
import EmployeeList from './EmployeeList'
import AddEmployee from './AddEmployee'
import EditEmployee from './EditEmployee'
import './style.css'

const Home = () => {
    const [employeeList, setEmployeeList] = useState(
        dummyEmployeeList as IEmployee[]
    )
    const [shownPage, setShownPage] = useState("list");
    const [dataToEdit, setdataToEdit] = useState({} as IEmployee);

    const onAddEmployeeClick = () => {
        setShownPage("add");
    }
    const showListPage = () => {
        setShownPage("list")
    }
    const addEmployee = (data: IEmployee) => {
        setEmployeeList([...employeeList, data])
    }
    const deleteEmployee = (data: IEmployee) => {
        const indexToDelete = employeeList.indexOf(data);
        const tempList = [...employeeList]
        tempList.splice(indexToDelete, 1);
        setEmployeeList(tempList);
    }
    const editEmployee = (data: IEmployee) => {
        setShownPage("edit")
        setdataToEdit(data);
    }
    const updateData = (data: IEmployee) => {
        const filteredData = employeeList.filter((e) => e.id === data.id)[0];
        const indexOfRecord = employeeList.indexOf(filteredData);
        const tempData = [...employeeList]
        tempData[indexOfRecord] = data;
        setEmployeeList(tempData);
    }

    return (
        <>
            <div>
                {shownPage === 'list' && (
                   <div className="w-full items-start h-screen bg-gray-200 p-8">
                        <div className="max-w-screen-lg mx-auto ">
                            <div className="flex flex-row justify-between items-center">
                                <h1 className="text-[25px] font-bold uppercase">Simple CRUD APP</h1>
                                <div>
                                    <input 
                                        type="button" 
                                        value="Add Employee" 
                                        onClick={onAddEmployeeClick}
                                        className="bg-green-700 hover:bg-green-600 text-sm text-white py-2 px-4 uppercase cursor-pointer rounded"
                                    />
                                </div>
                            </div>
                            <EmployeeList 
                            list={employeeList} 
                            onDeleteClickHnd={deleteEmployee} 
                                onEdit={editEmployee}
                            />
                        </div>
                    </div>
                )}
                {shownPage === 'add' && (
                    <AddEmployee onBackBtnClickHnd={showListPage} onSubmitClickHnd={addEmployee}/>
                )}   
                {shownPage === 'edit' && (
                    <EditEmployee data={dataToEdit} onBackBtnClickHnd={showListPage} onUpdateClickHnd={updateData} />
                )}   
            </div>
        </>
    )
}

export default Home
