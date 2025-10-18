
import { ContactMain, FormBtn, FormContact, FormInput, FormText, FormTitle, FormLabel } from "./styled";

const Contact = () => {

  

  const handleSubmit = (e) =>{
    e.preventDefault();

    alert("Mensaje enviado correctamente");

    e.target.reset();
  };

  return (
    <ContactMain>
      <FormContact onSubmit={handleSubmit} data-testid="contact-form" >
        <FormTitle>Contacto</FormTitle>

        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput
          id="name"
          type="text"
          placeholder="Tu nombre"
        />

        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput
          id="email"
          type="email"
          placeholder="Tu correo"
        />

        <FormLabel htmlFor="message">Mensaje</FormLabel>
        <FormText
          id="message"
          placeholder="Escribe tu mensaje aquí..."
        />

        <FormBtn >Enviar</FormBtn>

        
      </FormContact>
    </ContactMain>
  );
};

export default Contact;
