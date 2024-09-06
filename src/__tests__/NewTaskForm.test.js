import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import NewTaskForm from "../components/NewTaskForm";

test("adds a new item to the list when the form is submitted", () => {
  const onTaskFormSubmit = jest.fn();

  render(<NewTaskForm categories={["Code"]} onTaskFormSubmit={onTaskFormSubmit} />);

  fireEvent.change(screen.getByPlaceholderText(/New task details/), {
    target: { value: "Pass the tests" },
  });
  fireEvent.change(screen.getByLabelText(/Category/), {
    target: { value: "Code" },
  });

  fireEvent.submit(screen.getByText(/Add task/));

  expect(onTaskFormSubmit).toHaveBeenCalledWith({
    text: "Pass the tests",
    category: "Code",
  });
});
