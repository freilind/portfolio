import { EStatus } from "enums/status.enum";

export interface ITaskTodo {
  id: string;
  name: string;
  status: EStatus;
  [key: string]: string;
}
