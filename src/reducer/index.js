import produce from "immer";

export default function reducer(state, { type, payload }) {
  return produce(state, (draftState) => {
    switch (type) {
      case "ADD":
        if (!payload) {
          draftState.inputError = "ENTER_TASK";
        } else if (draftState.currentTask) {
          const index = draftState.tasks.findIndex(
            (task) => task === draftState.currentTask
          );
          draftState.tasks[index] = payload;
          draftState.currentTask = null;
          draftState.inputError = "";
        } else {
          if (draftState.tasks.includes(payload)) {
            draftState.inputError = "DUPLICATE_TASK";
          } else {
            draftState.tasks = draftState.tasks.concat(payload);
            draftState.inputError = "";
          }
        }
        draftState.currentTask = null;
        break;
      case "DELETE":
        draftState.tasks = draftState.tasks.filter((task) => task !== payload);
        draftState.inputError = "";
        break;
      case "SET_TASK":
        draftState.currentTask = payload;
        draftState.inputError = "";
        break;
      default:
        break;
    }
  });
}
