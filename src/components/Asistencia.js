import React from 'react'
import style from './styles/Asistencia.module.css';
import SVG_Asistencia from './SVG_Asistencia';

export const Asistencia = () => {
  return (
    <div className={style.cont}>
            <div className={style.d1}><SVG_Asistencia className={style.hos}/></div>   
            <div className={style.pan}>
                <div className={style.blo1}>
                    <h1>Sede Administrativa</h1>
                    <div className={style.txt}>
                    <ul>
                            <li>Ubicación: 2ª planta del edificio de hospitalización del Hospital Arnau de Vilanova.</li>
                            <li>Recursos estructurales: despachos del jefe de servicio, de la supervisora de enfermería, de la secretaría del servicio y sala de reuniones del servicio.</li>
                            <li>Recursos materiales: puestos informáticos.</li>
                            <li>Recursos técnicos: protocolos de actuación administrativas, centrales del hospital y específicos del Servicio.</li>
                            <li>Funcionamiento: jornada matutina (7 horas diarias) todos los días laborales y jornada vespertina diariamente de lunes a jueves.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Sala de Sesiones</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Sala con completo equipamiento informático, en planta de hospitalización tanto en HAV como en HL.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Hospitalización</h1>
                    <div className={style.txt}>
                    <ul>
                            <li>Ubicación: 2ª planta del hospital HAV y en 3º planta del HL.</li>
                            <li>Recursos estructurales: En HAV 30 camas en habitaciones dobles y en HL 12 camas en habitaciones individuales. Sala de curas y enyesados.</li>
                            <li>Recursos materiales: marcos de tracción para ocho de las camas. Equipos de reanimación cardiopulmonar. Puestos informáticos (historias clínicas, laboratorio, radiología, etc.).</li>
                            <li>Recursos técnicos: protocolos de actuación asistencial centrales del hospital y específicos del Servicio.</li>
                            <li>Funcionamiento: 24 horas todos los días del año en ambos hospitales, en jornadas de tres turnos: matutina, vespertina y nocturna. Pase de visita matutina por 2 especialistas diariamente en HAV y por un especialista en HL, inclusive sábados. En jornada vespertina y nocturna, incidencias por especialista de guardia.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Área Quirúrgica</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ubicación: En HAV 1ª planta del edificio de hospitalización, en HL en 1º planta.</li>
                            <li>Recursos estructurales: En HAV 2 quirófanos (nº 5 y 6) exclusivos de la especialidad En HL 1 quirófano (nº 5) exclusivo diariamente y 2 quirófanos los jueves (nº 4 y 5). En ambos hospitales el uso es diario por las mañanas y de lunes a jueves por las tardes.</li>
                            <li>Recursos materiales: todos con mesas quirúrgicas ortopédicas y sistemas de tracción, 2 intensificadores de TV en HAV y 1 en HL, 5 torres de artroscopia en HAV y 3 en HL. 1 microscopio quirúrgico en cada Hospital compartido con otros servicios. Material quirúrgico de la especialidad.</li>
                            <li>Recursos técnicos: protocolos y check-list de actuación quirúrgica, centrales del hospital y específicos del servicio.</li>
                            <li>Funcionamiento: diario laboral, a jornadas completas de 7 horas en mañanas y tardes. En total están asignadas 25 sesiones de quirófano a la semana (5 quirófanos diarios).</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Cirugía Mayor Ambulatoria</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>En los quirófanos asignados al Servicio. El área de preparación y recuperación post-anestésica (URPA) en ambos hospitales, exclusiva para este tipo de cirugía, se encuentra aneja a los mismos.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Consultas Externas Hospitalarias</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ubicación: zona de consultas del hospital, En HAV 3º planta semisótano del edificio de consultas y en HL en área de consultas de planta baja.</li>
                            <li>Recursos estructurales: En HAV 3 despachos en 3º planta del edificio de consultas.  En HL 2 despachos, 1 salas de curas, 1 sala de yesos, área administrativa y de recepción.</li>
                            <li>Recursos materiales: puestos informáticos conectados a la red del hospital. Material de curas, artrocentesis, yesos y vendajes, modelos de consentimientos informados.</li>
                            <li>Recursos técnicos: protocolos de actuación administrativa, centrales del hospital y específicos del Servicio.</li>
                            <li>Funcionamiento: diario laboral, a jornadas matutinas completas de 7 horas, En HAV 3 consultas diarias y en HL 2 consultas diarias. Total asignados semanalmente, 25 consultas hospitalarias a jornada completa.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Consultas Extrahospitalarias</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ubicación: C.E. de Burjasot (planta baja) y en C.E. de Liria (planta baja).</li>
                            <li>Recursos estructurales: en CE Burjasot, 2 despachos y 1 salas de curas y yesos. EN CE Liria 1 despacho con sala de curas.</li>
                            <li>Recursos materiales: puestos informáticos conectados a la red del hospital. Material de curas, artrocentesis, yesos y vendajes.</li>
                            <li>Recursos técnicos: protocolos de actuación diagnóstica, terapéutica y administrativas, centrales del hospital y específicos del Servicio, modelos de consentimientos informados.</li>
                            <li>Funcionamiento: diario laboral, a jornadas matutinas 1 especialista por despacho. En CE Burjasot  2 consultas diarias de lunes a viernes. En CE Liria 1 consulta diaria martes y miércoles.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Área de Urgencias</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ubicación: área de urgencias del hospital (planta -1 en HAV y planta baja en HL).</li>
                            <li>Recursos estructurales: En HAV 1 sala de curas y yesos, 3 boxes de exploración, 1 box de politraumatizados, En HL 2 box de exploración, 1 sala de curas y 1 sala de yesos. En ambos sala de camas.</li>
                            <li>Recursos materiales: usual en las urgencias de COT.</li>
                            <li>Recursos técnicos: protocolos diagnósticos, asistenciales y administrativos específicos del servicio.</li>
                            <li>Funcionamiento: tiempo completo todos los días del año. 2 Especialistas en presencia física (1 en HAV y 1 en HL). 1 especialista de guardia localizada.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Área Docente e Investigadora</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Ubicación: en la 8ª y en 2º plantas del edificio de hospitalización del HAV .</li>
                            <li>Recursos estructurales: sala de reuniones.  aula de docencia, aula de informática.</li>
                            <li>Recursos materiales: medios de proyección audiovisual informática. Biblioteca de textos y manuales.</li>
                            <li>Videoteca de técnicas quirúrgicas. Puestos informáticos conectados a la red del hospital (historias clínicas, laboratorio, radiología, etc.), acceso libre a internet y sus bases de datos bibliográficas y a la base datos del servicio (documentación, protocolos y manuales de la especialidad). Biblioteca central del hospital, salón de actos con medios audiovisuales y traducción simultánea.</li>
                            <li>Recursos técnicos: manual de patología y técnicas de la especialidad y manual de urgencias de bolsillo específicos del servicio. Sesiones clínicas. Protocolos de actuación asistencial, diagnóstica, terapéutica y administrativa.</li>
                            <li>Funcionamiento: sesiones clínicas matutinas de 0,5 a 1 h de duración. General, diaria; docente y casos clínicos, miércoles; bibliográfica, jueves.</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
  )
}
