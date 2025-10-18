import { render, screen, fireEvent } from "@testing-library/react";
import Contact from "../Components/Pages/Contact/contact";

test("muestra alerta al enviar formulario", () => {
  window.alert = jest.fn();

  render(<Contact />);

  const form = screen.getByTestId("contact-form"); // <-- ahora funciona
  fireEvent.submit(form);

  expect(window.alert).toHaveBeenCalledWith("Mensaje enviado correctamente");
});
