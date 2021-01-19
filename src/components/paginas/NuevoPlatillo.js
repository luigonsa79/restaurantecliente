// leer datos
import { useFormik } from 'formik';
// validar form
import * as Yup from 'yup';



const NuevoPlatillo = () => {


  // validar y leer los datos del formulario
  const formik = useFormik({
    initialValues: {
      nombre:'',
      precio:'',
      categoria: '',
      imagen: '',
      descripcion: '',
    },
    validationSchema: Yup.object({

      nombre: Yup.string()
                  .min(3,'Los platillos deben tener al menos 3 caracteres')
                  .required('El nombre del platillo es obligatorio'),
      
      precio: Yup.number()
                  .min(1,'Debes agregar un numero')
                  .required('EL precio debe ser obligatorio'),
                  
      categoria: Yup.string()
                  .required('La categoria es obligatoria'),

      descripcion: Yup.string()
                  .min(10,'La descripcion debe ser mas larga')
                  .required('La descripcion es obligatoria'),
                  
                  

      
    }),
    onSubmit: datos => {
      console.log(datos);
    }
  })

    return (
      <>
        <h1 className="text-3xl font-light mb-4">Agregar Platillo</h1>

        <div className="flex justify-center mt-10">

          <div className=" w-full max-w-3xl">

             <form
              onSubmit={formik.handleSubmit}
             >


               <div>
                 <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="nombre"
                 
                 >
                   Nombre
                   </label>
                 
                 <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="nombre"
                    type="text"
                    placeholder="Nombre del Platillo"
                    value={formik.values.nombre}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                 />
               
               </div>

               {/* mostrando el mensaje */}
               { formik.touched.nombre && formik.errors.nombre ? (
                 <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4"
                      role="alert"
                  >
                   <p className="font-bold">Hubo un error: </p>
                   <p>{ formik.errors.nombre}</p>
                 </div>
               ) : null }


               <div>
                 <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="precio"
                 
                 >
                   Precio
                   </label>
                 
                 <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="precio"
                    type="number"
                    placeholder="$20"
                    min="0"
                    value={formik.values.precio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                 />
               
               </div>

              {/* mostrando el mensaje */}
              { formik.touched.precio && formik.errors.precio ? (
                 <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4"
                      role="alert"
                  >
                   <p className="font-bold">Hubo un error: </p>
                   <p>{ formik.errors.precio}</p>
                 </div>
               ) : null }


               <div>
                 <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="categoria"
                 
                 >
                   Categoria
                   </label>
                 
                <select
                 className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                 id="precio"
                 name="categoria"
                 value={formik.values.categoria}
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                >

                  <option value="">---Seleccione---</option>
                  <option value="desayuno">Desayuno</option>
                  <option value="comida">Comida</option>
                  <option value="cena">Cena</option>
                  <option value="bebidas">Bebida</option>
                  <option value="postre">Postre</option>
                  <option value="ensalada">Ensalada</option>

                </select>
               
               </div>

              {/* mostrando el mensaje */}
              { formik.touched.categoria && formik.errors.categoria ? (
                 <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4"
                      role="alert"
                  >
                   <p className="font-bold">Hubo un error: </p>
                   <p>{ formik.errors.categoria}</p>
                 </div>
               ) : null }

               <div>
                 <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="imagen"
                 
                 >
                   Imagen
                   </label>
                 
                 <input 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="imagen"
                    type="file"
                    value={formik.values.imagen}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                 />
               
               </div>

               <div>
                 <label
                 className="block text-gray-700 text-sm font-bold mb-2"
                 htmlFor="descripcion"
                 
                 >
                   Descripcion
                   </label>
                 
                 <textarea 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-40"
                    id="descripcion"
                    placeholder="descripcion del Platillo"
                    value={formik.values.descripcion}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}

                 ></textarea>
               
               </div>

              {/* mostrando el mensaje */}
              { formik.touched.descripcion && formik.errors.descripcion ? (
                 <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 my-4"
                      role="alert"
                  >
                   <p className="font-bold">Hubo un error: </p>
                   <p>{ formik.errors.descripcion}</p>
                 </div>
               ) : null }


               <input 
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full mt-5 p-2 text-white uppercase font-bold"
                value="Agregar Platillo"
               />



             </form>

          </div>

        </div>
      </>
    );
  };
  
  export default NuevoPlatillo;