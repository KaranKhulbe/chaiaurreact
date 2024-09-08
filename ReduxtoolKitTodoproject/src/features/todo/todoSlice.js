import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    todos: [{id: 1, text:"Hello Worlds"}]

}

export const todoslice = createSlice({
    name:'todo'
})