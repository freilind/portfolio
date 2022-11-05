import { FC } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import HomePage from "../../pages/index";
import { IntlProvider } from "react-intl";
import es from "../../lang/es.json";
import en from "../../lang/en.json";
import { IMessage } from "../../interfaces";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "__test-utils__/createMockRouter";

const messages: IMessage = {
  es,
  en,
};
const lang = "es";

const IntlWrapper: FC = ({ children }: { children?: React.ReactNode }) => (
  <IntlProvider locale={lang} messages={messages[lang]}>
    {children}
  </IntlProvider>
);

const setup = () =>
  render(
    <RouterContext.Provider value={createMockRouter({ route: lang })}>
      <HomePage />
    </RouterContext.Provider>,
    { wrapper: IntlWrapper }
  );

describe("HomePage test", () => {
  afterEach(cleanup);

  it("exist role home", () => {
    setup();
    const home = screen.getByRole("home");
    expect(home).toBeInTheDocument();
  });
});
