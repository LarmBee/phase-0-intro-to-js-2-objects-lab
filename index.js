// Write your solution in this file!
let employee = {
    name:"Branddo",
    streetAddress:"NgongRoad",
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    let employee1 = {...employee};
    employee1[key]=value;
    return  employee1;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
     employee[key]=value;
     return employee;
};

function deleteFromEmployeeByKey(employee, key){
    let employee2 ={...employee};
    delete employee2[key];
    return employee2;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}