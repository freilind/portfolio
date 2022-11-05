import { FC } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import es from "../../../lang/es.json";
import en from "../../../lang/en.json";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../__test-utils__/createMockRouter";
import { IMessage } from "@interfaces/message";
import MyCollapse from "../../../components/mycollapse";

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

describe("MyCollapse snapshot", () => {
  it.skip("renders collapse unchanged", () => {
    const { container } = render(
      <RouterContext.Provider value={createMockRouter({ route: lang })}>
        <MyCollapse />
      </RouterContext.Provider>,
      { wrapper: IntlWrapper }
    );
    expect(container).toMatchSnapshot();
  });
});
