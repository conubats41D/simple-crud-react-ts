export interface IEmployee {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
}

export const dummyEmployeeList: IEmployee[] = [
    {
        id: new Date().toJSON().toString(),
        firstName: "Junie",
        lastName: "Rosales",
        email: "junie.rosales@email.com",
    },
    {
        id: new Date().toJSON().toString(),
        firstName: "John",
        lastName: "Doe",
        email: "john.doe@email.com",
    },
    
]