import React from 'react';

function AcercaDeNosotros() {
    return (
        <section className="bg-success py-5">
            <div className="container">
                <div className="row align-items-center py-5">
                    <div className="col-md-8 text-white">
                        <h1>Sobre Nosotros</h1>
                        <p>
                            En <strong>J&N Fashion</strong> representa la unión perfecta entre innovación y estilo clásico. Nos esforzamos por ofrecer colecciones que no solo cumplen con las expectativas de nuestros clientes, sino que las superan, estableciendo nuevos estándares en el mundo de la moda.
                        </p>
                        <p>
                            Cada pieza en nuestra colección es cuidadosamente seleccionada para asegurar calidad y exclusividad, permitiendo a nuestros clientes expresar su estilo único con elegancia y confianza. En J&N Fashion, creemos que la moda es más que ropa; es una forma de vida, una expresión de quién eres y aspiras a ser.
                        </p>
                    </div>
                    <div className="col-md-4">
                        <img src="assets/img/about-hero.svg" alt="Sobre J&N Fashion"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AcercaDeNosotros;
