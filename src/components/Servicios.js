import React from "react";
import style from './styles/Servicios.module.css';
import NavBar from './NavBar';
import SVG_Hospital from './SVG_Hospital'

function Servicios(){
    
    return(
        <>
        <div className={style.cont}>
            <div className={style.d1}><SVG_Hospital className={style.hos}/></div>   
            <div className={style.pan}>
                <div className={style.blo1}>
                    <h1>Modalidades de Asistencia</h1>
                    <div className={style.txt}>
                    <ul>
                        <li>Hospitalización especializada.</li>
                        <li>Hospitalización a domicilio con apoyo de UHD.</li>
                        <li>Atención ambulatoria centralizada en consultas de Hospital Arnau de Vilanova y Hospital de Liria y periférica en Centros de especialidades de Burjasot y Liria.</li>
                        <li>Cirugía mayor convencional con ingreso.</li>
                        <li>Cirugía mayor sin ingreso (CMA: cirugía mayor ambulatoria).</li>
                        <li>Cirugía con anestesia local.</li>
                        <li>Atención especializada continuada de urgencias ininterrumpida.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Traumatología</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Tratamiento inicial y diferido del politraumatizado.</li>
                            <li>Tratamiento ortopédico, no quirúrgico, de fracturas y luxaciones.</li>
                            <li>Tratamiento quirúrgico con osteosíntesis de fracturas y luxaciones.</li>
                            <li>Tratamiento quirúrgico de fracturas mediante artroplastia.</li>
                            <li>Tratamiento de complicaciones de las fracturas: pseudoartrosis, osteomielitis y consolidación viciosa.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Unidad de Cadera</h1>
                    <div className={style.txt}>
                    <ul>
                        <li>Cirugía artroscópica diagnóstica y terapéutica.</li>
                        <li>Cirugía protésica: implantes primarios parciales, totales, rescates, revisiones y recambio.</li>
                        <li>Cirugía de fracturas con osteosíntesis especiales.</li>
                        <li>Osteotomías y artrodesis.</li>
                        <li>Cirugía fémoroacetabular.</li>
                        <li>Reparación articular: ligamentos, inestabilidades.</li>
                        <li>Cirugía de partes blandas.</li>
                        <li>Reparación lesiones cartilaginosas.</li>
                    </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Unidad de Columna</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Microdiscectomia lumbar y cervical.</li>
                            <li>Artrodesis anteriores y posteriores instrumentadas.</li>
                            <li>Osteotomías de columna.</li>
                            <li>Cirugía de la escoliosis.</li>
                            <li>Cirugía tumoral, corporectomía posterior y anterior.</li>
                            <li>Cirugía reconstructiva en fracturas.</li>
                            <li>Laminoplastia cervical.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Unidad de Rodilla</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Cirugía artroscópica diagnóstica.</li>
                            <li>Reparación artroscópica: meniscos, ligamentos, injertos osteocondrales.</li>
                            <li>Cirugía Protésica: primaria total, unicondilar, rescates, revisiones y recambios, prótesis especiales para gran deformidad o tumorales.</li>
                            <li>Cirugía femoropatelar.</li>
                            <li>Cirugía de fracturas con osteosíntesis especiales.</li>
                            <li>Osteotomías, artrodesis y alargamientos óseos.</li>
                            <li>Reparación articular: ligamentos, inestabilidades.</li>
                            <li>Cirugía de partes blandas.</li>
                            <li>Reparación lesiones cartilaginosas.</li>
                            <li>Transplante meniscal.</li>
                            <li>Cirugía de preservación de la rodilla del adulto joven.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Unidad de Tobillo y Pie</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Artroscopia de tobillo.</li>
                            <li>Cirugía mínimamente invasiva del hallux y resto de dedos.</li>
                            <li>Cirugía traumatológica con osteosíntesis especiales.</li>
                            <li>Cirugía protésica de tobillo y dedos.</li>
                            <li>Reparación articular: ligamentos, inestabilidades.</li>
                            <li>Cirugía de partes blandas.</li>
                            <li>Cirugía de malformaciones congénitas.</li>
                            <li>Cirugía en deformidades del adolescente y adulto (pie zambo, plano, equino).</li>
                            <li>Cirugía del pie reumático.</li>
                            <li>Osteotomías, artrodesis y alargamientos óseos.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo1}>
                    <h1>Unidad de Hombro y Codo</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Cirugía artroscópica: subacromial, reparaciónes de manguito, inestabilidad y lesiones de Slap.</li>
                            <li>Cirugía protésica hombro: hemiartroplastia, prótesis total, prótesis invertidas. Primaria, rescates, revisiones, rescates y recambios.</li>
                            <li>Cirugía protésica de codo: total, cabeza de radio</li>
                            <li>Cirugía de fracturas con osteosíntesis especiales.</li>
                            <li>Reparación articular: ligamentos, inestabilidades.</li>
                            <li>Cirugía de partes blandas.</li>
                            <li>Reparación lesiones cartilaginosas.</li>
                            <li>Osteotomías, artrodesis.</li>
                        </ul>
                    </div>
                </div>
                <div className={style.blo2}>
                    <h1>Unidad de Muñeca y Mano</h1>
                    <div className={style.txt}>
                        <ul>
                            <li>Cirugía artroscópica de muñeca.</li>
                            <li>Cirugía artroplastia trapeciocarpiana y dedos.</li>
                            <li>Cirugía traumatológica con osteosíntesis especiales.</li>
                            <li>Cirugía tendinosa.</li>
                            <li>Cirugía de inestabilidades.</li>
                            <li>Osteotomías, artrodesis.</li>
                            <li>Cirugía mano reumática.</li>
                            <li>Cirugía de partes blandas y compresión nerviosa.</li>
                            <li>Microcirugía</li>
                        </ul>
                    </div>
                </div>
            </div>    
        </div>
        </>
    );

}

export default Servicios;

