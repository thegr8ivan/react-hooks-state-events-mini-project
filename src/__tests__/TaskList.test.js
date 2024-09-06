import React from "react";
import { render, screen } from "@testing-library/react";
import TaskList from "../components/TaskList";
import { TASKS } from "../data";

test("displays all items when initially rendered", () => {
  const { container } = render(<TaskList tasks={TASKS} />);
  expect(container.querySelectorAll(".task")).toHaveLength(TASKS.length);
});
