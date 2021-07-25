var studentList = [];



function addStudentToSystem(pid, pname, psurname, page, pmoney) {

    const newStudent = {
        id: parseInt(pid),
        name: pname,
        surname: psurname,
        age: parseInt(page),
        money: parseInt(pmoney)
    };

    studentList.push(newStudent);
    console.log(studentList);
    localStorageStudentList(studentList);
};

function getStudentList() {
    const storedList = localStorage.getItem('localStudentList');
    if (storedList === null) {
        friendList = [];
    } else {
        studentList = JSON.parse(storedList);
    }
    return studentList;
}


function localStorageStudentList(plist) {
    localStorage.setItem('localStudentList', JSON.stringify(plist));


}
//remover todo
function deleteall() {
    localStorage.removeItem('localStudentList');
}