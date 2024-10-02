import react from 'react'
import { getQuestions } from '../Pages/ApiCalls'

export const getAllQuestions = async () => {

    try{

        const response = await getQuestions();
        if(response){
            return response;
        }
    }catch(e){
        return e;
    }
}