import React from 'react';
import TituloContacto from '../components/TituloContacto';
import FormularioContacto from '../components/FormularioContacto';
import Mapa from '../components/Mapa';

function ContactoPage() {
  return (
    <div>
      <TituloContacto/>
      <Mapa/>
      <FormularioContacto/>
    </div>
  );
}

export default ContactoPage;
