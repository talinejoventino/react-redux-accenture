
import { IProductInitialState, IProductAction} from './types'

const INITIAL_STATE: IProductInitialState = 
    {
        product: undefined,
        products:  [
            {
                id: 1,
                title: 'Curso de ReactJS',
                value: 1500,
                modules: [
                    { id: 1, title: 'Module 1' },
                    { id: 2, title: 'Module 2' },
                    { id: 3, title: 'Module 3' },
                ]
            },
            {
                id: 2,
                title: 'Curso de React Native',
                value: 2150,
                modules: [
                    { id: 1, title: 'Module 1' },
                    { id: 2, title: 'Module 2' },
                    { id: 3, title: 'Module 3' },
                    { id: 4, title: 'Module 4' },
                ]
            },
            {
                id: 3,
                title: 'Curso de JavaScript',
                value: 3000,
                modules: [
                    { id: 1, title: 'Module 1' },
                    { id: 2, title: 'Module 2' },
                    { id: 3, title: 'Module 3' },
                    { id: 4, title: 'Module 4' },
                    { id: 5, title: 'Module 5' },
                ]
            },
        ]
    } 

function product(state = INITIAL_STATE, action: IProductAction){
    if(action.type === "TOGGLE_PRODUCT"){
        return{
            ...state,
            product: action.product
        }
    }
    return state
}

export default product