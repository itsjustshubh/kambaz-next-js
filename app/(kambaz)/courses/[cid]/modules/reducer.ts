import { createSlice } from "@reduxjs/toolkit";
import { modules } from "../../../database";
import { v4 as uuidv4 } from "uuid";

const initialState = {
  modules: modules as any[],
};

const modulesSlice = createSlice({
  name: "modules",
  initialState,
  reducers: {
    addModule: (state, { payload: module }: { payload: any }) => {
      const newModule: any = {
        _id: uuidv4(),
        lessons: [],
        name: module.name,
        course: module.course,
      };
      state.modules = [...state.modules, newModule];
    },
    deleteModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.filter((m: any) => m._id !== moduleId);
    },
    updateModule: (state, { payload: module }: { payload: any }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === module._id ? module : m
      );
    },
    editModule: (state, { payload: moduleId }: { payload: string }) => {
      state.modules = state.modules.map((m: any) =>
        m._id === moduleId ? { ...m, editing: true } : m
      );
    },
  },
});

export const { addModule, deleteModule, updateModule, editModule } =
  modulesSlice.actions;
export default modulesSlice.reducer;
