import React, { useEffect, useRef, useState } from 'react'
import Input from './Input'

const Form = () => {
   const [userName,setUserName] = useState("");

   const receiveFromChild = (event: any) => {
    setUserName(event);
   }

   useEffect(() => {
    console.log('this username: ',userName);
   },[userName])

  return (
    <section>
        <div className="container mx-auto py-10 lg:py-28 px-4 lg:px-0">
          <div className="text-center pb-10">
            <h2 className="text-[#2C261F] text-[30px] mb-1 leading-tight text-center">
              Libro de reclamaciones
            </h2>
            <p className="text-[#9B8F86] lg:w-6/12 mx-auto">
              Conforme a lo establecido en el Código de Protección y Defensa del
              Consumidor, esta institución cuenta con un libro de reclamaciones
              a su disposición
            </p>
          </div>

          <div className="lg:w-6/12 mx-auto">
            <div className="grid grid-cols-10 md:grid-cols-6 gap-3 items-center">
              <div className="col-span-10 md:col-span-6 mb-5">
                <div>
                  <p className="font-semibold text-sm mb-5 text-[#2C261F]">
                    ANTES DE EMPEZAR, INDÍCANOS EL LUGAR EN EL QUE SE DIERON LOS
                    SUCESOS DEL RECLAMO:
                  </p>
                  <div className="mb-2">
                    <p className="text-xs text-[#2C261F]">ESTABLECIMIENTO</p>
                    <select
                      className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                      name=""
                      id=""
                    >
                      <option value="">Seleccione</option>
                      <option value="">DNI</option>
                      <option value="">CE</option>
                    </select>
                  </div>
                </div>
                <p className="text-xs text-[#9B8F86]">
                  Nota: Si la queja o reclamo se relaciona con un proyecto
                  entregado, consignar a la oficina principal.
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <p className="text-sm text-[#F09B3C]">
                  1. Identificación del consumidor reclamante
                </p>
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="MONBRES*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="APELLIDOS*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="CORREO ELECTRÓNICO*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="TELÉFONO/CELULAR*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <select
                  className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">TIPO DOC.</option>
                  <option value="">DNI</option>
                  <option value="">CE</option>
                </select>
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nº DE DOCUMENTO*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <select
                  className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">DEPARTAMENTO</option>
                  <option value="">DNI</option>
                  <option value="">CE</option>
                </select>
              </div>
              <div className="col-span-10 md:col-span-3">
                <select
                  className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">PROVINCIA</option>
                  <option value="">DNI</option>
                  <option value="">CE</option>
                </select>
              </div>
              <div className="col-span-10 md:col-span-3">
                <select
                  className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">DISTRITO</option>
                  <option value="">DNI</option>
                  <option value="">CE</option>
                </select>
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="DIRECCIÓN*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <Input
                  texto={""}
                  placeholder={"NOMBRE DEL TUTOR*"}
                  name={"tutor"}
                  onValueChange={receiveFromChild}
                  type='password'
                  extraStyles='my-4'
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="APELLIDOS DEL TUTOR*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <select
                  className="border font-light border-[#8B8986] px-3 h-[50px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                >
                  <option value="">TIPO DOC.</option>
                  <option value="">DNI</option>
                  <option value="">CE</option>
                </select>
              </div>
              <div className="col-span-10 md:col-span-3">
                <input
                  className="border font-light border-[#8B8986] px-3 h-[52px] font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Nº DE DOCUMENTO*"
                />
              </div>
              <div className="col-span-10 md:col-span-3">
                <p className="text-xs text-[#9B8F86]">
                  *Esto aplica si el reclamante es menor de edad
                </p>
              </div>
              <div className="col-span-10 md:col-span-6 pt-5">
                <p className="text-sm text-[#F09B3C]">
                  2. Identificación del bien contratado
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center">
                    <input
                      id="default-radio-1"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-1"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      PROYECTO
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-2"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-2"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      SERVICIO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6">
                <textarea
                  className="border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  placeholder="MENSAJE"
                ></textarea>
              </div>
              <div className="col-span-10 md:col-span-6 pt-5">
                <p className="text-sm text-[#F09B3C]">
                  3. Detalle de la Reclamación y Pedido del Consumidor
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center">
                    <input
                      id="default-radio-3"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-3"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      QUEJA
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked
                      id="default-radio-4"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-4"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      RECLAMO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6">
                <p className="text-xs text-[#9B8F86]">
                  *Reclamo: Disconformidad relacionada a los proyectos o
                  servicios
                </p>
                <p className="text-xs text-[#9B8F86]">
                  *Queja: Disconformidad no relacionada a los proyectos o
                  servicios;o, malestar o descontento respecto a la atención al
                  público.
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <textarea
                  className="border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  placeholder="DETALLE*"
                ></textarea>
              </div>
              <div className="col-span-10 md:col-span-6">
                <textarea
                  className="border font-light border-[#8B8986] p-3 font-sans text-sm w-full focus:border-[#42B0CD] placeholder:text-[#9B8F86] text-[#2C261F] focus:outline-none"
                  name=""
                  id=""
                  cols={30}
                  rows={4}
                  placeholder="PEDIDO*"
                ></textarea>
              </div>
              <div className="col-span-10 md:col-span-6">
                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-[150px] border border-[#8B8986] border-dashed rounded-lg cursor-pointer bg-[#F1F1F1]"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                      {/* <svg
                      className="w-8 h-8 mb-4 text-[#9B8F86]"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg> */}
                      <p className="mb-2 text-sm text-[#9B8F86]">
                        Adjuntar archivo
                      </p>
                      <p className="text-xs text-[#9B8F86]">
                        (PDF, PPTX, WORD o imágenes JPG, PNG)
                      </p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                  </label>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 pt-5">
                <p className="text-sm text-[#F09B3C]">
                  4. Observaciones y acciones adoptadas por el proveedor
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <p className="text-sm text-[#9B8F86]">
                  Fecha de comunicación de la respuesta: Jueves, 04 de Octubre
                  del 2018.
                </p>
                <p className="text-sm text-[#9B8F86]">
                  Descripción: “Al ser un reclamo virtual, su caso será derivado
                  al área de atención al cliente, a fin de dar respuesta dentro
                  del plazo legalmente establecido.
                </p>
              </div>
              <div className="col-span-10 md:col-span-6 pt-5">
                <p className="text-sm text-[#F09B3C]">
                  5. Autorizo notificación del resultado del reclamo al correo
                  consignado
                </p>
              </div>
              <div className="col-span-10 md:col-span-6">
                <div className="flex gap-5 items-center">
                  <div className="flex items-center">
                    <input
                      id="default-radio-5"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-5"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      SI
                    </label>
                  </div>
                  <div className="flex items-center">
                    <input
                      checked={true}
                      id="default-radio-6"
                      type="radio"
                      value=""
                      name="default-radio"
                      className="w-4 h-4 text-[#42B0CD] bg-[#42B0CD] border-[#42B0CD] focus:ring-[#42B0CD]"
                    />
                    <label
                      htmlFor="default-radio-6"
                      className="ml-2 text-sm pt-[10px]"
                    >
                      NO
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-span-10 md:col-span-6 mt-5">
                <p className="text-xs text-[#eb323c]">
                  (*) Campos obligatorios
                </p>
                <div className="mt-5">
                  <p className="text-sm text-[#9B8F86]">
                    * La formulación del reclamo no impide a la persona acudir a
                    otras vías de solución de controversias ni es requisito
                    previo.
                  </p>
                  <p className="text-sm text-[#9B8F86]">
                    * El proveedor deberá dar respuesta al reclamo en un plazo
                    no mayor a (30) treinta días calendario, pudiendo ampliar el
                    plazo hasta (30) treinta días más, previa comunicación al
                    consumidor.
                  </p>
                </div>
                <div className="flex gap-2 w-full my-5">
                  <input
                    type="checkbox"
                    id="some_id"
                    className="relative peer flex items-center justify-center appearance-none w-5 h-5 border-2 border-[#42B0CD] rounded-sm bg-white checked:bg-[#42B0CD] checked:border-0"
                  />
                  <label
                    className="pt-1 text-[#9B8F86] text-sm"
                    htmlFor="some_id"
                  >
                    He leído y acepto la Políticas de Privacidad de Datos
                  </label>
                  {/* <svg className="absolute w-[18px] h-4 hidden peer-checked:block text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg> */}
                </div>
                <a
                  className="font-medium h-[50px] bg-[#42B0CD] w-fit text-white px-10 uppercase flex items-center justify-center shadow-[0_10px_20px_0_rgba(66,176,205,0.20)]"
                  href=""
                >
                  <span className="pt-2">ENVIAR</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Form
