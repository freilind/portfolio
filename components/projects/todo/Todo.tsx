import React, {
  FC,
  useCallback,
  useEffect,
  useState,
  KeyboardEvent,
} from "react";
import { Grid, Text, Input, useInput, FormElement } from "@nextui-org/react";
import short from "short-uuid";
import ListTodo from "./ListTodo";
import { ITaskTodo } from "../../../interfaces/task-todo";
import { EStatus } from "enums/status.enum";

const KEY_LS = "todo";

const Todo: FC = () => {
  const { value, reset, bindings } = useInput("");
  const [tasks, setTasks] = useState<ITaskTodo[]>([]);

  useEffect(() => {
    const initValue = localStorage.getItem(KEY_LS);
    if (initValue && initValue.length > 4) {
      setTasks(JSON.parse(initValue));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(KEY_LS, JSON.stringify(tasks));
  }, [tasks]);

  const onKeyDown = (event: KeyboardEvent<FormElement>) => {
    if (event.key === "Enter" && value.trim()) {
      setTasks((prev) => [
        {
          id: short.generate(),
          name: value.trim(),
          status: EStatus.PENDING,
        },
        ...prev,
      ]);
      reset();
    }
  };

  const deleteTask = useCallback((id: string) => {
    setTasks((prev) => prev.filter((task) => task.id != id));
  }, []);

  const clompleteTask = useCallback((task: ITaskTodo) => {
    if (task.status === EStatus.DONE) return;
    const newTask = { ...task };
    newTask.status = EStatus.DONE;
    setTasks((prev) => [...prev.filter((t) => t.id != task.id), newTask]);
  }, []);

  return (
    <>
      <Grid.Container gap={2} justify="center">
        <Grid xs={12} className={"font-console"} justify="center">
          <Text h2 transform="capitalize" color="primary">
            To Do List
          </Text>
        </Grid>
        <Grid xs={12} sm={6} justify="center">
          <Input
            {...bindings}
            fullWidth={true}
            aria-labelledby="input-todo"
            clearable
            underlined
            labelLeft="Task"
            onKeyDown={onKeyDown}
            maxLength={50}
          />
        </Grid>
      </Grid.Container>
      <Grid
        sm={8}
        justify="center"
        css={{
          mt: "$5",
          margin: "auto",
        }}
      >
        <ListTodo
          tasks={tasks}
          deleteTask={deleteTask}
          clompleteTask={clompleteTask}
        />
      </Grid>
    </>
  );
};

export default Todo;
