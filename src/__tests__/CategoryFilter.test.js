import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import CategoryFilter from "../components/CategoryFilter";
import { CATEGORIES } from "../data";

test("displays a button for each category", () => {
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={() => {}} />);
  for (const category of CATEGORIES) {
    expect(screen.getByText(category)).toBeInTheDocument();
  }
});

test("clicking the category button adds a class of 'selected' to the button", () => {
  const { rerender } = render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={() => {}} />);
  
  const codeButton = screen.getByText("Code");
  

  fireEvent.click(codeButton);
  
  rerender(<CategoryFilter categories={CATEGORIES} selectedCategory="Code" onSelectCategory={() => {}} />);
  

  expect(codeButton.classList.contains("selected")).toBe(true);
});

test("clicking the category button filters the task list", () => {
  const onSelectCategory = jest.fn();
  render(<CategoryFilter categories={CATEGORIES} selectedCategory="All" onSelectCategory={onSelectCategory} />);
  
  const codeButton = screen.getByText("Code");
  
  
  fireEvent.click(codeButton);
  
  
  expect(onSelectCategory).toHaveBeenCalledWith("Code");
});
