import { useState } from 'react';
import './index.css'
import axios from 'axios';




export const App = () => {
  const [mainTopic, setMainTopic] = useState('')
  const [intro, setIntro] = useState('');
  const [exercises, setExercises] = useState('');
  const [questions, setQuestions] = useState('')
  const [generatedContent, setGeneratedContent] = useState('');

  const handleGenerate = async () => {
    try {
      const response = await axios.post('https://api.openai.com/v1/engines/text-davinci-003/completions', {
        prompt: `Generar un documento Word con tema principal de ${mainTopic} empezando con una ${intro} luego genera ${exercises} ejercicios practicos y por ultimo
            una bateria de preguntas de ${questions} preguntas variadas cortas, por ejemplo de seleccion multiple o respuesta directa y ordena el texto de forma que sea
            facil para la lectura`,
        max_tokens: 3000, // Número máximo de tokens en la respuesta generada
      }, {
        headers: {
          'Authorization': 'Bearer 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',
        },
      });



      const generatedContent = response.data.choices[0].text;
      setGeneratedContent(generatedContent);
    } catch (error) {
      console.error('Error al generar el contenido:', error);
    } 

  };

  const handleCopyText = () => {
    // Seleccionar el textarea
    const textarea = document.getElementById('generated-textarea');
    textarea.select();

    // Copiar el texto al portapapeles
    document.execCommand('copy');
  };

  console.log(generatedContent)
  return (
    <>

      {/* Banner inicial */}

     


      <div id="banner">
        <p className="bn_t1">¡ENTRENA CON NOSOTROS!</p>
        <p className="bn_t2"><a href="#">Aplicar aquí</a> y haz realidad tu sueño de ser el Techie o Digital Marketer que has
          soñado.</p>
      </div>

      {/* Navbar Level Up */}
      <section id="menu">
        <a className="logo" href="#">
          <img src="https://levelup.gt/img/logo_negativo.png" />
        </a>
        <section id="nav">
          <a href="#" className="button active">Programas</a>
          <a href="#" className="button">Ser mentor</a>
          <a href="#" className="button">¿Por qué level up?</a>
          <a href="#" className="button">Contacto</a>
          <a href="#" className="button hot">Aplicar</a>
        </section>
      </section>


      {/* Formulario */}



      <div className="container text-center">
        <br />
        <header> <strong className='letter-font '> <h1>Generacion Autimatizada de Contenido Académico</h1></strong></header>
        <br />
        <div className="row">
          <div className="col">
            <br />
            <div>
              <label className='letter-font label-1' htmlFor="">¿Que deseas primero?</label> <br />
              <select onChange={({ target: { value } }) => setIntro(value)} className='sombra form-select'>
                <option className='letter-font' value="">Elije una opcion</option>
                <option className='letter-font' value="introduccion">Introduccion</option>
                <option className='letter-font' value="resumen">Resumen</option>
                <option className='letter-font' value="descripcion">Descripcion</option>
              </select> <br />
            </div>
            <br />

          </div>
          <div className="col">
            <input
              type="text"
              onChange={({ target: { value } }) => setMainTopic(value)}
              className='letter-font sombra titulom form-control mx-auto' // Agrega la clase 'mx-auto' aquí
              placeholder='Escribe tu tema ...'
            /> <br />

            <label className='letter-font' htmlFor="">¿Cuantos ejercicios practicos desea?</label>

            <div className="center-select">
              <select
                className='form-select sombra select-option'
                onChange={({ target: { value } }) => setExercises(value)}
              >
                <option className='letter-font' value="">Elije una opcion</option>
                <option className='letter-font' value="1">1</option>
                <option className='letter-font' value="2">2</option>
                <option className='letter-font' value="3">3</option>
                <option className='letter-font' value="4">4</option>
                <option className='letter-font' value="5">5</option>
              </select>
            </div>

            <br />

            <button onClick={handleGenerate} type="button" className="letter-font sombra position-absolute bottom-0 start-50 translate-middle-x generate btn btn-danger">Generar</button>

            <textarea
              className='text-area sombra'
              id="generated-textarea"
              value={generatedContent}
              readOnly
              rows={10}
              cols={50}
            />
            <br />
            <button onClick={handleCopyText} type="button" className="letter-font sombra  bottom-0 start-50 translate-middle-x generate btn btn-copy btn-danger">Copiar Texto</button>
          </div>



          <div className="col">
            <div>
              <label className='letter-font label-2' htmlFor="">Bateria de Preguntas:</label> <br />
              <label className='letter-font' htmlFor="">¿Cuantas preguntas necesitas?</label> <br />
              <input type="number" onChange={({ target: { value } }) => setQuestions(value)} className='letter-font sombra form-control' placeholder='numero de preguntas ...' />
              <label className='letter-font' htmlFor="">Min: 10      Max: 15</label>
            </div>
          </div>
        </div>
      </div>



      <footer>
        <figure className="logo_foot">
          <img src="" />
        </figure>
        <section className="info mx-5">
          <section className="secciones grow">
            <p>SECCIONES</p>
            <a href="">
              <p>¿Quiénes somos?</p>
            </a>
            <a href="">
              <p>¿Qué hacemos?</p>
            </a>
            <a href="">
              <p>Términos y condiciones</p>
            </a>
          </section>
          <section className="informacion grow">
            <p>INFORMACIÓN</p>
            <section className="nav-info">
              <a href="index.html">
                <p>Level up</p>
              </a>
              <a href="index.html#programas">
                <p>Programas</p>
              </a>
              <a href="index.html#contacto">
                <p>Contacto</p>
              </a>
              <a href="form.html">
                <p>Aplicar</p>
              </a>
              <a href="mentor.html">
                <p>Ser mentor</p>
              </a>
              <a href="index.html#vovacion">
                <p>¿Por qué Level up?</p>
              </a>
            </section>
          </section>
          <section className="redes grow">
            <p>SIGUENOS EN</p>
            <div className="sm_nav">
              <a href="https://www.facebook.com/somoslevelup/"><i className="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/company/somoslevelup"><i className="fa-brands fa-linkedin"></i></a>
              <a href="https://instagram.com/somos_levelup?igshid=YmMyMTA2M2Y="><i className="fa-brands fa-instagram"></i></a>
            </div>
          </section>
        </section>
      </footer>
    </>
  )
}

export default App
