import { FC } from "react";
import { render, screen, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import { IntlProvider } from "react-intl";
import es from "../../../lang/es.json";
import en from "../../../lang/en.json";
import { RouterContext } from "next/dist/shared/lib/router-context";
import { createMockRouter } from "../../../__test-utils__/createMockRouter";
import { IMessage } from "@interfaces/message";
import Description from "../../../components/perfil/Description";

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
      <Description />
    </RouterContext.Provider>,
    { wrapper: IntlWrapper }
  );

describe("Description component test", () => {
  afterEach(cleanup);

  it("exist photo", () => {
    setup();
    const photo = screen.getByRole("img", { name: "photo" });
    expect(photo).toBeInTheDocument();
  });

  it("exist name", () => {
    setup();
    const name = screen.getByText("Freilin Manzano");
    expect(name).toBeInTheDocument();
  });

  it("exist role rrss", () => {
    setup();
    const rrss = screen.getByRole("rrss");
    expect(rrss).toBeInTheDocument();
  });

  it("exist link linkedin", () => {
    setup();
    const link = screen.getAllByRole("link")[0];
    expect(link).toHaveAttribute(
      "href",
      "https://www.linkedin.com/in/freilind/"
    );
  });

  it("exist link instagram", () => {
    setup();
    const link = screen.getAllByRole("link")[1];
    expect(link).toHaveAttribute("href", "https://www.instagram.com/ftojoh/");
  });

  it("exist link github", () => {
    setup();
    const link = screen.getAllByRole("link")[2];
    expect(link).toHaveAttribute("href", "https://github.com/freilind");
  });

  it("exist flags", () => {
    setup();
    const flagVe = screen.getByRole("img", { name: "flag-ve" });
    const flagCl = screen.getByRole("img", { name: "flag-cl" });
    expect(flagVe).toBeInTheDocument();
    expect(flagCl).toBeInTheDocument();
  });

  it("exist greeting", () => {
    setup();
    const greeting = screen.getByText(
      "Estimado (a), ante todo un coordial saludo."
    );
    const bodyPart1 = screen.getByText(
      /Mi nombre es Freilin Manzano, nací en Venezuela/i
    );
    const bodyPart2 = screen.getByText(
      /y actualmente estoy radicado en Chile/i
    );
    const bodyPart3 = screen.getByText(/Me dedico/);
    expect(greeting).toBeInTheDocument();
    expect(bodyPart1).toBeInTheDocument();
    expect(bodyPart2).toBeInTheDocument();
    expect(bodyPart3).toBeInTheDocument();
  });
});
