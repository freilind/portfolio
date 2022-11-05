import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import PortfolioList from "../../../components/portfolio/PortfolioList";

describe("Portfolio snapshot", () => {
  it("renders portfolio unchanged", () => {
    const { container } = render(<PortfolioList />);
    expect(container).toMatchSnapshot();
  });
});
