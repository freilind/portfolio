import { render } from "@testing-library/react";
import { ListSkills } from "../../../components/skills";

describe("ListSkill snapshot", () => {
  it("renders skills unchanged", () => {
    const { container } = render(<ListSkills />);
    expect(container).toMatchSnapshot();
  });
});
