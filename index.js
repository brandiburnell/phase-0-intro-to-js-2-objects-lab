// Write your solution in this file!

const employee = {
    name: "Brandi",
    streetAddress: "10830 W Evans Ave"
};

console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {
        ...employee,
        [key]: value,
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
   const smallerObj = {...employee};
   delete smallerObj[key];

   return smallerObj;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}