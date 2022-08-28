import { getDocs, collection, addDoc, query, where } from "firebase/firestore";
import { db } from "../firebase.config";

export const createClass = async( obj_class ) =>{
    //console.log({ ...obj_teacher} )
    const docRef  = await addDoc(collection(db, "monitorias"),{
        ...obj_class
    });
    console.log("Document written with ID: ", docRef.id);
}

export const getClass = async() =>{
    const querySnapshot = await getDocs(collection(db, "monitorias"));
    querySnapshot.forEach((doc) => {
        console.log(doc.data());
        console.log(`${doc.id} => ${doc.data()}`);
    });
}

export const findCedulaClass = async( id, get = false ) =>{
    const q = query(collection(db, 'monitores'), where('cedula', '==', id));
    const querySnapshot = await getDocs( q );

    const arr = []
    querySnapshot.forEach((doc) => {
        /* console.log(doc.id, ' => ', doc.data());
        console.log(doc.data()); */
        arr.push( doc.data() )
    });
    
    if( get ){
        return arr.length != 0 ?arr[0] :false
    }
    else { return arr.length != 0 ?true :false }
}