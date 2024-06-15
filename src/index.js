import { initializeApp } from "firebase/app";
import { getDatabase,ref,onValue,set} from "firebase/database";
import { firebaseConfig } from "./library/config.js";


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const studentsRef = ref(db,'students/');
onValue(studentsRef,(snapshot) => {
    const data = snapshot.val();
    console.log(data);
});

function writeStudentsData(studentId,name,gender,age){
    set(ref(db,'students/'+studentId),{
        studentname:name,
        gender:gender,
        age:age,
    })
    .then(() => console.log("Student added successfully!"))
    .catch(() => console.log("Error!Cannot add the student!"))
};

writeStudentsData("4","Amma","Femlae",10);
