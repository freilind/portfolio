import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { CourseList } from "../../../components/courses";

describe("Courses snapshot", () => {
  it("renders courses unchanged", () => {
    const { container } = render(<CourseList />);
    expect(container).toMatchSnapshot();
  });
});
