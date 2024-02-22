import { getDocumentsUrl } from "./api";

async function getDocuments(){
    const response= await fetch(getDocumentsUrl);
    console.log("repsonse is:",response);
    if(response.status===200){
    const data=await response.json();
    console.log("data is::",data);
    return data.res;
    }
}

export {getDocuments};