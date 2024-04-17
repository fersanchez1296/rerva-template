import { create } from "zustand";

export const filtersStore = create((set) => ({
  filterFields: {
    selectedArea: [],
    selectedCampo: [],
    selectedDisciplina: [],
    selectedAño: [],
    selectedPais: [],
    selectedIdiomas: [],
    setField: (field: string, value: string) =>
        set((state) => ({
        filterFields: {
          ...state.filterFields,
          [field]: value,
        },
      })),
    resetValues: () =>
      set({
        filterFields: {
          selectedArea: [],
          selectedCampo: [],
          selectedDisciplina: [],
          selectedAño: [],
          selectedPais: [],
          selectedIdiomas: [],
        },
      }),
  },
}));
