import React from 'react'

export const userLoginReducer = (state = {} , action) => {
    
    switch(action.type)
    {
        case 'LOG IN':
            return {...state , userInfo: action.payload}
        
        case 'LOG IN FAILED':
            return {...state , error: action.payload}

        case 'LOG OUT':
                return {}
        
        default:
            return state
    }
}


export const userRegisterReducer = (state = {} , action) => {
    
    switch(action.type)
    {
        case 'REGISTER':
            return {...state , userInfo: action.payload}
        
        case 'REGISTER ERROR':
            return {...state , error: action.payload}

        default:
            return state
        
    
    }
}