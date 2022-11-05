import { FC } from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import es from "../../../lang/es.json";
import en from "../../../lang/en.json";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../__test-utils__/createMockRouter";
import { IMessage } from "@interfaces/message";
import ExperienceList from "../../../components/experience/ExperienceList";
import IntlProvider from "react-intl/src/components/provider";

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

describe("Experience snapshot", () => {
  it("renders experience unchanged", () => {
    const { container } = render(
      <RouterContext.Provider value={createMockRouter({ route: lang })}>
        <ExperienceList />
      </RouterContext.Provider>,
      { wrapper: IntlWrapper }
    );
    expect(container).toMatchSnapshot();
  });
});
