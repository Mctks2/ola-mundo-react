import styles from './Banner.module.css';
import circuloColorido from 'assets/circulo_colorido.png';

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Olá, Mundo!
                </h1>

                <p className={styles.paragrafo}>
                    Boas vindas ao meu espaço pessoal! Eu sou Thiago Souza, estudante de Front-end da Alura. Aqui compartilho conhecimentos, espero que aprenda algo novo :)
                </p>
            </div>

            <div className={styles.imagens}>
                <img
                    className={styles.circuloColorido}
                    src={circuloColorido}
                    aria-hidden={true}
                />

                <img
                    className={styles.minhaFoto}
                    src={"https://github.com/Mctks2.png"}
                    alt="Foto de Perfil Banner"
                />
            </div>
        </div>
    )
}