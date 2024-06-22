import React from 'react';

function FormularioContacto() {
    return (
        <div className="container py-5">
            <div className="row py-5">
                <form className="col-md-9 m-auto" method="post" role="form">
                    <div className="row">
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="inputname">Nombre</label>
                            <input type="text" className="form-control mt-1" id="name" name="name" placeholder="Nombre" />
                        </div>
                        <div className="form-group col-md-6 mb-3">
                            <label htmlFor="inputemail">Correo Electrónico</label>
                            <input type="email" className="form-control mt-1" id="email" name="email" placeholder="Correo Electrónico" />
                        </div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputsubject">Asunto</label>
                        <input type="text" className="form-control mt-1" id="subject" name="subject" placeholder="Asunto" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="inputmessage">Mensaje</label>
                        <textarea className="form-control mt-1" id="message" name="message" placeholder="Mensaje" rows="8"></textarea>
                    </div>
                    <div className="row">
                        <div className="col text-end mt-2">
                            <button type="submit" className="btn btn-success btn-lg px-3">Hablemos</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default FormularioContacto;
