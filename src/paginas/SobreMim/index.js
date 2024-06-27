import styles from "./SobreMim.module.css";

import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto_1.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Thiago!
            </h3>

            <img
                src={fotoSobreMim}
                alt="Foto de Perfil"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou estudante Front-end na Alura e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou no Colégio Realengo, quando fiz o ensino médio integrado ao curso de Informática. Eu aprendi lógica de programação e o básico de várias linguagens, como PHP, Object Pascal(Delphi), Java, mas somente o básico. Eu não sabia qual linguagem era melhor para mim mesmo assim continuei a estudar.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, escolhi cursar Sistemas de Informação na Universidade Castelo Branco (UCB) e futuramene Universidade Estácio de Sá (UNESA). Consegui entrar em um estágio ao integrar um grupo acadêmico que contribui de diversas formas para o curso. Lá, tive a oportunidade de estudar SQL, prototipação de telas e modelagem de processos (BPMN). Essa experiência foi fundamental para o desenvolvimento das minhas habilidades futuras, permitindo-me obter certificações em gestão e fullstack.
            </p>
            <p className={styles.paragrafo}>
                Durante muito tempo, procurei uma área de interesse que, na verdade, já estava diante de mim: a programação web. Apaixonei-me pelo front-end, onde desenvolvi designs de telas para projetos do estágio, TCC e cursos.
            </p>
            <p className={styles.paragrafo}>
                Atualmente, continuo me dedicando aos estudos para me tornar um desenvolvedor fullstack, com preferência pelo front-end. Tenho realizado diversos projetos e me desafiado continuamente para me qualificar no mercado de trabalho.
            </p>
        </PostModelo>
    )
}